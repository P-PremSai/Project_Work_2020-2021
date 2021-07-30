
// function SubmitNext(){
//   let percent10=document.getElementById('percent').value;
//   let percent12=document.getElementById('percent12').value;
//   if((form.mode[0].checked ==false ) && (form.mode[1].checked ==false) && (form.mode[2].checked ==false) && (form.mode[3].checked ==false))
//   {
//     alert('Please select the Mode of Admission');
//   }
//   else if (form.bran.selectedIndex==0) {
//     alert("Please select your branch");
//   }
//   else if(form.boa10.selectedIndex==0){
//     alert("Please select your class 10th board name");
//   }
//   else if (form.yop10.selectedIndex==0) {
//     alert("Please select Year of passing of your class 10th");
//   }
//   else if(percent10==''){
//     alert("Please enter your class 10th percentage");
//   }
//   else if(percent10<'35'){
//     alert("Your percentage should be greater than 35% in class 10");
//   }
//   else if(form.boa12.selectedIndex==0){
//     alert("Please select your class 12th board name");
//   }
//   else if (form.yop12.selectedIndex==0) {
//     alert("Please select Year of passing of your class 12th");
//   }
//   else if(percent12==''){
//     alert("Please enter your class 12th percentage");
//   }
//   else if(percent12<'35'){
//     alert("Your percentage should be greater than 35% in class 12");
//   }
//   else if (PercentValidate(percent10)==false) {
//     PercentValidate(percent10);
//   }
//   else if (PercentValidate(percent12)==false) {
//     PercentValidate(percent12);
//   }
//   else {
//     window.location.href="page3.html";
//   }
// }
// function NameCheck(name){
//   let namereg=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
//   if(namereg.test(name)==true){
//     return true;
//   }
//   else {
//     alert('Please check your Board name');
//     return false;
//   }
// }
// function PercentValidate(percent){
//   let percentreg=/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/;
//   if (percentreg.test(percent)==true) {
//     return true;
//   }
//   else{
//     alert('Please Enter valid percentage');
//   }
// }
