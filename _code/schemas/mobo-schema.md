<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Default</th>
           <th>Description</th>
           <th>Specific</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName"><strong>$abstract</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true this object is only used for inheritance and will not be itself.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>$extend</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">This references another mobo json file.
It will be included through inheritance, all existing attributes in the parent object will be overwritten.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$ignore</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, this file will be ignored completely.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$remove</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array, containing the IDs of all items/properties to remove from current object.
</td>
           <td class="schema-specific schema-specific-intermediary">intermediary</td>
       </tr>
       <tr>
           <td class="schema-propertyName">default</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>description</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Description of the field. Can be displayed as tooltip info
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">enum</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>items</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue">{}</td>
           <td class="schema-description">Lists all models that the form uses.<br>
Those are included by `$extend`.<br>
If multiple instance templates need to be created, use another items hierachy.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>itemsOrder</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array that sets the display order of all (including inherited) properties.<br>
Unmentioned fields will be appended at the bottom in their original order.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">maxItems</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">maxLength</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">maximum</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">minItems</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">minLength</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">minimum</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">note</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Notes can be strings or objects and their content will be ignored
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">pattern</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">required</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array containing the IDs of all required fields
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>title</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Human readable title.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName">todo</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">If TODO notes are placed here, mobo can print them in the CLI (If the corresponding global setting is enabled)
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
       <tr>
           <td class="schema-propertyName"><strong>type</strong></td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Defines the data-type.
</td>
           <td class="schema-specific schema-specific-domain">domain</td>
       </tr>
   </tbody>
</table>
