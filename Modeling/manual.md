# The Mobo Manual
## Premises
In order to learn mobo, it is mandatory to understand the basic concepts of [JSON](http://json.org/) and [JSON Schema](http://json-schema.org/) first.
It is highly recommended to use and learn [YAML](http://yaml.org/) and use it instead of JSON.

JSON Schema is a very simple and concise standard and it should only take a few hours to learn it.
There is a [great tutorial](http://spacetelescope.github.io/understanding-json-schema/) by the Space Telescope Science Institute.
The time to learn JSON Schema is a good investment anyhow, since it can be very useful in other contexts as well.

Some understanding of [MediaWiki](http://mediawiki.org), [SemanticMediaWiki](https://semantic-mediawiki.org/) and [SemanticForms](https://www.mediawiki.org/wiki/Extension:Semantic_Forms) is also highly recommended,
since they are the target system. Their architecture has a huge impact on how models are developed.

If the default templates need to be changed, an understanding of the [Handlebars.js template engine](http://handlebarsjs.com/) is of advantage.

## Create a new project
To start with the model development, an empty project structure has to be created first:

```sh
mkdir newProject  # Create new dir
cd newProject     # Enter new dir
mobo --init       # Create bootstrap project
```

Mobo comes with example projects, which may be a good starting point to learn mobo. Use `mobo -h` to view the available options.
They can be copied to the current project directory with the `--example` flag:

```sh
mobo --example hardware
```

## How to write the mobo-model (JSON vs YAML)
It is possible to write the model in the [JSON](http://json.org/) or the [YAML](http://yaml.org/) notation.
In either case, the data structure of Mobo Schema (JSON Schema) is the same and must be adhered to.

It is a matter of personal taste which notation format might be prefered.
JSON is barebone, explicit and very strict, because it is a machine optimized data-serialization format by design.
YAML is a bit more concise and more implicit (and therefore more forgiving).
It supports comments and some comfort features like pipes. It is arguably easier to read and write by humans.

Mobo uses YAML by default. Here is a comparison:

#### YAML-Notation:
```yaml
# Inline comments are possible. This is not true for JSON.
title: Location
description: Location where hardware is deployed
items:
  - $extend: /field/streetAdress
  - $extend: /field/streetNumber
  - $extend: /field/town
  - $extend: /field/country
required:
  - streetAdress
  - streetNumber
  - town
smw_prefix:
  header: 1
  wikitext: Some prefix-description for the location
smw_postfix: |
  Some postfix-description for the location
```

#### JSON-Notation:
```json
{
    "title": "Location",
    "description": "Location where hardware is deployed",
    "items": [
        { "$extend": "/field/streetAdress" },
        { "$extend": "/field/streetNumber" },
        { "$extend": "/field/town" },
        { "$extend": "/field/country" }
    ],
    "required": [
        "streetAdress",
        "streetNumber",
        "town"
    ],
    "smw_prefix": {
        "header": 1,
        "wikitext": "Some prefix-description for the location"
    },
    "smw_postfix": {
        "wikitext": "Some postfix-description for the location"
    }
}
```

To batch-convert a project from JSON to YAML notation (or the other way around), the [yamljs](https://www.npmjs.com/package/yamljs) CLI tool is recommended.
Conversion should be easy and fast, so the choice of notation format should have no lock-in effect.

## Mobo Schema
Mobo uses JSON Schema as a basis for the model development.
To fit the model development better, some additions, changes and simplifications were made.
The adjusted JSON Schema will be referred to as *mobo Schema*.

### Additions
#### Inheritance: $extend and $remove,
The `$extend` keyword takes a string or an array of strings that describe the path to another model file.
`$extend` can be used with fields, models and forms. Circular dependencies are not allowed, however.

```yaml
$extend: /model/_Shape
```

Mobo will inherit all properties of the referenced parent object to the child object where this statement was made.
If an array of multiple parent objects is given, the inheritance order will be the order of the array.

Properties of the child object will merge or overwrite inherited properties:
* Primitive Datatypes like Strings, Numbers and Booleans will be overwritten
* Objects will be merged
* Arrays can behave in different ways. Multiple annotations can be used to define the merging behavior:
    * `@overwrite`: The children overwrites the parent completely
    * `@prepend`: The children elements are prepended
    * `@append`: The children elements are appended
    * `@unique`: The resulting array removes all duplicate items
    * `@sorted`: The resulting array will be sorted alphabetically
    * `@unsorted`: The resulting array will not be sorted (undo @sorted)

The default array merging behaviour is defined in the [settings](../Schemas/settings-schema.md) and can be customized.

**Important**: In YAML the annotations have to be put in `''` or `""`, because `@` is a reserved [YAML Directive](http://www.yaml.org/spec/1.2/spec.html#id2781553).

Example: This will result in an array of a, b, c
```yaml
itemsOrder:
  - '@unique'
  - '@sorted'
  - b
  - c
  - a
  - b
```

JSON Schema has a similar keyword, called `$ref`.
The official spec does not specify an inheritance behavior, though.
To avoid confusion, mobo supports only the custom $extend property.

#### $abstract
Abstract objects will only be used for inheritance purposes.
They do not create any wiki related pages.
The `$abstract` keyword is not inherited, so children of abstract objects don't have to explicitly set abstract: false.

#### $ignore
To (temporarily) remove objects from the model the ignore attribute can be set to true.
The `$abstract` keyword is not inherited, so children of abstract objects don't have to explicitly set abstract: false.

#### itemsOrder
To easily change the order of the items array, the keyword `itemsOrder` can be used.

The order is defined through an array of the IDs of the items. The ID is the filename of the referenced object.

```yaml
itemsOrder:
  - ip
  - macAdress
```

#### SMW / SF specific Additions
There are many implementation specific additions to the schema.
They are prefixed with `smw_` and `sf_` and support the various settings
and possibilities of Semantic MediaWiki and Semantic Forms.


A comprehensive overview can be found in the [Schemas Documentation](../Schemas/).

The implementation specific settings are often directly passed through to the end system.
In those cases, the available options are documented by the end system.

**Example**: SemanticForms field tag (see [official documentation](https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27field.27_tag))
```json
sf_form:
  input type: combobox
  values from namespace: Manufacturer
  max values: 1,
  existing values only: true
```

### Removals
The following JSON Schema properties are not supported:

```yaml
$ref
additionalItems
additionalProperties
allOf
anyOf
definitions
dependencies
dependencies
exclusiveMaximum
exclusiveMinimum
multipleOf
not
patternProperties
uniqueItems
```

There are a few validation related JSON Schema properties which can be used but are currently not supported by Semantic Forms.
They are used for internal validation - especially for programmatic imports, though.

## Continue Learning
Now that you've learned the basics of mobo, you may continue with:
* [The tutorial](hardware-tutorial.md) gives a fast overview how it's like to work with mobo
* An overview about the [project structure](ProjectStructure/)
* The [Schemas Documentation](../Schemas/) is important for technical reference
