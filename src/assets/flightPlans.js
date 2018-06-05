let flightPlansModel = [
  {
    flight_plan_id: 1,
    flight_plan_name: "alpha",
    flight_plan_actions: [
      {
        action_order_num: 0,
        action_type: "takeOff",
        action_param: "",
        action_wait: 1000
      },
      {
        action_order_num: 1,
        action_type: "calibrate",
        action_param: "0",
        action_wait: 3000
      },
      {
        action_order_num: 2,
        action_type: "land",
        action_param: "",
        action_wait: 0
      }
    ]
  }
];

Array.prototype.unique = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

//Pulls unique list of flight plans ids
let flightPlansIds = [];
for (let i = 0; i < flightPlanActions.length; i++) {
  flightPlansIds.push(flightPlanActions[i].flight_plan_id);
}
flightPlansIds = flightPlansIds.unique();

//Pulls unique list of flight plans names
let flightPlansNames = [];
for (let i = 0; i < flightPlanActions.length; i++) {
  flightPlansIds.push(flightPlanActions[i].flight_plan_name);
}
flightPlansNames = flightPlansNames.unique();


