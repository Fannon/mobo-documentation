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
Mobo can programmatically import pages.
It is possible to import local files, databases or fetch remote files (via AJAX) and generate wikipages from them.

If a development model is given, it can be used to automatically validate the imported data against the model schema.
The importer can also "enhance" imported data, by ordering and completing the templates according to a given form.

This does not only save some time, the import can also automatically adjust (to a certain point) to model changes in the future.

### Details
If the importer finds an `import.js` file on the main level of a import/subdir/, it will use programmatic importing.
The import.js will be called through the `exports.exec(fileMap, importHelper, lib, registry, callback);` entry point.

All textfiles within the import folder will be added to the fileMap object. JSON Objects will be parsed to Objects.

The script must return / call the callback function with an generatedPages object.
The keys define the page names, the values are strings with the resulting wikitext.

### Example
The hardware example contains a [commented import.js file](https://github.com/Fannon/mobo/blob/master/examples/hardware/import/data/import.js)
that explains the most important concepts along the code.