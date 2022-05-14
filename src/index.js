const userStack = {
  lang: 'JS',
  framework: 'React'
};

const user = {
  name: 'Evgeniy',
  age: 43,
  ...userStack
}

console.log(user);
