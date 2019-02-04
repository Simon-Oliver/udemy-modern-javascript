const toDo = ['Walk the dog', 'Do washing', 'Clean car', 'Random Todo', 'Last todo'];

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

toDo.splice(2, 1);
toDo.push('New last Todo');
toDo.shift();

toDo.forEach((e, i) => console.log(`${i + 1}. ${e}`));

// todoSum(toDo);
