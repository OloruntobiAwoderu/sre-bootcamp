import  mysql from "mysql2";

const connection =  mysql.createConnection({
	host: "sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com",
	user: "secret",
	database: "bootcamp_tht",
	password: "jOdznoyH6swQB9sTGdLUeeSrtejWkcw",
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
	idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
	queueLimit: 0  

});


const connectionPool = connection.promise()

export default connectionPool