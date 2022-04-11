# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SCSS
- Vanilla JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

 - how to create an accordion using JavaScript
 - better understanding of `position` property on moving images at will

```js
const cardQues = document.querySelectorAll('.card__ques');

function linkAction() {
  // assigned at the beginning of the function
  let itemClass = this.parentNode.className
  
  for (i = 0; i < cardQues.length; i++) {
    cardQues[i].className = 'card__ques close';
  }

  // if cardHeader(childNode) has 'close' inside cardQues(parentNode)
  if (itemClass === 'card__ques close') {
    this.parentNode.className = 'card__ques open';
  } 
}

cardHeader.forEach((el) => {
  el.addEventListener('click', linkAction);
});
```

### Continued development

 - will go for mobile first approach next time

### Useful resources

- [Bedimcode](https://www.youtube.com/watch?v=27JtRAI3QO8) - This really helped me on making an accordion.

## Author

- Frontend Mentor - [@pyaetheiN](https://www.frontendmentor.io/profile/pyaetheiN)
- Twitter - [@pt_boyyy](https://www.twitter.com/pt_boyyy)

## Acknowledgments

- Bedimcode (https://www.youtube.com/channel/UCgkDs77BoEhMIgRUB4MKrtQ)
