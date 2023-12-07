import Home from "../Pages/Home";
import Contact from "../Pages/Contact"
import Collections from "../Pages/Collections";
import MyBag from "../Pages/Mybag";
import Account from "../Pages/Account";
import Product from "../Pages/Product";
import Signup from "../Pages/Signup";
import Delivery from "../Pages/Delivery";
import Payment from "../Pages/Payment";
import Blog from "../Pages/Blog";
import Accessories from "../Pages/Accessories"
import Forgot_Password from "../Pages/Forgot_Password";
import Payment_Successful from "../Pages/Payment_Successful";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Collections", component: Collections },
  { path: "/Collections/:categorySlug", component: Collections },
  { path: "/Contact", component: Contact },
  { path: "/Mybag", component: MyBag },
  { path: "/Account", component: Account },
  { path: "/Collections/:categorySlug/:slug", component: Product },
  { path: "/Signup", component: Signup },
  { path: "/Delivery", component: Delivery },
  { path: "/Payment", component: Payment },
  { path: "/Forgot_Password", component: Forgot_Password },
  { path: "/Blog", component: Blog },
  { path: "/Accessories", component: Accessories },
  { path: "/Payment_Successful", component: Payment_Successful },
];

export { publicRoutes };