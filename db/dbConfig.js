const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  // user: process.env.USER,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  // // host: " sql5.freesqldatabase.com",
  // // connectionLimit: 10,
  // port: "3306",
  host: "sql5.freesqldatabase.com",
database: "sql5691589",
user:"sql5691589",
 password:"ilqA8SC1zr" ,
// port: "3306"
});

// console.log(process.env.DATABASE)
// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbConnection.promise();
