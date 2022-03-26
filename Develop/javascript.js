//Global Variables
var $timeTable = $('.container');

// Display current day
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

function saveBtnClk() {
    //set ref to description
    let myDesc = this.previousElementSibling;
    console.log(myDesc.textContent);

    //set ref to time slot
    let myTime = myDesc.previousElementSibling;
    console.log(myTime.textContent);

    //create new task obj to save
    //var task = {savedDesc: myDesc.textContent, savedTime: myTime.textContent};
    //console.log(task);

    localStorage.setItem( myTime.textContent, myDesc.textContent );
}

function descriptionClick() {
    // get current text of p
    console.log("entered description click");
    var text = $(this)
        .text()
        .trim();

    // convert p to textarea with text value
    var textInput = $("<textarea>").addClass("col-sm-10 textarea").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
}

// Color rows based on time of day

generateSchedule();
loadTasks();

// Make descriptions clickable, turning them into a form
$('.description').on('click', descriptionClick);

//Revert textarea to p
$('.row').on("blur", "textarea", function() {
    console.log('blur entered');
    // get value of textarea
    var text = $(this).val();
    
    // recreate p element
    var taskP = $("<p>")
        .addClass('col-sm-10 description')
        .text(text)
        .on('click', descriptionClick);

    // replace textarea with p
    $(this).replaceWith(taskP);
});

$(".container button").on("click", saveBtnClk);