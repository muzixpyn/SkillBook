<?php
// ตัวอย่างการเชื่อมต่อกับฐานข้อมูล MySQL
$servername = "localhost";
$username = "skillbook";
$password = 'dB4$k1llB00k';
$dbname = "skillbook";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("การเชื่อมต่อล้มเหลว000: " . $conn->connect_error);
}

// ตัวอย่างการดึงข้อมูลจากฐานข้อมูล MySQL
$sql = "SELECT * FROM userSuSkillBook";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // วนลูปแสดงผลข้อมูล
    while ($row = $result->fetch_assoc()) {
        echo "ชื่อผู้ใช้: " . $row["suStdID"] . "<br>";
    }
} else {
    echo "ไม่พบข้อมูลผู้ใช้";
}

$conn->close();
?>