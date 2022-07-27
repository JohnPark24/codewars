// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
    let count = 1;
    if(h > 0 && 0 < bounce < 1 && window < h){

        count++;
        // while(h * bounce > window){
        //     count += 2;
        // }
    }
    // }else{
    //     return -1;
    // }
    return count;
}
bouncingBall(3.0, 0.66, 1.5)




function bouncingBall(h,  bounce,  window) {
    var currentHeight = h;
    var numberOfPasses = 0;
    
    console.log(h, bounce, window );
    
    if (bounce <= 0 || bounce >= 1) //Bounce must be between 0 and 1
    {
      return -1;
      console.log("Outside Range!");
    }
    
    while (currentHeight >= window) //Loop starts at balls current height
    {
      numberOfPasses++; //ball passes window on way down
    
      currentHeight = currentHeight * bounce; //new max height to be reached
      
      if (currentHeight >= window) //If that max height is greater than window
      {
        numberOfPasses++; //The ball passes on the way up
      }
      
    }
   
   if (numberOfPasses > 0) 
   {
     return numberOfPasses;
   }
   
   else
   { 
     return -1;
   }
  

}