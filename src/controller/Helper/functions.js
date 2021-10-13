const lastuserID = require("../../model/lastuserId");

const CONSTANT = 10000000;

/*
We use a collection in the database to save the last user account number.
Everytime, a new user is created, we access the last account number created,
we assign the following value to the user, and update the collection with
the new user account number.
*/
exports.generateID = async () => {
  let userID = [];

  userID = await lastuserID.find((err, res) => {});

  if (userID.length === 0) {
    //this is the first user created
    userID = await lastuserID.insertMany([{ index: "A-0000001" }]);
    return await userID[0].index;
  } else {
    const temp = userID[0].index.split("-"); //temp = ['A','000000X']

    let num = parseInt(temp[1]) + 1;
    if (parseInt(num) < CONSTANT) {
      temp[1] = (num + CONSTANT).toString().slice(1); // =>000000(X+1)
    } else {
      temp[0] = String.fromCharCode(temp[0].charCodeAt(0) + 1); //A => B
      temp[1] = "0000001";
    }

    const newID = "" + temp[0] + "-" + temp[1]; //A-000000(X+1)

    await lastuserID.findOneAndUpdate({ index: userID[0].index }, { index: newID });

    return newID;
  }
};
