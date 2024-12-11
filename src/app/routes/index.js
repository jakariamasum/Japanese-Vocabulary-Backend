const express = require("express");
const router = express.Router();
const { UserRoutes } = require("../modules/user/user.route");
const { AuthRoutes } = require("../modules/auth/auth.route");

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
