import globalRoutes from "./global.routes";
import adminRoutes from "./admin.routes";
import adminProjectsRoutes from "./projects.admin.routes";
import adminExperienceRoutes from "./experience.admin.routes";

const routes = [
  ...globalRoutes,
  ...adminRoutes,
  ...adminProjectsRoutes,
  ...adminExperienceRoutes,
];

export default routes;
