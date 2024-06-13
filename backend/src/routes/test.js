const express =require('express')
const router=express("router")
const Subject=require("../models/TestApplication")

router.post('/checkout', async (req, res) => {
    const { studentId, studentName, subject } = req.body;

    try {
        const newSubject = new Subject({
            studentId,
            studentName,
            subject
        });

        await newSubject.save();
        res.json({msg:'Subject added to database SucessFully'});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports=router