import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import PageNotFound from "../pages/PageNotFound";
import Careers from "../pages/Careers";
import CareersLayout from "../pages/CareersLayout";
import { careerApi, careerApiById } from "./careerService";
import CareersDetail from "../pages/CareersDetail";
import CareersError from "../pages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careerApi} />
        <Route
          path=":id"
          element={<CareersDetail />}
          loader={careerApiById}
          errorElement={<CareersError />}
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default router;
