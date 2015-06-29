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
           <td class="schema-propertyName"><strong>$abstract</strong></td>
           <td class="schema-description"><p class="schema-description">If true this object is only used for inheritance and will not be itself.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>$extend</strong></td>
           <td class="schema-description"><p class="schema-description">This references another mobo json file.
It will be included through inheritance, all existing attributes in the parent object will be overwritten.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">$ignore</td>
           <td class="schema-description"><p class="schema-description">If true, this file will be ignored completely.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-default"><strong>Default</strong>: false</p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">$remove</td>
           <td class="schema-description"><p class="schema-description">Array, containing the IDs of all items/properties to remove from current object.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span></p></td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">default</td>
           <td class="schema-description"><p class="schema-description">The default value of the field.
</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>description</strong></td>
           <td class="schema-description"><p class="schema-description">Description of the field. Can be displayed as tooltip info
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">enum</td>
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
           <td class="schema-propertyName"><strong>items</strong></td>
           <td class="schema-description"><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></p><p class="schema-default"><strong>Default</strong>: {}</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>itemsOrder</strong></td>
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
           <td class="schema-propertyName"><i class="fade">maxItems</i></td>
           <td class="schema-description"><p class="schema-description">How many instances are allowed at most.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">maxLength</i></td>
           <td class="schema-description"><p class="schema-description">The maximum length of a string
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">maximum</i></td>
           <td class="schema-description"><p class="schema-description">The maximum value of a number
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">minItems</i></td>
           <td class="schema-description"><p class="schema-description">How many instances are required at least.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">minLength</i></td>
           <td class="schema-description"><p class="schema-description">The minimum length of a string
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">minimum</i></td>
           <td class="schema-description"><p class="schema-description">The minimum value of a number
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-number">number</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">pattern</i></td>
           <td class="schema-description"><p class="schema-description">Regular Expression (Regex) pattern<br>
This is currently not supported by Semantic Forms.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-unsupported"><strong>Unsupported</strong>: This property is currently unsupported by the end-system.</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">required</td>
           <td class="schema-description"><p class="schema-description">Array containing the IDs of all required fields
</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>title</strong></td>
           <td class="schema-description"><p class="schema-description">Human readable title.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">todo</td>
           <td class="schema-description"><p class="schema-description">If TODO notes are placed here, mobo can print them in the CLI (If the corresponding global setting is enabled)
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>type</strong></td>
           <td class="schema-description"><p class="schema-description">Defines the data-type.
</p><p class="schema-default"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-enum"><strong>Valid entries</strong>: string, number, boolean, array, object</p></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
   </tbody>
</table>
