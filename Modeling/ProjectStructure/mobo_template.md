# /mobo_template/
## Description
This directory contains [Handlebars.js](http://handlebarsjs.com/) templates.
They are used by mobo to generate the final wikitext pages and contain the rendered markup, some logic and strings that may want to be localized.

To customize how SMW templates, SF Forms, SMW Properties, Queries etc. are rendered, adjust the according mobo template. Be aware that some mobo updates require to update the mobo template directory. In those cases, the changes have to be re-implemented again.

The following command will make a backup of your current mobo-template and update this directory with the latest default mobo templates:

```sh
mobo --update
```

For more documentation on how to write these templates, please refer to the official [handlebars documentation](http://handlebarsjs.com/).
