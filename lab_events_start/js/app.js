document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick)
});

const handleFormSubmit = function(event){
  event.preventDefault();
  console.log(event);
  // create li for title
  const listItemTitle = document.createElement('li');
  listItemTitle.textContent = event.target.title.value;
  // create li for author
  const listItemAuthor = document.createElement('li');
  listItemAuthor.textContent = event.target.author.value;

  const listItemCategory = document.createElement('li');
  listItemCategory.textContent = event.target.category.value;

  const list = document.querySelector('#reading-list');
  list.appendChild(listItemTitle);
  list.appendChild(listItemAuthor);
  list.appendChild(listItemCategory);

  document.querySelector('#new-item-form').reset()
};

const handleButtonClick = function(event){
  const allLi = document.querySelectorAll('li')
  allLi.forEach((li) => {
    li.remove();
  });
};
