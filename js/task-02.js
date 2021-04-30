const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientRef = document.querySelector('#ingredients');
  const listItems = ingredients.map(ingredient => {
      const liItem = document.createElement('li');
      liItem.textContent = ingredient;
      return liItem;

  })

  ingredientRef.append(...listItems);
  console.log(listItems);