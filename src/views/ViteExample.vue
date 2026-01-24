<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การใช้งาน Vite เพื่อทำระบบ frontend</h1><br>
  <p>การใช้งาน Vite สำหรับพัฒนา Frontend ในโปรเจกต์ของคุณ เป็นทางเลือกที่ยอดเยี่ยมเนื่องจากมีความเร็วในการ Build 
    สูงและรองรับการทำงานร่วมกับ Vue.js ได้อย่างไร้รอยต่อ ซึ่งสอดคล้องกับแนวทางที่คุณสนใจในงาน Web Development</p>
  <br><br>
  <hr>
  <br>

  <!-- เกริ่น -->
   <h2>ทำไมถึงควรใช้ Vite?</h2><br>
   <li><strong>ความรวดเร็วในการพัฒนา (HMR):</strong> ระบบ Hot Module Replacement ทำงานได้เกือบจะทันทีเมื่อมีการแก้ไขโค้ด</li>
   <li><strong>รองรับเทคโนโลยีใหม่:</strong> รองรับทั้ง Vue.js, React, TypeScript และคำนวณการทำงานผ่านโมดูลที่ทันสมัย</li>
   <li><strong>โครงสร้างที่เบาและยืดหยุ่น:</strong> เหมาะสำหรับการสร้าง Dashboard หรือหน้าควบคุมระบบ Smart Classroom API ที่เน้นความคล่องตัวสูง</li>
  <br><br>
  <hr>
  <br>

  <!-- เกริ่น 2 -->
  <h2>ขั้นตอนการเริ่มต้นโปรเจกต์ Vite</h2>
  <p>คุณสามารถเลือกสร้างโปรเจกต์ได้ทั้งบน Windows 11 ที่ใช้สำหรับ Content Creation หรือบน Ubuntu Server สำหรับการทดสอบระบบจริง ดังนี้ครับ</p>
  <br>

  <!-- ข้อ 1  -->
  <h2>1. สร้างโปรเจกต์ใหม่</h2>
  <p>เปิด Terminal หรือ PowerShell แล้วรันคำสั่ง</p>
  <p class="bggray">npm create vite@latest <ชื่อโฟลเดอร์ที่จะตั้ง> </p><br>
  <li>จากนั้นเลือก Framework เป็น <strong>Vue</strong> และเลือกภาษาเป็น <strong>JavaScript</strong></li><br>

  <!-- ข้อ 2  -->
  <h2>2. ติดตั้ง Dependencies</h2>
  <p>เข้าไปที่โฟลเดอร์โปรเจกต์และติดตั้งแพ็กเกจที่จำเป็น</p>
  <p class="bggray">cd my-frontend-app
<br>npm install</p><br>

  <!-- ข้อ 3  -->
  <h2>3. รันเพื่อแสดงผลและเริ่มการพัฒนา</h2>
  <p>ใช้คำสั่งนี้เพื่อเริ่มระบบ Preview สำหรับการเขียนโค้ด</p>
  <p class="bggray">npm run dev</p><br>


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