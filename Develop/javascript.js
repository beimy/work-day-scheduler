//Global Variables
var $timeTable = $('.container');

// Display current day
var currentDate = moment().format();
$('#currentDay').text("Today's Date: " + moment().format() );

// Load in timetable from local or create a new one
function generateSchedule() {
    for(i = 0; i < 9; i++){
        // create row div
        $rowDiv = $("<div>").addClass("time-block row");

        //create and append time sect to row div
        $timeSect = $('<div>').addClass('col-sm-1 hour');
        $timeSect.append('<p>TEXT</p>');
        $rowDiv.append($timeSect);

        //create and append description sect to row div
        $descSect = $('<p>Hello</p>').addClass('col-sm-10 description');
        $rowDiv.append($descSect);

        //create and append button to row div
        $button = $('<button type="button" name="save-btn" class="col-sm-1 saveBtn">');
        $rowDiv.append($button);

        //append rowDiv after each section is added to it
        $('.container').append($rowDiv);
    }

    setTimes();
}

function setTimes() {
    // change time sections to actual times
    $('.hour').each(function( index ) {
        var timeStr = (index + 9);
        if(timeStr < 13){
            var str = timeStr + ' am';
        }
        else {
            timeStr -= 12;
            var str = timeStr + ' pm';
        }
        $(this).text(str);
        // console.log(index + ': ' + $(this).text() );
    }) 
}

function loadTasks() {
    const keys = Object.keys(localStorage);
    for (let key of keys) {
        
        // template literal for a key
        // console.log(`${key}: ${localStorage.getItem(key)}`);
        // console.log(key);

        //get length of elements with .hour class
        let loopLength = $timeTable.find('.hour').length;

        // compare local key to each .hour element
        for (var i = 0; i < loopLength; i++ ) {
            let $hoursToCheck = $timeTable.find('.hour').eq(i);
            if(key == $hoursToCheck.text()){
                overwriteDescription(localStorage.getItem(key), 
                    $timeTable.find('.description').eq(i));
            }
        };
    }
}

function overwriteDescription(savedStr, descToChange) {
    console.log('entered overwrite');
    descToChange.text(savedStr);
}



// Color rows based on time of day

// Make descriptions clickable, turning them into a form

// Return form to a <p> passing in new text

function saveBtnClk() {
    //set ref to description
    let myDesc = this.previousElementSibling;
    myDesc.textContent = "there";
    console.log(myDesc.textContent);

    //set ref to time slot
    let myTime = myDesc.previousElementSibling;
    console.log(myTime.textContent);

    //create new task obj to save
    //var task = {savedDesc: myDesc.textContent, savedTime: myTime.textContent};
    //console.log(task);

    localStorage.setItem( myTime.textContent, myDesc.textContent );

}

generateSchedule();
loadTasks();

$(".container button").on("click", saveBtnClk);