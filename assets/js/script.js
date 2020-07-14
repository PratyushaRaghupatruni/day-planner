

//to fetch the date month and year 
function displayDate() {
    var date = moment().format("dddd MMMM Mo YYYY");
    console.log(moment().format("dddd MMMM Mo YYYY"));
    $("#currentDay").append(date);
    $("#currentDay").addClass("font-weight-bold text-info");
}

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
function updateBackground() {
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


var dayEvents=[];

$(".saveBtn").on("click", function () {
    var userText = $(this).parent().children("textarea").val();
    console.log(userText);
    var userTime = $(this).parent().attr("id");
    console.log(userTime);

    var updateinfo;

    var currentEvent = {
        eventText: userText,
        eventTime: userTime,
    }
console.log(currentEvent);
dayEvents = JSON.parse(localStorage.getItem("dayEvents"));

    if (userText==="") {
        alert("enter the list of events");
        return false;   
    }
    else if(userText!==""){  
        if(dayEvents===[]){ 
            dayEvents=[currentEvent];
        }
        else{
            dayEvents.push(currentEvent);
        }
    }
 
    localStorage.setItem("dayEvents",JSON.stringify(dayEvents));    
    loadEvents();
});


displayDate();
updateBackground();