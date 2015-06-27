# /form/
## Description
Each mobo form will create a Semantic Form and define its content.
Mobo forms are much more lightweight than regular SF Forms,
since most information have already been declared on the field or model level and are just inherited up.

#### Forms declare
* Which models to use
* If the model should be implemented as a single or multiple instance
* Which template to use / inject
* The order of these models and templates
* Visibility of templates in edit-view and reading-view

## Available Properties
{% include "./../../_code/schemas/form-schema.md" %}

## Commonly used form propererties
### items
The `items` property contains an array of all models and templates that are used by the form.
Models are imported using `$extend`.

To define a model as a multiple instance template, use `type`: `array` and define it as `items`
```yaml
items:
  - $extend: /model/Location
  - $extend: /smw_template/NetworkPrinterHeader
    showForm: true # True by default, can be ommited
    showPage: true # True by default, can be ommited
  - type: array
    items:
      $extend: /model/NetworkPrinterInstallation
  - $extend: /smw_template/NetworkScannerHeader
```

#### Including Templates
If you want to include templates into the form, you can do so by $extending an smw_template.

There are two options, both true by default:

* `showForm` decides if the template is rendered while displaying the form in edit mode
* `showSite` decides if the template should be rendered when displaying the site. (Notice: The Site has to be (re)saved through the form to make this work)

This is useful for introducion headers into a form / resulting site. If you use the HeaderTabs Extension you are required to use this.

### naming
Optional text that gives some hints on how to name a page.
The text will be displayed on the page where the page name has to be entered in order to create it though the form.

### sf_forminfo
The `sf_forminput` attribute is an object that contains Semantic Forms [info tag settings](http://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27info.27_tag).

```yaml
sf_forminfo:
  create title: Create a new location
  edit title: Edit a location
```

### sf_freetext
Boolean that enables / disables the freetext field below the form