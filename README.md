# Tooltip

This library for tooltips.

After installation, you can select an HTML element, for example, <pre> <span class="pl-kos"><</span><span class="pl-smi">button</span><span class="pl-kos">></span> </pre>, and specify data-tooltip for it.

<pre tabindex="0"> 
<span class="pl-kos"><</span> <span class="pl-smi">button data-tooltip</span><span class="pl-c1">=</span><span class="pl-k">"This important button"</span><span class="pl-kos">></span><span class="pl-k"> Click me</span>  <span class="pl-kos"><</span><span class="pl-kos">/</span><span class="pl-smi">button</span><span class="pl-kos">></span>
</pre>

And include Tooltip / element in your code.

Full example:

<pre tabindex="0">
<span class="pl-k">import</span><span class="pl-kos">{</span> <span class="pl-smi">Tooltip</span> <span class="pl-kos">}</span><span class="pl-k"> from </span><span class='pl-s'>'Tooltip'</span><span class="pl-kos">;</span>

//other import

<span class="pl-k">export</span> <span class="pl-k">function</span> <span class="pl-smi">App</span><span class="pl-kos">(){</span>

  //your code

  <span class="pl-kos"><</span><span class="pl-ent">button data-tooltip<span class="pl-c1">=</span><span class='pl-s'>"This important button"</span><span class="pl-kos">></span> <span class="pl-c1">Click me </span><span class="pl-kos"><</span><span class="pl-kos">/</span><span class="pl-ent">button</span><span class="pl-kos">></span>
  <span><</span><span>Tooltip variant<span class="pl-c1">=</span><span class='pl-s'>"black"</span><span class="pl-kos">/</span><span class="pl-kos">></span>

  // your code
} 
</pre>

Tooltips have 3 display options:

  
  1. ### variant='light'

      background color  - light gray;
      color text -  black;

  2. ### variant='black'

      background color  - dark gray;
      color text -  white;

  3. Default option:  

      background color = orange,
      color text = blue

