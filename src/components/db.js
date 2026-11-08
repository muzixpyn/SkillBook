const mysql = require("mysql");

// กำหนดค่าการเชื่อมต่อกับฐานข้อมูล MySQL
const connection = mysql.createConnection({
  host: "localhost", // MySQL Server
  port: "3306",
  user: "skillbook", // ชื่อผู้ใช้งาน MySQL
  password: "dB4$k1llB00k", // รหัสผ่าน MySQL
  database: "skillbook", // ชื่อฐานข้อมูลที่ต้องการเชื่อมต่อ
});

// เชื่อมต่อกับฐานข้อมูล MySQLc
connection.connect((err) => {
  if (err) {
    console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูล: " + err.stack);
    return;
  }
  console.log("เชื่อมต่อกับฐานข้อมูล MySQL สำเร็จแล้ว");
});

// ดำเนินการคำสั่ง SQL หรือ Query ต่างๆ ที่ต้องการ

// ปิดการเชื่อมต่อฐานข้อมูล MySQL เมื่อไม่ใช้งาน
module.exports = connection;
