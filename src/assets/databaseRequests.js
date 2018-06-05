let flightPlanActions = [];
let flightPlansNames = [];

$.get('https://skynet-table.herokuapp.com/api/all-flight-plans-and-actions', (data) => {
  console.log(data);
  flightPlanActions = data.flightPlans;
  for (let i = 0; i < flightPlanActions.length; i++) {
    flightPlansNames.push(flightPlanActions[i].flight_plan_name);
  }
  flightPlansNames = unique(flightPlansNames);
});

$(document).on('click', '#loadFlightPlans', (event) => {
  event.preventDefault();
  console.log('TRYING TO GENERATE BUTTONS, IT HURTS');
  console.log(flightPlansNames.length);
  for (let i = 0; i < flightPlanActions.length; i++) {
    let flightBtn = $('<button class="buttonGeneral" style="border-radius:15px; background:rgb(21,15,59); padding:0; width:100px; height:50px; color:aliceblue; margin:1%;">');
    $(flightBtn).text(flightPlanActions[i].flight_plan_name);
    $('#test').append(flightBtn);
  }
});

// document.getElementById('test').innerHTML = flightPlanActions.flightPlans[0].flight_plan_name;
// });
