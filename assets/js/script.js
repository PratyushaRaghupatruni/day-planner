
//to fetch the date month and year 
function displayDate() {
    var date = moment().format("dddd MMMM Do YYYY");
    console.log(moment().format("dddd MMMM Do YYYY"));
    $("#currentDay").text(date);
    $("#currentDay").addClass("font-weight-bold text-info");
}
//An Array for updating the background color
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function updateBackground() {
    //getting the current hour
    var currentHour = moment().format("H");
    console.log(currentHour);
    //converting the current hour to integer
    currentHour=parseInt(currentHour);
   
    for (i = 0; i < timeOfday.length; i++) {
       //converting the timeofday string to integer
        timeOfday[i] = parseInt(timeOfday[i]);
        if (timeOfday[i] > currentHour) {
            //the id of text area is the time corresponding to textarea
            //ex #=id and timeofday[0]=9 it fetches the #9 ie textarea of 9
            $("#" + timeOfday[i]).addClass("future");
        }
        if (timeOfday[i] < currentHour) {
            $("#" + timeOfday[i]).addClass("past");
        }
        if (timeOfday[i] === currentHour) {
            $("#" + timeOfday[i]).addClass("present");
        }
    }
}

$(".saveBtn").on("click", function () {
    //fetches the textarea value
    var  userText = $(this).parent().children("textarea").val();
    console.log(userText);
    //fetched the usertime
    var userTime = $(this).parent().attr("id");//row id has the time corrsponding to each textarea
    console.log(userTime);

    var currentEvent = {
        eventText: userText,
        eventTime: userTime,
    }
    if(userText===""){
        alert("Enter some Event");
    }
    else if(userText!==""){
        //if usertext is not emmpty stores the item in local storage
    localStorage.setItem(userTime, userText);
    }
});
//calling the functions
displayDate();
updateBackground();
//getting all the events which are stored
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

