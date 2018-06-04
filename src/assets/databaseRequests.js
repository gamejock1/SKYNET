let flightPlanActions = [];

$.get('https://skynet-table.herokuapp.com/api/all-flight-plans-and-actions', (data) => {
  console.log(data);
  flightPlanActions = data;
});

$(document).on('click', '#flightControlButton', (event) => {
  event.preventDefault();
  for(let i = 0; i < flightPlanActions.length; i++){
    let flightBtn = $('<button>');
    $(flightBtn).attr('class', 'buttonGeneral');
    $(flightBtn).attr('data-id', flightPlanActions.flightPlans[i].flight_plan_id);
    $(flightBtn).text(flightPlanActions.flightPlans[0].flight_plan_name);
    $('#test').append(flightBtn);
  }
});

// document.getElementById('test').innerHTML = flightPlanActions.flightPlans[0].flight_plan_name;
// });
