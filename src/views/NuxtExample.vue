<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การใช้งาน Nuxt เพื่อทำระบบ frontend</h1><br>
  <h2>⛰️ Nuxt.js Framework</h2>
  <p>Nuxt คือ Framework ระดับ High-level ที่พัฒนาต่อยอดมาจาก Vue.js โดยออกแบบมาเพื่อช่วยให้นักพัฒนาสร้างเว็บแอปพลิเคชันที่ทรงประสิทธิภาพ 
    จัดโครงสร้างง่าย และรองรับมาตรฐานสมัยใหม่ได้ครบถ้วนในตัวเดียว</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1 -->
  <h2>1. คุณสมบัติเด่นของ Nuxt</h2><br>
  <li>Server-Side Rendering (SSR): ช่วยในการประมวลผลหน้าเว็บจากฝั่ง Server ทำให้หน้าเว็บแสดงผลได้รวดเร็วและดีต่อการทำ SEO (Search Engine Optimization)</li>
  <li>File-based Routing: ระบบจัดการเส้นทางหน้าเว็บอัตโนมัติ เพียงแค่สร้างไฟล์ในโฟลเดอร์ pages/ โดยไม่ต้องเขียน Router Config เอง</li>
  <li>Auto-imports: ไม่ต้องเสียเวลาเขียนคำสั่ง Import สำหรับ Components หรือ Composables ที่ใช้งานบ่อย ระบบจะจัดการให้โดยอัตโนมัติ</li>
  <li>Deployment Versatility: รองรับการทำทั้งแบบ Static Site (SSG) หรือรันผ่าน Node.js Server (SSR) ได้อย่างยืดหยุ่น</li><br>


  <!-- ข้อ 2 -->
  <h2>2. โครงสร้างโฟลเดอร์หลัก</h2>
  <li><strong>pages/:</strong> เก็บไฟล์หน้าจอหลักของแอปพลิเคชัน (Views/Routes)</li>
  <li><strong>components/:</strong> เก็บส่วนประกอบของหน้าเว็บที่ต้องการนำมาใช้ซ้ำ</li>
  <li><strong>layouts/:</strong> กำหนดโครงสร้างหลักของหน้าเว็บ เช่น ส่วน Header หรือ Sidebar</li>
  <li><strong>server/:</strong> สำหรับเขียน API หรือ Server Middleware ภายในตัวโปรเจกต์เอง</li>
  <li><strong>public/:</strong> เก็บไฟล์ Static ต่างๆ เช่น รูปภาพ หรือฟอนต์</li><br>

  <!-- ข้อ 3 -->
  <h2>3. การเริ่มต้นโปรเจกต์ (Quick Start)</h2>
  <p>คุณสามารถเริ่มพัฒนาได้ทันทีบน Windows 11 หรือ Ubuntu ผ่านคำสั่ง</p>
  <p class="bggray"># 1. สร้างโปรเจกต์ใหม่
<br>npx nuxi@latest init <ชื่อโปรเจกต์>

<br><br># 2. ติดตั้ง Dependencies
<br>npm install

<br><br># 3. รันระบบสำหรับการพัฒนา
<br>npm run dev</p><br>

  <!-- ข้อ 4 -->
  <h2>4. การปรับใช้ในงาน DevOps</h2>
  <p>Nuxt ออกแบบมาให้ทำงานร่วมกับ Docker ได้อย่างสมบูรณ์แบบ คุณสามารถสร้าง Docker Image เพื่อรันแอปพลิเคชันในรูปแบบ Container บนเครื่อง Server ของคุณได้อย่างเสถียร</p>


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