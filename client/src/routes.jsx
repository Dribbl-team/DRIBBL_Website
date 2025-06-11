import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Join us",
    path: "/sign-in",
    element: <SignIn />,
  },
  
];

export default routes;
