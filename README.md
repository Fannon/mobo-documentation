<p align="center" style="background: #000; border-radius:3px;">
    <img src="http://fannon.de/p/mobo-intro/img/logo.png"/>
</p>

## About mobo
[Mobo](https://www.npmjs.com/package/mobo) is a command line toolset that helps to build Semantic MediaWiki structure in an agile,
Schema-Driven Development (simplified MDE) way.
The model is developed on the local file system, using an object oriented JSON Schema notation.
Since the model is written in plain YAML or JSON files, Version Control Systems like Git and an editor of choice and can be used.
There is no need of additional tooling.

The main function of the mobo toolset is the JSON Schema based model development workflow.
To support this, it also features a web application that documents the development model in its various stages.
There is also an interactive graph explorer that gives a more visual representation.

Mobo can also be used to batch-upload wiki pages in general and it is planned to support some basic external data transformation and importing capabilities.

Mobo is Open Source and Cross-Platform.

## Documentation
* Read the [documentation online](http://fannon.gitbooks.io/mobo-documentation/content/)
* Download the documentation at [GitBook](https://www.gitbook.com/book/fannon/mobo-documentation)

## Screenshots
The mobo model is developed with your favorite text editor:

![text-editor](http://up.fannon.de/img/mobo-intro-editor.png)

----------------------------------------------------------------

Mobo is a console application. It validates, generates and uploads your model in realtime:

![cli](http://up.fannon.de/img/mobo-intro-run.gif)

----------------------------------------------------------------

There is a webapp that allows you to browse your development model and the resulting wikitext:

![webapp](http://up.fannon.de/img/mobo-intro-viewer.gif)

----------------------------------------------------------------

Mobo can generate a graph (which has to be layouted via Gephi) that can be explored in an interactive application:

![graph](http://up.fannon.de/img/mobo-intro-graphexplorer.gif)

----------------------------------------------------------------

The final result in the wiki:

![forms](http://up.fannon.de/img/mobo-intro-sf.png)
