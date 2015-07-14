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
           <td class="schema-propertyId">default</td>
           <td class="schema-description"><p class="schema-description">The default value. Applies only to fields.
</p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">deprecated</td>
           <td class="schema-description"><p class="schema-description">If true, the field will be deprecated.
It will not be displayed in forms, but the template will keep it in order to display old entries.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>deprecated: true
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
           <td class="schema-propertyId">enum</td>
           <td class="schema-description"><p class="schema-description">List of all possible values.<br>
Defaults to a dropdown widget.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>type: string
enum:
  - red
  - green
  - blue
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>form</strong></td>
           <td class="schema-description"><p class="schema-description">Defines which form should be automatically used if the red link is clicked.
It can link to one multiple forms.<br>
When form it used, it implies: `type: string` and `format: Page`
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>form: formName
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>form:
  - formName1
  - formName2
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>format</strong></td>
           <td class="schema-description"><p class="schema-description">Describes the semantic format (how to interpret the type).
E.g. 'email' or SMW specific datatypes like 'Temperature'
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-enum"><strong>Valid entries</strong>: date, date-time, url, email, tel, Page, page, Code, code, geographic coordinate, Geographic coordinate, Quantity, quantity, Record, record, Temperature, temperature</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>type: string
format: email
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>items</strong></td>
           <td class="schema-description"><p class="schema-description">Some fields have multiple values (e.g. comma seperated).<br>
In this case the items property needs to be used.<br>
The items object then defines the actual data type, format and form
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: {}</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>title: Tags
items:
  type: string
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
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>itemsOrder:
  - '@unique'
  - '@sorted'
  - b
  - c
  - a
  - b
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">maxItems</i></td>
           <td class="schema-description"><p class="schema-description">How many instances are allowed at most.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">maxLength</i></td>
           <td class="schema-description"><p class="schema-description">The maximum length of a string.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">maximum</i></td>
           <td class="schema-description"><p class="schema-description">The maximum value of a number.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">minItems</i></td>
           <td class="schema-description"><p class="schema-description">How many instances are required at least.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">minLength</i></td>
           <td class="schema-description"><p class="schema-description">The minimum length of a string.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">minimum</i></td>
           <td class="schema-description"><p class="schema-description">The minimum value of a number.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">pattern</i></td>
           <td class="schema-description"><p class="schema-description">Provides a Regular Expression (Regex) pattern to validate the field value.<br>
This is currently not supported by Semantic Forms.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>pattern: '/^[\d]{4,5}/$'
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>sf_form</strong></td>
           <td class="schema-description"><p class="schema-description">The sf_form property is an object that redirects all settings directly to Semantic Forms.<br>
If no value is necessary (e.g. "existing values only"), use true.
To see which options are supported, refer to the Semantic Forms manual.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27field.27_tag target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_form:
  input type: combobox
  values from namespace: Manufacturer
  max values: 1
  existing values only: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>showForm</strong></td>
           <td class="schema-description"><p class="schema-description">Whether to display this element in the form-edit view.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>showForm: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">showPage</td>
           <td class="schema-description"><p class="schema-description">Whether to display this element in the page view.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>showPage: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_arraymaptemplate</td>
           <td class="schema-description"><p class="schema-description">Name of the arraymap template to use.<br>
Field needs to be of type `array`.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Semantic_Forms_and_templates#arraymaptemplate target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_arraymaptemplate: ArrayMapRemoveNamespaceTags
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_drilldown</td>
           <td class="schema-description"><p class="schema-description">If the global settings `smw_semanticDrilldown` is enabled,
fields with smw_drilldown set to true will be filterable.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_drilldown: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_forceSet</td>
           <td class="schema-description"><p class="schema-description">Forces the semantic storage of the attribute through the #set parser function.<br>
This is useful for #subobject models that want to expose one or more fields as regular #set properties.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_forceSet: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteData</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final #set or #subobject value of the field.<br>
Is used similar to `smw_overwriteOutput`
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteDisplay</td>
           <td class="schema-description"><p class="schema-description">Overwrites only the display value of the current field<br>
Is used similar to `smw_overwriteOutput`.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteOutput</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final value of the field, used for both display and data set
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_overwriteOutput: '[[CustomNamespace:{{FULLPAGENAME}}]]'
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_overwriteOutput: '{{FULLPAGENAME}}/subpath/&#123;&#123;&#123;fieldId|}}}'
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteOutputToLink</td>
           <td class="schema-description"><p class="schema-description">If true, this will create a link in display mode, using #formredlink if applicable.<br>
This needs to be used together with `smw_overwriteOutput`.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_overwriteOutput: 'CustomNamespace:{{FULLPAGENAME}}'
smw_overwriteOutputToLink: true
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>smw_property</strong></td>
           <td class="schema-description"><p class="schema-description">If smw_property is set to false the templates won't declare it as a semantic property.
Please note that the field can't be queried then.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_property: false
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
           <td class="schema-propertyId"><strong>type</strong></td>
           <td class="schema-description"><p class="schema-description">Defines the data-type.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-enum"><strong>Valid entries</strong>: string, number, boolean, array, object</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>type: number
</code></pre></td>
       </tr>
   </tbody>
</table>
