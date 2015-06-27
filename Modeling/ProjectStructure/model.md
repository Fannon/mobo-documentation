# /model/
## Description
Models will create Templates and Categories. They define the actual structure of the development model.

#### Models declare
* Which models they inherit from
* Which fields are used
* The order of the fields
* Mandatory and recommended fields
* The template “rendering” mode (table, unordered lists, …)
* If they are stored as regular semantic properties or a subobject
* MediaWiki Categories
* Prefix and Postfix wikitext

## Available Properties
{% include "./../../_code/schemas/model-schema.md" %}

## Commonly used model propererties
### items
The `items` property contains an array of all fields that are used by the model.
Fields usually should be implemented using `$extend`, so every field can have its own file and inheritance.
It is possible to overwrite properties from the field directly in the mode.
```yaml
items:
  - $extend: /field/brand
    title: Overwritten brand title
  - $extend: /field/modelName
```
### itemsOrder
In case that fields have been inherited, they might not end up in the correct order.
The `itemsOrder` array lists the order of the fields. Every field that is not listed will be appended at the bottom, in their regular order.
```yaml
itemsOrder:
  - brand
  - modelName
```

### smw_category
The `smw_category` is a boolean that decides whether a model should be automatically assigned a category with the same id as name.
Defaults to true.

```yaml
smw_category: false
```

### smw_categories
With the `swm_categories` array additional categories can be set.

```yaml
smw_categories:
  - Person
  - Employee
```

### smw_prepend and smw_append
The `smw_prepend` and `smw_append` attributes allow to inject wikitext before and after the actual rendered wikitext.
It will be displayed by default in both template and form.

The `header` attribute takes a number and will automatically generate a header of the given hierachy with the title of the model as text.

```yaml
smw_prepend:
  header: 1
  wikitext: Some prefix-description for the location
```

If only wikitext has to be injected, it can be directly given as a string:
```yaml
smw_prepend: 'Some prefix-description for the location'
```

There are cases, where something should only be appended/prepended in the page or edit view:
```yaml
smw_prependPage:
  header: 2

smw_appendForm: |
  Some more text
  Using the YAML pipe for easy linebreaks
```

### required / recommended
The `required` and `recommended` attributes are arrays that consist of the field IDs that should be required or recommended.

Please not that recommended fields are not officially supported by Semantic Forms
and require the `sfDivLayout` setting to be enabled and some custom CSS styling,
like the [ChameleonFannon Skin Extension](https://github.com/Fannon/ChameleonFannon).

```yaml
items:
  - $extend: /field/streetAdress
  - $extend: /field/streetNumber
  - $extend: /field/town
  - $extend: /field/country

required:
  - streetAdress
  - streetNumber
  - town

recommended:
  - country
```

### smw_subobject
If `smw_subobject` is set to true, mobo will use the #subobject function instead of the #set function.

Mobo will automantically introduce two additional helper attributes `subobjectType` and `subobjectParent` that help with querying subobjects.

```yaml
smw_subobject: true
```

### smw_display
This allows to define the style the template is rendered with.
It must be supported by the `/mobo_template/template.wikitext` template.

```yaml
smw_display: ul
```

## Examples
Model inheritance:

### /model/_Shape.json
```yaml
$abstract: true

title: Shape
description: Generic Shape

items:
  x: $extend: /field/x
  y: $extend: /field/y

required:
- x
- y
```

### /model/Circle.json
```yaml
$extend: /model/_Shape

title: Circle

items:
  - radius: $extend: /field/radius

required:
  - x
  - y
  - radius
```

In this example the Circle inherits all attributes of `_Shape`, especially the fields x and y.
The Circle overwrites attributes like `title` and introduces a new field `radius`.