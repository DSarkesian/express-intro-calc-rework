/** Simple demo Express app. */

const express = require("express");
const app = express();

// useful error class to throw

const { NotFoundError, BadRequestError } = require("./expressError");
const { convertStrNums } = require("./utils");

const MISSING = "Expected key `nums` with comma-separated list of numbers.";


const {
  findMode,
  findMean,
  findMedian,
} = require("./stats");

/** Finds mean of nums in qs: returns {operation: "mean", result } */
app.get('/mean', (req, res) => {
  if (!req.query.nums) {
    throw new BadRequestError(`numbers are required`);
  }
  let numStr = (req.query.nums.split(","));
  let numsArr = convertStrNums(numStr);


  return res.json({
    operation: "mean",
    result: findMean(numsArr)
  });
});

/** Finds median of nums in qs: returns {operation: "median", result } */
app.get('/median', (req, res) => {
  if (!req.query.nums) {
    throw new BadRequestError(`numbers are required`);
  }
  let numStr = (req.query.nums.split(","));
  let numsArr = convertStrNums(numStr);


  return res.json({
    operation: "median",
    result: findMedian(numsArr)
  });

});

/** Finds mode of nums in qs: returns {operation: "mean", result } */
app.get('/mode', (req, res) => {
  if (!req.query.nums) {
    throw new BadRequestError(`numbers are required`);
  }
  let numStr = (req.query.nums.split(","));
  let numsArr = convertStrNums(numStr);


  return res.json({
    operation: "mode",
    result: findMode(numsArr)
  });

});

/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});



module.exports = app;
