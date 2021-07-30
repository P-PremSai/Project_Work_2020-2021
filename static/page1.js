
//   var fname=document.getElementById('sfname').value;
//   var lname=document.getElementById('slname').value;
//   var dob=document.getElementById('dob').value;
//   let email=document.getElementById('email').value;
//   let phone=document.getElementById('mobile').value;
//   let adhar=document.getElementById('adhar').value;
//   const errorele = document.getElementById('error');
//   const form = document.getElementById('form');

//   form.addEventListener('submit',(e)=>{
//     let messages = []
//     e.preventDefault()
//     errorele.innerText = messages.join(', ')
//   })


// function NameCheckf(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Enter valid first name');
//     return false;
//   }
// }
// function NameCheckl(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Enter valid last name');
//     return false;
//   }
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
// function AdharNo(adhar){
//   let adharreg=/^\d{12}$/;
//   if (adharreg.test(adhar)) {
//     return true;
//   }
//   else {
//     alert('please enter valid adhar');
//     return false;
//   }
// }

// /*
//   if (fname=='') {
//     alert("Please enter your First name");
//     console.log(fname);
//   }
//   else if (lname=='') {
//     alert("Please enter your Last name");
//   }
//   else if (dob=='') {
//     alert("Please enter your Date of Birth");
//   }
//   else if(form.gen.selectedIndex==0)
//   {
//     alert("Please select the gender");
//   }
//   else if (phone=='') {
//     alert("Please enter your Phone Number");
//   }
//   else if (email=='') {
//     alert("Please enter your Email-ID");
//   }
//   else if (form.blo.selectedIndex==0) {
//     alert("Please select the blood group");
//   }
//   else if (form.contry.selectedIndex==0) {
//     alert("Please select the country");
//   }
//   else if (form.releg.selectedIndex==0) {
//     alert("Please select your relegion");
//   }
//   else if (adhar=='') {
//     alert('Please Enter your Aadhar card number');
//   }
//   else if (NameCheckf(fname)==false) {
//     alert('Please Enter the First name correctly');
//   }
//   else if (NameCheckl(lname)==false) {
//     alert('Please Enter the Last name correctly');
//   }
//   else if (form.cate.selectedIndex==0) {
//     alert("please select your caste category");
//   }
//   else if (PhoneNumber(phone)==false) {
//     PhoneNumber(phone);
//   }
//   else if (EmailCheck(email)==false) {
//     EmailCheck(email);
//   }
//   else if (AdharNo(adhar)==false) {
//     AdharNo(adhar);
//   }
//   else {
//     window.location.href="page2.html";
//   }
//   */