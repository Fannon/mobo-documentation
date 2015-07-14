# /smw_page/
## Description
In this directory .wikitext files can be stored.
They will be uploaded to the wiki and overwrite any page that mobo have created before.

### Example SMW Template
**Example**: `Documentation___Example---Introduction.wikitext` will be uploaded as `Documentation:Example/Introdution`, with the following content:

```
=Introduction=
Some documentation...
```

### Escaping
Please note that some characters cannot be used within filenames, but are necessary parts of the page name/URL.

Mobo will automatically apply the following string substitutions.

* `___` will be substituted with `:` (namespaces)
* `---` will be substituted with `/` (subpages)
