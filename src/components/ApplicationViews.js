import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail"
import LocationForm from './location/LocationForm'
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import Login from "./auth/Login"
import AnimalEditForm from "./animal/AnimalEditForm";

const ApplicationViews = () => {

  // put the login route path before the return
  // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route
        exact path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route 
        path="/login" component={Login} />
      <Route
        exact path="/animals"
        render={props => {
          if (isAuthenticated()) {
          return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
      <Route 
        exact path="/animals/new"
        render={(props) => {
          return <AnimalForm 
            {...props} />
      }} />
      <Route 
        path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />  
      <Route
        exact path="/locations"
        render={(props) => {
          if (isAuthenticated()) {
          return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
      <Route
        path="/locations/new"
        render={(props) => {
          return <LocationForm
          {...props} />
        }} />
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