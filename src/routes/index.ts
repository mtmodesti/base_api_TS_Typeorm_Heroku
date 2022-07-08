import { Router } from "express";

//controller
import createUserController    from "../controllers/createUser.controller";
import updateSessionController from "../controllers/updateSession.controller";
import newSessionController from "../controllers/newSession.controller";
import newPacientController    from "../controllers/newPacient.controller";
import listAllEmployees from "../controllers/listAllEmployess";
import listAllSessionsController from "../controllers/listAllSessions.controller";
import userLoginController       from "../controllers/loginUser.controller";
import sessionByDateController from "../controllers/sessionByDate.controller";
import removeSessionController from "../controllers/removeSession.controller";
import listAllPacientController from "../controllers/listAllPacients.controller";
import sessionByUserId from "../controllers/sessionByUserId.controller";
//middlewares
import ensureAuth from "../middlewares/ensureAuth";

const router = Router();

router.post("/create", createUserController)
router.post("/login", userLoginController)
router.post("/newsession", ensureAuth, newSessionController)
router.post("/newpacient", ensureAuth, newPacientController)
router.patch("/updatesession", ensureAuth, updateSessionController)
router.get("/sessions",ensureAuth, listAllSessionsController)
router.get("/pacients",ensureAuth, listAllPacientController)
router.get("/employees",ensureAuth, listAllEmployees)
router.delete("/delete/:sessionId",ensureAuth, removeSessionController)
router.get("/pacient/:userId",ensureAuth, sessionByUserId)
router.post("/date",ensureAuth, sessionByDateController)


export default router;