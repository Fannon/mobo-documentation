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

### Overview
<table>
    <tr>
        <th>Semantic MediaWiki</th>
        <th>mobo</th>
    </tr>
    <tr>
        <td>Boolean</td>
        <td>type: boolean</td>
    </tr>
    <tr>
        <td>Code</td>
        <td>type: string<br/>format: Code</td>
    </tr>
    <tr>
        <td>Date</td>
        <td>type: string<br/>format: date</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>type: string<br/>format: email</td>
    </tr>
    <tr>
        <td>Geographic coordinate</td>
        <td>type: string<br/>format: Geographic coordinate</td>
    </tr>
    <tr>
        <td>Number</td>
        <td>type: number</td>
    </tr>
    <tr>
        <td>Page</td>
        <td>type: string<br/>format: Page</td>
    </tr>
    <tr>
        <td>Quantity</td>
        <td>type: string<br/>format: Quantity</td>
    </tr>
    <tr>
        <td>Record</td>
        <td>type: string<br/>format:&nbsp;Record</td>
    </tr>
    <tr>
        <td>Telephone number</td>
        <td>type: string<br/>format:&nbsp;tel</td>
    </tr>
    <tr>
        <td>Temperature</td>
        <td>type: string<br/>format:&nbsp;Temperature</td>
    </tr>
    <tr>
        <td>Text</td>
        <td>type: text</td>
    </tr>
    <tr>
        <td>URL</td>
        <td>type: string<br/>format: url</td>
    </tr>
</table>

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
