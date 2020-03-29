import React from "react";
import dashboardRoutes from "../route/admin/dashboardRoutes";
import styles from "../assets/jss/admin-theme/layouts/adminStyle";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";
import Navbar from "../components/Admin/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "../components/Admin/sidebar";
import Footer from "../components/Admin/footer";

let ps;
const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            exact={true}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={dashboardRoutes}
        logoText={"Life Blog"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="orange"
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={dashboardRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
