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
           <td class="schema-propertyId"><strong>items</strong></td>
           <td class="schema-description"><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: {}</p></td>
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
           <td class="schema-propertyId">required</td>
           <td class="schema-description"><p class="schema-description">Array containing the IDs of all required fields.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>required:
  - fieldA
  - fieldB
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
