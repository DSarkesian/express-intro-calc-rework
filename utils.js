const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  let result = [];
  for (let i = 0; i < strNums.length; i++) {
    let val = (Number(strNums[i]));
    if (Number.isNaN(val)) {
      throw new BadRequestError(`${strNums[i]} is not a valid number`);
    }
    result.push(val);
  }
  return result;

}


module.exports = { convertStrNums };
