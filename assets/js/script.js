
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];


//to fetch the date month and year 
var date = moment().format("dddd MMMM Mo YYYY");
console.log(moment().format("dddd MMMM Mo YYYY"));
$("#currentDay").append(date);

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
updateTime();
function updateTime() {
    var currentHour = moment().format("H");
    console.log(currentHour);
    for (i = 0; i < timeOfday.length; i++) {
        timeOfday[i] = parseInt(timeOfday[i]);
        console.log(timeOfday[i]);
        if (timeOfday[i] > currentHour) {
            $("#" + timeOfday[i]).attr("style", " background-color: #77dd77");
            console.log("coming hour");
        }
         if (timeOfday[i] < currentHour) {
            $("#" + timeOfday[i]).attr("style", "background-color: #d3d3d3");
            console.log("previous hour");
        }
        if (timeOfday[i] === currentHour) {
            $("#" + timeOfday[i]).attr("style", "background-color: #ff696");
            console.log("current hour");

        }//end of if loop
    }//end of for loop
}//end of function
$(".savebtn").on("click", function () {
    var userText = $(this).text();
    console.log($(this).text());
    // var userTime = $(this)
});
