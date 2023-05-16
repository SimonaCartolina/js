console.log('Serie di numeri')

const ulElement= document.querySelector('ul');

for (let i=0; 0<10; i= i + 1){

    const li= document.createElement('li');

    li.append('This is number: ' + i);
    
    ulElement.append(li);
}