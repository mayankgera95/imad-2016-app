console.log('Loaded!');
//alert

//change text
var element = document.getElementById('main-text');
element.innerHTML='New Value';

//move image
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
	marginLeft = marginLeft + 1;
	img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
	var interval =setInterval(moveRight ,50);
	
};

//button counter
var button= document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //make a req to counter endpoint
    
    //capture response and store it in variable
    
    //render the variable in a span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
