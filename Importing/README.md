## Description
The `/import/` directory handles pages and data that should be batch-imported to the remote-wiki.
The import files need to be places in subdirectories and can be imported through mobo --import <subdirectory>
Further subdirectories within the subdirectory will be flattened.

Example:
```
/import/docs/Documentation___Wiki---getting started.wikitext
/import/docs/Documentation___Wiki---moderation.wikitext
```

those files can be imported with `mobo --import docs`

## wikitext import
Just use the .wikitext extension and the file will be uploaded as it is to the remote directory.

The filename defines the wiki page URL.
Please note that some characters can’t be used for filenames, so some string substitutions have to be made.
* `___` will be substituted with `:` (namespaces)
* `---` will be substituted with `/` (subpages)

## data import (programmatically)
TODO: Implemented, but not documented yet.