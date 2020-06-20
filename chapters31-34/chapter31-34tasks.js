// question #1:
// var a=new Date();
// alert(a);



//question #2:
// var arr=["January","february","march","april","may","june","july","august","september","october","november","december"];
// var vari=new Date();
// var mon=vari.getMonth();
// alert("Current month"+" "+arr[mon])



//question #3:
// var arr1=["sun","mon","tue","wed","thur","fri","sat"];
// var b=new Date();
// var c=b.getDay()
// alert("Today is "+" "+arr1[c])



//question #4:
// var a=new Date()
// var b=a.getDay()
// if(b==0 ||b==6){
//     alert("It's fun day")
// }
// else{
//     alert("it's working day")
// }



//question #5:
// var c=new Date()
// var d=c.getDate()
// if(d<15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }




//question #6:
// var s=new Date()
// document.write("Current Date:"+"   "+s+"<br>")
// var y=s.getTime()
// var minutes=y/60000
// document.write("Elapsed miliseconds since january 1,1970:"+"    "+y+"<br>")
// document.write("Elapsed minutes since january 1,1970:"+"    "+minutes)




//question #7:
// var t=new Date()
// var p=t.getTime()
// if(p<13){
//     alert("It's PM")
// }
// else{
//     alert("It's AM")
// }





//question #8:
// var date=new Date("December 31, 2020");
// var later = date;
// alert(later)



//question #9:
// var date =new Date("April 24, 2020")
// var mili=date.getTime()
// var old=new Date()
// var nmili=old.getTime()
// var sub=nmili-mili
// var days=sub/(1000*60*60*24)
// var final=Math.floor(days)
// alert(final+" days have passed since first ramadan, 2020")





// question #10:
// var input=prompt("enter reference date:","Month dd, yyyy");
// var ref=new Date(input);
// var fix=new Date("January 1, 2015");
// var refmil=ref.getTime();
// var fixmil=fix.getTime();
// var diff=refmil-fixmil;
// var sec=diff/1000;
// alert("On reference Date "+ref+" "+sec+" seconds had passed since beginning on 2015")



// question #11:

// var da=new Date();
// var h=da.getHours();
// var f=h-1
// da.setHours(f)
// alert("Current date: "+new Date()+"\r\n"+"1 Hour ago, it was: "+da)





// question #12:
// var a=new Date();
// var b=a.getFullYear();
// var c=b-100
// a.setFullYear(c);
// alert("Current date: "+new Date+"\r\n"+"100 years back, it was "+a)





// question #13:
// var inp=+prompt("enter your age in numbers","23");
// var a=new Date();
// var b=a.getFullYear();
// var c=b-inp;
// alert("Your Age: "+inp+"\r\n"+"Your Birth Year: "+c)



// question #14:
// var cusname=prompt("input custumer name");
// var a=new Date();
// var b=a.getMonth();
// var arr=["January","february","march","april","may","june","july","august","september","october","november","december"];
// var units=+prompt("enter number of units: ");
// var chrg=+prompt("enter charge per unit: ");
// var netam=units*chrg;
// var latefee=+prompt("enter late fee");
// var netamdd=netam+latefee;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<h4><b>Customer name: "+cusname)
// document.write("<h4><b>Month: "+arr[b])
// document.write("<h4><b>Number of units: <b>"+units+"<br>")
// document.write("<h4><b>Charges per unit: "+chrg+"<br>"+"<br>")
// document.write("<h4><b>Net amount payble (with in due date): "+netam+"<br>")
// document.write("<h4><b>Late payment surcharge: "+latefee+"<br>")
// document.write("<h4><b>Gross amount payble after due date: "+netamdd+"<br>")


