import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/locations"
        render={props => {
            return <LocationList />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
            return <EmployeeList />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
            return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;