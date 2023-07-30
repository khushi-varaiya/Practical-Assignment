const mysql = require("mysql");
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: 'fast_food'
});
const selectAllEmployees = () => {
return new Promise((resolve, reject) => {
con.query("SELECT * FROM discount", (err, result, fields) => {
if (err) {
reject(err);
}
else {
resolve(result);
}
})
})
}

con.connect((err) => {
if (err) {
console.log("error: " + err)
} else {
//inserting record in employee table
con.query("INSERT INTO discount values(null,'XYZ',30)", (err, result) => {

if (err) {
console.log("error: " + err)
} else {
console.log("record inserted")
}
})
selectAllEmployees().then(result => {
console.log(result)
}).catch(err => {
console.log("error: " + err)
})
}
})