
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footer/AuthFooter.js";
import routes from "routes.js";


function Guest() {
  
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/guest") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className="wrapper wrapper-full-page">        
        {/* <div className="main-panel" ref={mainPanel}> */}
        
          <AuthNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <AuthFooter />
        </div>
      {/* </div> */}
    </>
  );
}

export default Guest;
