let flightPlanActions = [];

$.get('https://skynet-table.herokuapp.com/api/all-flight-plans-and-actions', (data) => {
  console.log(data);
  flightPlanActions = data.flightPlans;
});

$(document).on('click', '#loadFlightPlans', (event) => {
  event.preventDefault();
  console.log('TRYING TO GENERATE BUTTONS, IT HURTS');
  console.log(flightPlanActions.length);
  for (let i = 0; i < flightPlanActions.length; i++) {
    let flightBtn = $('<button>');
    $(flightBtn).attr('class', 'buttonGeneral');
    $(flightBtn).attr('data-id', flightPlanActions[i].flight_plan_id);
    $(flightBtn).text(flightPlanActions[i].flight_plan_name);
    $('#test').append(flightBtn);
  }
});

// document.getElementById('test').innerHTML = flightPlanActions.flightPlans[0].flight_plan_name;
// });
