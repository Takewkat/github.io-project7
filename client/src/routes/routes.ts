import { LOGIN_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE, ADMIN_ROUTE, HOME_ROUTE } from "../types/consts";

export const authRoutes = [
  {
    path: LOGIN_ROUTE,
    //component: Auth,
    exact: true,
  },
  {
    path: REGISTRATION_ROUTE,
    //component: Auth,
    exact: true,
  },
  {
    path: ADMIN_ROUTE,
    //component: UserList,
    exact: true,
  },
  {
    path: PROFILE_ROUTE,
    //component: EditProfile,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    //component: Home,
    exact: true,
  }
]