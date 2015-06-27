<table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Default</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">$abstract<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true this object is only used for inheritance and will not be created itself.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$extend<span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">This references another mobo json file. It will be included through inheritance, all existing attributes in the parent object will be overwritten.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$ignore<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true this file will be ignored.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$remove<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Array, containing the IDs of all items/properties to remove from the current object.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">description</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Description of the field. Can be displayed as tooltip info</td>
       </tr>
       <tr>
           <td class="schema-propertyName">format</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Describe the semantic format, how to interpret the type. E.g. 'email' or SMW specific datatypes like 'Temperature'<p class="schema-enum"><strong>Valid entries</strong>: date, date-time, url, email, tel, Page, page, Code, code, geographic coordinate, Geographic coordinate, Quantity, quantity, Record, record, Temperature, temperature</p></td>
       </tr>
       <tr>
           <td class="schema-propertyName">itemsOrder<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Array that sets the display order of all (including inherited) properties. Unmentioned fields will be appended at the bottom in their original order.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">note<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Notes can be strings or objects and their content will be ignored</td>
       </tr>
       <tr>
           <td class="schema-propertyName">title</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Human readable title of the field</td>
       </tr>
       <tr>
           <td class="schema-propertyName">todo<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If todo notes are placed here, mobo can output them (this is a setting)</td>
       </tr>
   </tbody>
</table>
