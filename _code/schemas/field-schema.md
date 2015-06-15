<table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Default</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">form</td>
           <td class="schema-type">string,array</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Defines which form should be automatically used if the red link is clicked</td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_form</td>
           <td class="schema-type">object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Object, containing SemanticForms option, that will be redirected to the form</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_arraymaptemplate</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">Name of the arraymap template (https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Semantic_Forms_and_templates#arraymaptemplate) to use. Field needs to be of type "array".</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_drilldown</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If the global settings "smw_semanticDrilldown" is enabled, fields with smw_drilldown set to true will be filterable. </td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_forceSet</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">Forces the semantic storage of the attribute through the #set parser function. This is useful for #subobject models that want to expose one or more fields as regular #set properties.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_hideInForm</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, the field will not be visible in the form edit view</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_hideInPage</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true the field will not be visibly renderd in the page view</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteData</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Overwrites the final #set or #subobject value of the field. This will also overwrite smw_overwriteOutput.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteDisplay</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Overwrites only the display value of the current field</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteOutput</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Overwrites the final value of the field, used for both display and data set</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteOutputToLink</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">If true, this will create a link in display mode, but the data will not receive the appended [[]]</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_property</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">If set to false, the property will not be saved as a SMW property, through #set or #subobject</td>
       </tr>
   </tbody>
</table>
