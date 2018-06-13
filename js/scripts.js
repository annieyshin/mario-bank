// Business Logic

function oneObject(fullName, initial_Deposit, balance) {
  this.fullName = fullName;
  this.initial_Deposit = initial_Deposit;
  this.balance = 0;
  this.array = [];
}

oneObject.prototype.initialBalancePROTOTYPE = function() {
  return "Your initial deposit amount was: $" + this.initial_Deposit + " USD";
}



// User Interface Logic

$(document).ready(function() {
  $("form#Formation").submit(function(event) {
    event.preventDefault();
    var fullNameVAR = $("input#FullyNameID").val();

    var newClientVAR = new oneObject(fullNameVAR, startMoneyVAR)
    $("#wrapperFullyNameID").each(function() {
    newClientVAR.array.push(newClientVAR);
  });
      var startMoneyVAR = parseInt($("input#MoneyFormID").val());
    console.log(newClientVAR);
    $("ul#LISTnewMoneyID").append("<li>" + zaccount.initialMoneyAmount() + "</li>");

  });
});
