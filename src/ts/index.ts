import { foo, getArgs } from './foo';

const h1 = document.createElement('h1');
h1.textContent = foo();
document.body.appendChild(h1);
console.log(getArgs('Alex', 24, true));