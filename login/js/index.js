var signupName=document.getElementById("signupName");
var signupEmail=document.getElementById("signupEmail");
var signupPassword=document.getElementById("signupPassword");
var signinEmail=document.getElementById("signinEmail");
var signinPassword=document.getElementById("signinPassword");
var empty=document.getElementById("empty");
var exsist=document.getElementById("exsist");
var error=document.getElementById("error");
var sucess =document.getElementById("sucess");

var btnsingUp=document.getElementById("btnsingUp");
var btnsignIn=document.getElementById("btnsignIn");
var btnlogout=document.getElementById("btnlogout");
var signupArray;





if(localStorage.getItem("signupArray")){
    signupArray=JSON.parse(localStorage.getItem("signupArray"));

}
else{
    signupArray=[]
}
function emptySignup(){
    if(signupName.value == ""||signupEmail.value==""||signupPassword.value ==""){
        return false
    }
    else{
        return true;
    }
}
//exsiting email
function existEmail(){
    for(var i=0;i<signupArray.length;i++){
        if(signupArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()){
            console.log(signupArray[i].email.toLowerCase());
          
            return false;
        }
       
    }
    return true;
}

function signUp(){
    if(emptySignup() == false){
     empty.innerHTML='<p class="text-danger">All inputs is required</p>';
    return ;
    }
  
// if(valiationEmail() == false){
//    // empty.innerHTML='<p class="text-danger">Invalid email</p>';
//     return;
// }

  
 var signup={
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value
    };
    
    
if(signupArray.length==0){
    signupArray.push(signup);
    localStorage.setItem("signupArray",JSON.stringify(signupArray));
   
    empty.innerHTML='<p class="text-success">sucess</p>';
   
    return true;
  }

  if(existEmail() == false){
    empty.innerHTML='<p class="text-danger">Email already exsist</p>';
  return; 
} 


else{
   
        signupArray.push(signup);
        localStorage.setItem("signupArray",JSON.stringify(signupArray));
        signupEmail.value="";
        signupName.value="";
        signupPassword.value="";
        empty.innerHTML='<p class="text-success">sucess</p>';
      //  window.location="sign.html";
    }
   
}
//validation
// var regexEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// function valiationEmail(){
// if(!(regexEmail.test(signupEmail.value))){
//      empty.innerHTML='<p class="text-danger">Invalid Email</p>';
//     return false;
// }
// else{
   
//     return true;
// // }}
// signupEmail.addEventListener('input',function(){
//     valiationEmail();
// });


if(btnsingUp ){
    btnsingUp.addEventListener('click',function(){
        console.log("tmam");
        signUp();
     
       
    });
   
}

/////////////////////////////////////////////////////////////////////////////////////////
//-------------------login----------------
function LoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (LoginEmpty() == false) {
        error.innerHTML = '<p class="text-danger">All inputs is required</p>';
        return ;
    }
    var password=signinPassword.value;
    var email=signinEmail.value;
    for(var i=0;i<signupArray.length;i++){
        if((signupArray[i].email == email)&&(signupArray[i].password == password)){
            error.innerHTML = '';
          
                localStorage.setItem('User',JSON.stringify(signupArray[i].name) )
                error.innerHTML='<p class="text-success">Login success</p>';
                window.location.href="home.html";
             
                return true;
            //sucess email
           
        }
     
    }
    
        error.innerHTML='<p class="text-danger">incorrect email or password</p>';
        return false;
    
}

if(btnsignIn){
    btnsignIn.addEventListener('click',function(){
        login();
    });
}
// //////////////////////////////////////////////////
///logout

var username = JSON.parse(localStorage.getItem('User'));

if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username;
}
function logout(){
    
    localStorage.removeItem("User");
    setTimeout(() => {
        window.location.href="sign.html";
    }, 1000);
 
}

if(btnlogout){
   
    btnlogout.addEventListener('click',function(){
        window.location.href="sign.html";
      
      
       logout();
       
     
      
    });

}