const Router = require('express').Router;
const Service = require("./Service");
const authMiddleware = require('./MiddleWare');

const router = new Router();

router.get('/secureDatas', Service.getSecureData);
router.get('/searchDatas/:search', Service.searchDatas);
router.post("/secureDatas", authMiddleware, Service.saveSecureData);
router.delete("/secureDatas/:id", authMiddleware, Service.deleteHentaiData);
router.get("/getFromWiki", Service.getVideoByID);

module.exports = router;
