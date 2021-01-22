
// Length convert

function kilometerToMeter(kilometer){       // Initialize a function
    var meter=kilometer*1000;
    return meter;  //function return
}
try{                                        //error handling
    var calculateMeter=kilometerToMeter();
    console.log(calculateMeter);
}
catch(error){
    console.log(error.name);
}
// Length convert end


// budget calculating start
//variable declearation
var watchPrice=50;  
var mobilePrice=100;
var laptopPrice=500;
function budgetCalculator(watch,mobile,laptop){
    var watchCost=watch*watchPrice;
    var mobileCost=mobile*mobilePrice;
    var laptopCost=laptop*laptopPrice;
    var totalBudget=watchCost+mobileCost+laptopCost;
    return totalBudget; //function return
}
var totalCost=budgetCalculator();  //calling function
console.log(totalCost);
// Bugdet calculate end



//hotelCost programme
// Variable clearation
var startPrice=100;
var discountPriceOne=80;
var discountPriceTwo=50;
function hotelCost(days){
    for(var i=0; i<=days; i++){
        if(i<=10){              //conditional statement
            var result=days*100; 
        }
        else if(i<=20){
            var result=result+80-100;  //calculate next 11-20 days
        }
        else{
            var result=result+50-100;  //caculate next 21---- days
        }
    }
    return result;
}
var costInHotel=hotelCost();  //calling function
console.log(costInHotel);
//hotelCost programme end


// MegaFriend Aeeay start

function megaFriend(friends){
    var maxString=friends[0];
for(var i=1;i<friends.length; i++){      // for loop that runs finding array length
    if(friends[i].length>maxString.length){
        maxString=friends[i];
    }
}
return maxString; //function return
}
var largestName=megaFriend(); //calling function
console.log(largestName);

// MegaFriend Array programme end
