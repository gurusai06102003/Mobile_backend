const express = require('express');
const route = express.Router();
const {getAllMobiles,getMobileModelNames,getMobileModels,getMobileDetails} = require('../Controllers/Mobile-controller');
route.get('/get', getAllMobiles);
route.get('/getModelNames',getMobileModelNames);
route.get('/getModelNames/:brand_name',getMobileModels);
route.get('/getMobileDetails/:model',getMobileDetails);
module.exports = route;