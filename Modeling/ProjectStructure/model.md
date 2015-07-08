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
* Prepend and append wikitext

## Available Properties
{% include "./../../_code/schemas/model-schema.md" %}

## Annotated Examples
Model inheritance:

### /model/_Shape.json

```yaml
# Abstract model. Will not be created on the target wiki.
$abstract: true

title: Shape
description: Generic Shape

# A shape model consists of two fields.
items:
  - $extend: /field/x
  - $extend: /field/y

required:
  - x
  - y
```

### /model/Circle.json

```yaml
$extend: /model/_Shape

title: Circle

# Addes the radius field
items:
  - $extend: /field/radius

# Add radius to the required array
required:
  - radius
```

In this example the Circle inherits all attributes of `_Shape`, especially the fields x and y.
The Circle overwrites attributes like `title` and introduces a new field `radius`.
