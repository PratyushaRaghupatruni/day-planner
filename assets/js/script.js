

//to fetch the date month and year 
function displayDate() {
    var date = moment().format("dddd MMMM Mo YYYY");
    console.log(moment().format("dddd MMMM Mo YYYY"));
    $("#currentDay").append(date);
    $("#currentDay").addClass("font-weight-bold text-info");
}

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
function updateTime() {
    var currentHour = moment().format("H");
    console.log(currentHour);
    for (i = 0; i < timeOfday.length; i++) {
        timeOfday[i] = parseInt(timeOfday[i]);
        console.log(timeOfday[i]);
        if (timeOfday[i] > currentHour) {
            $("#" + timeOfday[i]).attr("style", " background-color: #77dd77");
        }
        if (timeOfday[i] < currentHour) {
            $("#" + timeOfday[i]).attr("style", "background-color: #d3d3d3")
        }
        if (timeOfday[i] === currentHour) {
            $("#" + timeOfday[i]).attr("style", "background-color: #ff696");
        }
    }
}
var listOfevents = [];
$(".saveBtn").on("click", function () {
    var userText = $(this).parent().children("textarea").val();
    console.log(userText);
    var userTime = $(this).parent().attr("id");
    console.log(userTime);

    var dayOfevents = {
        eventText: userText,
        eventTime: userTime,
    }

    if (userText==="") {
        alert("enter the list of events");
    }
    else if(userText!==""){
     localStorage.setItem("eventDetails",JSON.stringify(dayOfevents));  
     var details = JSON.parse(localStorage.getItem("eventDetails"));   
    }

    

    


});
displayDate();
updateTime();