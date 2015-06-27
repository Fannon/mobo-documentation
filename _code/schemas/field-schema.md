<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Default</th>
           <th>Description</th>
           <th>Specific</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName"><strong>$abstract</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true this object is only used for inheritance and will not be itself.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>$extend</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">This references another mobo json file.
It will be included through inheritance, all existing attributes in the parent object will be overwritten.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$ignore</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, this file will be ignored completely.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$remove</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array, containing the IDs of all items/properties to remove from current object.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName">default</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">deprecated</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, the field will be deprecated. This means it will not be
displayed in forms, but the template will keep it in order to display old entries.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>description</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Description of the field. Can be displayed as tooltip info
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">enum</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">form</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Defines which form should be automatically used if the red link is clicked
<pre class="schema-example"><code>form: formName
</code></pre><pre class="schema-example"><code>form:
  - formName1
  - formName2
</code></pre></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">format</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Describes the semantic format (how to interpret the type).
E.g. 'email' or SMW specific datatypes like 'Temperature'
<p class="schema-enum"><strong>Valid entries</strong>: date, date-time, url, email, tel, Page, page, Code, code, geographic coordinate, Geographic coordinate, Quantity, quantity, Record, record, Temperature, temperature</p></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>items</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue">{}</td>
           <td class="schema-description">Lists all models that the form uses.<br>
Those are included by `$extend`.<br>
If multiple instance templates need to be created, use another items hierachy.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>itemsOrder</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array that sets the display order of all (including inherited) properties.<br>
Unmentioned fields will be appended at the bottom in their original order.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">maxItems</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">maxLength</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">maximum</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">minItems</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">minLength</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">minimum</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">note</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Notes can be strings or objects and their content will be ignored
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">pattern</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_form</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Object, containing SemanticForms option, that will be redirected to the form
<p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27field.27_tag target="_blank">Documentation</a></p></td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Whether to display this element in the form-edit view.</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Whether to display this element in the page view.</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_arraymaptemplate</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">Name of the arraymap template to use. Field needs to be of type `array`.
<p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Semantic_Forms_and_templates#arraymaptemplate target="_blank">Documentation</a></p></td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_drilldown</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If the global settings `smw_semanticDrilldown` is enabled, fields
with smw_drilldown set to true will be filterable.
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_forceSet</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">Forces the semantic storage of the attribute through the #set parser function.
This is useful for #subobject models that want to expose one or more fields as regular #set properties.
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteData</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Overwrites the final #set or #subobject value of the field. This
will also overwrite smw_overwriteOutput.
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteDisplay</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Overwrites only the display value of the current field
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteOutput</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Overwrites the final value of the field, used for both display and data set
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteOutputToLink</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">If true, this will create a link in display mode, using #formredlink if applicable
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_property</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">If set to false, the property will not be saved as a SMW property, through #set or #subobject
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>title</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Human readable title.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">todo</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">If TODO notes are placed here, mobo can print them in the CLI (If the corresponding global setting is enabled)
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>type</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Defines the data-type.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
   </tbody>
</table>
