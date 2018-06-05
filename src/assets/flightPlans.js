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



//Pulls unique list of flight plans ids
let flightPlansIds = [];
for (let i = 0; i < flightPlanActions.length; i++) {
}
flightPlansIds = flightPlansIds.unique();




