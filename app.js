document.write("ASSIGNMENT # 6  " + "<br>")
document.write("NAME :SYED HASNIAN ALI ZAIDI" + "<br>")
document.write("ROLL NO:WM 13675" + "<br>" + "<br>" + "<br>")


//*****************************ASSIGNMENT # 6*********************************************************
//*****************************CHAPTER # 21-25 STRING METHOD***************************************

//TASK 1:::::::::::::::::::::::::::::::::::::::::::

// var firstname=prompt("ENTRE YOUR FIRST NAME")
// var secondname=prompt("ENTRE YOUR SECOND NAME")

// var fullname=firstname + "  " + secondname;

// alert(fullname)

//TASK 2:::::::::::::::::::::::::::::::::::::::::::::

// var fav=prompt("ENTRE YOUR FAVORITE  PHONE NAME ::")
// var f=fav.length;

// document.write("MY FAVORITE PHONE NAME IS===",fav + "<br>")
// document.write("LENGTH OF INDEX IS====",f)

//TASK 3::::::::::::::::::::::::::::::::::::::::::::::

// var string=["paskistani"];

// for(var a=0;a<string.length;a++)
// {
//     if(a==="n")
//     {
//         document.write(string.length)
//         break;
//     }
// }

//TASK 4::::::::::::::::::::::::::::::::::::::::

// findLastIndex(str,  x) 
// { 

//     for (var i = str.length - 1; i >= 0; i--) 
//         if (str[i] == x) 
//             return i; 


// } 
//     var str = "HELLO WORLD"; 
//     var x = 'L'; 
//     var index = findLastIndex(str, x); 
//     if (index == -1) 
//         document.write( "Character not found") 
//     else
//         document.write( "Last index is ", index) 


// TASK 5:::::::::::::::::::::::::::::::::::::
// var string="pakistani";
// var find=string.charAt(3);

// document.write("THE LETTER IS====",find )

// TASK 6:::::::::::::::::::::::::::::::::::::
// var namef=prompt("ENTRE A FIRST NAME")
// var name2l=prompt("ENTRE A LAST NAME")
// var fullname=namef.concat(name2l);
// alert(fullname)

// TASK 7:::::::::::::::::::::::::::::::::::::

// var str="hyderabad";
// var rep=str.replace("hyderabad","hyderislam");

// document.write("AFTER REPLACEMENT THE WORD IS========", rep)

// TASK 8:::::::::::::::::::::::::::::::::::::

// var message = "Ali and Sami are best friends. They play cricket andfootball together";

// var replace=message.replace(/and/ , "&");
// document.write("AFTER REPLACEMENT " + "<br>" )
// document.write(replace)

// TASK 9:::::::::::::::::::::::::::::::::::::

// var integerstring="472"
//  var num=Number(integerstring)

//  Document.write(num)

// var integerString = "624"
//  var num = Number(integerString);


// document.write(num + "<br>") 
//  var z=typeof(num)
//  document.write("type"+" "+ z)

// TASK 10:::::::::::::::::::::::::::::::::::::

// var input=prompt("ENTRE A WORD IN LOWER CASE....")

// var con=input.toUpperCase();
// document.write(con)

// TASK 11:::::::::::::::::::::::::::::::::::::

// var input=prompt("ENTRE A CHARACTER.........")

// var fchar=input.slice(0,1)
// var ochar=input.slice(1)
// fchar=fchar.toUpperCase();
// ochar=ochar.toLowerCase();

// var full=fchar+ochar;

// document.write(full)


//task 12:::::::::::::::::::::::::

// var num=35.36;

// var num=num.toString()
// document.write(num +"<br>")

// var replace=num.replace( /./ , "")
// document.write(replace)

//TASK 13::::::::::::::::::::::::::::::::

// var username;           
// var charAny;            
// var anyNum = false;     
// var index;              var BR = "<br />";      
// var ES = "";            
// while (username.length < 8) {
//     document.write("Your username must be at least 8 characters long." + BR);
//     username = prompt("Please enter your username: ", ES);
// }
// charAny = username.substr(0, 1);
// while (charAny !== isLetter()) {
//     document.write("The first character of your username must be a letter." + BR);
//     username = prompt("Please enter your username: ", ES);
// }
// while (anyNum !== false) {

//     for (index = 1; index < username.substr(index, index); index++) {
//         anyNum = username.substr(index, index);
//         if (isNumeric(charAny)) {
//             anyNum = true;
//         }
//     }

//      if (anyNum !== true) {
//         document.write("Your username must include at least 1 digit." + BR);
//         username = prompt("Please enter your username: ", ES);
//     }
// }
// document.write("Thank you! Your new username is: " + username);

//TASK 14::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// var input = promt("WELCOME TO ABC BAKERY WHAT DO YOU WANT TO ORDER SIR/MAM")

// for (var a = 0; a <= input.length; a++)
//  {
//     if (input == a)
//     {
//         alert("cookie is available.............")
//     }
//     else 
//     {
//         alert("cookie is not available")
//     }
// }

//TASK 15:::::::::::::::::::::::::::::::::::::::::::::::::::::::

// var input=prompt("PLEASE ENTRE A VALID PASSWORD")

// var first=input.first(0,1)

// if(first != Number && input>='a' || input<='z' && input>='A' || input<='Z' && input.length>=6  )
// {
//     alert("PASSWORD IS CORRECT")
// }
// else 
// {
//         alert("PASSWORD IS NOT CORRECT")
// }


//TASK 16::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// var university = "University of Karachi";

// for(var i=0; i<=university.length;i++)
// {
//     document.write(university[i] + "<br>")
// }

//TASK 17::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// var word = prompt("ENTRE A WORD");
// var last = word.charAt(word.length - 1);
// alert('The last character is:' + last);

//TASK 18::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//   var fav="The quick brown fox jumps over the lazy dog"
//   var f=fav.length;


//  document.write("LENGTH OF INDEX IS====",f)


//*****************************CHAPTER # 21-25 MATHS METHOD**********************************

//TASK # 1 :::::::::::::::::::::::::::::::::::::::::::::::::::::

// var num=3.45214

// var m=Math.round(num)
// var f=Math.floor(num)
// var c=Math.ceil(num)
// document.write("NUMBER:",num + "<br>")
// document.write("ROUND OFF VALUE IS========",m + "<br>")
// document.write("FLOOR VALUE IS============",f + "<br>")
// document.write("THE CEIL VALUE IS========",c)

//TASK # 2 :::::::::::::::::::::::::::::::::::::::::::::::::::::

// var num=-2.673

// var m=Math.round(num)
// var f=Math.floor(num)
// var c=Math.ceil(num)
// document.write("NUMBER:",num + "<br>")
// document.write("ROUND OFF VALUE IS========:",m + "<br>")
// document.write("FLOOR VALUE IS============:",f + "<br>")
// document.write("THE CEIL VALUE IS=========:",c)

//TASK # 3 :::::::::::::::::::::::::::::::::::::::::::::::::::::

// var abs=Math.abs(-4)
// document.write("THE ABSOLUTE VALUE OF -4 IS::",abs)

//TASK # 4 :::::::::::::::::::::::::::::::::::::::::::::::::::::
// var num = 4;
// document.write("ENTRE DICE VALUE IS:::",num + "<br>")

// var n=Math.random(num)
// var nm=n+5.5
// var nu = nm.toFixed(0);

// document.write("RANDON DICE VALUE:::::" , nu)

//TASK # 5 :::::::::::::::::::::::::::::::::::::::::::::::::::::

// var heads= Math.floor(Math.random() * 2) +1;

// var tails = Math.floor(Math.random() * 1) +1;

// if( heads === tails){
//    document.write("You Got TAIL")
//  }
//  else
//  {
//    document.write("You Got HEAD")
//  }


//TASK # 6 :::::::::::::::::::::::::::::::::::::::::::::::::::::


// for(var i=1;i<=100;i++)
// {

// var n=Math.random(i)
// var nm=n+83.5 
// var nu = nm.toFixed(0);
//                 //num          //R num
//     document.write(i + " ==== "+ nu + "<br>" )
// }

//TASK # 7 :::::::::::::::::::::::::::::::::::::::::::::::::::::
// var weight=prompt("ENTRE YOUR WEIGHT IN KILOGRAM")

// var n=Math.random(weight)
// var n1=n+58
// var final=n1.toFixed(1) + 3

// document.write("THE WEIGHT OF THE USER IS ",final, " kilogram" )

//TASK # 8 :::::::::::::::::::::::::::::::::::::::::::::::::::::

// var arr=[1,2,3,4,5,6,7,8,9,10];
// var user=prompt("ENTRE A SECRET NUMBER B/W (1-10)")

// for(var i=0;i<=arr.length ;i++)
// {
//     if(arr[i] == user )
//     {
//         document.write("congratulate the user number is same")
//         break;
//     }
//     else
//     {
//         document.write("not same try again")
//         break;
//     }

// }

//*****************************CHAPTER 31-34 (DATE METHOD) ***************************

//TASK 1::::::::::::::::::::::::::::::::::::::

// var new1=new Date();
// document.write(new1)

//TASK 2:::::::::::::::::::::::::::::::::::::

// var d=new Date();
// var current=d.getMonth();

// alert(current)

//TASK 3:::::::::::::::::::::::::::::::::::::

// var d=new Date();
// var current=d.getDay();
// alert(current)

//TASK 4:::::::::::::::::::::::::::::::::::::

// var days=["sat","sun"];
// var now=new Date();
// var day=now.getDay();

// for( var i=0;i<=days.length ; i++)
// {
//     if(days[i] == day )
//     {
//         document.write("it is fun days")
//         break;
//     }
//     else
//     {
//         document.write("it is work day")
//         break;
//     }
// }

//TASK 5:::::::::::::::::::::::::::::::::::::

// var d=new Date();
// var m=d.getMounth();
// var days=m.getdays();

// for( days=0;days<=15;i++) 
// {
//     document.write(days)
// }

//TASK 6:::::::::::::::::::::::::::::::::::::

// var new1=new Date();
//  document.write(new1)
 

// var d = new Date("jan 1, 1970");
// var currentMonth = d.getMonth();
// var currYr = d.getFullYear();
// var currentHrs = d.getHours();
// var currMins = d.getMinutes();
// var currSecs = d.getSeconds()
// var currMills = d.getMilliseconds();
// // var millsSince = d.getTime();
// document.write(currMills)


//*****************************CHAPTER 31-34 (FUNCTION) ***************************

//TASK 1 ::::::::::::::::::::::::::::::::::::::::
// function date(){
//     var date=new Date();
//     document.write(date)
// }
// date();

//TASK 2 ::::::::::::::::::::::::::::::::::::::::

// function name()
// {
//     var firstname="hasnain";
//     var lastname="zaidi";

//     alert(firstname + lastname)
// }
// name();

//TASK 3 ::::::::::::::::::::::::::::::::::::::::

// function cal(num1,num2)
// {
    
//       return (num1+num2);
    
// }
   
//     var a=prompt("entre a num1")
//     var b=prompt("entre a num2")
//    document.write(cal(a,b))

//TASK 4 ::::::::::::::::::::::::::::::::::::::::::::::::

// function calculator(num1,op,num2)
// {
//     if(op === "+")
//     {
//         return num1 +num2;
//     }
//     else if(op === "-")
//     {
//         return num1-num2;
//     }
//     else if(op === "*")
//     {
//         return num1*num2;
//     }
//     else if(op === "/")
//     {
//         return num1/num2;
//     }
//     else
//     {
//         return("invalid input")
//     }
// }

// document.write(calculator(5,  "*" , 4))

//TASK 5 ::::::::::::::::::::::::::::::::::::::::::::::::

// function square(num)
// {
//     return num*num;
// }

// document.write(square(5))

//TASK 6 ::::::::::::::::::::::::::::::::::::::::::::::::

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 7;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


//TASK 7 ::::::::::::::::::::::::::::::::::::::::::::::::
// function sum() {

//     var FirstNumber = prompt("ENTRE A FIRST NUMBER") 
//     var SecondNumber = prompt("ENTRE A SECOND NUMBER")

//     var result=0;

//     for (var i = FirstNumber; i <= SecondNumber; i++) 
//     {
//       result += i;  
//     }

//     alert(result);
// }
// sum();

//TASK 8 ::::::::::::::::::::::::::::::::::::::::::::::::

// function calhyp()
// {
//     var b=prompt("ENTRE A BASE")
//     var h=prompt("ENTRE A PERPENDICULAR")

//     return   hyp*hyp;

//     function squ()
//     {
//         var hyp=(b*b) + (p*p);
//     }
// }

// document.write(calhyp)

//TASK 9 ::::::::::::::::::::::::::::::::::::::::::::::::

// function area(width, height)
// {
//     return A=width*height;
// }

// document.write(area(120,123))

//TASK 10::::::::::::::::::::::::::::::::::::::::::::::::
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return document.write("not palindrome");
//       }
//     }
//     return document.write("word is  palindrome");
//    }
//    palindrome("madam");

//TASK 11::::::::::::::::::::::::::::::::::::::::::::::::

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

//TASK 12::::::::::::::::::::::::::::::::::::::::::::::::
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

//TASK 14::::::::::::::::::::::::::::::::::::::::::::::::

// function calcCircumference(radius)
// {
//     return 2*3.14*radius;
// }

// function calcArea(r)
// {
//     return 3.14*r*r;
// }

// document.write(calcCircumference(3.2))


///END -----------------------------------------------
//STAY HOME STAY SAFE