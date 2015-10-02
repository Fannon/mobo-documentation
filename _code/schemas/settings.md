<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">allowAdditionalProperties</td>
           <td class="schema-description"><p class="schema-description">If false, mobo will warn when the development model contains unsupported/unknown properties.
This is very helpful to spot typos and other accidents when modeling
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">arrayMergeOptions</td>
           <td class="schema-description"><p class="schema-description">Default settings (using @annotations) for array merges</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">$remove</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique"
]</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">enum</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique"
]</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">form</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique"
]</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">itemsOrder</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique",
    "@prepend"
]</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">recommended</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique"
]</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">required</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique"
]</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_categories</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-default"><strong>Default</strong>: [
    "@unique",
    "@append"
]</p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">arraymapSeparator</td>
           <td class="schema-description"><p class="schema-description">Separator to seperate between multiple items</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: ";"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">autoRefreshPort</td>
           <td class="schema-description"><p class="schema-description">WebSocket port the server and the WebGui are using to notify the change. Change this if the port is already used.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 8081</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">autoRefreshWebGui</td>
           <td class="schema-description"><p class="schema-description">WebGui is automatically refreshed if the server makes changes to the model</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">buildGraph</td>
           <td class="schema-description"><p class="schema-description">Builds graph files (.gexf) from the model.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">buildGraphSettings</td>
           <td class="schema-description"><p class="schema-description">Sets the size and weight of nodes and edges</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">dataTypeNodeSize</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 12</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">edgeWeight</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 2</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">formNodeSize</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 36</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">modelNodeSize</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 24</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">multipleEdgeWeight</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 2</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">templateNodeSize</td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 16</p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">compatibilityLayer</td>
           <td class="schema-description"><p class="schema-description">Set to false, if you want to skip the compatibility layer that migrates deprecated models to the latest standard.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">cwd</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten: Working (root) directory of the project where the settings.json is located</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">debug</td>
           <td class="schema-description"><p class="schema-description">Turns the debug mode on. This deactivated graceful error handling.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">defaultTemplateDisplay</td>
           <td class="schema-description"><p class="schema-description">Default Template Display renderer. See mobo_template/template.wikitext to see or change how they are rendered.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "ul"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">deleteWikiPages</td>
           <td class="schema-description"><p class="schema-description">Deletes removed WikiPages from the external Wiki (use with care, this destroys the polymorphism!)</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">displayTodos</td>
           <td class="schema-description"><p class="schema-description">Displays the content of todo properties from your JSON files</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">firstAlternativeFormAsDefault</td>
           <td class="schema-description"><p class="schema-description">If more than one form is defined through an oneOf array, this setting will set the first form as the default if true. If set to false, no form will be used as default and the user has to choose first.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">force</td>
           <td class="schema-description"><p class="schema-description">Forces mobo to continue despite possible errors</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">forceUpload</td>
           <td class="schema-description"><p class="schema-description">Forces the upload of all generated WikiPages, even if no changes were detected. 
This can sometimes be useful, if some changes were lost or you want to go for sure.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">formEditHelper</td>
           <td class="schema-description"><p class="schema-description">If enabled this creates **FormEdit Helper Categories** that tag the WikiPages that were generated through a form as editable by that form.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">generateTemplateData</td>
           <td class="schema-description"><p class="schema-description">Whether to generate a TemplateData (a VisualEditor extension) to describe templates</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">generatedByMobo</td>
           <td class="schema-description"><p class="schema-description">If enabled, mobo appends a warning and a category to each wiki page generated.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">generatedByMoboText</td>
           <td class="schema-description"><p class="schema-description">Wikitext that will be prefixed to each mobo generated page</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "<noinclude><div class=\"mobo-generated\">This page is autogenerated, do not edit it manually!</div> [[Category:mobo-generated]]\n</noinclude>"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">gitStatistics</td>
           <td class="schema-description"><p class="schema-description">Adds some git related statistics. Will only work if git is installed and the project is a git repository.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">headerTabs</td>
           <td class="schema-description"><p class="schema-description">If true, the HeaderTabs Extension will be used with the generated forms. Keep in mind that you still have to create the headings to make this work!</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">hideFormEditHelper</td>
           <td class="schema-description"><p class="schema-description">If true this will hide the introduced Helper Categories from the display</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">importModelDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">logDate</td>
           <td class="schema-description"><p class="schema-description">Prepend the time (and eventually date) on each logging message</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">logDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">logLongDate</td>
           <td class="schema-description"><p class="schema-description">If true and logDate is enabled, the full date will be logged in addition to the time</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">logObjectsAsYaml</td>
           <td class="schema-description"><p class="schema-description">Logging / CLI output: Prints JavaScript Object as colorized YAML</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">mw_password</td>
           <td class="schema-description"><p class="schema-description">The password of your mobo bot account</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "password"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">mw_server_path</td>
           <td class="schema-description"><p class="schema-description">Relative path to the MediaWiki installation without trailing slash
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: ""</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">mw_server_port</td>
           <td class="schema-description"><p class="schema-description">The port your MW installation is using.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">mw_server_url</td>
           <td class="schema-description"><p class="schema-description">URL to your MediaWiki server without trailing slash.
Do not include the port or relative path to MediaWiki!
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">mw_username</td>
           <td class="schema-description"><p class="schema-description">The username of your mobo bot account</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "username"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">overwriteImportedPages</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo in --import mode will overwrite already existing wiki pages</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">processedModelDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">serveWebApp</td>
           <td class="schema-description"><p class="schema-description">Serves the webGUI / app at localhost.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_responsiveForms</td>
           <td class="schema-description"><p class="schema-description">If enabled, mobo renders the SemanticForms as a div layout instead of the standard table layout. 
This enables more control over the layout, including some responsiveness (Bootstrap grid layout). 
WARNING: You need to style/layout the divs by yourself, or use the Chameleon skin. 
SemanticForms itself does not support / supply this for a div based layout.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_wpDiff</td>
           <td class="schema-description"><p class="schema-description">Semantic Forms Edit-View: Render the Diff Button</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_wpPreview</td>
           <td class="schema-description"><p class="schema-description">Semantic Forms Edit-View: Render the Preview Button</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_wpWatchthis</td>
           <td class="schema-description"><p class="schema-description">Semantic Forms Edit-View: Render the Watch this checkbox option</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_semanticDrilldown</td>
           <td class="schema-description"><p class="schema-description">Automatically generates SemanticDrilldown #drilldowninfo functions.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">statistics</td>
           <td class="schema-description"><p class="schema-description">Displays simple statistics about the project model. Statistics will also be written / appended to `/_processed/_statistics.csv`</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">templateDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">uploadConcurrency</td>
           <td class="schema-description"><p class="schema-description">Concurrent upload processes</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 4</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">uploadLogFile</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will upload the logfile in addition to the report</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">uploadOutline</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will upload an outline of the model at /User:<bot username>/outline</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">uploadOutlineCountRefs</td>
           <td class="schema-description"><p class="schema-description">Adds an counter how often a template / property was internally referenced</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">uploadReport</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will upload a report at User at /User:<bot username></p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">uploadWikiPages</td>
           <td class="schema-description"><p class="schema-description">Uploads the generated WikiPages to an external Wiki</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">useSimpleTooltipDescriptions</td>
           <td class="schema-description"><p class="schema-description">If enabled, descriptions will be included as SimpleTooltip tooltips. WARNING: You need to install the SimpleTooltip extension to make this work.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">verbose</td>
           <td class="schema-description"><p class="schema-description">More verbose console output. This will also tighten the model validation and display minor notices</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">watchFilesystem</td>
           <td class="schema-description"><p class="schema-description">Watches the (development) project files for changed and automatically triggers re-generation.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">webAppPort</td>
           <td class="schema-description"><p class="schema-description">Port the WebApp is served on the localhost</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 7000</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">writeExportFiles</td>
           <td class="schema-description"><p class="schema-description">If true mobo will write every generated file as a single file into the filesystem. This can be slow due to a lot of HDD I/O</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">writeLogFile</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will create logfiles in /_processed/logfiles/*</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
   </tbody>
</table>
