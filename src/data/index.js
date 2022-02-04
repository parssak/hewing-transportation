import { getRoutes, getNavigation, getMedia } from "@/data/utils";

export const SITE_PATH = "hewing-transportation";

const MASTER_ROUTES = [
    {
      path: "/",
      label: "home",
      component: () => import("@/views/home"),
      hidden: false,
    },
{
      path: "/about",
      label: "about",
      component: () => import("@/views/about"),
      hidden: false,
    },
{
      path: "/contact",
      label: "contact",
      component: () => import("@/views/contact"),
      hidden: false,
    },
{
      path: "/mission",
      label: "mission",
      component: () => import("@/views/mission"),
      hidden: false,
    },
{
      path: "/services",
      label: "services",
      component: () => import("@/views/services"),
      hidden: false,
    },
{
      path: "/team",
      label: "team",
      component: () => import("@/views/team"),
      hidden: false,
    },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);



