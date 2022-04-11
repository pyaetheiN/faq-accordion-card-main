const cardHeader = document.querySelectorAll('.card__header');

// ===== Method (1) ===== \\
// cardHeader.forEach(n => n.addEventListener('click', () => {
//   n.classList.toggle('active');

//   const cardDesc = n.nextElementSibling;

//   if (n.classList.contains('active')) {
//     cardDesc.classList.add('active');
//   } else {
//     cardDesc.classList.remove('active');
//   }
// }))


// ===== Method (2) ===== \\
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

// remarks on Method (2)
// - if any cardQues is clicked and it contains '.card__ques close' , the class name will be changed to '.card__ques'
// - the reason behind choosing cardQues is because it's a parent container 