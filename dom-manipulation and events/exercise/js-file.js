// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.style.color = 'red';
content.textContent = 'Hey I\'m red!';
container.appendChild(content);

// Creates blue H3
const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue h3";
container.appendChild(blueH3);

const extraDiv = document.createElement('div');
extraDiv.style.backgroundColor = 'pink';
extraDiv.style.border = '1px solid black';
container.appendChild(extraDiv);

const extraH1 = document.createElement('h1');
extraH1.textContent = "I'm in a div";
extraDiv.appendChild(extraH1);

const extraP = document.createElement('p');
extraP.textContent = "ME TOO!";
extraDiv.appendChild(extraP);


