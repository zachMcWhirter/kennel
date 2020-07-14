import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from './location/LocationForm';
import LocationEditForm from "./location/LocationEditForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerList from "./owner/OwnerList";
import Login from "./auth/Login";

const ApplicationViews = () => {

  // put the login route path before the return
  // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route
        exact path="/"
        render={props => {
          return <Home />
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
        }} 
      />

      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} 
      />

      <Route 
        exact path="/animals/new"
        render={(props) => {
          return <AnimalForm 
          {...props} />
        }} 
      />

      <Route 
        path="/animals/:animalId(\d+)/edit" 
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} 
      /> 

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
        exact path="/locations/:locationId(\d+)"
        render={props => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} 
      />
      {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
      */
      }


      <Route
        path="/locations/new"
        render={props => {
          return <LocationForm
          {...props} />
        }} 
      />

      <Route path="/locations/:locationId(\d+)/edit" 
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} 
      />  

      <Route
        exact path="/employees"
        render={props => {
          if (isAuthenticated()) {
          return <EmployeeList { ...props } /> 
          } else {
            return <Redirect to="/login" />
          }
        }}
      />

      <Route 
        path="/employees/:employeeId(\d+)" 
        render={(props) => {
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
        }}
      />

      <Route
        exact path="/owners"
        render={props => {
          if (isAuthenticated) {
          return <OwnerList { ...props } />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;