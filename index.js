const express = require('express')
const cors = require('cors');
const fs = require('fs');
const app = express()
const port = 5000

const HISTORY_FILE = 'result.json';
app.use(express.json())
app.use(cors());

function readHistory() {
    try {
        // อ่านไฟล์
        const data = fs.readFileSync(HISTORY_FILE, 'utf8');
        if (!data || data.trim() === '') {
            return []; // ถ้าว่างเปล่า ให้คืนค่าเป็น Array ว่าง
        }
        return JSON.parse(data); 
    } catch (error) {
        // ถ้าไฟล์ไม่มีอยู่ ให้คืนค่าเป็น Array ว่าง
        if (error.code === 'ENOENT') {
            return [];
        }
        console.error("Error reading history file:", error);
        return [];
    }
}
function writeHistory(historyArray) {
    try {
        // เขียนไฟล์
        const data = JSON.stringify(historyArray, null, 2); // '2' ทำให้ JSON มีการจัดรูปแบบที่อ่านง่าย
        fs.writeFileSync(HISTORY_FILE, data, 'utf8');
    } catch (error) {
        console.error("Error writing history file:", error);
    }
}

// สมมติว่าไฟล์นี้คือส่วนหนึ่งของ router หรือในไฟล์ server.js โดยตรง
app.post('/api/insertedhistory', (req, res) => {
    const newEntry = req.body;
    console.log(newEntry) 

    if (!newEntry) {
        return res.status(400).json({ message: "BMI data is required." });
    }

    // 1. ดึงข้อมูลประวัติเก่าทั้งหมดจากไฟล์
    let history = readHistory();

    // 2. เตรียมข้อมูลใหม่ (กำหนด ID, วันที่, เวลา)
    const newId = history.length > 0 ? history[history.length - 1].id + 1 : 1;
    const entryToSave = {
        date: newEntry.date || new Date(),
        ...newEntry,
        id: newId,
    };


    // 3. เพิ่มข้อมูลใหม่เข้าใน Array
    history.push(entryToSave); 
    
    // 4. เขียน Array ที่อัปเดตแล้วทั้งหมดกลับลงในไฟล์ JSON
     writeHistory(history); 
    
    console.log("✅ ข้อมูล BMI ใหม่ถูกเพิ่มและบันทึกลงในไฟล์:", HISTORY_FILE);
})

app.get('/api/history', (req, res) => {
    try {
        const history = readHistory(); // ใช้ฟังก์ชัน readHistory ที่คุณสร้างไว้
        res.status(200).json(history); // ส่ง Array ประวัติทั้งหมดกลับไป
    } catch (error) {
        console.error("Error fetching history:", error);
        res.status(500).json({ message: "Failed to load history data." });
    }
});

app.listen(port, (req, res) => {
    console.log(`Server is running on http://localhost:${port}`)
});

app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`)
})
