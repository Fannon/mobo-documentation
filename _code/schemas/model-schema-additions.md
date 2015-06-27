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
           <td class="schema-propertyName">items</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">The items property contains an array of all fields that are used by the model.
Fields usually should be implemented using $extend, so every field can have its own file and inheritance.
It is possible to overwrite properties from the field directly in the mode.
<pre class="schema-example"><code>items:
- $extend: /field/brand
  title: Overwritten brand title
- $extend: /field/modelName
</code></pre></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">recommended</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array of fields that should be highlighted as recommended (complementary to mandatory)
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">showForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">If true the template/model will be hidden in the form view.
This will usually be declared in the forms by adding this after the model $extend.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">showPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">If true the template/model will be hidden in the page view.
This will usually be declared in the forms by adding this after the model $extend.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_append</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Adds a postfix wikitext to forms and models.
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">Name of the template to inject.</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">Wikitext to append.</td>
       </tr>
   </tbody>
</table>
<pre class="schema-example"><code>smw_append:
  header: 1
  wikitext: |
    Some appended wikitext
    Will be inserted after the H1 header
</code></pre><pre class="schema-example"><code>smw_append: 'Some prepended wikitext'
</code></pre></td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendCategory</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Wikitext to postfix on the category page
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Appends wikitext only to forms (edit-view).
Can either be a string or an object for more advanced features.
(auto-generate headers, inject templates or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_appendPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Appends wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_categories</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Array of additional categories the template should set.
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_category</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Whether the template should tag the page as a category of the model-name.
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_display</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue">"table"</td>
           <td class="schema-description">Defines the template output rendering mode, whether the template should use tables, ul, etc.<br>
The rendering mode must be available in  /mobo_template/template.wikitext!
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prepend</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Prefixes wikitext to both forms and templates. Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependCategory</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Wikitext to prepend on the category page
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependForm</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Prefixes wikitext only to forms (edit-view). Can either be a string
or an object for more advanced features (auto-generate headers, inject templates
or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_prependPage</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Prefixes wikitext only to templates (page-view). Can either be a
string or an object for more advanced features (auto-generate headers, inject
templates or add arbitrary wikitext)
<br/><table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>type</th>
           <th>description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyName">header</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-number">number</span></td>
           <td class="schema-description">Inserts auto generated header of given hierachy (1-6)</td>
       </tr>
       <tr>
           <td class="schema-propertyName">template</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-array">array</span><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">name of a template to inject. Must exist</td>
       </tr>
       <tr>
           <td class="schema-propertyName">wikitext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-description">wikitext to prefix</td>
       </tr>
   </tbody>
</table>
</td>
           <td class="schema-specific schema-specific-implementation" title="implementation specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobject</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">If true, this models attributes will be created as subobjects.
Useful if this model is used through multiple instances.
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">smw_subobjectExtend</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Contains a set (object) of additional #subobject properties
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">type</td>
           <td class="schema-propertyType"></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description"></td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
   </tbody>
</table>
