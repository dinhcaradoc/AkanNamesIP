var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

function getDayofWeek(){
  var dob = document.getElementById('dateOfBirth');
  return dob;

  var day = dob.getDate();
  var month = dob.getMonth();
  var year = dob.getYear();
  var cent = year.substr(0,2);
  var ury = year.substr(-3, 2);


  d = (((cent/4)-2)*(cent-1) + (5*ury/4) + (26*(month+1)/10) + day)%7;
  return d;
};

function findAkanName(){
  var male = document.getElementById('maleRadio');
  var female = document.getElementById('femaleRadio');
  var dayOfWeek = days[d];
  var akanName = document.getElementById('akanName');

  if (male){
    name = maleNames[d];
  }
  else {
    name = femaleNames[d];
  }
  return name;
  
  akanName.innerhtml = "You were born on " + dayOfWeek + " and your Akan Name is" + name;
}

 


