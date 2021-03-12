
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import GuestLayout from "layouts/Guest.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/guest" render={(props) => <GuestLayout {...props} />} />
      <Redirect from="/" to="/admin/forecast" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
