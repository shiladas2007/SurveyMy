// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Survey Controller

let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");

// create a reference to the db schema
let surveyModel = require("../models/survey");
let answerModel = require("../models/answer");
let ans1Model = require("../models/ans1");

module.exports.displaySurveyList = (req, res, next) => {
  surveyModel.find({ surveyFrom: { $lt: new Date() } }, (err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(surveyList);
      res.json({
        success: true,
        msg: "Survey List Displayed Successfully",
        surveyList: surveyList,
        user: req.user
      });
    }
  });
};

module.exports.displayMySurveyList = (req, res, next) => {
  let username = req.params.username;
  surveyModel.find({ surveyAuthor: { $in: username } }, (err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({
        success: true,
        msg: "Contact List Displayed Successfully",
        surveyList: surveyList,
        user: req.user
      });
    }
  });
};

module.exports.displayAnswerList = (req, res, next) => {
  let id = req.params.id;

  surveyModel.findById(id, (err, surveyObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      answerModel.find({ surveyId: { $in: id } }, (err, answerObject) => {
        if (err) {
          return console.error(err);
        } else {
          console.log(answerObject);
          res.json({
            success: true,
            msg: "Successfully Displayed Contact to Edit",
            survey: surveyObject,
            answers: answerObject
          });
        }
      });
    }
  });
};

module.exports.displaySurvey = (req, res, next) => {
  let id = req.params.id;

  surveyModel.findById(id, (err, surveyObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Displayed Contact to Edit",
        survey: surveyObject
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully Displayed Add Survey Page" });
};

module.exports.processAddPage = (req, res, next) => {
  let newSurvey = surveyModel({
    surveyTitle: req.body.surveyTitle,
    surveyAuthor: req.body.surveyAuthor,
    surveyFrom: req.body.surveyFrom,
    surveyTill: req.body.surveyTill,
    questions: req.body.questions
  });
 console.log(newSurvey);
  surveyModel.create(newSurvey, (err, surveyModel) => {
    if (err) {
      console.log('error');
      console.log(err);
      res.end(err);
    } else {
      console.log('success');
      res.json({ success: true, msg: "Successfully Added New Contact" });
    }
  });
};
module.exports.processUpdatePage = (req, res, next) => {
  let id = req.params.id;
  let newSurvey = surveyModel({
    _id: id,
    surveyTitle: req.body.surveyTitle,
    surveyAuthor: req.body.surveyAuthor,
    surveyFrom: req.body.surveyFrom,
    surveyTill: req.body.surveyTill,
    questions: req.body.questions
  });
 console.log(newSurvey);
  surveyModel.update({_id: id}, newSurvey, (err) => {
    if (err) {
      console.log('error');
      console.log(err);
      res.end(err);
    } else {
      console.log('success');
      res.json({ success: true, msg: "Successfully Added New Contact" });
    }
  });
};

module.exports.processFilledSurvey = (req, res, next) => {
  let newAnswer = answerModel({
    surveyId: req.body.surveyId,
    username: req.body.username,
    surveyCompletionDate: req.body.surveyCompletionDate,
    answers: req.body.answers
  });

  answerModel.create(newAnswer, (err, answerModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Added New Contact" });
    }
  });
};

// module.exports.displayEditPage = (req, res, next) => {
//     let id = req.params.id;

//     contactModel.findById(id, (err, contactObject) => {
//         if(err) {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             res.json({success: true, msg: 'Successfully Displayed Contact to Edit', contact: contactObject});
//         }
//     });
// }

// module.exports.processEditPage = (req, res, next) => {
//     let id = req.params.id;

//     let updatedContact = contactModel({
//         "_id": id,
//         "firstName": req.body.firstName,
//         "lastName": req.body.lastName,
//         "age": req.body.age
//     });

//     contactModel.update({_id: id}, updatedContact, (err) => {
//         if(err) {
//             console.log(err);
//             res.end(err);
//         }
//         else {
//             res.json({success: true, msg: 'Successfully Edited Contact', contact: updatedContact});
//         }
//     })
// }

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  surveyModel.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Deleted Contact" });
    }
  });
};

module.exports.processAnsAddPage = (req, res, next) => {
  let newAns1 = ans1Model({
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
  nums: req.body.nu,
  num1Shown: req.body.num1Shown,
  num1Typed: req.body.num1Typed,
  n1: req.body.n1,
  n2: req.body.n2,
  n3: req.body.n3,
  desc: req.body.desc
  });
  
 console.log(newAns1);
  ans1Model.create(newAns1, (err, ans1Model) => {
    if (err) {
      console.log('error');
      console.log(err);
      res.end(err);
    } else {
      console.log('success');
      res.json({ success: true, msg: "Successfully submitted your answers" });
    }
  });
};
module.exports.displayAns1List = (req, res, next) => {
  console.log('called');
  ans1Model.find((err, ans1List) => {
    if(err) {
        return console.error(err);
    }
    else {
       res.json({success: true, msg: 'Response List Displayed Successfully', ans1List: ans1List, user: req.user});
    }
});
};
