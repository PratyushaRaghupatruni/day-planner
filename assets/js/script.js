
//to fetch the date month and year 
function displayDate() {
    var date = moment().format("dddd MMMM Do YYYY");
    console.log(moment().format("dddd MMMM Do YYYY"));
    $("#currentDay").text(date);
    $("#currentDay").addClass("font-weight-bold text-info");
}
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function updateBackground() {
    var currentHour = moment().format("H");
    console.log(currentHour);
    currentHour=parseInt(currentHour);
   
    for (i = 0; i < timeOfday.length; i++) {
        timeOfday[i] = parseInt(timeOfday[i]);
        if (timeOfday[i] > currentHour) {
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
    var  userText = $(this).parent().children("textarea").val();
    console.log(userText);
    var userTime = $(this).parent().attr("id");
    console.log(userTime);

    var currentEvent = {
        eventText: userText,
        eventTime: userTime,
    }
    if(userText===""){
        alert("Enter some Event");
    }
    else if(userText!==""){
    localStorage.setItem(userTime, userText);
    }
});

displayDate();
updateBackground();
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

