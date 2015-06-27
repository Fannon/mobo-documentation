# /field/
## Description
Fields are the mobo equivalent to SMW attributes.

The biggest difference to SMW attributes is that mobo fields already declare how they are rendered and validated. Those information are inherited through the models up to the final form.

#### Fields declare
* A human readable title
* An optional description
* The datatype, consisting of type and format (see JSON Schema Spec)
* Whether the field links to forms
* Additional validation (some datatypes already come with validation)
* Semantic Forms options that define how the field will render and behave in Semantic Forms

## Available Properties
{% include "./../../_code/schemas/field-schema.md" %}

## Supported Datatypes
### Primitive Datatypes (type)
* number / integer
* boolean
* string / text

To define a primitive datatype, just declare the `type`:

```yaml
type: number
```

### Semantic Datatypes (format)
Semantic Datatypes are defined through the `format` attribute.
Usually the primitive `type` datatype is `string`.

* JSON Schema data types
    * date / date-time
    * url
    * email
    * tel
* SMW specific data types
    * Page
    * Code
    * Geographic coordinate
    * Quantity
    * Record
    * Temperature

To define a semantic data type, declare the `format` in addition to the "type":

```yaml
type: string
format: date
```

### Linking to Forms (form)
The `form` property can be used to reference to a form.
This implicitly sets `type` to `string` and `format` to `Page`
If the url links to a page that does not exist yet, it will be created through the defined form.

```yaml
form: Location
```

It is also possible to link to multiple forms:
```yaml
form:
  - FormA
  - FormB
```

## Multiple values
Some fields need to specify multiple values.
In this case the `type` needs to be set to `array` and the `items` property holds the actual type/format/form:

```yaml
title: Locations

type: array
items:
    type: string
    form: Location
```

## Enums
If an additional "enum" array is specified, it can pre-prvide default values. This makes mostly sense for dropdown menus. Note that enums are not dynamic and the model has to be adjusted if entries have to be changed.

```yaml
title: color
type: string
enum:
  - red
  - green
  - blue
```

## Field specific features
### sf_form
The `sf_form` property is an object that redirects all settings directly to Semantic Forms.
To see which options are supported, refer to the [Semantic Forms manual](http://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27field.27_tag)

```yaml
sf_form:
  input type: combobox
  values from namespace: Manufacturer
  max values: 1
  existing values only: true
```

### smw_property
If `smw_property` is set to false the templates won't use #set or #subobject to declare it as a semantic property.
Please note that the field can't be queried then.

```yaml
smw_property: false
```