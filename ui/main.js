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
    
//submit name
    
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
        
        //create req object
    var request= new XMLHttpRequest();
    //capture response and store it in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                //capture a list of names and render it as list
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for(var i=0 ; i< names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                    }
                    var ul = document.getElementById('namelist');
                    ul.innerHTML = list;
                }
                
            }
        
        //not done yet
        
    };
    
    //make the req
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://mayankgera95.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};
        
        
