const express=require('express');
const workController=require('../controllers/workitems');
const router=express.Router();

router.get('/work', workController.getWorkPage);
router.post('/work',workController.postNewWork);
router.post('/work/delete',workController.deleteWork);

module.exports=router;