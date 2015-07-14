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
           <td class="schema-description"><p class="schema-description">Declares all models and templates that the form uses and imports them through `$extend`.<br>
To create multiple instance templates, add another items hierachy (see example).
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: {}</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>items:
# Import a template and show it only in the page-view
- $extend: /smw_template/SomeTemplate
  showForm: false

# Include a single instance model
- $extend: /model/SingleInstanceModel

# Include a multiple instance model
- items:
    $extend: /model/MultipleInstanceModel
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
           <td class="schema-propertyId">naming</td>
           <td class="schema-description"><p class="schema-description">Provides naming conventions / guideline. Will appear on the form page itself.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>naming: 'lastname, firstname'
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_forminfo</td>
           <td class="schema-description"><p class="schema-description">Object, containing all SemanticForms info parameters.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27info.27_tag target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_forminfo:
  create title: Create a new location
  edit title: Edit a location
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_forminput</td>
           <td class="schema-description"><p class="schema-description">Object, containing SemanticForms #forminput options
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#The_.23forminput_function target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_forminput:
  autocomplete on category: SomeCategory
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_freetext</td>
           <td class="schema-description"><p class="schema-description">Decides whether the freetext textarea will be displayed below the form.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_freetext: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_summary</td>
           <td class="schema-description"><p class="schema-description">Decides whether the summary field will be displayed below the form.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_summary: false
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
