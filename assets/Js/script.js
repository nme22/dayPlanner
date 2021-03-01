var button = $('.saveBtn')

//Add current date at the top of the planner 

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do, h:mm a');

  $('#currentDay').text(date);


  function currentTime() {
    var currentHour = moment().hours()
    var timeBlock = $('.row');
// use .each to iterate over jquery arrays
    timeBlock.each(function () {
      // parseInt.attr will only parse number strings, so change id's to number values
      var hour = parseInt($(this).attr('id'))

     console.log(hour);

 
    //Set styling so that the current time/hour is a red color;
      if (hour === currentHour) {
        $(this).children('.col-10').attr('class', 'present col-10 textInput')
       console.log(('present' + hour + currentHour))
      } else if (currentHour > hour) {
           //Set styling so that business hours that have passed are greyed out;
        $(this).children('.col-10').attr('class', 'past col-10 textInput')
       console.log(('past' + hour + currentHour))
      } else {
        //Set styling so that hours that have not yet occured are in green 
        $(this).children('.col-10').attr('class', 'future col-10 textInput')
       console.log(('future' + hour + currentHour))
      }
    })
  }
  currentTime();

  //Set up local storage to store changes in events by timeblock

  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })

  $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
  $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
  $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
  $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
  $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
  $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
  $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
  $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
  $('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');

  

  button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })
  

});