import globalRoutes from "./global.routes";
import adminRoutes from "./admin.routes";
import projectsRoutes from "./projects.routes";
import experienceRoutes from "./experience.routes";
import educationRoutes from "./education.routes";

const routes = [
  ...globalRoutes,
  ...adminRoutes,
  ...projectsRoutes,
  ...experienceRoutes,
  ...educationRoutes,
];

export default routes;
