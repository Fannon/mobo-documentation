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
           <td class="schema-propertyName">recommended</td>
           <td class="schema-type"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array of fields that should be highlighted as recommended (complementary to mandatory)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showForm</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">This applies to forms referencing templates only: If an template (.wikitext) is extended into the form, this property will decide if it is shown in the edit form view.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">This applies to forms referencing templates only: If an template (.wikitext) is extended into the form, this property will decide if it is shown in the vie page view.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categories</td>
           <td class="schema-type"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array of additional categories the template should set.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_category</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">This property decides whether the template should tag the page as a category of the model-name.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categoryPostfix</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">wikitext to postfix on the category page</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categoryPrefix</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">wikitext to prefix on the category page</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_display</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue">table</td>
           <td class="schema-description">Defines the template output rendering mode, whether the template should use tables, ul, etc.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_postfix</td>
           <td class="schema-type">object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
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
           <td class="schema-propertyName">showForm</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Display postfix in form-view</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Display postfix in page-view</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">wikitext to postfix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prefix</td>
           <td class="schema-type">object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
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
           <td class="schema-propertyName">header</td>
           <td class="schema-type">number</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showForm</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Display prefix in form-view</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Display prefix in page-view</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-type">string</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobject</td>
           <td class="schema-type">boolean</td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, this models attributes will be created as subobjects. Useful if this model is used through multiple instances.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobjectExtend</td>
           <td class="schema-type">object</td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Contains a set (object) of additional #subobject properties</td>
       </tr>
   </tbody>
</table>
