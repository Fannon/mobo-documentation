<table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Type</th>
           <th>Default</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">$extend</td>
           <td class="schema-type">string,array</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">This references another mobo json file. It will be included through inheritance, all existing attributes in the parent object will be overwritten.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$filepath</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">For internal use only! This stores the complete relative path of the .json file. Used for improved debugging messages</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$meta</td>
           <td class="schema-type">object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Internal metadata</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$path</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">For internal use only! This stores the path of the object, as used in "$extend" or "format". Used for improved debugging messages</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$reference</td>
           <td class="schema-type">object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">For internal use only! After inheritance is applied, $extend will be replaced through reference. (For keeping info on the heritage)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">$remove</td>
           <td class="schema-type">array</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array, containing all properties to remove from the current object</td>
       </tr>
       <tr>
           <td class="schema-propertyName">abstract</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true this object is only used for inheritance and will not be created itself.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">deprecated</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, the field will be deprecated. This means it will not be displayed in forms, but the template will keep it in order to display old entries.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">description</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Description of the field. Can be displayed as tooltip info</td>
       </tr>
       <tr>
           <td class="schema-propertyName">format</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Contains the JSON format. This can alternatively be a reference to a mobo file, like $extend</td>
       </tr>
       <tr>
           <td class="schema-propertyName">id</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Usually auto generated id, consisting of the filename</td>
       </tr>
       <tr>
           <td class="schema-propertyName">ignore</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true this file will be ignored.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">note</td>
           <td class="schema-type">string,object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Notes can be strings or objects and their content will be ignored</td>
       </tr>
       <tr>
           <td class="schema-propertyName">properties</td>
           <td class="schema-type">object,array</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Mobo supports to (optionally) use the array notation instead of the object notation for the property attribute.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">propertyOrder</td>
           <td class="schema-type">array</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array that sets the display order of all (including inherited) properties. Unmentioned fields will be appended at the bottom in their original order.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">title</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Human readable title of the field</td>
       </tr>
       <tr>
           <td class="schema-propertyName">todo</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">If todo notes are placed here, mobo can output them (this is a setting)</td>
       </tr>
   </tbody>
</table>
