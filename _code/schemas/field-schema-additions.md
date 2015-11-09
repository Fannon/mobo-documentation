<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">deprecated</td>
           <td class="schema-description"><p class="schema-description">If true, the field will be marked as deprecated.
It will not be displayed in forms, but the template will keep it in order to display old entries.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>deprecated: true
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
           <td class="schema-propertyId">items</td>
           <td class="schema-description"><p class="schema-description">Some fields have multiple values (e.g. comma seperated).<br>
In this case the items property needs to be used.<br>
The items object then defines the actual data type, format and form
</p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>title: Tags
items:
  type: string
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">noEdit</td>
           <td class="schema-description"><p class="schema-description">If true, the field will not be available for editing, but still included into the template
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>noEdit: true
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
           <td class="schema-propertyId">sf_overwrite</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final wikitext/HTML that is rendered in Semantic Forms Edit mode
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p></td>
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
           <td class="schema-propertyId">smw_appendFormField</td>
           <td class="schema-description"><p class="schema-description">Adds wikitext after the form input field. This is only displayed when the form is in edit mode.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-implementation">implementation</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_appendFormField: ' [[:Category:Location|...]]'
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
   </tbody>
</table>
