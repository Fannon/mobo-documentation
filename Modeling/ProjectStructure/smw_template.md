# /smw_template/
## Description
This directory works similar like /smw_page/.
MediaWiki Templates can be stored here without having to prepend `template___`.
All templates in this directory will overwrite any template mobo has created before.

### Example SMW Template
**Example**: `NetworkPrinterHeader.wikitext` will be uploaded as `Template:NetworkPrinterHeader`, with the following content:

```
=Network Printer=

```

### Escaping
Please note that some characters cannot be used within filenames, but are necessary parts of the page name/URL.

Mobo will automatically apply the following string substitutions.

* `___` will be substituted with `:` (namespaces)
* `---` will be substituted with `/` (subpages)
