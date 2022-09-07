function calculate() {
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  // console.log("age "+age);
  alert("wrong input");

  //     if((age>=5 || age<=7 ) && (weight>=15 || weight<=20 )){

  //         document.getElementById("Demo1").innerHTML="perfect:)";
  //     }
  //     if((age<=5 || age<=7) && (weight>=15 || weight<=20) ){
  //        document.getElementById("Demo1").innerHTML="overweight:(";  ;
  //     }
  //     if((age<=5 || age>=7 && weight>=15 || weight<=20) ){
  //         document.getElementById("Demo1").innerHTML="underflow:(1";
  //     }
  //     if((age>=5 || age>=7 && weight>=15 || weight>=20) ){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=5 || age<=7 && weight<=15 || weight<=20) ){

  //         document.getElementById("Demo1").innerHTML="underflow:(2";
  //     }

  //     if((age>=8 || age<=10 )&& (weight>=21 || weight<=25 )){

  //         document.getElementById("Demo1").innerHTML="perfect:)";
  //     }
  //     if((age<=8 || age<=10 )&& (weight>=21 || weight<=25 )){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=8 || age>=10 )&& (weight>=21 || weight<=25 )){

  //         document.getElementById("Demo1").innerHTML="underflow:(3";
  //     }
  //     if((age>=8 || age<=10 )&& (weight>=21 || weight>=25 )){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=8 || age<=10 )&& (weight>=21 || weight<=25 )){

  //         document.getElementById("Demo1").innerHTML="underflow:(4";
  //     }

  //     if((age>=11 || age<=15 )&& (weight>=26 || weight<=30 )){

  //         document.getElementById("Demo1").innerHTML="perfect:)";
  //     }
  //     if((age<=11 || age<=15 )&& (weight>=26 || weight<=30 )){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=11 || age>=15 )&& (weight>=26 || weight<=30 )){

  //         document.getElementById("Demo1").innerHTML="underflow:(5";
  //     }
  //     if((age>=11 || age<=15 )&& (weight>=26 || weight>=30 )){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=11 || age<=15 )&& (weight>=26 || weight<=30 )){

  //         document.getElementById("Demo1").innerHTML="undeflow:(6";
  //     }

  //     if((age>=16 || age<=20 )&& (weight>=31 || weight<=40 )){

  //         document.getElementById("Demo1").innerHTML="perfect:)";
  //     }
  //     if((age<=16 || age<=20 )&& (weight>=31 || weight<=40 )){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=16 || age>=20 )&& (weight>=31 || weight<=40 )){

  //         document.getElementById("Demo1").innerHTML="underflow:(7";
  //     }
  //     if((age>=16 || age<=20 )&& (weight>=31 || weight>=40 )){

  //         document.getElementById("Demo1").innerHTML="overflow:(";
  //     }
  //     if((age>=16 || age<=20 )&& (weight>=31 || weight<=40 )){

  //         document.getElementById("Demo1").innerHTML="underflow:(8";
  //     }
  // }
//   console.log("age b" + age);
//   console.log("weight b" + weight);
  if ((age >= 5 && age <= 7) && (weight >= 15 && weight <= 20)) {
    document.getElementById("Demo1").innerHTML = "perfect:)";
  } else if (weight > 20) {
    document.getElementById("Demo1").innerHTML = "overweight:)";
  } else if ( weight < 15 ){
    document.getElementById("Demo1").innerHTML = "underweight";
  }

  if ((age >= 8 && age <= 10) && (weight >= 21 && weight <= 25)) {
    document.getElementById("Demo1").innerHTML = "perfect:)";
  } else if (weight > 25) {
    document.getElementById("Demo1").innerHTML = "overweight:)";
  } else if ( weight < 21 ){
    document.getElementById("Demo1").innerHTML = "underweight";
  }

  if ((age >= 11 && age <= 15) && (weight >= 26 && weight <= 30)) {
    document.getElementById("Demo1").innerHTML = "perfect:)";
  } else if (weight > 30) {
    document.getElementById("Demo1").innerHTML = "overweight:)";
  } else if ( weight < 26 ){
    document.getElementById("Demo1").innerHTML = "underweight";
  }
  if ((age >= 16 && age <= 20) && (weight >= 31 && weight <= 40)) {
    document.getElementById("Demo1").innerHTML = "perfect:)";
  } else if (weight > 40) {
    document.getElementById("Demo1").innerHTML = "overweight:)";
  } else if ( weight < 31 ){
    document.getElementById("Demo1").innerHTML = "underweight";
  }

//   if ((age >= 8 && age <= 10) || (weight >= 21 && weight <= 25)) {
//     document.getElementById("Demo1").innerHTML = "perfect:)";
//   } else if ((age >= 8 && age <= 10) || (weight >= 21 &&  weight >= 25)) {
//     document.getElementById("Demo1").innerHTML = "overweight:)";
//   } else {
//     document.getElementById("Demo1").innerHTML = "underflow";
//   }

//   if ((age >= 11 && age <= 15) || (weight >= 26 && weight <= 30)) {
//     document.getElementById("Demo1").innerHTML = "perfect:)";
//   } else if ((age >= 11 && age <= 15) || (weight >= 26 &&  weight <= 30)) {
//     // console.log("age 1" + age);
//     // console.log("weight 1" + weight);
//     document.getElementById("Demo1").innerHTML = "overweight:)";
//   } else {
//     document.getElementById("Demo1").innerHTML = "underflow";
//   }

//   if ((age >= 16 && age <= 20) || (weight >= 31 && weight <= 40)) {
//     document.getElementById("Demo1").innerHTML = "perfect:)";
//   } else if ((age >= 16 && age <= 20) ||(weight >= 31 && weight < 40) ){
//     // document.getElementById("Demo1").innerHTML = "overweight:) 1";
//   } else {
//     document.getElementById("Demo1").innerHTML = "underflow";
//   }
//   console.log("age " + age);
//   console.log("weight " + weight);
//   alert("wrong input");
}
