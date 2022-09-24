---
layout: ../layouts/indexLayout.astro
---

## Html

```html[class="line-numbers"][data-line="9-15"]
<!DOCTYPE html>
<title>Title</title>

<style>
  body {
    width: 500px;
  }
</style>

<script type="application/javascript">
  function $init() {
    return true;
  }
</script>

<body>
  <p checked class="title" id="title">Title</p>
  <!-- here goes the rest of the page -->
</body>
```

## Css

```css[class="line-numbers"]
@font-face {
  font-family: Chunkfive;
  src: url('Chunkfive.otf');
}

body,
.usertext {
  color: #f0f0f0;
  background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^='http']::after {
    content: attr(href);
  }
}
```

---

## JavaScript

```js[class="line-numbers"]
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

---

## TypeScript

```ts[class="line-numbers"][data-line="9-15"]
import fs from 'fs';

class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}

module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}

declare magicNumber number;

myArray.forEach(() => { }); // fat arrow syntax
```

---

## Jsx

```jsx[class="line-numbers"]
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

---

## Scss

```scss[class="line-numbers"]
@import 'compass/reset';

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
  max-width: 980px;
}

// mixins with parameters
@mixin button($color: green) {
  @if ($color == green) {
    background-color: #008000;
  } @else if ($color == red) {
    background-color: #b22222;
  }
}

button {
  @include button(red);
}

div,
.navbar,
#header,
input[type='input'] {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  width: auto;
  margin: 0 auto;
  display: block;
}

.row-12 > [class*='spans'] {
  border-left: 1px solid #b5c583;
}

// nested definitions
ul {
  width: 100%;
  padding: {
    left: 5px;
    right: 5px;
  }
  li {
    float: left;
    margin-right: 10px;
    .home {
      background: url('http://placehold.it/20') scroll no-repeat 0 0;
    }
  }
}

.banner {
  @extend .container;
}

a {
  color: $colorGreen;
  &:hover {
    color: $colorGreenDark;
  }
  &:visited {
    color: #c458cb;
  }
}

@for $i from 1 through 5 {
  .span#{$i} {
    width: 20px * $i;
  }
}

@mixin mobile {
  @media screen and (max-width: 600px) {
    @content;
  }
}
```

---

[See all languages](/all)
