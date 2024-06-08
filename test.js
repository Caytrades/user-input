let userName;

document.getElementById("submit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = 
    "Hello "+ userName + "<br>" + "How can I help you today?" ;
    console.log(userName);
}