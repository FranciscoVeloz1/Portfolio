import globalRoutes from "./global.routes";
import adminRoutes from "./admin.routes";

const routes = [...globalRoutes, ...adminRoutes];

export default routes;
