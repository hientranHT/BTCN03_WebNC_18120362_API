var express = require('express');
const { add } = require('./classroom.model');
var router = express.Router();


const dummy=require('./classroom.model');



/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allclassroom=await dummy.all();
  res.json(allclassroom.rows);
});

// router.get('/addclassroom', async function(req, res, next) {

// });

router.post('/addclass', async function(req, res, next) {
  const temp =await dummy.all();
  allclassroom=temp.rows;
  const ID=allclassroom[allclassroom.length-1].ClassroomID+1;
  const enity={
    ClassroomID:ID,
    ClassroomName:req.body.ClassroomName,
    ClassroomDes:req.body.ClassroomDes
  }
  //console.log(enity);
  add(enity);
});

// router.get('/:id', function(req, res, next) {
//   res.json(dummy.find(cls=>cls.id===parseInt(req.params.id)));
// });

// router.post('/', function(req, res, next) {
//   const cls={...req.body,id:dummy.length+1};
//   dummy.push(cls);
//   res.json(req.body);
//});


module.exports = router;
