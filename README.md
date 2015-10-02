<p align="center" id="documentation-logo" style="background: #1D1D1B; border-radius:3px; padding: 8px 0 4px 0">
    <img src="_img/documentation.png"/>
</p>

## About mobo
[Mobo](https://www.npmjs.com/package/mobo) is a command line toolset that helps to build [Semantic MediaWiki](http://semantic-mediawiki.org/) structure in an agile,
Schema-Driven Development (simplified MDE) way.
The model is written in [YAML](http://yaml.org/) or [JSON](http://json.org/), using object oriented [JSON Schema](http://json-schema.org/).

Since the model is organized in plain text files and folders, the user is free to use an editor of Version Control System choice.
There is no need of additional tooling.

The main feature of mobo is the model development workflow.
Semantic MediaWikis can be developed rapidly and modular, leading to a more agile development process.
Mobo can run in an interactive mode, automatically validating and uploading the development model in realtime.

It features a web application for inspecting the development model in its various stages.
Mobo can also be used to batch-import wiki pages, either static or programmatically from data.

Mobo is [Open Source](https://github.com/Fannon/mobo) and Cross-Platform.

## Documentation
* Read the [documentation online](http://fannon.gitbooks.io/mobo-documentation/content/)
* Download the documentation at [GitBook](https://www.gitbook.com/book/fannon/mobo-documentation)
* For deeper technical background, read my master-thesis on [Schema-Driven Development of Semantic MediaWikis](http://fannon.de/p/Schema-Driven_Development_of_Semantic_MediaWikis.pdf)

## Screenshots
The mobo development model can be developed with your favorite text editor:

![text-editor](/_img/editor.png)

----------------------------------------------------------------

Mobo is a console application. It validates, generates and uploads your model in real-time:

![cli](/_img/mobo-cli.gif)

----------------------------------------------------------------

There is a web application that allows you to browse your development model and the resulting wikitext:

![webapp](/_img/mobo-inspector.gif)

----------------------------------------------------------------

The final result in the wiki:

![forms](/_img/mobo-sf-result.png)

----------------------------------------------------------------

Mobo can generate a graph (which has to be layouted via Gephi) that can be explored in an interactive application:

![graph](/_img/mobo-graphexplorer.gif)
