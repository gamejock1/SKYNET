-- PROCEED WITH CAUTION ON THIS ONE!!!
-- DROP DATABASE IF EXISTS skynet_db;

-- Created the DB "skynet_db" (local connections)
CREATE DATABASE skynet_db;
USE skynet_db;

-- Created the table "flight_plans"
CREATE TABLE flight_plans (
  flight_plan_id int AUTO_INCREMENT,
  flight_plan_name varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY(flight_plan_id)
);

-- Created the table "flight_plan_actions"
CREATE TABLE flight_plan_actions (
    action_id int AUTO_INCREMENT,
    flight_plan_id int,
    action_order_num int NOT NULL,
    action_type varchar(50) NOT NULL,
    action_param varchar(15),
    PRIMARY KEY(action_id),
    FOREIGN KEY (flight_plan_id) REFERENCES flight_plans(flight_plan_id)
);
