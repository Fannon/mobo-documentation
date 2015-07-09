<table class="schema-table" style="font-size: 0.75em;">
   <thead>
       <tr>
           <th>ID</th>
           <th>Description</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="schema-propertyId">items</td>
           <td class="schema-description"><p class="schema-description">Declares all models and templates that the form uses and imports them through `$extend`.<br>
To create multiple instance templates, add another items hierachy (see example).
</p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>items:
# Import a template and show it only in the page-view
- $extend: /smw_template/SomeTemplate
  showForm: false

# Include a single instance model
- $extend: /model/SingleInstanceModel

# Include a multiple instance model
- items:
    $extend: /model/MultipleInstanceModel
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">naming</td>
           <td class="schema-description"><p class="schema-description">Provides naming conventions / guideline. Will appear on the form page itself.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-string">string</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-domain">domain</span></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>naming: 'lastname, firstname'
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_forminfo</td>
           <td class="schema-description"><p class="schema-description">Object, containing all SemanticForms info parameters.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#.27info.27_tag target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_forminfo:
  create title: Create a new location
  edit title: Edit a location
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_forminput</td>
           <td class="schema-description"><p class="schema-description">Object, containing SemanticForms #forminput options
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-object">object</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-link"><strong>External Link</strong>: <a href="https://www.mediawiki.org/wiki/Extension:Semantic_Forms/Defining_forms#The_.23forminput_function target="_blank">Documentation</a></p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>smw_forminput:
  autocomplete on category: SomeCategory
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_freetext</td>
           <td class="schema-description"><p class="schema-description">Decides whether the freetext textarea will be displayed below the form.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: true</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_freetext: false
</code></pre></td>
       </tr>
       <tr>
           <td class="schema-propertyId">sf_summary</td>
           <td class="schema-description"><p class="schema-description">Decides whether the summary field will be displayed below the form.
</p><p class="schema-types"><strong>Type(s)</strong>: <span class="schema-type schema-type-boolean">boolean</span></p><p class="schema-specifics"><strong>Specific to</strong>: <span class="schema-specific schema-specific-platform">platform</span></p><p class="schema-default"><strong>Default</strong>: false</p><p class="schema-example-header"><strong>Example</strong>:</p><pre class="schema-example"><code>sf_summary: false
</code></pre></td>
       </tr>
   </tbody>
</table>
