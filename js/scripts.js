// Business Logic

function oneObject(fullName, initial_Deposit, balance) {
  this.fullName = fullName;
  this.initial_Deposit = initial_Deposit;
  this.balance = 0;
  this.array = [];
}

oneObject.prototype.fullestNamePROTOTYPE = function() {
  return this.fullName;
}

oneObject.prototype.initialBalancePROTOTYPE = function() {
  return "Your initial deposit amount was: $" + this.initial_Deposit + " USD";
}

console.log("meep");

// User Interface Logic

$(document).ready(function() {
  $("form#Formation").submit(function(event) {
    event.preventDefault();
    var fullNameVAR = $("input#FullyNameID").val();
    var startMoneyVAR = parseInt($("input#MoneyFormID").val());
    var newClientVAR = new oneObject(fullNameVAR, startMoneyVAR)
    console.log("beep");
    // $("#wrapperFullyNameID").each(function() {
    newClientVAR.array.push(newClientVAR);

      $("ul#LISTnewMoneyID").append("<li><span class='contact'>" + newClientVAR.fullestNamePROTOTYPE() + "</span></li>");
      console.log(newClientVAR);
      $("ul#LISTnewMoneyID").append("<li>" + newClientVAR.initialBalancePROTOTYPE() + "</li>");
  });



  });
