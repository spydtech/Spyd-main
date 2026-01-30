import First from "./slides/First";
import Second from "./slides/Second";
import Third from "./slides/Third";
import { Four } from "./slides/Four";
import Five from "./slides/five";
import Sixth from "./slides/sixth";
import Seventh from "./slides/seventh";
import Eighth from "./slides/eighth";
import Nine from "./slides/Nine";
import Ten from "./slides/Ten";
import Eleven from "./slides/Eleven";
import Home from "./Home/Home";
import Projectcard from "./projectoverview/Projectcard";
import Client from "./clients/Client";
import Thankyou from "./thankyou/Thankyou";

export const pages = [
  { path: "/home", component: Home },
  { path: "/first", component: First },
  { path: "/second", component: Second },
  { path: "/third", component: Seventh },
  { path: "/four", component: Third },
  { path: "/five", component: Four },
  { path: "/sixth", component: Eleven },
  { path: "/seven", component: Eighth },
  { path: "/eight", component: Nine },
  { path: "/nine", component: Sixth },
  { path: "/ten", component: Five },
  { path: "/eleven", component: Ten },
  { path: "/pcard", component: Projectcard },
  {path:"/client" ,component:Client},
  {path:"/thankyou",component:Thankyou},
];
