var router=require('express').Router

router.get('/',function(req,res){
    res.json({'msg':'welcome to students'})
})

module.exports=router