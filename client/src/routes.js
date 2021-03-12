
import Dashboard from "views/Dashboard.js";
import Forecast from "views/Forecast.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Login from "views/Login.js";
import Reports from "views/Reports.js";
import MajorDay from "views/MajorDay.js";
import MajorWeek from "views/MajorWeek.js";
import MajorMonth from "views/MajorMonth.js";
import AllDayReport from "views/AllDayReport.js";
import AllWeekReport from "views/AllWeekReport.js";
import AllMonthReport from "views/AllMonthReport.js";
import DetailReport from "views/DetailReport.js";
import Register from "views/Register.js";


const dashboardRoutes = [
  {
    path: "/forecast",
    name: "Forecast",
    icon: "nc-icon nc-cloud-download-93",
    component: Forecast,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: "nc-icon nc-notes",
    component: Reports,
    layout: "/admin",
  },
  {
    path: "/MajorDay",
    name: "Today Major",
    icon: "nc-icon nc-notes",
    component: MajorDay,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/MajorWeek",
    name: "Week Major",
    icon: "nc-icon nc-notes",
    component: MajorWeek,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/MajorMonth",
    name: "Month Major",
    icon: "nc-icon nc-notes",
    component: MajorMonth,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/AllDayReport",
    name: "All Changes for today",
    icon: "nc-icon nc-notes",
    component: AllDayReport,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/AllWeekReport",
    name: "All Changes for this week",
    icon: "nc-icon nc-notes",
    component: AllWeekReport,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/AllMonthReport",
    name: "All Changes for this month",
    icon: "nc-icon nc-notes",
    component: AllMonthReport,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/DetailReport",
    name: "DetailReport",
    icon: "nc-icon nc-atom",
    component: DetailReport,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/Login",
    name: "Login",
    icon: "nc-icon nc-bell-55",
    component: Login,
    layout: "/guest",
    invisible: true,
  },
  {
    path: "/Register",
    name: "Registration",
    icon: "nc-icon nc-bell-55",
    component: Register,
    layout: "/guest",
    invisible: true,
  }
];

export default dashboardRoutes;
