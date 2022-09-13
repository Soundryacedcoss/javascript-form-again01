function calculate() {
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  console.log("age b" + age);
  console.log("weight b" + weight);
  
if(age<5 || age>20 || weight <15 || weight>40){
  document.getElementById("Demo1").innerHTML = "wrong input:)";

}

  if(age>=5 && age<=7){
    if(weight>=15 && weight<=20){
      document.getElementById("Demo1").innerHTML = "perfect:)";
    }
   
  else if(weight<15){
    document.getElementById("Demo1").innerHTML="underweight:(";
  }
  else{
    document.getElementById("Demo1").innerHTML="overweight:(";
  }
}

if(age>=8 && age<=10){
  if(weight>=21 && weight<=25){
    document.getElementById("Demo1").innerHTML = "perfect:)";
  }
 
else if(weight<21){
  document.getElementById("Demo1").innerHTML="underweight:(";
}
else{
  document.getElementById("Demo1").innerHTML="overweight:(";
}
}





if(age>=11 && age<=15){
  if(weight>=26 && weight<=30){
    document.getElementById("Demo1").innerHTML = "perfect:)";
  }
 
else if(weight<26){
  document.getElementById("Demo1").innerHTML="underweight:(";
}
else{
  document.getElementById("Demo1").innerHTML="overweight:(";
}
}






  if(age>=16 && age<=20){
    if(weight>=31 && weight<=40){
      document.getElementById("Demo1").innerHTML = "perfect:)";
    }
   
  else if(weight<31){
    document.getElementById("Demo1").innerHTML="underweight:(";
  }
  else{
    document.getElementById("Demo1").innerHTML="overweight:(";
  }
}
}
