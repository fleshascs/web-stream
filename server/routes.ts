// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/login", "/login/index");
routes.add("/user/:username", "/user/index");

export default routes;
