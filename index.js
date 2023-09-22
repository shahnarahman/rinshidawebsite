function desplay(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var subject=document.getElementById("subject");
    var message=document.getElementById("message");
    var correct_way=/^[A-Za-z]/;
if(name.value==""){
        alert("must enter the name");
       
        return false;
    }
    if(name.value.length<3){
        alert("invalid name");
       
        return false;
    }
    if(name.value.length>20){
        alert("invalid name");
       
        return false;
    }
    if(name.value.match(correct_way))
        true;
    else{
       alert("invalid name");
    
        return false;
    }
    if(email.value==""){
        alert("Must enter the email");
        
        return false;
    } 
    if(email.value.indexOf ('@')<=0){
        alert("invalid email id");
        
         return false;
     }
      
     if(email.value.charAt (email.value.length-4)!='.'){
        alert("invalid email id");
       
        return false;
    } 
if(subject.value==""){
    alert("Must include the subject");
   
    return false;
}

if(message.value==""){
    alert("Must include the message");
   
    return false;
}
return true;
}