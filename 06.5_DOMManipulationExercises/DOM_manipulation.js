
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

//exercise 3 

const exercise3 = document.createElement('div');
exercise3.classList.add('exercise3');
exercise3.style['border'] = "3px solid black";
exercise3.style['background-color'] = 'pink';
// exercise3.textContent = "test"
container.appendChild(exercise3);

//part a (add another h1)

const exercise3a = document.createElement('h1');
exercise3a.textContent = "I'm a div";
exercise3.appendChild(exercise3a);

//part b 
const exercise3b = document.createElement('p');
exercise3b.textContent = "ME TOO!";
exercise3.appendChild(exercise3b);
