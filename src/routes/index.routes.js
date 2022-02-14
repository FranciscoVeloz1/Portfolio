import globalRoutes from "./global.routes";
import adminRoutes from "./admin.routes";
import adminProjectsRoutes from "./projects.admin.routes";

const routes = [...globalRoutes, ...adminRoutes, ...adminProjectsRoutes];

export default routes;
