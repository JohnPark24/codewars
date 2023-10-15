// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents


function fuelPrice(litres, pricePerLitre) {
    let discount = 0;

    if (litres >= 10) discount = 0.25;
    else if (litres >= 8) discount = 0.20;
    else if (litres >= 6) discount = 0.15;
    else if (litres >= 4) discount = 0.10;
    else if (litres >= 2) discount = 0.05;

    let total = litres * (pricePerLitre - discount);
    
    return Math.round(total * 100) / 100;
}


function fuelPrice(litres, pricePerLiter) {
    for (var i = 2; i <= 10; i +=2) { //discount loop
      if (litres >= i) {
        pricePerLiter -= 0.05;
      }
    }
    return Math.round(litres * pricePerLiter * 100) / 100;;
}