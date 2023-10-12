import Home from "../Pages/Home/Home.jsx";
import Contact from "../Pages/Contact/Contact.jsx"
import Collections from "../Pages/Collections/Collections.jsx";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Collections", component: Collections },
  { path: "/Contact", component: Contact },
];

export { publicRoutes };