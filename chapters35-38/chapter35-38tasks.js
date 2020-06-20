//question #1:
// function date(){
//     var c=new Date()
//     return c
// }

// alert(date())



//question #2:
// function name(){
//     var f=prompt("enter your first name:")
//     var l=prompt("enter your last name:")
//     var fu=f+" "+l
//     return fu;
// }
// alert("Hello Mr."+name())



//question #3:
// function sum(){
//     var num1=+prompt("enter 1st number:")
//     var num2=+prompt("enter 2nd number:")
//     var add=num1+num2
//     return add
// }
// alert("the sum of two numbers is:"+sum())



//question #4:
// function cal(n1,ope,n2){
    
//     if(ope=='+'){
//         return("sum of two numbers is :"+(n1+n2))
//     }
//     else if(ope=='-'){
//         return("difference of two numbers is :"+(n1-n2))
//     }
//     else if(ope=='*'){
//         return("product of two numbers is :"+(n1*n2))
//     }
//     else if(ope=='/'){
//         return("division of two numbers is :"+(n1/n2))
//     }
// }

// var a=+prompt("enter 1st number:")
// var b=prompt("enter operator(+,-,*,/):")
// var c=+prompt("enter 2nd number:")
// document.write(cal(a,b,c))




//question #5:
// function squ(num=4){
// var s=num*num;
// return s

// }
// alert(squ())




//question #6:
// function fac(u=1){
//     var inp=+prompt("enter any number:")
//     for (var i=1;i<=inp;i++){
//          var u=u*i
//     }
//     return u

// }
// alert(fac())





//question #7:
// function num(st,en){
    
//     for(var i=st;i<=en;i++){
//         document.write(i+"<br>")
//     }

// }
// var a=+prompt("enter starting number:")
// var b=+prompt("enter ending number:")
// num(a,b)



//question #8:
// var b=+prompt("enter base of the right angle triangle:")
// var p=+prompt("enter perpendicular of the right angle triangle:")
//         function f1(base,heiht){
//             x=base
//             y=heiht
//             function f2(ba,he){
//                 hsqr=(ba*ba)+(he*he)
//                 return hsqr
//             }
//             h=Math.sqrt(f2(x,y))
//             return h

        
//     }

// alert(f1(b,p))



//question #9:

// function rec(w,h){
//         var a=w*h
//         return a
// }
// // Part(1)
// alert(rec(15,12))
// // Part(2)
// var a=+prompt("enter width of the rectangle:")
// var b=+prompt("enter height of the rectangle:")
// alert(rec(a,b))



//question #10:
// var word=prompt("enter a word:")
// function pal(a){
    
//     var lo=word.toLowerCase()
//     var res=lo.split('').reverse().join('');

//     if(lo===res){
//         alert("this is palindrome word..")
//     }
//     else{
//         alert("this is not a palindrome word..")
//     }

// }
// pal(word)




//question #11:
// function upcas(str){
//     var a=str
//     var b=str[0]
//     var b=b.toUpperCase()

//     for(var i=0; i<a.length; i++){
//         if(str[i]==" "){
//             var str=b+str.slice(1,i+1)+str[i+1].toUpperCase()+str.slice(i+2)
//         }
//     }
//     return str
// }
// var text=prompt("enter text here:")
// alert(upcas(text))




// question #12
// function long(str){
//     var a=str
//     var currentindex=0;
//     var lastindex=-1;
//     var largestword="";
//     var largestcount=0;
//     for(var i=0; i<a.length; i=i+lastindex+1){
//         var wordcount=0
//         for(var t=lastindex+1; t<a.length; t++){
//             if(str[t]==" "){
//                 currentindex=t;
//                 break
//             }
//         }
//         for(var y=lastindex+1; y<currentindex; y++){
//             wordcount=wordcount+1;
//         }
//         if(wordcount>largestcount){
//             largestcount=wordcount;
//             largestword=str.slice(lastindex+1,currentindex)
//         }
//         lastindex=currentindex;
//     }
//     var test=str.lastIndexOf(" ")
//     wordcount=0
//     for(var z=test+1; z<a.length; z++){
//         wordcount=wordcount+1;
//     }
//     if(wordcount>largestcount){
//         largestcount=wordcount;
//         largestword=str.slice(test+1)
//     }
//     return largestword
// }
// var text=prompt("enter the text here:");
// var res=long(text);
// alert("largest word you enetered: "+res)





// question #13:
// var count=0;
// function occ(str,let){
//     var a=str;
//     for(var i=0; i<a.length; i++){
//         if(str[i]===let){
//             count=count+1
//         }
//     }
//     return count
// }
// var input=prompt("enter your text here: ")
// var letter=prompt("enter the letter of which you want to find the number of occurances: ")
// alert("the letter "+letter+" occured "+occ(input,letter)+" times in your text!")





//question #14:
// var radius=+prompt("enter radius of the circle:");

// function cir(b){
    
//     var c=2*3.142*b
//     return c
// }
// function ar(d){
//     var are=3.142*d*d
//     return are
// }
// alert("the circumference is:  "+cir(radius)+"\n\r"+"the area is:  "+ar(radius))