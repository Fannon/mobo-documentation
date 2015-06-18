# Mobo Import Module
## Description
The `/import/` directory handles pages and data that should be batch-imported to the remote-wiki.
The import files need to be places in subdirectories and can be imported through mobo --import <subdirectory>
Further subdirectories within the subdirectory will be flattened.

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
TODO: Implemented, but not documented yet.
