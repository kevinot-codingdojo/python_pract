var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
// if (HOUR == 8 && MINUTE == 50 && PERIOD == "AM" )
// {
//  console.log ("It's almost 9 in the morning")
// }
  var HOUR = 7;
  var MINUTE = 15;
  var PERIOD = "PM";
  // if (HOUR == 7 &&  MINUTE == 15 &&  PERIOD == "PM")
  // {
  //   console.log("It's just after 7 in the evening");
  // }
var HOUR = 3;
var MINUTE = 35;
var PERIOD = "AM";
if (MINUTE < 30 )
{
  console.log("It's just after", HOUR);
}
else if (MINUTE > 30)
{
  console.log("It's just before", HOUR +1);
}
if (PERIOD == "AM" )
{
  console.log("In the morning");
}
else if ((PERIOD == "PM") &&
        (HOUR <= 6) ||
        (HOUR == 12))
{
  console.log("In the afternoon");
}
else
{
  console.log("In the evening");
}
