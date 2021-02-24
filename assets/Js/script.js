var button = $('.saveBtn')

//Add current date at the top of the planner 

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do, h:mm a');

  $('#currentDay').text(date);


  //Set styling so that business hours that have passed are greyed out;  if / else for time component 
  //Set styling so that the current time/hour is a red color;
  //Set styling so that hours that have not yet occured are in green 


  function currentTime() {
    var current = moment().hours()
    var time = $('.row');

    //    console.log(current);

    time.each(function () {
      var hour = parseInt($(this).attr('id'))

    //  console.log(hour);

      if (hour === current) {
        $(this).children('.col-10').attr('class', 'present col-10 description')
    //    console.log(('present' + hour + current))
      } else if (current > hour) {
        $(this).children('.col-10').attr('class', 'past col-10 description')
    //    console.log(('past' + hour + current))
      } else {
        $(this).children('.col-10').attr('class', 'future col-10 description')
    //    console.log(('future' + hour + current))
      }
    })
  }
  currentTime()

  //Set up local storage to store changes in events by timeblock

  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })

  $('#hour-9 textarea').val(localStorage.getItem('hour-9').replace(/['"]+/g, ''));
  $('#hour-10 textarea').val(localStorage.getItem('hour-10').replace(/['"]+/g, ''));
  $('#hour-11 textarea').val(localStorage.getItem('hour-11').replace(/['"]+/g, ''));
  $('#hour-12 textarea').val(localStorage.getItem('hour-12').replace(/['"]+/g, ''));
  $('#hour-13 textarea').val(localStorage.getItem('hour-13').replace(/['"]+/g, ''));
  $('#hour-14 textarea').val(localStorage.getItem('hour-14').replace(/['"]+/g, ''));
  $('#hour-15 textarea').val(localStorage.getItem('hour-15').replace(/['"]+/g, ''));
  $('#hour-16 textarea').val(localStorage.getItem('hour-16').replace(/['"]+/g, ''));
  $('#hour-17 textarea').val(localStorage.getItem('hour-17')).replace(/['"]+/g, '');
//  console.log(parent);

  

  button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })
  


});