document.getElementById(+happenings);

 var gatherFood = function () {
   var gatherFoodNum = math.random() * (1 - 11) + 1 + toolMod;
    if (gatherFoodNum < 2 ) {
      var happenings = "You gathered no food,  you are bad, and you should feel bad.";
      
    } else if ( 7 < gatherFoodNum ) {
       happenings = "You gather some morsels of food.";
      foodValue = foodValue + 5;
    } else {
       happenings = "You gathered an impressive amount of food.";
      var foodValue = foodValue + 10;
    }
 };
 
 var makeTools = function() {
   var makeToolsNum = math.random()  * (1 - 101) + 1 + rescourceMod;
   
   if (makeToolsNum < 15){
     var happenings = "You tried to make a tool but it broke and you feel bad.";
     toolMod = 0;
   } else if ( 75 > makeToolsNum ){
     
      happenings = "You succeded in making a tool it holds steady, but it feels wrong somehow. ";
     tooldmod = .5;
     
   } else {
     
      happenings = "You like this tool, it seems right";
     
     toolMod = 2;
     
   }
   
   
   
 };
 var rescourceMod = 0 ;
 var explore = function () {
   var exploreNum = math.random()  * (1 - 11) + 1 + toolMod ;
   if (foodValue >;){
   
     
   
   
   if (exploreNum < 2 ) {
     happenings = "You find some things to collect but it not much.";
      resourceMod = 10;
     
   } else if (exploreNum < 9){
     happenings = "You find a suprising amount of resourses";
     rescourceMod = rescourseMod + 10;
     
   } else  {
     
     happenings = "HOLY CRAP you found the best thing ever";
     rescourceMod = resourceMod + 20
   }
   } else {
     
   }
 };
