import Home from "../Pages/Home";
import Contact from "../Pages/Contact"
import Collections from "../Pages/Collections";
import MyBag from "../Pages/Mybag";
import Account from "../Pages/Account";
import Product from "../Pages/Product";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Collections", component: Collections },
  { path: "/Contact", component: Contact },
  { path: "/Mybag", component: MyBag },
  { path: "/Account", component: Account },
  { path: "/Product", component: Product },
];

export { publicRoutes };