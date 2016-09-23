console.log('Loaded!');
//alert

//change text


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

button.onclick = function(){
    
    //create req object
    var request= new XMLHttpRequest();
    //capture response and store it in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        //not done yet
        
    };
    
    //make the req
    request.open('GET',"http://mayankgera95.imad.hasura-app.io/counter",true);
    request.send(null);
    
    
};
