<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">allowAdditionalProperties</td>
           <td class="schema-description"><p class="schema-description">If false, mobo will warn when the development model contains unsupported/unknown properties.
This is very helpful to spot typos and other accidents when modeling
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">arrayMergeOptions</td>
           <td class="schema-description"><p class="schema-description">Default settings (using @annotations) for array merges</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">$remove</td>
       </tr>
       <tr>
           <td class="schema-propertyName">enum</td>
       </tr>
       <tr>
           <td class="schema-propertyName">form</td>
       </tr>
       <tr>
           <td class="schema-propertyName">itemsOrder</td>
       </tr>
       <tr>
           <td class="schema-propertyName">recommended</td>
       </tr>
       <tr>
           <td class="schema-propertyName">required</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categories</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">arraymapSeparator</td>
           <td class="schema-description"><p class="schema-description">Separator to seperate between multiple items</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: ";"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">autoRefreshPort</td>
           <td class="schema-description"><p class="schema-description">WebSocket port the server and the WebGui are using to notify the change. Change this if the port is already used.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 8081</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">autoRefreshWebGui</td>
           <td class="schema-description"><p class="schema-description">WebGui is automatically refreshed if the server makes changes to the model</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">buildGraph</td>
           <td class="schema-description"><p class="schema-description">Builds graph files (.gexf) from the model.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">buildGraphSettings</td>
           <td class="schema-description"><p class="schema-description">Sets the size and weight of nodes and edges</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">dataTypeNodeSize</td>
       </tr>
       <tr>
           <td class="schema-propertyName">edgeWeight</td>
       </tr>
       <tr>
           <td class="schema-propertyName">formNodeSize</td>
       </tr>
       <tr>
           <td class="schema-propertyName">modelNodeSize</td>
       </tr>
       <tr>
           <td class="schema-propertyName">multipleEdgeWeight</td>
       </tr>
       <tr>
           <td class="schema-propertyName">templateNodeSize</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">compatibilityLayer</td>
           <td class="schema-description"><p class="schema-description">Set to false, if you want to skip the compatibility layer that migrates deprecated models to the latest standard.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">cwd</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten: Working (root) directory of the project where the settings.json is located</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">debug</td>
           <td class="schema-description"><p class="schema-description">Turns the debug mode on. This deactivated graceful error handling.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">defaultTemplateDisplay</td>
           <td class="schema-description"><p class="schema-description">Default Template Display renderer. See mobo_template/template.wikitext to see or change how they are rendered.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "ul"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">deleteWikiPages</td>
           <td class="schema-description"><p class="schema-description">Deletes removed WikiPages from the external Wiki (use with care, this destroys the polymorphism!)</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">displayTodos</td>
           <td class="schema-description"><p class="schema-description">Displays the content of todo properties from your JSON files</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">firstAlternativeFormAsDefault</td>
           <td class="schema-description"><p class="schema-description">If more than one form is defined through an oneOf array, this setting will set the first form as the default if true. If set to false, no form will be used as default and the user has to choose first.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">force</td>
           <td class="schema-description"><p class="schema-description">Forces mobo to continue despite possible errors</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">forceUpload</td>
           <td class="schema-description"><p class="schema-description">Forces the upload of all generated WikiPages, even if no changes were detected. 
This can sometimes be useful, if some changes were lost or you want to go for sure.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">formEditHelper</td>
           <td class="schema-description"><p class="schema-description">If enabled this creates **FormEdit Helper Categories** that tag the WikiPages that were generated through a form as editable by that form.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">generateTemplateData</td>
           <td class="schema-description"><p class="schema-description">Whether to generate a TemplateData (a VisualEditor extension) to describe templates</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">generatedByMobo</td>
           <td class="schema-description"><p class="schema-description">If enabled, mobo appends a warning and a category to each wiki page generated.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">generatedByMoboText</td>
           <td class="schema-description"><p class="schema-description">Wikitext that will be prefixed to each mobo generated page</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "<noinclude><div class=\"mobo-generated\">This page is autogenerated, do not edit it manually!</div> [[Category:mobo-generated]]\n</noinclude>"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">gitStatistics</td>
           <td class="schema-description"><p class="schema-description">Adds some git related statistics. Will only work if git is installed and the project is a git repository.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">headerTabs</td>
           <td class="schema-description"><p class="schema-description">If true, the HeaderTabs Extension will be used with the generated forms. Keep in mind that you still have to create the headings to make this work!</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">hideFormEditHelper</td>
           <td class="schema-description"><p class="schema-description">If true this will hide the introduced Helper Categories from the display</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">importModelDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">logDate</td>
           <td class="schema-description"><p class="schema-description">Prepend the time (and eventually date) on each logging message</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">logDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">logLongDate</td>
           <td class="schema-description"><p class="schema-description">If true and logDate is enabled, the full date will be logged in addition to the time</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">logObjectsAsYaml</td>
           <td class="schema-description"><p class="schema-description">Logging / CLI output: Prints JavaScript Object as colorized YAML</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_password</td>
           <td class="schema-description"><p class="schema-description">The password of your mobo bot account</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "password"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_server_path</td>
           <td class="schema-description"><p class="schema-description">Relative path to the MediaWiki installation without trailing slash</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: ""</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_server_port</td>
           <td class="schema-description"><p class="schema-description">The port your MW installation is using.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_server_url</td>
           <td class="schema-description"><p class="schema-description">URL to your MediaWiki server without trailing slash. Do not include the port or relative path to MediaWiki here!</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_username</td>
           <td class="schema-description"><p class="schema-description">The username of your mobo bot account</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "username"</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">overwriteImportedPages</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo in --import mode will overwrite already existing wiki pages</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">processedModelDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">serveWebApp</td>
           <td class="schema-description"><p class="schema-description">Serves the webGUI / app at localhost.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_responsiveForms</td>
           <td class="schema-description"><p class="schema-description">If enabled, mobo renders the SemanticForms as a div layout instead of the standard table layout. 
This enables more control over the layout, including some responsiveness (Bootstrap grid layout). 
WARNING: You need to style/layout the divs by yourself, or use the Chameleon skin. 
SemanticForms itself does not support / supply this for a div based layout.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_wpDiff</td>
           <td class="schema-description"><p class="schema-description">Semantic Forms Edit-View: Render the Diff Button</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_wpPreview</td>
           <td class="schema-description"><p class="schema-description">Semantic Forms Edit-View: Render the Preview Button</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_wpWatchthis</td>
           <td class="schema-description"><p class="schema-description">Semantic Forms Edit-View: Render the Watch this checkbox option</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_semanticDrilldown</td>
           <td class="schema-description"><p class="schema-description">Automatically generates SemanticDrilldown #drilldowninfo functions.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">statistics</td>
           <td class="schema-description"><p class="schema-description">Displays simple statistics about the project model. Statistics will also be written / appended to `/_processed/_statistics.csv`</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">templateDir</td>
           <td class="schema-description"><p class="schema-description">AUTO GENERATED, can be overwritten.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadConcurrency</td>
           <td class="schema-description"><p class="schema-description">Concurrent upload processes</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 4</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadLogFile</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will upload the logfile in addition to the report</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadOutline</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will upload an outline of the model at /User:<bot username>/outline</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadOutlineCountRefs</td>
           <td class="schema-description"><p class="schema-description">Adds an counter how often a template / property was internally referenced</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadReport</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will upload a report at User at /User:<bot username></p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadWikiPages</td>
           <td class="schema-description"><p class="schema-description">Uploads the generated WikiPages to an external Wiki</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">useSimpleTooltipDescriptions</td>
           <td class="schema-description"><p class="schema-description">If enabled, descriptions will be included as SimpleTooltip tooltips. WARNING: You need to install the SimpleTooltip extension to make this work.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">verbose</td>
           <td class="schema-description"><p class="schema-description">More verbose console output. This will also tighten the model validation and display minor notices</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">watchFilesystem</td>
           <td class="schema-description"><p class="schema-description">Watches the (development) project files for changed and automatically triggers re-generation.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">webAppPort</td>
           <td class="schema-description"><p class="schema-description">Port the WebApp is served on the localhost</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-default"><strong>Default</strong>: 8080</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">writeExportFiles</td>
           <td class="schema-description"><p class="schema-description">If true mobo will write every generated file as a single file into the filesystem. This can be slow due to a lot of HDD I/O</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">writeLogFile</td>
           <td class="schema-description"><p class="schema-description">If this is enabled, mobo will create logfiles in /_processed/logfiles/*</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
       </tr>
   </tbody>
</table>
