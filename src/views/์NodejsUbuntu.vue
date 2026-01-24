<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การติดตั้ง Node.js บน Ubuntu 24.04</h1><br>
  <p>Node.js คือ Runtime Environment สำหรับรัน JavaScript ฝั่ง Server ในคู่มือนี้แนะนำให้ติดตั้ง Node.js LTS เป็นเวอร์ชันที่เสถียรสำหรับการใช้งานจริง</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1  -->
   <h2>1. เตรียมความพร้อมของระบบ</h2>
   <br>
   <p>อัปเดตดัชนีแพ็กเกจเพื่อให้มั่นใจว่าระบบจะดึงข้อมูลเวอร์ชันล่าสุด</p>
   <p class="bggray">sudo apt update && sudo apt upgrade -y</p>
   <br>
   
   
   <!-- ข้อ 2 -->
    <h2>2. ติดตั้งเครื่องมือพื้นฐาน</h2>
    <br>
    <p>ติดตั้งแพ็กเกจที่จำเป็นสำหรับการดาวน์โหลดและจัดการ Repository</p>
    <p class="bggray">sudo apt install -y curl ca-certificates gnupg</p>
    <br>

    <!-- ข้อ 3  -->
    <h2>3. เพิ่ม NodeSource Repository สำหรับ Node.js 24</h2>
    <br>
    <p>รันคำสั่งด้านล่างเพื่อดาวน์โหลดและตั้งค่า Repository สำหรับเวอร์ชัน 24 โดยเฉพาะ</p>
    <p class="bggray">curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -</p>
    <br>

    <!-- ข้อ 4  -->
    <h2>4. ดำเนินการติดตั้ง Node.js</h2>
    <br>
    <p>เมื่อตั้งค่าแหล่งข้อมูลเสร็จสิ้น ให้ติดตั้ง Node.js และเครื่องมือจัดการแพ็กเกจ npm</p>
    <p class="bggray">sudo apt install -y nodejs</p>
    <br>

    <!-- ข้อ 5  -->
    <h2>5. ตรวจสอบเวอร์ชันการติดตั้ง</h2>
    <br>
    <p>ตรวจสอบเวอร์ชันเพื่อให้แน่ใจว่าเป็นไปตามข้อกำหนด 24.13.0 LTS</p>
    <p class="bggray">node -v
                  <br># ผลลัพธ์ควรแสดง: v24.13.0
                  <br><br>npm -v</p>
    <br>

    <!-- ข้อ 6  -->
    <h2>6. ติดตั้งชุดเครื่องมือสำหรับการ Build (แนะนำ)</h2>
    <br>
    <p>เพื่อรองรับการ Compile โมดูลเสริมต่างๆ ที่จำเป็นในงาน Web Development และการตั้งค่า Server</p>
    <p class="bggray">sudo apt install -y build-essential</p>
    <br>

</template>

<style scoped>
li {
  margin-left: 50px;
}
.nodot {
  list-style: none;
  text-decoration: none;
}
.bggray {
  background-color: rgb(37, 37, 37);
  color: greenyellow;
  padding: 1rem;
  font-size: 14px;
}
</style>