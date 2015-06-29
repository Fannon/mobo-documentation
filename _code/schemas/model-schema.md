<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
           <th></th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId"><strong>$abstract</strong></td>
           <td class="schema-description"><p class="schema-description">If true this object is only used for inheritance and will not be itself.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>$extend</strong></td>
           <td class="schema-description"><p class="schema-description">This references another mobo json file.
It will be included through inheritance, all existing attributes in the parent object will be overwritten.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">$ignore</td>
           <td class="schema-description"><p class="schema-description">If true, this file will be ignored completely.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">$remove</td>
           <td class="schema-description"><p class="schema-description">Array, containing the IDs of all items/properties to remove from current object.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>description</strong></td>
           <td class="schema-description"><p class="schema-description">Description of the field. Can be displayed as tooltip info
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>items</strong></td>
           <td class="schema-description"><p class="schema-description">The items property contains an array of all fields that are used by the model.
Fields usually should be implemented using $extend, so every field can have its own file and inheritance.
It is possible to overwrite properties from the field directly in the mode.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-default"><strong>Default</strong>: {}</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>items:
- $extend: /field/brand
  title: Overwritten brand title
- $extend: /field/modelName
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>itemsOrder</strong></td>
           <td class="schema-description"><p class="schema-description">In case that fields have been inherited, they might not end up in the correct order.
The itemsOrder array lists the order of the fields.
Every field that is not listed will be appended at the bottom, in their regular order.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>itemsOrder:
  - brand
  - modelName
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">recommended</td>
           <td class="schema-description"><p class="schema-description">Array of fields that should be highlighted as recommended (complementary to mandatory)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">required</td>
           <td class="schema-description"><p class="schema-description">Array containing the IDs of all required fields
</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>showForm</strong></td>
           <td class="schema-description"><p class="schema-description">If true the template/model will be hidden in the form view.
This will usually be declared in the forms by adding this after the model $extend.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">showPage</td>
           <td class="schema-description"><p class="schema-description">If true the template/model will be hidden in the page view.
This will usually be declared in the forms by adding this after the model $extend.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_append</td>
           <td class="schema-description"><p class="schema-description">Adds a postfix wikitext to forms and models.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_append:
  header: 1
  wikitext: |
    Some appended wikitext
    Will be inserted after the H1 header
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_append: 'Some prepended wikitext'
</code></pre><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">Name of the template to inject.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">Wikitext to append.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_appendCategory</td>
           <td class="schema-description"><p class="schema-description">Wikitext to postfix on the category page
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_appendForm</td>
           <td class="schema-description"><p class="schema-description">Appends wikitext only to forms (edit-view).
Can either be a string or an object for more advanced features.
(auto-generate headers, inject templates or add arbitrary wikitext)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prefix</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_appendPage</td>
           <td class="schema-description"><p class="schema-description">Appends wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prefix</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_categories</td>
           <td class="schema-description"><p class="schema-description">Array of additional categories the template should set.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_category</td>
           <td class="schema-description"><p class="schema-description">If true, the models template will assign a category.
The name of the category is the model ID.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_display</td>
           <td class="schema-description"><p class="schema-description">Defines the template output rendering mode, whether the template should use tables, ul, etc.<br>
The rendering mode must be available in  /mobo_template/template.wikitext!
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: "table"</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_display: ul
</code></pre></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prepend</td>
           <td class="schema-description"><p class="schema-description">Prefixes wikitext to both forms and templates. Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">header</td>
           <td class="schema-description"><p class="schema-description">Inserts auto generated header of given hierachy (1-6)</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prefix</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prependCategory</td>
           <td class="schema-description"><p class="schema-description">Wikitext to prepend on the category page
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prependForm</td>
           <td class="schema-description"><p class="schema-description">Prefixes wikitext only to forms (edit-view). Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">header</td>
           <td class="schema-description"><p class="schema-description">Inserts auto generated header of given hierachy (1-6)</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prefix</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prependPage</td>
           <td class="schema-description"><p class="schema-description">Prefixes wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">header</td>
           <td class="schema-description"><p class="schema-description">Inserts auto generated header of given hierachy (1-6)</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prefix</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_subobject</td>
           <td class="schema-description"><p class="schema-description">If true, this models attributes will be created as subobjects.
Useful if this model is used through multiple instances.
Mobo will automantically introduce two additional helper attributes `subobjectType` and `subobjectParent` that help with querying subobjects.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_subobjectExtend</td>
           <td class="schema-description"><p class="schema-description">Contains a set (object) of additional #subobject properties
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_subobjectExtend:
  additionalSubObjProp2: 'Some fixed text'
</code></pre></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>title</strong></td>
           <td class="schema-description"><p class="schema-description">Human readable title.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">todo</td>
           <td class="schema-description"><p class="schema-description">If TODO notes are placed here, mobo can print them in the CLI (If the corresponding global setting is enabled)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">type</td>
           <td class="schema-description"><p class="schema-description">Defines the data-type.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-enum"><strong>Valid entries</strong>: string, number, boolean, array, object</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
   </tbody>
</table>
