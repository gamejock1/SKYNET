let flightPlans = [];

$.get('https://skynet-table.herokuapp.com/api/flight-plans', (data) => {
  console.log(data);
  flightPlans = data.flightPlans;
});

$(document).on('click', '#flightControlButton', (event) => {
  event.preventDefault();
  console.log('TRYING TO GENERATE BUTTONS, IT HURTS');
  console.log(flightPlans.length);
  for (let i = 0; i < flightPlans.length; i++) {
    let flightBtn = $('<button class="flightPlanButton" style="border-radius:15px; background:rgb(21,15,59); padding:0; width:100px; height:50px; color:aliceblue; margin:1%;">');
    $(flightBtn).attr("id", flightPlans[i].flight_plan_id);
    $(flightBtn).text(flightPlans[i].flight_plan_name);
    $('#flightPlanDiv').append(flightBtn);
  }
});
