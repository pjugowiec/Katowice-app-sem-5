import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { DashboardPage, ProjectPage } from "./containers";
import "bootstrap/dist/css/bootstrap.css";
import { Navigation, Footer, Content } from "./components";

class App extends React.Component {
  render() {
    const routes = [
      { path: "/", component: DashboardPage },
      {
        path: "/project/",
        component: ProjectPage,
      },
    ];

    return (
      <BrowserRouter>
        <Navigation />
        <Content>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Content>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
