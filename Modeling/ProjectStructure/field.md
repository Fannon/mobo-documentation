# /field/
## Description
Fields are the mobo equivalent to SMW attributes.

The biggest difference to SMW attributes is that mobo fields already declare how they will be rendered and validated. Those information will be inherited through the models up to the final form.

**Fields usually declare:**
* The id (machine name) through the filename.
* A human readable title
* An optional description.
* The datatype, consisting of type and format (see JSON Schema Spec).
* Additional validation (some datatypes already come with validation).
* The format can link to other forms, in this case the datatype is page.
* Semantic Forms options that define how SF will render the final field.

## Supported Datatypes
### Primitive Datatypes (type)
* number / integer
* boolean
* string / text

To define a primitive datatype, just declare the `type`:

```yaml
type: number
```

### "Semantic" Datatypes (format)
Semantic Datatypes are defined through the `format` attribute.
Usually the primitive `type` datatype is `string`.

* JSON Schema Datatypes
    * date / date-time
    * url
    * email
    * tel
* SMW only Datatypes
    * Page
    * Code
    * Geographic coordinate
    * Quantity
    * Record
    * Temperature

To define a semantic datatype, declare the "format" in addition to the "type":

```json
type: string
format: date
```

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

## Reference
For a complete and more up-to-date reference, read the [Field Schema Documentation](../../Schemas/field-schema.md)