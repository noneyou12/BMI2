const mybutton = document.getElementById('btn')
const formEl = document.querySelector('form');
if (formEl) {
    formEl.addEventListener('reset', function() {
        const resultbmi = document.getElementById('result-bmi');
        const result = document.getElementById('result');
        if (resultbmi) resultbmi.textContent = 'BMI :';
        if (result) result.textContent = 'result :';
    });
}

mybutton.addEventListener('click', function(event) {
    if (event && typeof event.preventDefault === 'function') event.preventDefault();

    const age = document.getElementById('age');
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');
    const resultbmi = document.getElementById('result-bmi');
    const SelectgenderEL = document.querySelector('input[name="gender"]:checked')
    const result = document.getElementById('result')

    const Age = parseFloat(age.value)
    const Weight = parseFloat(weight.value)
    const Height = parseFloat(height.value)
    const selectedgender = SelectgenderEL.value;

    const Height_m = Height/100
    const BMI = Weight / (Height_m**2)
    const roundedbmi = BMI.toFixed(2)

    if (isNaN(Age) || isNaN(Weight) || isNaN(Height)) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    let catelogy = ''
    let recommendation = ''

 if (selectedgender === 'male') {
    if (Age >= 5 && Age <= 9) {
        if (BMI <= 16 && BMI >= 14) {
            catelogy = 'BMI ปกติ'
        } else if (BMI <= 18 && BMI >= 17) {
            catelogy = 'BMI เกิน'
        } else {
            catelogy = 'อ้วน'
        }
    } else if (Age >= 10 && Age <= 14) { 
        if (BMI <= 20 && BMI >= 15){
            catelogy = 'BMI ปกติ'
        } else if (BMI <= 23 && BMI >= 21) {
            catelogy = 'BMI เกิน'
        } else {
            catelogy = 'อ้วน'
        }
    } else if (Age >= 15 && Age <= 17) { 
        if (BMI <= 23 && BMI >= 17){
            catelogy = 'BMI ปกติ'
        } else if (BMI <= 27 && BMI >= 24) {
            catelogy = 'BMI เกิน'
        } else {
            catelogy = 'อ้วน'
        }
    } else if (Age >= 18 && Age <= 65) { 
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
    } else if ( Age >65 ) { 
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
    if (Age >= 5 && Age <= 9) {
        if (BMI <= 16 && BMI >= 14) {
            catelogy = 'BMI ปกติ'
        } else if (BMI <= 18 && BMI >= 17) {
            catelogy = 'BMI เกิน'
        } else {
            catelogy = 'อ้วน'
        }
    } else if (Age >= 10 && Age <= 14) { 
        if (BMI <= 20 && BMI >= 14){
            catelogy = 'BMI ปกติ'
        } else if (BMI <= 23 && BMI >= 21) {
            catelogy = 'BMI เกิน'
        } else {
            catelogy = 'อ้วน'
        }
    } else if (Age >= 15 && Age <= 17) { 
        if (BMI <= 23 && BMI >= 17){
            catelogy = 'BMI ปกติ'
        } else if (BMI <= 27 && BMI >= 24) {
            catelogy = 'BMI เกิน'
        } else {
            catelogy = 'อ้วน'
        }
    } else if (Age >= 18 && Age <= 65) { 
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
    } else if ( Age >65 ) { 
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

    resultbmi.textContent = `BMI : ${roundedbmi}`
    result.innerHTML = `result : ${Age}Y ${selectedgender} BMI =${roundedbmi} ${catelogy} ${recommendation}`;

    

})