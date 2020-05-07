var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function dayOfWeek(){
  d = (((century/4)-2)*(century-1) + (5*year/4) + (26*(month+1)/10) + day)%7;
  return d;
};


