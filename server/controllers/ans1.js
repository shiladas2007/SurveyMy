let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let contactModel = require('../models/ans1');

module.exports.displayContactList = (req, res, next) =>{
    contactModel.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Contact List Displayed Successfully', contactList: contactList, user: req.user});
        }
    });
}


module.exports.processAddPage = (req, res, next) => {

    let newContact = contactModel({
        Name: req.body.Name,
        Email: req.body.Email,
        Age: req.body.Age,
        isImi: req.body.isImi,
        isImiYr: req.body.isImiYr,
        isWork: req.body.isWork,
        Res: req.body.Res,
        isWorked: req.body.isWorked,
        NoJobs: req.body.NoJobs,
        WorkPer: req.body.WorkPer,
        jobL: req.body.jobL,
        isVol: req.body.isVol,
        Vol: req.body.Vol,
        Work1: req.body.Work1,
        Work2: req.body.Work2,
        Work3: req.body.Work3,
        Work4: req.body.Work4,
        Work5: req.body.Work5,
        Work6: req.body.Work6,
        Interest: req.body.Interest,
        isExpJob: req.body.isExpJob,
        isExpOrg: req.body.isExpOrg,
        isExpInt: req.body.isExpInt,
        isExpRes: req.body.isExpRes,
        isExpPre: req.body.isExpPre,
        isExpTar: req.body.isExpTar,
        midDot: req.body.midDot,
        ExpCount: req.body.ExpCount,
        keySp: req.body.keySp,
        redDot: req.body.redDot,
        blueDot: req.body.blueDot,
        nums: req.body.nums,
        num1Shown: req.body.num1Shown,
        num1Typed: req.body.num1Typed,
        n1: req.body.n1,
        n2: req.body.n2,
        n3: req.body.n3,
        desc: req.body.desc
    });
    console.log('now insert');
    console.log(newContact);
    contactModel.create(newContact, (err, contactModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Contact'});
        }
    });
}


