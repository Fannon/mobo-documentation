## Description
In this directory .ask files, containing ASK queries can be stored.

The Query will then be converted to a MediaWiki Template, including some documentation.

**Example**: `Locations.ask` will be uploaded as `Template:Locations-ask`

### Escaping
Please note that some characters can’t be used for filenames, so some string substitutions have to be made.

* `___` will be substituted with `:` (namespaces)
* `---` will be substituted with `/` (subpages)