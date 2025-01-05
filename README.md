# Tooltip

This library for tooltips.

After installation, you can select an HTML element, for example,  <button>, and specify data-tooltip for it.

<button data-tooltip="This important button"> Click me </button>

And include <Tooltip /> element in your code.

Full example:

import  { Tooltip } from 'Tooltip';
//other import

export function App(){

  //your code

  <button data-tooltip="This important button"> Click me </button>
  <Tooltip variant="black"/>

  // your code
} 

Tooltips have 3 display options:

  
  1. ###variant='light'

      background color  - light gray;
      color text -  black;

  2. ###variant='black'

      background color  - dark gray;
      color text -  white;

  3. Default option:  

      background color = orange,
      color text = blue

