<table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Default</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">arrayMergeOptions<span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Default settings (using @annotations) for array merges<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Default</th>
           <th>Specific</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">$remove<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">enum<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">form<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">itemsOrder<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique",
    "@prepend"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">recommended<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">required<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categories<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue">[
    "@unique",
    "@append"
]</td>
           <td class="schema-specific">domain</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">arraymapSeparator<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">";"</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Separator to seperate between multiple items</td>
       </tr>
       <tr>
           <td class="schema-propertyName">autoRefreshPort<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">8081</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">WebSocket port the server and the WebGui are using to notify the change. Change this if the port is already used.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">autoRefreshWebGui<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">WebGui is automatically refreshed if the server makes changes to the model</td>
       </tr>
       <tr>
           <td class="schema-propertyName">buildGraph<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Builds graph files (.gexf) from the model.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">buildGraphSettings<span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Sets the size and weight of nodes and edges<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Default</th>
           <th>Specific</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">dataTypeNodeSize<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">8</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">edgeWeight<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">2</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">formNodeSize<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">36</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">modelNodeSize<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">24</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">multipleEdgeWeight<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">2</td>
           <td class="schema-specific">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">templateNodeSize<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">12</td>
           <td class="schema-specific">domain</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">compatibilityLayer<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Set to false, if you want to skip the compatibility layer that migrates deprecated models to the latest standard.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">cwd<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">AUTO GENERATED, can be overwritten: Working (root) directory of the project where the settings.json is located</td>
       </tr>
       <tr>
           <td class="schema-propertyName">debug<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Turns the debug mode on. This deactivated graceful error handling.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">defaultTemplateDisplay<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"ul"</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Default Template Display renderer. See mobo_template/template.wikitext to see or change how they are rendered.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">deleteWikiPages<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Deletes removed WikiPages from the external Wiki (use with care, this destroys the polymorphism!)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">displayTodos<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Displays the content of todo properties from your JSON files</td>
       </tr>
       <tr>
           <td class="schema-propertyName">firstAlternativeFormAsDefault<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If more than one form is defined through an oneOf array, this setting will set the first form as the default if true. If set to false, no form will be used as default and the user has to choose first.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">force<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Forces mobo to continue despite possible errors</td>
       </tr>
       <tr>
           <td class="schema-propertyName">forceUpload<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Forces the upload of all generated WikiPages, even if no changes were detected. 
This can sometimes be useful, if some changes were lost or you want to go for sure.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">formEditHelper<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If enabled this creates **FormEdit Helper Categories** that tag the WikiPages that were generated through a form as editable by that form.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">generateTemplateData<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Whether to generate a TemplateData (a VisualEditor extension) to describe templates</td>
       </tr>
       <tr>
           <td class="schema-propertyName">generatedByMobo<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If enabled, mobo appends a warning and a category to each wiki page generated.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">generatedByMoboText<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"<noinclude><div class=\"mobo-generated\">This page is autogenerated, do not edit it manually!</div> [[Category:mobo-generated]]\n</noinclude>"</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Wikitext that will be prefixed to each mobo generated page</td>
       </tr>
       <tr>
           <td class="schema-propertyName">gitStatistics<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Adds some git related statistics. Will only work if git is installed and the project is a git repository.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">headerTabs<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true, the HeaderTabs Extension will be used with the generated forms. Keep in mind that you still have to create the headings to make this work!</td>
       </tr>
       <tr>
           <td class="schema-propertyName">hideFormEditHelper<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true this will hide the introduced Helper Categories from the display</td>
       </tr>
       <tr>
           <td class="schema-propertyName">importModelDir<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">AUTO GENERATED, can be overwritten.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">logDate<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Prepend the time (and eventually date) on each logging message</td>
       </tr>
       <tr>
           <td class="schema-propertyName">logDir<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">AUTO GENERATED, can be overwritten.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">logLongDate<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true and logDate is enabled, the full date will be logged in addition to the time</td>
       </tr>
       <tr>
           <td class="schema-propertyName">logObjectsAsYaml<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Logging / CLI output: Prints JavaScript Object as colorized YAML</td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_password<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"password"</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">The password of your mobo bot account</td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_server_path<span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">""</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Relative path to the MediaWiki installation without trailing slash</td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_server_port<span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">The port your MW installation is using.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_server_url<span class="schema-type schema-type-boolean">boolean</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">URL to your MediaWiki server without trailing slash. Do not include the port or relative path to MediaWiki here!</td>
       </tr>
       <tr>
           <td class="schema-propertyName">mw_username<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"username"</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">The username of your mobo bot account</td>
       </tr>
       <tr>
           <td class="schema-propertyName">overwriteImportedPages<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If this is enabled, mobo in --import mode will overwrite already existing wiki pages</td>
       </tr>
       <tr>
           <td class="schema-propertyName">processedModelDir<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">AUTO GENERATED, can be overwritten.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">serveWebApp<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Serves the webGUI / app at localhost.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_responsiveForms<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If enabled, mobo renders the SemanticForms as a div layout instead of the standard table layout. 
This enables more control over the layout, including some responsiveness (Bootstrap grid layout). 
WARNING: You need to style/layout the divs by yourself, or use the Chameleon skin. 
SemanticForms itself does not support / supply this for a div based layout.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_wpDiff<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Semantic Forms Edit-View: Render the Diff Button</td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_wpPreview<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Semantic Forms Edit-View: Render the Preview Button</td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_wpWatchthis<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Semantic Forms Edit-View: Render the Watch this checkbox option</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_semanticDrilldown<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Automatically generates SemanticDrilldown #drilldowninfo functions.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">statistics<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Displays simple statistics about the project model. Statistics will also be written / appended to `/_processed/_statistics.csv`</td>
       </tr>
       <tr>
           <td class="schema-propertyName">templateDir<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">AUTO GENERATED, can be overwritten.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadConcurrency<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">4</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Concurrent upload processes</td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadLogFile<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If this is enabled, mobo will upload the logfile in addition to the report</td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadOutline<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If this is enabled, mobo will upload an outline of the model at /User:<bot username>/outline</td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadOutlineCountRefs<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Adds an counter how often a template / property was internally referenced</td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadReport<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If this is enabled, mobo will upload a report at User at /User:<bot username></td>
       </tr>
       <tr>
           <td class="schema-propertyName">uploadWikiPages<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Uploads the generated WikiPages to an external Wiki</td>
       </tr>
       <tr>
           <td class="schema-propertyName">useSimpleTooltipDescriptions<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If enabled, descriptions will be included as SimpleTooltip tooltips. WARNING: You need to install the SimpleTooltip extension to make this work.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">verbose<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">More verbose console output. This will also tighten the model validation and display minor notices</td>
       </tr>
       <tr>
           <td class="schema-propertyName">watchFilesystem<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Watches the (development) project files for changed and automatically triggers re-generation.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">webAppPort<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue">8080</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Port the WebApp is served on the localhost</td>
       </tr>
       <tr>
           <td class="schema-propertyName">writeExportFiles<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true mobo will write every generated file as a single file into the filesystem. This can be slow due to a lot of HDD I/O</td>
       </tr>
       <tr>
           <td class="schema-propertyName">writeLogFile<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If this is enabled, mobo will create logfiles in /_processed/logfiles/*</td>
       </tr>
   </tbody>
</table>
