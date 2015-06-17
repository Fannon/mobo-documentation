# Tutorial: Hardware Management
This tutorial explains how to build a mobo development model for IT hardware management.

For the final and more complete result,
please review the [hardware management example](https://github.com/Fannon/mobo/tree/master/examples/hardware).

### Set up new project
Create a new empty project and adjust your settings.yaml.
Please refer to the [manual](manual.md) how do this.

### Run mobo the first time
Now run mobo the first time and check that the settings are correct and the upload to the external wiki is working.
At your [localhost:8080](http://localhost:8080) should be a web application ready.

![mobo-first-start](http://up.fannon.de/img/mobo-first-start.png?v=3)

### Conceptualization of the model and its domain
Before heading into the actual model development, some thought should be put into how the domain should be modeled.

Hardware is deployed at `Locations`.
There are several types of hardware, like `NetworkPrinter`, `MultiFunctionUnit`, `Workstations`, etc.
Those must be respectivly splitted into -models (the general hardwaremodel) and -installations
(the concrete installation and configuration on a location).
Hardwaremodels can have a `Manufacturer` and hardwareinstallations are tied to a location.

The different hardwaremodels will likely share some attributes, so an abstract `_HardwareModel` will come in handy.
The same is true for an abstract `_HardwareInstallation`.

### Creating a location
#### Create model
Let's start with the simplest part of the model, the location.
Personally I do like to start with the model and create the fields and forms afterward.
There is no right and wrong with the order, however.

Create `/model/Location.yaml` with the following content:

```yaml
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
```

Once the file is saved, mobo will automatically run and give some feedback:

```text
[E] (unknown): invalid $extend to missing "/field/streetAdress"!
[E] (unknown): invalid $extend to missing "/field/streetNumber"!
[E] (unknown): invalid $extend to missing "/field/town"!
[E] (unknown): invalid $extend to missing "/field/country"!
[W] /model/Location.yaml is never used.
```

#### Create fields
To keep the model better organized, the Location related fields will be stored at `/field/Location/*`.

**Important** Please note that the `$extend` path does not include subfolders.

Create `/field/Location/streetAdress.yaml` with the following content:

```yaml
title: Street Adress

type: string
```

This is the simplest possible field. Only the title and the type is mandatory.

Now create `/field/Location/streetNumber.yaml` with the following content:
```yaml
title: Street Number

type: number
minimum: 0
```

We've just introduded some basic validation. The Street number should be a number of at least 1.

Create `/field/Location/town.yaml` with the following content:
```yaml
title: Town

type: string

sf_form:
  input type: text with autocomplete
```

Since towns may be referenced more than once, it makes sense to provide autocomplete capabilities.
This is done by setting the `sf_form` property,
declaring [Semantic Forms settings](http://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27field.27_tag).

Create `/field/Location/country.yaml` with the following content:
```yaml
title: Country

type: string
enum:
    - USA
    - UK
    - Germany

default: Germany
```

We want to support only three countries, so an enum is a good solution.
In this field three countries are given and one is set as default.
Enum fields will be displayed as a dropdown menu by default.
If you want to change the widget, use the `sf_form` property as learned before.

#### Create form
The last warning message is giving the hint that `model/Location.yaml` is never used:

```text
[W] /model/Location is never used.
```

This is because there is no form that is including it.

Create `/form/Location.yaml` with the following content:

```yaml
title: Location

items:
  - $extend: /model/Location
```

This is the simplest possible form, referencing the previous model as its sole content.
We can now head to the wiki and try the form in action:

![mobo-simple-location](http://up.fannon.de/img/mobo-simple-location.png?v=1)

### Create a HardwareModel
#### Create models
In the next step, the `NetworkPrinterModel` will be created.
It is of the type `HardwareModel` and will use object-oriented inheritance.

Create `/model/HardwareModel/_HardwareModel.yaml` with the following content:

```yaml
title: Hardware Model

items:
  - $extend: /field/brand
  - $extend: /field/modelName

required:
  - brand
  - modelName

abstract: true
```

The abstract model contains two required fields that will be shared by all other Hardware Models.
Since it's defined as abstract, it will not be created in the wiki.

Create `/model/HardwareModel/NetworkPrinterModel.yaml` with the following content:

```yaml
$extend: /model/_HardwareModel

title: Network Printer Model
description: A Network Printer Model

items:
  - $extend: /field/colorPrinting

itemsOrder:
  - brand
  - modelName
```

The `NetworkPrinterModel` used `$extend` to inherit all attributes from the `_HardwareModel`.
It overwrites the title attribute and adds a description and the `colorPrinting` field.

The `colorPrinting` field will by default appear as the first field on the form since it's most recently added.
To keep the brand and modelName on top, the order of the properties has to be set manually.
Please note that not all existing properties have to be included.
Those missing will be added below in their original order.

#### Create fields
The creation of the fields will be skipped, since they contain no new concepts.
Please refer to the example files instead.

#### Create form
Please refer to the example files.

### Create a HardwareInstallation
#### Create models
Now the actual `NetworkPrinterInstallation` can be created.

Create `/model/HardwareInstallation/_HardwareInstallation.yaml` with the following content:

```yaml
title: Hardware Installation

items:
  - $extend: /field/serialNumber
  - $extend: /field/freetext

smw_subobject: true
smw_category: false

abstract: true
```

Since there are Hardwaredevices that are network capable and share therefore some more common properties,
another abstract model will be created that inherits from the `HardwareInstallation`.

The property `smw_subobject` declares that Hardware Installations will store their semantic properties as subobjects.
This is necessary becasuse we want to define multiple instances of them on a location and the attribute names would duplicate otherwise.

Create `/model/HardwareInstallation/_NetworkDeviceInstallation.yaml` with the following content:

```yaml
$extend: /model/_HardwareInstallation

title: NetworkDevice Installation

items:
  - $extend: /field/ip

recommended:
  - ip

abstract: true
```

Create `/model/HardwareInstallation/NetworkPrinterInstallation.yaml` with the following content:

```yaml
$extend: /model/_NetworkDeviceInstallation

title: Network Printer Installation

items:
  - $extend: /field/networkPrinterModel
```

The `NetworkPrinterInstallation` extends from the `_NetworkDeviceInstallation`
(which itself extends from `_HardwareInstallation`) and will define it's network printer model.

#### Create fields
The field `networkPrinterModel` will reference to a `NetworkPrinterModel`.

Create `/field/HardwareInstallation/_hardwareModelReference.yaml` with the following content:

```yaml
title: Model
description: You may only select already existing mardware models!

type: string

sf_form:
  max values: 1
  input type: combobox
  existing values only: true

abstract: true
```

All hardware model reference fields will now use the input type combobox and allow only one (already existing) value.

Create `/field/HardwareInstallation/networkPrinterModel.yaml` with the following content:

```yaml
$extend: /field/_hardwareModelReference

# Implicit: type: string and format: Page
form: NetworkPrinterModel

sf_form:
    values from category: NetworkPrinterModel
```

This field uses the `form` property to defines the `NetworkPrinterModel` form as its target.
If the `form` property is used, the `type` will always be `string` and the `format` is set to `Page`.
This results in a red wiki link that if clicked upon uses the given form to create it by default.
Because it uses implicitly the format "Page", it will be a wiki link.

The `values from category` setting will ensure that the combox widget will autocomplete on all previous entered `NetworkPrinterModel`.

### Extend the location form to include Network Printers
Network Printers should be added at locations through Semantic Forms [multiple instance templates](http://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#Multiple-instance_templates).

Add to the existing `/form/Location.yaml` the following content:

```yaml
title: Location
description: This creates a new location where hardware is deployed.

items:
  - $extend: /model/Location
  - $extend: /smw_template/NetworkPrinterHeader.wikitext
    showForm: true
    showPage: true
  - type: array
    items:
      $extend: /model/NetworkPrinterInstallation
```

Two new `$extend` are added.
First, a template is included that will provide a header and is shown in both form and page view.
Since both booleans are true by default, they could be omitted in this example.

Create the template at `/swm_template/Headers/NetworkPrinterHeader.wikitext`:

```text
=Network Printer=

```

**NOTE**: Don't forget to add a new line after the headline!
Since wikitext is not whitespace insensitive and you might break the layout otherwise.

The second extend is an array which contains multiple `NetworkPrinterInstallation`
and will be implemented as the already mentioned Semantic Forms multiple template instance.

The final form will now look like this:

![mobo-final-hardware-example](http://up.fannon.de/img/mobo-final-hardware-example.png)

### Create an ASK Query with mobo

Create `/smw_query/NetworkPrinterModels.yaml` with the following content:

```text
{{#ask: [[category:NetworkPrinterModel]]
| ?brand
| ?modelName
| limit=999
}}
```

This will cause mobo to generate the query as a new template with the pagename `Template:NetworkPrinterModels-ask`.
If you head there, you will find a small usage snippet for embedding, the query text documented and a live query.
The live query may not work if it's dependend on a specific context, though.

It might make sense to include this query in the already generated `Category:NetworkPrinterModel`.
To do this, we need to overwrite the generated wikipage. This can easily be done by creating a .wikitext file in the `smw_page` directory:

Create `/smw_page/Overwrite/Category___NetworkPrinterModel.wikitext` with the following content:

```text
{{#ask: [[category:NetworkPrinterModel]]
| ?brand
| ?modelName
| limit=999
}}
```

Note that we can't use `:` in filenames, so we have to replace it with `___`.

Now we've overwritten the generated category and embedded our new query in it.

### Excourse: Using HeaderTabs Extension
In case the forms are getting more complex, it might be a good idea to seperate them into tabs.
The [HeaderTabs Extension](http://www.mediawiki.org/wiki/Extension:Header_Tabs) is supported by mobo.

The support can be enabled in the projects `settings.yaml` by adding:

```yaml
headerTabs: true
```

The `NetworkPrinterHeader` already defines a heading, but the Location model is missing one.

It would be possible to add the header the same way but for single instance templates its more convenient to use mobos "swm_prefix" feature:

Append to your `/model/Location.yaml` the following content:

```yaml
# Prepends a h1 header to both form and page display
# After the header, adds arbitrary wikitext
smw_prepend:
  header: 1
  wikitext: Some prefix-description for the location
```

The `smw_prepend` property allows to prepend automatically generated headers
(using the title property as name and defining the hierachy through the number),
templates or free wikitext before the template. (There's a `smw_append` property, too)

Now the Location form has got two headings of hierachy one. The HeaderTabs Extension will become active:

![mobo-header-tabs](http://up.fannon.de/img/mobo-header-tabs.png?v=1)
