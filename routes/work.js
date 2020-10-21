const express=require('express');
const workController=require('../controllers/workitems');
const router=express.Router();

router.get('/work', workController.getWorkPage);
router.post('/work',workController.postNewWork);

module.exports=router;