import express from "express";
import { getMyFriends, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// apply auth middleware to all routes 
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);


export default router;