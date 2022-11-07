

const {convertStrNums} = require("./utils");

describe("convertStrNums", ()=>{
  test("valid",function (){
    expect(convertStrNums(["1","2","3"])).toEqual([1, 2, 3]);
    expect(convertStrNums([])).toEqual([]);
    expect(convertStrNums(["1"])).toEqual([1]);
  })

  test("invalid", function(){
    expect(
      function(){convertStrNums(["1","hello"])}
    ).toThrowError("hello is not a valid number")
  })
});
