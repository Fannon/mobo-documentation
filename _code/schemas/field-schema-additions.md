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
           <td class="schema-propertyName">deprecated</td>
           <td class="schema-description"><p class="schema-description">If true, the field will be deprecated. This means it will not be
displayed in forms, but the template will keep it in order to display old entries.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>form</strong></td>
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
           <td class="schema-propertyName"><strong>format</strong></td>
           <td class="schema-description"><p class="schema-description">Describes the semantic format (how to interpret the type).
E.g. 'email' or SMW specific datatypes like 'Temperature'
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-enum"><strong>Valid entries</strong>: date, date-time, url, email, tel, Page, page, Code, code, geographic coordinate, Geographic coordinate, Quantity, quantity, Record, record, Temperature, temperature</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">items</td>
           <td class="schema-description"><p class="schema-description">Some fields have multiple values (e.g. comma seperated).<br>
In this case the items property needs to be used.<br>
The items object then defines the actual data type, format and form
</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>title: Tags
items:
  type: string
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>sf_form</strong></td>
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
           <td class="schema-propertyName"><strong>showForm</strong></td>
           <td class="schema-description"><p class="schema-description">Whether to display this element in the form-edit view.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-description"><p class="schema-description">Whether to display this element in the page view.</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_arraymaptemplate</td>
           <td class="schema-description"><p class="schema-description">Name of the arraymap template to use. Field needs to be of type `array`.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Semantic_Forms_and_templates#arraymaptemplate target="_blank">Documentation</a></p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_drilldown</td>
           <td class="schema-description"><p class="schema-description">If the global settings `smw_semanticDrilldown` is enabled, fields
with smw_drilldown set to true will be filterable.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_forceSet</td>
           <td class="schema-description"><p class="schema-description">Forces the semantic storage of the attribute through the #set parser function.
This is useful for #subobject models that want to expose one or more fields as regular #set properties.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteData</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final #set or #subobject value of the field. This
will also overwrite smw_overwriteOutput.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteDisplay</td>
           <td class="schema-description"><p class="schema-description">Overwrites only the display value of the current field
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteOutput</td>
           <td class="schema-description"><p class="schema-description">Overwrites the final value of the field, used for both display and data set
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_overwriteOutputToLink</td>
           <td class="schema-description"><p class="schema-description">If true, this will create a link in display mode, using #formredlink if applicable
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>smw_property</strong></td>
           <td class="schema-description"><p class="schema-description">If smw_property is set to false the templates won't declare it as a semantic property.
Please note that the field can't be queried then.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: true</p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
   </tbody>
</table>
