# Nuke Module
## Description
The nuke module is currently a very simple module with only few options.
It allows to batch-delete wiki pages according to their namespace.

**WARNGING**: Use this module with care!
The nuker will delete all pages, not just those that mobo created!

## Usage
View the available command line options:
```sh
mobo -h
```

The following command will delete all structural pages: Categories, Forms, Properties, etc. but will leave the content intact.
```sh
mobo --nuke structure
```
