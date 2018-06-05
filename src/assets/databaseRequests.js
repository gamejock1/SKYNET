let flightPlans = [];
let selectedFlightPlanActions = [];
let selectedFlightPlanId = '';
let selectedFlightPlanActionOrderArray = [];
let action_order_num;
let action_type;

$.get('https://skynet-table.herokuapp.com/api/flight-plans', (data) => {
  console.log(data);
  flightPlans = data.flightPlans;
});

$(document).on('click', '#flightControlButton', (event) => {
  event.preventDefault();
  console.log('TRYING TO GENERATE BUTTONS, IT HURTS');
  for (let i = 0; i < flightPlans.length; i++) {
    let flightBtn = $('<button class="flightPlanButton" style="border-radius:15px; background:rgb(21,15,59); padding:0; width:100px; height:50px; color:aliceblue; margin:1%;">');
    $(flightBtn).attr("id", flightPlans[i].flight_plan_id);
    $(flightBtn).text(flightPlans[i].flight_plan_name);
    $('#flightPlanDiv').append(flightBtn);
  }
});

$(document).on('click', '#flightPlanButton', (event) => {
  event.preventDefault();
  generateFlightPlansList();
});

$(document).on('click', '#refreshFlightPlans', (event) => {
  event.preventDefault();
  $('#params').empty();
  $('#plans').empty();
  selectedFlightPlanId='';
  generateFlightPlansList();
});

function refreshOnActionDelete() {
  $('#params').empty();
  $('#plans').empty();
  generateFlightPlansList();
  getAndDisplayActions(selectedFlightPlanId);
}


function generateFlightPlansList() {
  $.get('https://skynet-table.herokuapp.com/api/flight-plans', (data) => {
    console.log(data);
    flightPlans = data.flightPlans;
    console.log('GENERATING FLIGHT PLANS LISTING, IT HURTS');
    for (let i = 0; i < flightPlans.length; i++) {
      let flightBtn = $('<div class="flightPlanListing">');
      let editBtn = $('<button class="editFlightPlanNameButton">Edit</button>');
      let deleteBtn = $('<button class="deleteFlightPlanNameButton">X</button>');
      $(editBtn).attr('data-flight-plan-id', flightPlans[i].flight_plan_id);
      $(deleteBtn).attr('data-flight-plan-id', flightPlans[i].flight_plan_id);
      $(flightBtn)
        .attr({
          "id": `flightPlan${flightPlans[i].flight_plan_id}`,
          'data-flight-plan-id': flightPlans[i].flight_plan_id
        })
        .text(flightPlans[i].flight_plan_name)
        .append(editBtn, deleteBtn);
      $('#plans').append(flightBtn);
    }
  });
}

$(document).on('click', '.deleteFlightPlanNameButton', (event) => {
  event.preventDefault();
  console.log('Flight Plan ID:', $(event.target).data('flightPlanId'));
  let flightPlanToDeactivate = $(event.target).data('flightPlanId');
  $.ajax({
    url: `https://skynet-table.herokuapp.com/api/deactivate-flight-plan/${flightPlanToDeactivate}`,
    type: 'PUT',
    dataType: 'json',
    success: deleteFlightPlanSuccess(),
    data: {"flight_plan_active": 0}
  }).then(() => {
    generateFlightPlansList();
  })
});

function deleteFlightPlanSuccess() {
  console.log('successfully deleted');
}

$(document).on('click', '.flightPlanListing', (event) => {
  event.preventDefault();
  $('#params').empty();
  selectedFlightPlanActionOrderArray = [];
  console.log('Flight Plan ID to Display:', $(event.target).data('flightPlanId'));
  let flightPlanToDisplay = $(event.target).data('flightPlanId');
  selectedFlightPlanId = flightPlanToDisplay;
  getAndDisplayActions(flightPlanToDisplay)
});

function getAndDisplayActions(flightPlanID) {
  $('#params').empty();
  $.get(`https://skynet-table.herokuapp.com/api/flight-plan-actions/${flightPlanID}`, (data) => {
    console.log(data);
    selectedFlightPlanActions = data.flightPlans;
    console.log('GENERATING FLIGHT PLAN ACTIONS LISTING, IT HURTS');
    for (let i = 0; i < selectedFlightPlanActions.length; i++) {
      selectedFlightPlanActionOrderArray.push(selectedFlightPlanActions[i].action_order_num);
      console.log(`creating item ${i}`);
      let actionBtn = $('<div class="flightPlanListing">');
      let editBtn = $('<button class="editFlightPlanActionButton">Edit</button>');
      let deleteBtn = $('<button class="deleteFlightPlanActionButton">X</button>');
      $(editBtn).attr('data-action-id', selectedFlightPlanActions[i].action_id);
      $(deleteBtn).attr('data-action-id', selectedFlightPlanActions[i].action_id);
      $(actionBtn)
        .attr({
          "id": `actionId${selectedFlightPlanActions[i].action_id}`,
          'data-action-id': selectedFlightPlanActions[i].action_id
        })
        .text(`${selectedFlightPlanActions[i].flight_plan_name}: ${selectedFlightPlanActions[i].action_type}`)
        .append(editBtn, deleteBtn);
      $('#params').append(actionBtn);
    }
    console.log('selectedFlightPlanActionOrderArray', selectedFlightPlanActionOrderArray);
  });
}

$(document).on('click', '.deleteFlightPlanActionButton', (event) => {
  event.preventDefault();
  console.log("Flight Plan Action ID:", $(event.target).data('actionId'));
  let flightPlanActionToDeactivate = $(event.target).data('actionId');
  $.ajax({
    url: `https://skynet-table.herokuapp.com/api/deactivate-flight-plan-action/${flightPlanActionToDeactivate}`,
    type: 'PUT',
    dataType: 'json',
    success: refreshOnActionDelete(),
    data: {"action_active": 0}
  });
});

$(document).on('click', '.addAction', (event) => {
  event.preventDefault();
  action_order_num = Math.max(...selectedFlightPlanActionOrderArray) + 1;
  console.log('action_order_num', action_order_num);
  console.log("Flight Plan Action ID:", $(event.target).attr('id'));
  let flightPlanActionToAdd = $(event.target).attr('id');
  action_type = '';
  if(selectedFlightPlanId !== ''){
    switch (flightPlanActionToAdd) {
      case ('takeOffFP'):
        action_type = 'takeOff';
        break;
      case ('landFP'):
        action_type = 'land';
        break;
      case ('turnLeftFP'):
        action_type = 'turnLeft';
        break;
      case ('turnRightFP'):
        action_type = 'turnRight';
        break;
      case ('moveFrontFP'):
        action_type = 'moveFront';
        break;
      case ('moveLeftFP'):
        action_type = 'moveLeft';
        break;
      case ('moveRightFP'):
        action_type = 'moveRight';
        break;
      case ('moveBackFP'):
        action_type = 'moveBack';
        break;
      case ('moveUpFP'):
        action_type = 'moveUp';
        break;
      case ('moveDownFP'):
        action_type = 'moveDown';
        break;
      case ('calibrateFP'):
        action_type = 'calibrate';
        break;
      case ('stopFP'):
        action_type = 'stop';
        break;
      default:
        console.log('wtf')
    }
    $.ajax({
      url: `https://skynet-table.herokuapp.com/api/new-flight-plan-action`,
      type: 'POST',
      dataType: 'json',
      success: success(),
      data: {
        "flight_plan_id": selectedFlightPlanId,
        "action_order_num": action_order_num,
        "action_type": action_type,
        "action_param": "",
        "action_wait": 1000
      }
    }).then(() =>{
      getAndDisplayActions(selectedFlightPlanId);
    });
  }
});

function success() {
  console.log("success")
}
