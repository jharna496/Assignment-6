// ----------chapter#21-25--------

//---------Q1----------------
// var a = prompt("Enter your first name")
// var b = prompt("Enter your last name")
//     alert("Welcome!" + " " + a + " " + b)

// ----------Q2-------------

//  var Name = prompt("Enter a Fav Mobile Name");
//  var charsInName = Name.length;
//  if (charsInName > 3) {
//  NameAbbrev = Name.slice(0, 3);
//  }
//  document.write("length of the string is:" + " " + charsInName)

// ---------Q3--------

// var str = "Pakistani";
// var n = str.indexOf("a");
// document.write("The index of 'a' is:" + " " + n)

// ----------Q4-----------

// var text = "Hello World!";
// var segIndex = text.lastIndexOf("l");
// document.write("the Last Index of l is:" + " " + segIndex)

// ------------Q5-------------

// var string = "Pakistani";
// var char = string.charAt(6)
// document.write("The character at index 6 is:" + " " + char)

// --------Q6------------
// var firstname = "John";
// var lastname = "Debregous"
// document.write(firstname.concat(' ' + lastname))
// document.write("<br>" + lastname.concat(' ' + firstname))

// ---------Q7-----------
// var char = "Hyderabad";
// var str = char.replace("Hydera", "Islama")
// document.write(str)

// ------------Q8-----------
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var str = message.replace(/and/g, "&")
// document.write(str)

// ---------------Q9----------
// var string = "465";
// var num = 678;
// document.write("Value" + " " + string.valueOf(string) + "<br>" + "Type:" + " " + "string")
// document.write("<br>" + "<br>" + "Value" + " " + String(num) + "<br>" + "Type:" + " " + "Number")

// ----------Q10-----------------
// var name = "peanut";
// document.write("Upper case:" + " " + name.toUpperCase(name))


// --------Q11--------
// var string = prompt("Enter Name");

// var name = string.charAt(0).toUpperCase() + string.slice(1);
// document.write(name)

// -------Q12----------

// var char = "36.56";
// var str = char.replace(".", "")
// document.write("The string is:" + " " + str) 

// ------------Q13-----------
// var name = "John!";
// var name2 = "Hello,World";
// var name3 = "Monitorizing.";
// var name4 = "@gmail";
// document.write("ASCII code of ! is:" + " " + name.charCodeAt(4) + "<br>" + 
// "ASCII code of , is:" + " " + name2.charCodeAt(5) + "<br>" +
// "ASCII code of . is:" + " " + name3.charCodeAt(12) + "<br>" +
// "ASCII code of @ is:" + " " + name4.charCodeAt(0))

// var userName=prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(un)
// {
//     var message;
//     var split=[];
//     var arr=[];
//     for(var i=0;i<un.length;i++)
//     {
//         split[i]=un.split("&nbsp;");
//         arr[i]=un.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//         {
//                 message="Correct User Name";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {
//             alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }

// --------------Q14----------
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var name = prompt("Please Enter What u Want?")
// var a = A.indexOf(name);
// alert("Your desire element at" + " " + a)

// -----------Q15------------  

// var p = prompt("Enter Password")
// errors = [];
// if (p.length < 6) {
// errors.push("Your password must be at least 8 characters");
// }
// if (p.search(/[A-Z]/i) < 0) {
//     errors.push("Your password must contain at least one Upper case letter."); 
//     }
// if (p.search(/[a-z]/i) < 0) {
// errors.push("Your password must contain at least one letter."); 
// }
// if (p.search(/[0-9]/) < 0) {
// errors.push("Your password must contain at least one digit.");
// }
// if (errors.length > 0) {
// alert(errors.join("\n"));
// alert("password does not meet requirments");
// }
// else{
// alert("correct password");
// }

// -------Q16--------
// var myStr = "University of Karachi";
//     var strArray = myStr.indexOf("<br>") + myStr.split(" ");
//     for(var i = 2; i < strArray.length; i++){
//     document.write("<p>" + strArray[i] + "</p>");
// }

// ------------Q17---------
// var str = prompt("Enter word")
// document.write("Entered name is:" + " " + str)
// document.write("<br>" + "Last character of input is:" + " " + str.lastIndexOf("n"))

// ----------Q18-----------
// var count = "the quick brown fox jumps over the lazy dog";
// document.write("There are" + " " + count.match(/the/g).length + " " + "occurance (s) of 'The' is")


// -----------chapter#26-30----------

// ---------Q1-----------
// var number = 3.564;
// document.write("The give number is:" + " " + number)
// document.write("<br>" + "The roundoff value is:" + Math.round(number))
// document.write("<br>" + "The Ceil value is:" + Math.ceil(number))
// document.write("<br>" + "The floor value is:" + Math.floor(number))

// -------Q2---------
// var number = -3.564;
// document.write("The give number is:" + " " + number)
// document.write("<br>" + "The roundoff value is:" + Math.round(number))
// document.write("<br>" + "The Ceil value is:" + Math.ceil(number))
// document.write("<br>" + "The floor value is:" + Math.floor(number))

// -------Q3-------
// var num = -4;
// document.write("The absolute number of -4 is:" + " " + Math.abs(num))

// ---------Q4-------
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

// --------Q5---------
// var heads = 0;
// var tails = 0;
// var coinflip = Math.floor(Math.random()*2);
// if (coinflip === 0) {
//     heads += 1;
//     document.write('You got heads');

//   } 
//   else {
//     tails += 1;
//     document.write('You got tails');
//   }

// --------Q6---------
// var r = Math.floor(Math.random() * 100) + 1;
// document.write("The random number between 1 and 100 is:" + " " + r)

// --------Q7---------
// var number = prompt("Enter your Weight in kg");
// document.write("The weight of user is" + " " + parseFloat(number) + " " + "kilogram")
// document.write("<br>" + "The weight of user is" + " " + parseInt(number) + " " + "kilogram")

// -------Q8--------
// var num = prompt("Enter the number")
// var r = Math.floor(Math.random() * 10 + 1);
// if(r > num){
// alert("Congratulations!")
// }
// else if(r < num){
//     alert("try again")
// }

// ---------chapter#31-34---------

// --------Q1----------
// var curDate = new Date();
// document.write(curDate.toString());

// ------------Q2--------
// var my_month = new Date()
// var month = new Array(12);
// month[0]="January"
// month[1]="February"
// month[2]="March"
// month[3]="April"
// month[4]="May"
// month[5]="June"
// month[6]="July"
// month[7]="August"
// month[8]="September"
// month[9]="October"
// month[10]="November"
// month[11]="December"

// alert ("Current month is " + month[my_month.getMonth()]);

// ---------Q3----------
// var d = new Date();
//   var weekday = new Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tuesday";
//   weekday[3] = "Wednesday";
//   weekday[4] = "Thursday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saturday";
// alert("Today is" + " " + d.toString().split(' ')[0]);

// --------Q4----------
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Fun day";
// weekday[1] = "Fun day";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// alert("Today is" + " " + n)

// ---------Q5----------
// var date;
// if(date <= 16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month")
// }

// ---------Q6-----------
// var minutes = new Date();
// var minMili = minutes.getTime();
// var minuteconvert = minMili/(1000*60*60)

// document.write("Current date:" + " " + minutes)
// document.write("<br>" + "Elapsed minutes since January 1,1970:" + " " + minMili)
// document.write("<br>" + "Elapsed minutes since January 1,1970:" + " " + minuteconvert)

// ---------Q7--------
// var rightNow = new Date();
// var theDay = rightNow.getDay();
// if(rightNow > theDay){
// alert("It's:" + " " + "PM")
// }
// else if(rightNow < theDay){
//     alert("It's:" + " " + "AM")
// }

// --------Q8--------
// var d = new Date();
// d.setFullYear(d.getFullYear(), d.getMonth() - 6);
// document.write("Later date:" + " " + d)

// ----------Q9-------
// var day = new Date();
// var one_day=60*60*24;
// document.write(one_day + " " + "Days have passes since 1st Ramadan, 2015")

// --------Q10-------
// var today = new Date("January 1, 2015");
// var one_day=1000*60*60*24;
// document.write(one_day + " " + "Seconds had passed scince the biginning of 2015.")

// ---------Q11-----------
// var today = new Date()
// var aDay = 1000*60*60;
// document.write("Current date" + " " + today)
// document.write("<br>" + "One hour ago it was" + " " + new Date(Date.now()-aDay))

// --------Q12-----------

// var d = new Date();
// var pastYear = d.getFullYear() - 100;
// d.setFullYear(pastYear);
// alert("Current date" + " " + d)
// alert("100 years back, It was" + " " + d);

// -------Q13---------
// var date = new Date();
// var age = prompt("Enter your age")
// var birthyear = date.getFullYear() - age
// document.write("Your age is:" + " " + age + "<br>" + "Your birthday year is:" + " " + birthyear)

// ----------Q14---------
// var name = prompt("Enter name")
// var month = prompt("please enter the month")
// var num_of_units = 410;
// var charges_per_unit = 16;
// var Late_payment = 350;

// var Net_Amount = num_of_units * charges_per_unit;
// var Gross_Amount_Payable = Net_Amount + Late_payment;

// document.write("Customer Name:" + " " + name + "<br>" + "Month:" + " " + month + "<br>" + "Number of units:" +
// " " + num_of_units + "<br>" + "Charges per unit:" + " " + charges_per_unit)

// document.write("<br>" + "<br>" + "Net Amount Payable (within Due Date):" + " " + Net_Amount + "<br>" +
// "Late payment surcharge:" + " " + Late_payment + "<br>" + 
// "Gross Amount Payable (after Due Date):" + " " + Gross_Amount_Payable)


// -------------chapter#35-38----------

// ------------Q1------------
// tellTime();
// function tellTime(){
// var date = new Date()
// alert(date)
// }


// ------Q2---------
// name()
// function name(){
//     var firstname = prompt("Please enter you first name")
//     var secondname = prompt("Please enter you first name")
//     alert("Good morning!" + " " + firstname + " " + secondname)
// }

// ----------Q3-------------
// numbers()
// function numbers(){
//     var a = prompt("enter number");
//     var b = prompt("enter second number");
//     var c = (a) + (b);
//     alert("The sum of two number is:" + " " + c)
// }

// ----------Q4---------------
// operation()
// function operation(){
//     var num1 = 5;
//     var num2 = 7;
//     var result = num1 * num2;
//     alert("The operation performed result is:" + " " + result)
// }

// ----------Q5----------
// function sumOfSquares(num) {
//     var i;

//     for (i=0;i<=num;i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//     document.write("The sum of squares for numbers up to and including " +num+ "is" +sum);
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);

// -----------Q6----------
// function factorial(x) 
// { 
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// alert(factorial(5));

// ----------Q7---------
// sum()
// function sum() {
//     var num = 1;
//     var num2 = prompt("enter end number");
//     for(num = 1; num2>=num; num++){
//     document.write(" " + "<br>" + num)
//     }
// }

// -------------Q8--------------
// foo()
// function foo(){
// alert("The length of the hypotenuse is" + " " + Math.hypot(4, 5) )
// }

// -----------Q9------------
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
//         function area(length, width) {
//             return length * width;
//         } 
//     document.writeln('The area of your rectangle is ' + area(length, width));

// ---------Q10------------
// function isPalindrome(s) {
//     if(s == s.split("").reverse().join(""));
// }
// alert(isPalindrome("malayalam")); 
// alert(isPalindrome("english")); 

// --------Q11---------
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

// --------------Q12-------
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count('w3resource.com', 'o'));

// ---------Q13------------
// calcCircumference()
// calcArea()
// function calcCircumference(R){
//     var R = 6;
//     var calcCircumference = ((2) * (Math.PI) * (R));
//     document.write("The circumference is" + " " + calcCircumference)
//  }
// function calcArea(R){
//     var R = 6;
//     var calcArea = ((2) * (R*R));
//     document.write("<br>" + "The Area is" + " " + calcArea)
// }