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
        console.log($rowDiv);
    }
}

generateSchedule();
// Display current day

// Color rows based on time of day

// Make descriptions clickable, turning them into a form

// Return form to a <p> passing in new text

// enable saving to local storage