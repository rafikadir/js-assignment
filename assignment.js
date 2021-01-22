//Kilometer TO Meter
function kilometerToMeter(km){
    var meter = km * 1000;
    if (km<1) {
        return "Enter a Valid Number";
    }
    return meter;
}


// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var watchCost = watchPrice *  watch;
    var phoneCost = phonePrice * phone;
    var laptopCost = laptopPrice * laptop;

    var totalCost = watchCost + phoneCost + laptopCost;

    return totalCost;
}


//Hotel Cost
function hotelCost(days) {
    var roomPrice = 100;
    
    if(days<=10){
        cost = days * roomPrice;
    }
    else if (days>=11 && days<=20){
        var beforeDiscount = 10*100;
        var totalDay = days - 10;
        var discount = roomPrice - 20;
        var afterDiscount = discount * totalDay;
        cost = beforeDiscount + afterDiscount;
    }

    else {
        var FirstPrice = 10*100;
        var secondPrice = 10* 80;
        var totalDays = days - 20;
        var discount = roomPrice -50;
        var afterDiscount = totalDays * discount;
        cost = FirstPrice + secondPrice + afterDiscount;
    }

    return cost;
}


//Mega Friend
function megaFriend(friends){
    var megaName = "";

    for (var i = 0; i<friends.length; i++) {
        var element = friends[i]; 

        if (megaName.length<element.length) {
            megaName = element;
        }
    }

    return megaName;
}
