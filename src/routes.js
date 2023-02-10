import {ABOUT_ROUTE, CONTACT_ROUTE, EPISODES_ROUTE, HOME_ROUTE} from "./utils/consts";
import HomePage from "./pages/HomePage";
import EpisodesPage from "./pages/EpisodesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


export const publicRoutes = [
  {
    path: HOME_ROUTE,
    component: <HomePage/>
  },
  {
    path: EPISODES_ROUTE,
    component: <EpisodesPage/>
  },
  {
    path: ABOUT_ROUTE,
    component: <AboutPage/>
  },
  {
    path: CONTACT_ROUTE,
    component: <ContactPage/>
  }
];
