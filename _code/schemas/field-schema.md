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
           <td class="schema-propertyId">default</td>
           <td class="schema-description"><p class="schema-description">The default value of the field.
</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">deprecated</td>
           <td class="schema-description"><p class="schema-description">If true, the field will be deprecated. This means it will not be
displayed in forms, but the template will keep it in order to display old entries.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>description</strong></td>
           <td class="schema-description"><p class="schema-description">Description of the field. Can be displayed as tooltip info
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">enum</td>
           <td class="schema-description"><p class="schema-description">List of all possible values.<br>
Defaults to a dropdown widget.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>type: string
enum:
  - red
  - green
  - blue
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>form</strong></td>
           <td class="schema-description"><p class="schema-description">Defines which form should be automatically used if the red link is clicked.
It can link to one multiple forms.<br>
It sets implicitly: `type: string`  and `format: Page`
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>form: formName
</code></pre><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>form:
  - formName1
  - formName2
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>format</strong></td>
           <td class="schema-description"><p class="schema-description">Describes the semantic format (how to interpret the type).
E.g. 'email' or SMW specific datatypes like 'Temperature'
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-enum"><strong>Valid entries</strong>: date, date-time, url, email, tel, Page, page, Code, code, geographic coordinate, Geographic coordinate, Quantity, quantity, Record, record, Temperature, temperature</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>items</strong></td>
           <td class="schema-description"><p class="schema-description">Some fields have multiple values (e.g. comma seperated).<br>
In this case the items property needs to be used.<br>
The items object then defines the actual data type, format and form
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-default"><strong>Default</strong>: {}</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>title: Tags
items:
  type: string
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
           <td class="schema-propertyId"><i class="fade">maxItems</i></td>
           <td class="schema-description"><p class="schema-description">How many instances are allowed at most.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">maxLength</i></td>
           <td class="schema-description"><p class="schema-description">The maximum length of a string
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">maximum</i></td>
           <td class="schema-description"><p class="schema-description">The maximum value of a number
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">minItems</i></td>
           <td class="schema-description"><p class="schema-description">How many instances are required at least.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">minLength</i></td>
           <td class="schema-description"><p class="schema-description">The minimum length of a string
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">minimum</i></td>
           <td class="schema-description"><p class="schema-description">The minimum value of a number
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><i class="fade">pattern</i></td>
           <td class="schema-description"><p class="schema-description">Regular Expression (Regex) pattern<br>
This is currently not supported by Semantic Forms.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>sf_form</strong></td>
           <td class="schema-description"><p class="schema-description">The sf_form property is an object that redirects all settings directly to Semantic Forms.
If no value is necessary (e.g. "existing values only"), use true.
To see which options are supported, refer to the Semantic Forms manual
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27field.27_tag target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_form:
  input type: combobox
  values from namespace: Manufacturer
  max values: 1
  existing values only: true
</code></pre></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>showForm</strong></td>
           <td class="schema-description"><p class="schema-description">Whether to display this element in the form-edit view.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">showPage</td>
           <td class="schema-description"><p class="schema-description">Whether to display this element in the page view.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_arraymaptemplate</td>
           <td class="schema-description"><p class="schema-description">Name of the arraymap template to use. Field needs to be of type `array`.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Semantic_Forms_and_templates#arraymaptemplate target="_blank">Documentation</a></p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_drilldown</td>
           <td class="schema-description"><p class="schema-description">If the global settings `smw_semanticDrilldown` is enabled, fields
with smw_drilldown set to true will be filterable.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_forceSet</td>
           <td class="schema-description"><p class="schema-description">Forces the semantic storage of the attribute through the #set parser function.
This is useful for #subobject models that want to expose one or more fields as regular #set properties.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteData</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final #set or #subobject value of the field. This
will also overwrite smw_overwriteOutput.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteDisplay</td>
           <td class="schema-description"><p class="schema-description">Overwrites only the display value of the current field
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteOutput</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final value of the field, used for both display and data set
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId">smw_overwriteOutputToLink</td>
           <td class="schema-description"><p class="schema-description">If true, this will create a link in display mode, using #formredlink if applicable
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyId"><strong>smw_property</strong></td>
           <td class="schema-description"><p class="schema-description">If smw_property is set to false the templates won't declare it as a semantic property.
Please note that the field can't be queried then.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
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
           <td class="schema-propertyId"><strong>type</strong></td>
           <td class="schema-description"><p class="schema-description">Defines the data-type.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-enum"><strong>Valid entries</strong>: string, number, boolean, array, object</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
   </tbody>
</table>
