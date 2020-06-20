// question #1:
// var first=prompt("Enter your first name:")
// var sec=prompt("Enter your last name:")
// var full=first+" "+sec
// alert("Hello"+" "+full);


// question #2:
// var mod=prompt("Enter your favorite mobile phone model:")
// document.write("My favorite phone is:"+" "+mod+"<br>");
// var b=mod.length;
// document.write("Length of string:"+" "+b)


// question #3:
// var name="Pakistani"
// var b=name.indexOf("n")
// document.write("String:"+" "+name+"<br>")
// document.write("Index of 'n':"+" "+b)


// question #4:
// var word="Hello World";
// var a=word.lastIndexOf("l")
// document.write("String:"+" "+word+"<br>")
// document.write("Index of 'l':"+" "+a)



// question #5:
// var inp=prompt("Enter your word:")
// var c=inp[3]
// document.write("String:"+" "+inp+"<br>")
// document.write("Character at index 3:"+" "+c)



// question #6:
// var first=prompt("Enter your first name:")
// var sec=prompt("Enter your last name:")
// var full=first.concat(sec);
// alert("Hello"+" "+full);


// question #7:
// var user=prompt("Enter your city:")
// var rep=user.replace(user,"Islamabad")
// document.write("City:"+" "+user+"<br>")
// document.write("After replacement:"+" "+rep)



// question #8:
// var mess="Ali and Sami are best friends. They play cricket and football together."
// var afrep=mess.replace(/and/g,"&")
// document.write("sentence:"+" "+mess+"<br>"+"<br>"+"<br>")
// document.write("After replacement:"+" "+afrep)



// question #9 :
// var val="472";
// var con=parseInt("472")
// alert("Value:"+val+"\n\r"+"Type:String"+"\n\r"+"Value:"+con+"\r\n"+"Type:number");



// question #10 :
// var usinp=prompt("Enter your word:")
// var cha=usinp.toUpperCase()
// alert("User input:"+usinp+"\n\r"+"Upper case:"+cha)


// question #11 :
// var user=prompt("Enter your word");
// var cop=user.slice(0,1)
// var upper=cop.toUpperCase()
// var copot=user.slice(1)
// var lower=copot.toLowerCase()
// var con=upper+lower;
// alert("User input:"+user+"\n\r"+"Title case:"+con);


// question #12 :
// var num = 35.36;
// var a = num.toString();
// var ind = a.indexOf(".");
// document.write("Number: "+a+"<br>")
// document.write("Result: "+a.slice(0,ind)+a.slice(ind+1));




// question #13 : 
// var name=prompt("enter your user name:")
// for(var i=0; i<name.length; i++){
//     var b=name.charCodeAt(i)
//     var c=false;
//     if(b==33||b==44||b==46||b==64)
//     {
//         alert("Please enter a valid user name..")
//         c=true
//         break;
//     }
    

// }
// if(c==false){
//         alert("Welcome!")
    
// }







// question #14 :
// var arr=["cake","apple pie","cookie","chips","patties"];
// var user=prompt("WELCOME! "+"\n"+" What would you like to order?");
// var cop=user.slice();
// var lowcop=cop.toLowerCase();
// var found=false;
// for(var i=0; i<arr.length; i++ ){
//     if(arr[i]===lowcop){
//         alert(user+" is available at index "+i+" in our bakery")
//         found=true;
//         break;
//     }
// }
// if(found===false){
//     alert("We are sorry. "+user+" is not available in our bakery");
// }





// question #15 :
// var pass=prompt("Enter Your Password: ");
// var a=pass.length;
// var b=pass.charCodeAt(0);
// var letfound=false;
// var numfound;
// var otherchar=false;

// if(a<6){
//     alert("your password should be atleast 6 characters long! Try Again")
// }
// else if(b>=48 && b<=57){
//     alert("Your password must not start with a number! Try Again")
// }
// else{
//     numfound=false
//     for(var i=0; i<a; i++){
//         var y=pass.charCodeAt(i)
//         if((y>=65 && y<=90)||(y>=97 && y<=122)||(y>=48 && y<=57)){
            
//             if((y>=65 && y<=90)||(y>=97 && y<=122)){
//                 letfound=true;
//             }
//             else if((y>=48 && y<=57)){
//                 numfound=true;
//             }
                
            
//         }
//         else{
//             otherchar=true
//             break
//         }
//     }
// }

// if(otherchar===true){
//     alert("Invalid Character Found! Try Again")
// }
// else if(numfound===false){
//     alert("Your Password should also contain a number! Try Again")
// }
// else if(otherchar===false && numfound===true && letfound===true ){
//     alert("PASSWORD ACCEPTED!")
// }




// question #16 :
// var university="University of Karachi";
// var sp=university.split("");
// for (var i=0;i<sp.length;i++){
//     document.write( "<h3>"+sp[i] +"<br>"+"</h3>");

// }


// question #17 :
// var inp=prompt("Enter your word");
// document.write("User Input: "+inp+"<br>");
// document.write("Last Character: "+inp[inp.length-1]);




// question #18 :
// var a="The quick brown fox jumps over the lazy dog";
// var b=a.toLowerCase();
// var count=0
// for(var i=0; i<a.length; i++){
//     if(b[i]==="t" && b[i+1]==="h" && b[i+2]==="e"){
//         count=count+1
//     }
// }
// if(count===0){
//     document.write("There Is no such word as THE in the text!")
// }
// else{
// document.write("Text: "+a+"<br>");
// document.write("There are "+count+" occurence(s) of the word THE.")
// }