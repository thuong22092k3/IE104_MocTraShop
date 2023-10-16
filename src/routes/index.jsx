import Home from "../Pages/Home/Home.jsx";
import Contact from "../Pages/Contact/Contact.jsx"
import Collections from "../Pages/Collections/Collections.jsx";
import MyBag from "../Pages/Mybag/Mybag.jsx";
import Account from "../Pages/Account/Account.jsx";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Collections", component: Collections },
  { path: "/Contact", component: Contact },
  { path: "/Mybag", component: MyBag },
  { path: "/Account", component: Account },
];

export { publicRoutes };