const express = require("express");
const router = express.Router();
const { UserRoutes } = require("../modules/user/user.route");

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
