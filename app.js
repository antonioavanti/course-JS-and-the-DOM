document.addEventListener('click', function(){
	const mainHeading = document.querySelector('h1');


	mainHeading.setAttribute("style","background-color: red;");
})

/*const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
*/
	mainHeading.style.backgroundColor = 'red';


