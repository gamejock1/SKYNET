-- PROCEED WITH CAUTION ON THIS ONE!!!
--DROP DATABASE IF EXISTS skynet_db;

-- Created the DB "skynet_db" (local connections)
CREATE DATABASE skynet_db;
USE skynet_db;

-- Created the table "flight_plans"
CREATE TABLE flight_plans (
  flight_plan_id INT AUTO_INCREMENT,
  flight_plan_name VARCHAR(50) NOT NULL UNIQUE,
  flight_plan_active BOOLEAN DEFAULT TRUE,
  PRIMARY KEY(flight_plan_id)
);

-- Created the table "flight_plan_actions"
CREATE TABLE flight_plan_actions (
    action_id INT AUTO_INCREMENT,
    flight_plan_id INT,
    action_order_num INT NOT NULL,
    action_type VARCHAR(50) NOT NULL,
    action_param VARCHAR(15),
    action_wait INT NOT NULL,
    action_active BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(action_id),
    FOREIGN KEY (flight_plan_id) REFERENCES flight_plans(flight_plan_id)
);

-- Inserted table data seed for demo flight plans
INSERT INTO flight_plans (flight_plan_name)
VALUES
("alpha"),
("beta");

INSERT INTO flight_plans (flight_plan_name, flight_plan_active)
VALUES
("delta", 0);

SELECT * FROM flight_plans;

INSERT INTO flight_plan_actions (flight_plan_id, action_order_num, action_type, action_param, action_wait)
VALUES
(1, 0, "takeoff", "", 1000),
(1, 1, "land", "", 0),
(2, 0, "takeoff", "", 1000),
(2, 1, "calibrate", "0", 3000),
(2, 2, "land", "", 0);

INSERT INTO flight_plan_actions (flight_plan_id, action_order_num, action_type, action_param, action_active, action_wait)
VALUES
(1, 1, "land", "", 0, 0),
(3, 0, "takeoff", "",1, 1000),
(3, 1, "land", "", 0, 0);

SELECT * FROM flight_plan_actions;

SELECT * FROM flight_plan_actions WHERE flight_plan_id = 1;

-- Selects a flight plan's active actions based on a specified flight plan name
SELECT
	flight_plan_actions.flight_plan_id,
    flight_plans.flight_plan_name,
    flight_plan_actions.action_order_num,
    flight_plan_actions.action_type,
    flight_plan_actions.action_param,
    flight_plan_actions.action_wait,
    flight_plan_actions.action_active
FROM flight_plans
LEFT JOIN flight_plan_actions
ON (flight_plans.flight_plan_id = flight_plan_actions.flight_plan_id)
WHERE flight_plan_name = "alpha" AND flight_plan_actions.action_active = 1
ORDER BY flight_plan_id, action_order_num;

-- Selects ALL active flight plans with their active actions
SELECT
	flight_plan_actions.flight_plan_id,
    flight_plans.flight_plan_name,
    flight_plan_actions.action_order_num,
    flight_plan_actions.action_type,
    flight_plan_actions.action_param,
	flight_plan_actions.action_wait,
    flight_plan_actions.action_active
FROM flight_plans
LEFT JOIN flight_plan_actions
ON (flight_plans.flight_plan_id = flight_plan_actions.flight_plan_id)
WHERE flight_plans.flight_plan_active = 1 AND flight_plan_actions.action_active = 1
ORDER BY flight_plan_id, action_order_num;
