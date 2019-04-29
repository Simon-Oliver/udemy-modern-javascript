const toDo = [
  {
    title: 'R Todo 1',
    completed: false
  },
  {
    title: 'Z Todo 2',
    complete: true
  },
  {
    title: 'C Todo 3',
    complete: false
  },
  {
    title: 'A Todo 4',
    complete: false
  }
];

const sortTodos = array => {
  return array.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });
};

const prettyLoger = (title = 'No Title', returnValue) => {
  console.log(
    title,
    '\n----------------------------------------------------\n',
    returnValue,
    '\n----------------------------------------------------\n'
  );
};

prettyLoger('Sort ToDo', sortTodos(toDo));

const findObject = (object, title = '') => {
  const index = object.findIndex((item, i) => {
    return item.title.toLowerCase() === title.toLowerCase();
  });

  return object[index] ? object[index] : 'Note not found';
};

prettyLoger('findTodo', findObject(toDo, 'todo 4'));

const removeTodo = (object, title) => {
  const index = object.findIndex((item, i) => {
    return item.title.toLowerCase() === title.toLowerCase();
  });
  if (index >= 0) {
    object.splice(index, 1);
  }

  return object;
};

prettyLoger('removeTodo', removeTodo(toDo, ' 4'));

const showTodo = todoArray => {
  const filteredArray = todoArray.filter(todo => todo.complete === false);
  return filteredArray;
};

prettyLoger('showTodo', showTodo(toDo));

// const todoSum = function(arr) {
//   const allTodo = `You have ${arr.length} item${
//     arr.length > 1 ? 's' : ''
//   } on your list`;
//   console.log(allTodo);
//   const firstItem = arr[0];
//   const secondLast = arr[arr.length - 2];
//   console.log(firstItem);
//   console.log(secondLast);
// };

// console.log(toDo.indexOf('Clean car'));

// toDo.splice(2, 1);
// toDo.push('New last Todo');
// toDo.shift();

// toDo.forEach((e, i) => console.log(`${i + 1}. ${e}`));

// todoSum(toDo);
