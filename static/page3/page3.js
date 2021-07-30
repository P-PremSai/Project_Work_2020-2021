// function SubmitButton(){
//   let fname=document.getElementById('fname').value;
//   let mname=document.getElementById('mname').value;
//   let fmobno=document.getElementById('fmobno').value;
//   let mmobno=document.getElementById('mmobno').value;
//   let prlane=document.getElementById('lane').value;
//   let prpost=document.getElementById('post').value;
//   let prcity=document.getElementById('city').value;
//   let prstate=document.getElementById('state').value;
//   let pelane=document.getElementById('pelane').value;
//   let pepost=document.getElementById('pepost').value;
//   let pecity=document.getElementById('pecity').value;
//   let pestate=document.getElementById('pestate').value;
//   let fmail=document.getElementById('fmail').value;
//   let mmail=document.getElementById('mmail').value;

//   if(fname==''){
//     alert('Please enter your Father name')
//   }
//   else if(mname==''){
//     alert('Please enter your Mother name')
//   }
//   else if(fmobno==''){
//     alert('Please enter your Father Mobile number')
//   }
//   else if(mmobno==''){
//     alert('Please enter your Mother Mobile number')
//   }
//   else if (form.fqual.selectedIndex==0) {
//     alert('Please select your Father Qualification')
//   }
//   else if (form.mqual.selectedIndex==0) {
//     alert('Please select your Mother Qualification')
//   }
//   else if (form.focc.selectedIndex==0) {
//     alert('Please select your Father Occupation')
//   }
//   else if (form.mocc.selectedIndex==0) {
//     alert('Please select your Mother Occupation')
//   }
//   else if(prlane==''){
//     alert('Please enter your Present Lane Address')
//   }
//   else if(prpost==''){
//     alert('Please enter your Present Postal code')
//   }
//   else if(prcity==''){
//     alert('Please enter your Present City')
//   }
//   else if(prstate==''){
//     alert('Please enter your Present State')
//   }
//   else if(pelane==''){
//     alert('Please enter your Permanent Lane Address')
//   }
//   else if(pepost==''){
//     alert('Please enter your Permanent Postal code')
//   }
//   else if(pecity==''){
//     alert('Please enter your Permanent City')
//   }
//   else if(pestate==''){
//     alert('Please enter your Permanent State')
//   }
//   else if(FatherNameCheck(fname)==false){
//     FatherNameCheck(fname);
//   }
//   else if(MotherNameCheck(mname)==false){
//     FatherNameCheck(mname);
//   }
//   else if(CityCheck(prcity)==false){
//     CityCheck(prcity);
//   }
//   else if(StateCheck(prstate)==false){
//     StateCheck(prstate);
//   }
//   else if(CityCheck(pecity)==false){
//     CityCheck(pecity);
//   }
//   else if(StateCheck(pestate)==false){
//     StateCheck(pestate);
//   }
//   else if (PostalCodeCheck(prpost)==false) {
//     PostalCodeCheck(prpost);
//   }
//   else if (PostalCodeCheck(pepost)==false) {
//     PostalCodeCheck(pepost);
//   }
//   else {
//     window.location.href="Registered Successfully.htm";
//   }
// }
// function StateCheck(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Please check the state name you entered');
//     return false;
//   }
// }
// function CityCheck(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Please check the city name you entered');
//     return false;
//   }
// }
// function FatherNameCheck(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Please check your Father Name');
//     return false;
//   }
// }
// function MotherNameCheck(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Please check your Mother name');
//     return false;
//   }
// }
// function PostalCodeCheck(post){
//   let postreg=/^[1-9][0-9]{5}$/;
//   if (postreg.test(post)==true) {
//     return true;
//   }
//   else {
//     alert("Please check the postal code you entered");
//     return false;
//   }
// }
// function EmailCheck(email){
//   let emailreg=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//   if(emailreg.test(email)==true){
//     return true;
//   }
//   else {
//       alert("Enter valid Email-ID");
//       return false;
//     }
// }
// function PhoneNumber(phone){
// let phonereg=/^\d{10}$/;

// if(phonereg.test(phone)==true){
//   return true;
// }
// else {
//   alert('Enter valid phone number');
//   return false;
// }
// }
function CheckOccupationm(val){
  var element=document.getElementById('moocc');
  if(val=='Other')
    element.style.display='block';
  else  
    element.style.display='none';
 }
 function CheckOccupationf(val){
  var element=document.getElementById('foocc');
  if(val=='Other')
    element.style.display='block';
  else  
    element.style.display='none';
 }
 function AddressFill(){
  let check = document.getElementById('check').checked;
  let lane = document.getElementById('lane').value;
  let post = document.getElementById('post').value;
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  if(check==true){
     document.getElementById('pelane').value=lane;
     document.getElementById('pepost').value=post;
     document.getElementById('pecity').value=city;
     document.getElementById('pestate').value=state;
  }
  else{
    document.getElementById('pelane').value='';
    document.getElementById('pepost').value='';
    document.getElementById('pecity').value='';
    document.getElementById('pestate').value='';
  }
}