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
           <td class="schema-propertyName"><strong>description</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Description of the field. Can be displayed as tooltip info
</td>
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
           <td class="schema-propertyName">note</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Notes can be strings or objects and their content will be ignored
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">recommended</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array of fields that should be highlighted as recommended (complementary to mandatory)
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">required</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array containing the IDs of all required fields
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">If true the template/model will be hidden in the form view.
This will usually be declared in the forms by adding this after the model $extend.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">If true the template/model will be hidden in the page view.
This will usually be declared in the forms by adding this after the model $extend.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_append</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Adds a postfix wikitext to forms and models
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">Name of the template to inject.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">Wikitext to append.</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendCategory</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Wikitext to postfix on the category page
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Appends wikitext only to forms (edit-view).
Can either be a string or an object for more advanced features.
(auto-generate headers, inject templates or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Appends wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categories</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array of additional categories the template should set.
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_category</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Whether the template should tag the page as a category of the model-name.
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_display</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"table"</td>
           <td class="schema-description">Defines the template output rendering mode, whether the template should use tables, ul, etc.<br>
The rendering mode must be available in  /mobo_template/template.wikitext!
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prepend</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Prefixes wikitext to both forms and templates. Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependCategory</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Wikitext to prepend on the category page
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Prefixes wikitext only to forms (edit-view). Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Prefixes wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation">implementation</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobject</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, this models attributes will be created as subobjects.
Useful if this model is used through multiple instances.
</td>
           <td class="schema-specific schema-specific-platform">platform</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobjectExtend</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Contains a set (object) of additional #subobject properties
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
           <td class="schema-propertyName">type</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Defines the data-type.
<p class="schema-enum"><strong>Valid entries</strong>: array</p></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
   </tbody>
</table>
