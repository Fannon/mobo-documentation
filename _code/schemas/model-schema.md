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
           <td class="schema-propertyName">recommended<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Array of fields that should be highlighted as recommended (complementary to mandatory)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showForm<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true the template/model will be hidden in the form view. This will usually be declared in the forms by adding this after the model $extend.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">If true the template/model will be hidden in the page view. This will usually be declared in the forms by adding this after the model $extend.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_append<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">Adds a postfix wikitext to forms and models<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">wikitext to postfix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendCategory<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">wikitext to postfix on the category page</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendForm<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">Postfixes wikitext only to forms (edit-view). Can either be a string or an object for more advanced features (auto-generate headers, inject templates or add arbitrary wikitext)<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template<span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendPage<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">Postfixes wikitext only to templates (page-view). Can either be a string or an object for more advanced features (auto-generate headers, inject templates or add arbitrary wikitext)<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template<span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categories<span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">platform</td>
           <td class="schema-description">Array of additional categories the template should set.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_category<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-specific">platform</td>
           <td class="schema-description">This property decides whether the template should tag the page as a category of the model-name.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_display<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"table"</td>
           <td class="schema-specific">platform</td>
           <td class="schema-description">Defines the template output rendering mode, whether the template should use tables, ul, etc.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prepend<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">Prefixes wikitext to both forms and templates. Can either be a string or an object for more advanced features (auto-generate headers, inject templates or add arbitrary wikitext)<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependCategory<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">wikitext to prefix on the category page</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependForm<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">Prefixes wikitext only to forms (edit-view). Can either be a string or an object for more advanced features (auto-generate headers, inject templates or add arbitrary wikitext)<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template<span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependPage<span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">implementation</td>
           <td class="schema-description">Prefixes wikitext only to templates (page-view). Can either be a string or an object for more advanced features (auto-generate headers, inject templates or add arbitrary wikitext)<br/><table class="schema-table" style="font-size: 0.75em; word-wrap: break-word;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Specific</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header<span class="schema-type schema-type-number">number</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template<span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext<span class="schema-type schema-type-string">string</span></td>
           <td class="schema-specific">domain</td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobject<span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-specific">platform</td>
           <td class="schema-description">If true, this models attributes will be created as subobjects. Useful if this model is used through multiple instances.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobjectExtend<span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-specific">platform</td>
           <td class="schema-description">Contains a set (object) of additional #subobject properties</td>
       </tr>
   </tbody>
</table>
