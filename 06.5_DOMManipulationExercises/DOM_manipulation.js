
const container = document.querySelector('#container');

const exercise1 = document.createElement('p');
exercise1.classList.add('exercise1');
exercise1.textContent = "Hey I'm red!";
exercise1.style['color'] = "red";
container.appendChild(exercise1);


const exercise2 = document.createElement('h3');
exercise2.textContent = "I'm a blue h3!";
exercise2.style['color'] = 'blue';
container.appendChild(exercise2);