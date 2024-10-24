
let dizel=24.53, benzin=22.25, lpg=11.1
const newLine="\r\n" 

const fuelText="1-Dizel"+ newLine
+"2-Benzin"+newLine
+"3-LPG"+newLine
+"Select fuel type";


let fuelType=prompt(fuelText);

if( fuelType == "1" || fuelType == "2" || fuelType == "3"){
  let fuelLiter=Number(prompt("Enter fuel liter"));
  let balance=Number(prompt("Please enter the balance"));

  if(fuelType == "1"){

    let amountDue=dizel*fuelLiter
    if( amountDue<balance){
      alert("Fueling process succesful" + newLine
        +"Remaining balance : " + (balance-amountDue)
      )
    }
    else{
      alert("The balance is not enough"+newLine
        +"Amount due : " + amountDue+newLine
        +"Balance : " + balance+newLine
        +"Insufficient amount : " + (amountDue-balance)
      );
    }

  }
  else if(fuelType=="2"){
    let amountDue=benzin*fuelLiter
    if( amountDue<balance){
      alert("Fueling process succesful" + newLine
        +"Remaining balance : " + (balance-amountDue)
      )
    }
    else{
      alert("The balance is not enough"+newLine
        +"Amount due : " + amountDue+newLine
        +"Balance : " + balance+newLine
        +"Insufficient amount : " + (amountDue-balance)
      );
    }
  }
  else if(fuelType=="3"){
    let amountDue=lpg*fuelLiter
    if( amountDue<balance){
      alert("Fueling process succesful" + newLine
        +"Remaining balance : " + (balance-amountDue)
      )
    }
    else{
      alert("The balance is not enough"+newLine
        +"Amount due : " + amountDue+newLine
        +"Balance : " + balance+newLine
        +"Insufficient amount : " + (amountDue-balance)
      );
    }
  }
}

else{
  alert("Please select a suitable fuel type!")
}