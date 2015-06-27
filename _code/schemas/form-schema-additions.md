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
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Lists all models that the form uses.<br>
Those are included by `$extend`.<br>
If multiple instance templates need to be created, use another items hierachy.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">naming</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-string">string</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Provides naming conventions / guideline. Will appear on the form page itself.
</td>
           <td class="schema-specific schema-specific-domain" title="domain specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_forminfo</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Object, containing all SemanticForms info parameters.
<p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27info.27_tag target="_blank">Documentation</a></p><pre class="schema-example"><code>sf_forminfo:
  create title: Create a new location
  edit title: Edit a location
</code></pre></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_forminput</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-object">object</span></td>
           <td class="schema-defaultValue"></td>
           <td class="schema-description">Object, containing SemanticForms #forminput options
<p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#The_.23forminput_function target="_blank">Documentation</a></p></td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_freetext</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">true</td>
           <td class="schema-description">Decides whether the freetext textarea will be displayed below the form.
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
       <tr>
           <td class="schema-propertyName">sf_summary</td>
           <td class="schema-propertyType"><span class="schema-type schema-type-boolean">boolean</span></td>
           <td class="schema-defaultValue">false</td>
           <td class="schema-description">Decides whether the summary field will be displayed below the form.
</td>
           <td class="schema-specific schema-specific-platform" title="platform specific"></td>
       </tr>
   </tbody>
</table>
