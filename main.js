var completeIMG = ' done icon.png';

document.getElementById('add').addEventListener('click', function () {
	var value = document.getElementById('item').value;
	if (value)  addItemTodo(value);
		document.getElementById('item').value = ' '; //reseting the value after finished one
});

function completeItem (){
	var item = this.parentNode.parentNode ; 
	var parent = this.parentNode ; 
	var id = parent.id;
	
	var target; 
	if (id==='todo') {
		target = document.getElementById('completed');
	} else {
		target = document.getElementById('todo');
	}
	
	parent.removeChild(item);
	target.insertBefore(item, target.childNodes [0] );
}

function addItemTodo(text) {
	var list = document.getElementById('todo');
	
	var item = document.createElement('li');
	item.innerText = text;
	
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');
	
	var complete= document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completeIMG;
	
	//adding click event
	complete.addEventListener('click', completeItem );
	
	
	
	
	buttons.appendChild(complete);
	item.appendChild(buttons);
	
	list.insertBefore(item, list.childNodes[0]);  // adding last item in the first row
}