$(function() { //this will wrap all code to ensure it doesnt run prior to he the browser is finished witht he HTML.
   $(function() {

 
  $(".saveBtn").on("click", function() {  // Add listener for click events on the save button
    // Get the user input and the id of the containing time-block
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

   
  var currentHour = parseInt(dayjs().format("H")); //This shows past, present, or future class to each time block 
  $(".time-block").each(function() { //this will loop through eeach time block
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);//by comparing the id to the current hour
    //split  to split the attribute and get the secons element. 
    if (timeBlockHour < currentHour) { //our conditions comparing the timeblock
      $(this).addClass("past"); //this is in the past 
    } else if (timeBlockHour === currentHour) { //if this is strict equal to the current hour
      $(this).addClass("present");
    } else {
      $(this).addClass("future"); //otherwise its in the future tinme
    }
  });

  $(".time-block").each(function() {//get anything that was saved in local storage and set values to its texts area elemts.
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);

    if (userInput !== null) { 
      $(this).children(".description").val(userInput);
    }
    });

    });
        // Display the current date in the header of the page
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  });

