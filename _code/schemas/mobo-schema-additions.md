<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>default</th>
           <th>description</th>
           <th></th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName"><strong>$abstract</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true this object is only used for inheritance and will not be itself.
</td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>$extend</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">This references another mobo json file.
It will be included through inheritance, all existing attributes in the parent object will be overwritten.
</td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">$ignore</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, this file will be ignored completely.
</td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">$remove</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array, containing the IDs of all items/properties to remove from current object.
</td>
           <td class="schema-specific schema-specific-intermediary" title="intermediary specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">default</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">The default value of the field.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>description</strong></td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Description of the field. Can be displayed as tooltip info
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">enum</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">List of all possible values.<br>
Defaults to a dropdown widget.
<pre class="schema-example"><code>type: string
enum:
  - red
  - green
  - blue
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>items</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>itemsOrder</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">In case that fields have been inherited, they might not end up in the correct order.
The itemsOrder array lists the order of the fields.
Every field that is not listed will be appended at the bottom, in their regular order.
<pre class="schema-example"><code>itemsOrder:
  - brand
  - modelName
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">maxItems</i></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">How many instances are allowed at most.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">maxLength</i></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">The maximum length of a string
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">maximum</i></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">The maximum value of a number
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">minItems</i></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">How many instances are required at least.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">minLength</i></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">The minimum length of a string
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">minimum</i></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">The minimum value of a number
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><i class="fade">pattern</i></td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Regular Expression (Regex) pattern<br>
This is currently not supported by Semantic Forms.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">required</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array containing the IDs of all required fields
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>title</strong></td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Human readable title.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">todo</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">If TODO notes are placed here, mobo can print them in the CLI (If the corresponding global setting is enabled)
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>type</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Defines the data-type.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
   </tbody>
</table>
