const express = require("express");
const router = express.Router();
const { UserRoutes } = require("../modules/user/user.route");
const { AuthRoutes } = require("../modules/auth/auth.route");
const { LessonRoutes } = require("../modules/lesson/lesson.route");
const { VocabularyRoutes } = require("../modules/vocabulary/vocabulary.route");

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/lessons",
    route: LessonRoutes,
  },
  {
    path: "/vocabularies",
    route: VocabularyRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
