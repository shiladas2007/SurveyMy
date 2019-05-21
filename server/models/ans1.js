
let mongoose = require("mongoose");

// create a model class
let answerSchema = mongoose.Schema(
  {
    Name: String,
    Email: String,
    Age: String,
  isImi: String,
  isImiYr: String,
  isWork: String,
    Res: String,
    isWorked: String,
    NoJobs: String,
    WorkPer: String,
    jobL: String,
    isVol: String,
    Vol: String,
    Work1: String,
    Work2: String,
    Work3: String,
    Work4: String,
    Work5: String,
    Work6: String,
    Interest: String,
    isExpJob: String,
    isExpOrg: String,
    isExpInt: String,
      isExpRes: String,
      isExpPre: String,
      isExpTar: String,
      ExpCount: String,
      keySp: String,
      redDot: String,
      nums: String,
      num1Shown: String,
      num1Typed: String,
      desc: String
  },
  {
    collection: "ans1"
  }
);

module.exports = mongoose.model("ans1", answerSchema);
