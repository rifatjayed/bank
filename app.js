
var wrong= document.querySelector(".danger");
var myBtn= document.querySelector(".mybtn");
myBtn.addEventListener("click", function(){
   var userName= document.querySelector("#name").value;
var passWord= document.querySelector(".pass").value; 
    if(userName =="rifat" && passWord =="jayed"){
        document.querySelector(".none").style.display= "block";
        document.querySelector(".welcm").style.display= "none";
    }
    else{
    wrong.innerHTML= "Your Information Is Wrong";
    wrong.style.color= "red";
    }
});

var depositeBtn= document.querySelector(".deposite-btn");
depositeBtn.addEventListener("click", function(){
  var depositeAmmount=document.querySelector(".deposite-ammount").value;
  var depositeNumber= parseFloat(depositeAmmount);

 
var currentDeposite= document.querySelector(".deposite-now").innerHTML;
  var currentDepositeNumber= parseFloat(currentDeposite);
  var totalDeposite= depositeNumber+currentDepositeNumber;

  document.querySelector(".deposite-now").innerHTML= totalDeposite; 
  document.querySelector(".deposite-ammount").value="";

var currentBalancee=document.querySelector(".currentBalance").innerHTML;
var currentBalanceNumber= parseFloat(currentBalancee);
var totalBalance= depositeNumber+ currentBalanceNumber;
document.querySelector(".currentBalance").innerHTML= totalBalance;

})

var withdrawBtn= document.querySelector(".withdraw-btn");
withdrawBtn.addEventListener("click", function(){
  var withdrawAmmount=document.querySelector(".withdraw-ammount").value;
  var withdrawAmmountNumber= parseFloat(withdrawAmmount);

  var currentWithdraw= document.querySelector(".withdrawNow").innerHTML;
  var currentWithdrawNumber= parseFloat(currentWithdraw);
  var totalWithdraw= currentWithdrawNumber+withdrawAmmountNumber;
  document.querySelector(".withdrawNow").innerHTML=totalWithdraw;
  document.querySelector(".withdraw-ammount").value="";


  var currentBalancee=document.querySelector(".currentBalance").innerHTML;
var currentBalanceNumber= parseFloat(currentBalancee);
var totalBalance= currentBalanceNumber-withdrawAmmountNumber;
document.querySelector(".currentBalance").innerHTML= totalBalance;
})