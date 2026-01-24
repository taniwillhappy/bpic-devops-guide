<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การติดตั้ง Node.js บน Windows 11</h1><br>
  <p>ติดตั้งผ่าน Windows Installer (.msi) — แนะนำสำหรับผู้ใช้งานทั่วไป</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1  -->
   <h2>1. ดาวน์โหลดตัวติดตั้ง</h2>
   <br>
   <li>เข้าไปที่เว็บไซต์อย่างเป็นทางการ <a href="https://nodejs.org/en" target="_blank">nodejs.org</a></li>
   <li>เลือกดาวน์โหลดเวอร์ชัน 24.13.0 LTS (หากหน้าเว็บแสดงเวอร์ชันอื่น ให้ไปที่หน้า Other Downloads เพื่อระบุเวอร์ชันที่ต้องการ)</li>
   <br>

  <!-- ข้อ 2  -->
   <h2>2. เริ่มการติดตั้ง</h2>
   <br>
   <li>ดับเบิลคลิกไฟล์ (.msi) ที่โหลดมา</li>
   <li>กด Next และยอมรับเงื่อนไขการใช้งาน</li>
   <br>

  <!-- ข้อ 3  -->
   <h2>3. เลือกตำแหน่งติดตั้ง</h2>
   <br>
   <li>แนะนำให้ใช้ค่าเริ่มต้น (C:\Program Files\nodejs) แล้วกด Next</li>
   <br>

  <!-- ข้อ 4  -->
   <h2>4. Native Modules (สำคัญสำหรับ DevOps)</h2>
   <br>
   <li>ในหน้า "Tools for Native Modules" ให้ ติ๊กถูก ที่ช่อง "Automatically install the necessary tools..." * 
    ส่วนนี้จะช่วยติดตั้ง Python และ Visual Studio Build Tools ซึ่งจำเป็นมากสำหรับการ Compile แพ็กเกจ Node.js บางตัวที่คุณอาจต้องใช้ในโปรเจกต์</li>
   <br>

  <!-- ข้อ 5  -->
   <h2>5. เสร็จสิ้นการติดตั้ง</h2>
   <br>
   <li>กด Install จนเสร็จสิ้นกระบวนการ</li>
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