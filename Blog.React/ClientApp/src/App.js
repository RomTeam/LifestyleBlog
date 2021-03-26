import React, { Fragment } from "react";
//import routes from "./route";
import { Switch, Route, Router, Redirect, BrowserRouter } from "react-router-dom";
import * as Theme from "./themes/theme";
import { ThemeProvider } from "@material-ui/styles";
import Admin from "./layouts/admin";
import ClientUI from "./layouts/client-ui";
import { createBrowserHistory } from "history";

// const showContents = routes => {
//   let result = null;
//   if (routes.length > 0) {
//     result = routes.map((item, index) => {
//       return (
//         <Route
//           key={index}
//           path={item.path}
//           exact={item.exact}
//           component={item.main}
//         ></Route>
//       );
//     });
//   }
//   return <Switch>{result}</Switch>;
// };
const hist = createBrowserHistory();
function App() {
  return (
    <Fragment>
      {/* {showContents(routes)} */}
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" exact component={ClientUI} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
      
    </Fragment>
  );
}

export default App;
