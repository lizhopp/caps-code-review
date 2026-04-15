import express from "express";

import { createUserTree, getUserTrees } from "../controllers/treeController.js";

const treeRouter = express.Router();

treeRouter.get("/", getUserTrees);
treeRouter.post("/", createUserTree);

export default treeRouter;
