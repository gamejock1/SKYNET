let flightPlans = [];

$.get('https://skynet-table.herokuapp.com/api/flight-plans', (data) => {
  console.log(data);
  flightPlans = data.flightPlans;
});

$(document).on('click', '#loadFlightPlans', (event) => {
  event.preventDefault();
  console.log('TRYING TO GENERATE BUTTONS, IT HURTS');
  console.log(flightPlans.length);
  for (let i = 0; i < flightPlans.length; i++) {
    let flightBtn = $('<button>');
    $(flightBtn).attr('class', 'buttonGeneral');
    $(flightBtn).attr('data-id', flightPlans[i].flight_plan_id);
    $(flightBtn).text(flightPlans[i].flight_plan_name);
    $('#test').append(flightBtn);
  }
});

// document.getElementById('test').innerHTML = flightPlanActions.flightPlans[0].flight_plan_name;
// });
