# The Mobo Manual
## Premises
To learn mobo, it is mandatory to understand the basic concepts of [JSON](http://json.org/) and [JSON Schema](http://json-schema.org/) first.
I would also highly recommended to learn [YAML](http://yaml.org/) and use it instead of JSON.

JSON Schema is a simple and concise standard which can be learned in a few hours.
There is a [great tutorial](http://spacetelescope.github.io/understanding-json-schema/) by the Space Telescope Science Institute.
The time learning JSON Schema is a good investment anyhow. It is a versataile standard that can be used in many different situations.

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
  Supporting easy line breaks
```

#### JSON-Notation:
```json
{
    "title": "Location",
    "description": "Location where hardware is deployed",
    "type": "array"
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

To batch-convert a project from JSON to YAML notation (or the other way around),
I can recommend the [yamljs](https://www.npmjs.com/package/yamljs) CLI tool or the [json2yaml.com](http://www.json2yaml.com/) WebApp.
Conversion between both formats should be easy and fast, so the choice of notation format should have no lock in effect.

Since YAML is a superset of JSON, it is also possible to write/mix JSON into .yaml files.

## Mobo Schema
Mobo uses JSON Schema as a basis for the model development.
To fit the model development better, some additions and simplifications are introduced.
The adjusted JSON Schema will be referred to as *mobo Schema*.

### Additions
#### Inheritance: $extend
The `$extend` keyword is used to inherit other models and implicitly defines how those relate to each other.
It takes a string (or an array of strings) that describe the path to another model file.
`$extend` can be used with fields, models, forms and smw_templates. Circular dependencies are not allowed.

##### Parent - Child Inheritance
Use `$extend` on the main level, to inherit a parent object and extend it:

```yaml
# Inherit an abstract _Shape
$extend: /model/_Shape

# Overwrite title
title: Circle

# Add a new field (in addition to those that are inherited)
items:
  - $extend: /field/radius
```

This goes hand in hand with the `$abstract` keyword.

##### Inheritance to include and reference to other model parts
Use `$extend` to include fields in models, models in forms, or templates in forms.
The inheritance works just the same as on the main level.
This is how the actual model structure and the relationships between forms, models and fields are defined.

**TIPP**: You can overwrite inherited properties by adding them on the same level as the extend.

```yaml
title: Model with fields

items:
  - $extend: /field/fieldOne
  - $extend: /field/fieldTwo
    title: Overwrite the title of fieldTwo
```

##### Inheritance Behaviour
Mobo will inherit all properties of the referenced parent object to the child object where this statement was made.
If an array of multiple parent objects is given, the inheritance order will be the order of the array.

Properties of the child object will merge or overwrite inherited properties:
* Primitive Datatypes like Strings, Numbers and Booleans will be overwritten
* Objects will be merged.
  In the case that two properties share the same key, the merging algorithm is recursively executed.
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

#### $remove
`$remove` is an array, that contains the IDs of all `item` to remove.
Use this to remove any unwanted items that have been inherited from parents.

Use this with care! A good designed object oriented structure probably wont need this.

```yaml
$remove:
  - fieldThree
```

#### $abstract
Abstract objects will only be used for inheritance purposes.
They do not create any wiki related pages.
The `$abstract` keyword is not inherited, so children of abstract objects don't have to explicitly set abstract: false.

#### $ignore
To (temporarily) remove objects from the model the ignore attribute can be set to true.
The `$abstract` keyword is not inherited, so children of abstract objects don't have to explicitly set abstract: false.

#### itemsOrder
To change the order of the items array, the keyword `itemsOrder` can be used.
This becomes necessary when the inherited items do not end up in the desired order.

The `itemsOrder` keyword takes an array of the IDs of the items. (The ID is the filename of the referenced object.)
Any items that have not been mentioned will be appended at the bottom in their original order.

```yaml
itemsOrder:
  - ip
  - macAdress
```

#### SMW / SF specific Additions
There are many platform and implementation specific additions to the schema.
They are prefixed with `smw_` and `sf_` and support the various settings
and possibilities of Semantic MediaWiki and Semantic Forms.

The platform specific options are often directly passed through to the end system.
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
exclusiveMaximum
exclusiveMinimum
multipleOf
not
patternProperties
uniqueItems
```

The `$ref` and `definition` property are substituted with mobos own `$extend` property.

The reason the other (primarily validation oriented) properties are not supported is because
the target system (SMW + Semantic Forms) has not much validation capabilities.
Advanced validation properties can be used for internal validation, though (e.g. programmatic imports).

## Continue Learning
Now that you've learned the basics of mobo, you may continue with:
* [The tutorial](hardware-tutorial.md) gives a fast overview how it's like to work with mobo
* An overview about the [project structure](ProjectStructure/)
* The project structure also contains a complete and up to date documentation of all available properties.
