# Mobo Utilities
## Mobo Viewer
### Development Model Inspector
Head to the mobo viewer application at your [localhost:8080](http://localhost:8080) to browse through the development model (with inheritance and further processing applied) on the left search box.

![mobo-viewer-left](http://up.fannon.de/img/mobo-viewer-left.png?v=1)

The final resulting wikitext pages can be browsed through the right search box.

![mobo-viewer-right](http://up.fannon.de/img/mobo-viewer-right.png?v=1)

### Development Model Graph Explorer
In order to use the mobo graph explorer, a layouted version of the graph has to be generated first. This can be done through [Gephi](https://gephi.github.io/):

Launch Gephi and open the file _graph.gexf in your projects `/_processed/` directory. Through the layout options, a force algorithm has to be applied (like Force Atlas). This usually involves some try and error with the parameters, since the correct values depend on the nature of the graph itself.Save the layouted graph as `/_processed/_graph_layouted.gexf`.

A short screenshot guided tutorial on [how to do force layouting with Gephi](https://github.com/Fannon/mobo/wiki/Use-Gephi-to-layout-the-graph) is available at the wiki.

![mobo-gephi](http://up.fannon.de/img/mobo-gephi.png?v=1)

Now the graph explorer at [localhost:8080/graph.html](http://localhost:8080/graph.html) can be used:

![mobo-graph-explorer](http://up.fannon.de/img/mobo-graph-explorer.png?v=2)

The size of the nodes can be adjusted through `settings.json`.

## Importer
```sh
mobo --import <dirname>
```

## Nuker
Use with care! This will delete all pages, not just those that mobo created!
```
mobo --nuke structure
```