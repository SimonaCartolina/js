

const ulElement= document.querySelector('ul');

for (let i=0; i<10; i= i + 1){

    const li= document.createElement('li');

    li.append('This is number: ' + i);
    
    ulElement.appendChild(li);
}