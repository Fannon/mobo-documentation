# /smw_query/
## Description
This directory contains ASK queries. Each query needs its own text file, using .ask as file extension.

The query will then be converted to a MediaWiki Template, including some documentation.
This has the advantage that the query can be easily reused throughout the wiki.

### Example Query
**Example**: `NetworkPrinterModel.ask` will be uploaded as `Template:NetworkPrinterModel-ask`, with the following content:

```
{{#ask: [[category:NetworkPrinterModel]]
| ?brand
| ?modelName
| limit=999
}}
```

The query can be embedded through `{{NetworkPrinterModel-ask}}`.

### Escaping
Please note that some characters cannot be used within filenames, but are necessary parts of the page name/URL.

Mobo will automatically apply the following string substitutions.

* `___` will be substituted with `:` (namespaces)
* `---` will be substituted with `/` (subpages)
