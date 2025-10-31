document.addEventListener('DOMContentLoaded', () => {
    const mybutton = document.getElementById('btn');
    const resetBtn = document.getElementById('reset-btn');
    const lastCalculateDisplay = document.getElementById('last-calculate'); 

    function updateLastCalculate(timestamp) {
        if (timestamp) {
            const date = new Date(parseInt(timestamp)); 
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');

            const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
            
            lastCalculateDisplay.textContent = `Last Calculate : ${formattedTime}`;
        } else {
            lastCalculateDisplay.textContent = ''; 
        }
    }

    const storedLastCalculate = localStorage.getItem('lastCalculateTime');
    updateLastCalculate(storedLastCalculate);

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            document.getElementById('age').value = '';
            document.getElementById('height').value = '';
            document.getElementById('weight').value = '';
            document.querySelector('input[name="gender"][value="male"]').checked = true;
            const resultbmi = document.getElementById('result-bmi');
            const result = document.getElementById('result');
            if (resultbmi) resultbmi.textContent = '';
            if (result) result.textContent = '';

            localStorage.removeItem('lastCalculateTime');
            updateLastCalculate(null);
        });
    }

    mybutton.addEventListener('click', function(event) {
        event.preventDefault();

        const ageEl = document.getElementById('age');
        const heightEl = document.getElementById('height');
        const weightEl = document.getElementById('weight');
        const resultbmiEl = document.getElementById('result-bmi');
        const SelectgenderEl = document.querySelector('input[name="gender"]:checked')
        const result = document.getElementById('result')

        const age = parseFloat(ageEl.value)
        const weight = parseFloat(weightEl.value)
        const height = parseFloat(heightEl.value)
        const gender = SelectgenderEl.value;

        if (isNaN(age) || isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง (ความสูงและน้ำหนักต้องมากกว่า 0)');
            return;
        }
        
        const Height_m = height/100
        const BMI = weight / (Height_m**2)
        const roundedbmi = BMI.toFixed(2)

        let catelogy = '';
        let recommendation = '';


        if (gender === 'male') {
            if (age >= 5 && age <= 9) {
                if (BMI <= 16 && BMI >= 14) {
                    catelogy = 'BMI ปกติ'
                } else if (BMI <= 18 && BMI >= 17) {
                    catelogy = 'BMI เกิน'
                } else {
                    catelogy = 'อ้วน'
                }
            } else if (age >= 10 && age <= 14) { 
                if (BMI <= 20 && BMI >= 15){
                    catelogy = 'BMI ปกติ'
                } else if (BMI <= 23 && BMI >= 21) {
                    catelogy = 'BMI เกิน'
                } else {
                    catelogy = 'อ้วน'
                }
            } else if (age >= 15 && age <= 17) { 
                if (BMI <= 23 && BMI >= 17){
                    catelogy = 'BMI ปกติ'
                } else if (BMI <= 27 && BMI >= 24) {
                    catelogy = 'BMI เกิน'
                } else {
                    catelogy = 'อ้วน'
                }
            } else if (age >= 18 && age <= 65) { 
                if (BMI < 18.5) {
                    catelogy = 'ผอมเกินไป'
                    recommendation = 'เพิ่มน้ำหนัก'
                } else if (BMI <= 24.9 && BMI >= 18.5) {
                    catelogy = 'เหมาะสม'
                    recommendation = 'รักษาน้ำหนัก'
                } else if (BMI <= 29.9 && BMI >= 25) {
                    catelogy = 'เริ่มอ้วน'
                    recommendation = 'ควบคุมน้ำหนัก'
                } else if (BMI <= 34.9 && BMI >= 30){
                    catelogy = 'อ้วนระดับ 1'
                    recommendation = 'ลดน้ำหนัก'
                } else {
                    catelogy = 'อ้วนระดับที่ 2-3'
                    recommendation = 'ลดน้ำหนักด่วน'
                }
            } else if ( age >65 ) { 
                if (BMI < 23) {
                    catelogy = 'ผอมเกินไป'
                    recommendation = 'เสี่ยงกระดูกบาง'
                } else if (BMI <= 27 && BMI >= 23) {
                    catelogy = 'เหมาะสม'
                    recommendation = 'สุขภาพดี'
                } else if (BMI <= 30 && BMI >= 27) {
                    catelogy = 'เริ่มอ้วน'
                    recommendation = 'ระวังโรคเรื้อรัง'
                } else {
                    catelogy = 'อ้วน'
                    recommendation = 'ควบคุมน้ำหนัก'
                }
            } 
        } else {
            if (age >= 5 && age <= 9) {
                if (BMI <= 16 && BMI >= 14) {
                    catelogy = 'BMI ปกติ'
                } else if (BMI <= 18 && BMI >= 17) {
                    catelogy = 'BMI เกิน'
                } else {
                    catelogy = 'อ้วน'
                }
            } else if (age >= 10 && age <= 14) { 
                if (BMI <= 20 && BMI >= 14){
                    catelogy = 'BMI ปกติ'
                } else if (BMI <= 23 && BMI >= 21) {
                    catelogy = 'BMI เกิน'
                } else {
                    catelogy = 'อ้วน'
                }
            } else if (age >= 15 && age <= 17) { 
                if (BMI <= 23 && BMI >= 17){
                    catelogy = 'BMI ปกติ'
                } else if (BMI <= 27 && BMI >= 24) {
                    catelogy = 'BMI เกิน'
                } else {
                    catelogy = 'อ้วน'
                }
            } else if (age >= 18 && age <= 65) { 
                if (BMI < 18.5) {
                    catelogy = 'ผอมเกินไป'
                    recommendation = 'เพิ่มน้ำหนัก'
                } else if (BMI <= 24.9 && BMI >= 18.5) {
                    catelogy = 'เหมาะสม'
                    recommendation = 'รักษาน้ำหนัก'
                } else if (BMI <= 29.9 && BMI >= 25) {
                    catelogy = 'เริ่มอ้วน'
                    recommendation = 'ควบคุมน้ำหนัก'
                } else if (BMI <= 34.9 && BMI >= 30){
                    catelogy = 'อ้วนระดับ 1'
                    recommendation = 'ลดน้ำหนัก'
                } else {
                    catelogy = 'อ้วนระดับที่ 2-3'
                    recommendation = 'ลดน้ำหนักด่วน'
                }
            } else if ( age >65 ) { 
                if (BMI < 23) {
                    catelogy = 'ผอมเกินไป'
                    recommendation = 'เสี่ยงกระดูกบาง'
                } else if (BMI <= 27 && BMI >= 23) {
                    catelogy = 'เหมาะสม'
                    recommendation = 'สุขภาพดี'
                } else if (BMI <= 30 && BMI >= 27) {
                    catelogy = 'เริ่มอ้วน'
                    recommendation = 'ระวังโรคเรื้อรัง'
                } else {
                    catelogy = 'อ้วน'
                    recommendation = 'ควบคุมน้ำหนัก'
                }
            } 
        }


        resultbmiEl.textContent = ` ${roundedbmi}`
        result.innerHTML = ` ${age}Y ${gender} BMI =${roundedbmi} ${catelogy} ${recommendation}`;

        const now = new Date().getTime(); 
        localStorage.setItem('lastCalculateTime', now);
        updateLastCalculate(now);

        const newBMIData = {
            age,
            BMI : roundedbmi,
            height,
            weight,
            gender,
            result: catelogy,
        }
        fetch('http://localhost:5000/api/insertedhistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newBMIData)
        })
        .catch(error => {
            console.error('Error sending BMI data to server:', error);
        });

    });
});