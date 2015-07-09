<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId"><strong>$abstract</strong></td>
           <td class="schema-description"><p class="schema-description">If true this object is only used for inheritance and will not be created by itself.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-intermediary">intermediary</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>$abstract: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>$extend</strong></td>
           <td class="schema-description"><p class="schema-description">This includes and extends another file of the development.<br>
Inheritance is applied, the children (the current file) overwrites the parent properties.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-intermediary">intermediary</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code># Inherit a single parent
$extend: /model/_Shape
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code># Multiple parents are possible
$extend:
  - /field/fieldA
  - /field/fieldB
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code># extend is also used to import fields into models or models into forms.
title: A Model with two fields
items:
  - $extend: /field/fieldA
  - $extend: /field/fieldB
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">$ignore</td>
           <td class="schema-description"><p class="schema-description">If true, this file will be ignored completely.<br>
Use this to temporarily remove parts of the development model without deleting them.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-intermediary">intermediary</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>$ignore: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">$remove</td>
           <td class="schema-description"><p class="schema-description">Array, containing the IDs of all items/properties to remove from current object.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-intermediary">intermediary</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>$remove:
  - fieldA
  - fieldB
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>description</strong></td>
           <td class="schema-description"><p class="schema-description">General Description. Fields may use them as tooltips, forms can display a small description box.
This depends on the used template.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>description: |
  Longer description of the current model part.
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>items</strong></td>
           <td class="schema-description"><p class="schema-description">The items property contains an array of all fields that are used by the model.
Fields usually should be implemented using $extend, so every field can have its own file and inheritance.
It is possible to overwrite properties from the field directly in the mode.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: {}</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>items:
- $extend: /field/brand
  title: Overwritten brand title
- $extend: /field/modelName
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>itemsOrder</strong></td>
           <td class="schema-description"><p class="schema-description">In case that fields have been inherited, they might not end up in the correct order.<br>
The itemsOrder array lists the order of the fields.
Every field that is not listed will be appended at the bottom, in their regular order.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>itemsOrder:
  - brand
  - modelName
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">recommended</td>
           <td class="schema-description"><p class="schema-description">Array of fields that should be marked as recommended (complementary to mandatory).<br>
Please note that the template and the MediaWiki skin have to support this, since it is not an official feature.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>recommended:
  - fieldA
  - fieldB
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">required</td>
           <td class="schema-description"><p class="schema-description">Array containing the IDs of all required fields.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>required:
  - fieldA
  - fieldB
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>showForm</strong></td>
           <td class="schema-description"><p class="schema-description">If true the template/model will be hidden in the form view.
This will usually be declared in the forms by adding this after the model $extend.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>showForm: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">showPage</td>
           <td class="schema-description"><p class="schema-description">If true the template/model will be hidden in the page view.
This will usually be declared in the forms by adding this after the model $extend.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>showPage: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_append</td>
           <td class="schema-description"><p class="schema-description">Adds a append wikitext to forms and models.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_append: |
  Some appended wikitext
  Will be inserted after the H1 header
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
           <td class="schema-description"><p class="schema-description">Name of the template to inject.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">Wikitext to append.</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_appendCategory</td>
           <td class="schema-description"><p class="schema-description">Wikitext to append on the category page
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_appendCategory: |
  Some wikitext to append on the category page
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_appendForm</td>
           <td class="schema-description"><p class="schema-description">Appends wikitext only to forms (edit-view).
Can either be a string or an object for more advanced features.
(auto-generate headers, inject templates or add arbitrary wikitext)
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prepend</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_appendPage</td>
           <td class="schema-description"><p class="schema-description">Appends wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prepend</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_categories</td>
           <td class="schema-description"><p class="schema-description">Array of additional categories the template should set.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_categories:
  - additionalCategoryA
  - additionalCategoryB
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_category</td>
           <td class="schema-description"><p class="schema-description">If true, the models template will assign a category.
The name of the category is the model ID.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_category: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_display</td>
           <td class="schema-description"><p class="schema-description">Defines the template output rendering mode, whether the template should use tables, ul, etc.<br>
The rendering mode must be available in  /mobo_template/template.wikitext!
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: "table"</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_display: ul
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prepend</td>
           <td class="schema-description"><p class="schema-description">Prepends wikitext to both forms and templates.
Can either be a string or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext).
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_prepend:
  header: 1
  wikitext: |
    Some prepended wikitext
    Will be inserted after the H1 header
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_prepend: 'Some prepended wikitext'
</code></pre><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">header</td>
           <td class="schema-description"><p class="schema-description">Inserts auto generated header of given hierachy (1-6)</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prepend</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prependCategory</td>
           <td class="schema-description"><p class="schema-description">Wikitext to prepend on the category page
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_prependCategory: |
  Some wikitext to prepend on the category page
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prependForm</td>
           <td class="schema-description"><p class="schema-description">Prepends wikitext only to forms (edit-view). Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">header</td>
           <td class="schema-description"><p class="schema-description">Inserts auto generated header of given hierachy (1-6)</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prepend</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_prependPage</td>
           <td class="schema-description"><p class="schema-description">Prepends wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-subobject-header"><strong>Contains</strong>:</p><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">header</td>
           <td class="schema-description"><p class="schema-description">Inserts auto generated header of given hierachy (1-6)</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">template</td>
           <td class="schema-description"><p class="schema-description">name of a template to inject. Must exist</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">wikitext</td>
           <td class="schema-description"><p class="schema-description">wikitext to prepend</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_subobject</td>
           <td class="schema-description"><p class="schema-description">If true, this models attributes will be created as subobjects.<br>
This may be appropiate when model is used through multiple instances.<br><br>
Mobo will automantically introduce two additional helper attributes `subobjectType` and `subobjectParent` that help with querying subobjects.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_subobject: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_subobjectExtend</td>
           <td class="schema-description"><p class="schema-description">Contains a set (object) of additional #subobject properties.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_subobjectExtend:
  additionalSubObjProp2: 'Some fixed text'
  additionalSubObjProp3: '{{FULLPAGENAME}}/subpath/&#123;&#123;&#123;fieldId|}}}'
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>title</strong></td>
           <td class="schema-description"><p class="schema-description">Human readable title.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>title: Some title
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">todo</td>
           <td class="schema-description"><p class="schema-description">If TODO notes are placed here, mobo can print them in the CLI (If the corresponding global setting is enabled).
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">type</td>
           <td class="schema-description"><p class="schema-description">Defines the data-type.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-enum"><strong>Valid entries</strong>: string, number, boolean, array, object</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>type: number
</code></pre></td>
       </tr>
   </tbody>
</table>
