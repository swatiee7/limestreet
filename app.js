 
 
 /* injecting header and footer dynamically */
$(function(){
   $("#header").load("header.html");                 
   $("#footer").load("footer.html"); 
   $("href").load("style1.css");
 });
 


 /*code for login validation */

function myLogin (){                                     
    var em = document.getElementById("eml").value;
    var ps =  document.getElementById("psd").value;

    
     if(em === "admin@admin.com" && ps == 123456){
      alert("Login Successful");
      window.open("index.html");
     }

else{
   alert("Invalid email or password")
} 
 }  



 /*code for add to cart button */                                                   
  
function myFun(){                                 
   alert("Go to cart");
}
    




 

  /* code for cart +  and  - button */

var addBtn = document.querySelector("#addition");             
var minusBtn = document.querySelector("#minus");
var res = document.querySelector("#result");

 addBtn.addEventListener("click", () => 
 document.getElementById("result").value++);


 minus.addEventListener("click", () => 
 document.getElementById("result").value--);

 
       



  /* Add to cart button changes to go to cart code */


 function myImage(){
   const btn = document.getElementById('ad-to-crt-btn');

   btn.addEventListener('click', function handleClick() {
     btn.textContent = 'Go to cart';

   });
   
   
  
 }


