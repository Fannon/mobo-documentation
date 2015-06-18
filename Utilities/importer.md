# Mobo Import Module
## Description
The `/import/` directory handles pages and data that should be batch-imported to the remote-wiki.
The import files need to be places in subdirectories and can be imported through mobo --import <subdirectory>
Further subdirectories within the subdirectory will be flattened.

The Importer can skip already existing wiki pages, if the setting `overwriteImportedPages: true` is set.

It is also possible to store an `import.yaml` in each import subdirectory to overwrite settings on a local basis:

```yaml
overwriteImportedPages: false
blacklist:
  - PageNameToIgnore1
  - PageNameToIgnore2
```

## Plain wikitext import
**Example:** Create a new `/import/docs` folder and put the following files in it:

```
/import/docs/Documentation___Wiki---getting started.wikitext
/import/docs/Documentation___Wiki---moderation.wikitext
```

Those files can now be imported with `mobo --import docs`.

It is mandatory to use the .wikitext extension. The filename defines the desired wiki page URL.

Please note that some characters can’t be used for filenames, so some string substitutions have to be made.
* `___` will be substituted with `:` (namespaces)
* `---` will be substituted with `/` (subpages)

## Programmatic Data Import
If the importer finds an `import.js` file on the main level of a import/subdir/, it will use programmatic importing.

The hardware example contains a [commented example](https://github.com/Fannon/mobo/blob/master/examples/hardware/import/data/import.js)
that explains programmatic imports along the code.