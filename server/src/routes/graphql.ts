import express, { Response, Request } from "express";

const router = express.Router();

router.route('graphql')
    .get((req: Request, res: Response): void => {
        console.log("here")
        res.send("ok")
    })

export default router;