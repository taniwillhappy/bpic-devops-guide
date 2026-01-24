<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>คู่มือสร้างโปรเจค CRUD แบบ Modern (Frontend)</h1><br>
  <p>นี่คือแนวทางการสร้างโปรเจค CRUD (Create, Read, Update, Delete) ยุคใหม่ โดยเน้นความเป็น Modern Frontend ที่ทำงานได้รวดเร็ว จัดการข้อมูลได้ง่าย และมีโครงสร้างที่สะอาดครับ</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1 -->
  <h1>1. การสร้าง Frontend (Vue 3 + Nuxt) </h1><br>

      <!-- ขั้นตอน 1 -->
      <h2>ขั้นตอนที่ 1.1: สร้างโปรเจค Nuxt</h2><br>
      <p>เปิด Terminal อีกอัน (อันใหม่) แล้วพิมพ์คำสั่ง</p>
      <p class="bggray">npx nuxi@latest init smartclass-frontend
                        <br>cd smartclass-frontend
                        <br>npm install</p>
      <br>
      <img src="../img/frontend 1.1.png" width="70%"><br><br>

      <p>เลือก NPM และกด Enter รอระบบติดตั้ง </p>
      <img src="../img/frontend 1.1.2.png" width="70%"><br><br>

      <p>เลือกติดตั้ง git repository </p>
      <img src="../img/frontend 1.1.3.png" width="70%"><br><br>

      <p>ผลลัพธ์ที่ได้  </p>
      <img src="../img/frontend 1.1.4.png" width="70%"><br><br>

      <!-- ขั้นตอน 2 -->
      <h2>ขั้นตอนที่ 1.2: ติดตั้ง Pinia (สำหรับจัดการข้อมูล)</h2><br>
      <p>พิมพ์คำสั่งลงที่ Folder frontend</p>
       <p class="bggray">npm install pinia @pinia/nuxt</p>
      <br><br>

      <!-- ขั้นตอน 3 -->
      <h2>ขั้นตอนที่ 1.3: แก้ไข nuxt.config.ts</h2><br>
      <p>เปิดไฟล์ nuxt.config.ts แล้วเพิ่ม @pinia/nuxt เข้าไปในส่วน modules</p>
      <img src="../img/frontend 1.3.png" width="70%"><br><br>
      <br><br>

      <!-- ขั้นตอน 4 -->
      <h2>ขั้นตอนที่ 1.4: สร้างโครงสร้างโฟลเดอร์และไฟล์</h2><br>
      <p>ให้สร้างโฟลเดอร์และไฟล์ตามนี้ในโปรเจค smartclass-frontend ดังนี้</p>
      <img src="../img/frontend 1.4.png" width="30%"><br><br>
      <br><br>

      <!-- ขั้นตอน 5 -->
      <h2>ขั้นตอนที่ 1.5: เขียนโค้ดในแต่ละไฟล์</h2><br>
      <p>composables/useClassroom.js (ไฟล์ฟังก์ชันเรียก API)</p>
      <img src="../img/frontend 1.5.png" width="70%"><br><br>

      <p>stores/classroomStore.js (ไฟล์จัดการข้อมูลหลัก) </p>
      <img src="../img/frontend 1.5.2.png" width="70%"><br><br>

      <p>components/ClassroomForm.vue (คอมโพเนนท์ฟอร์ม)</p>
      <img src="../img/frontend 1.5.3.png" width="70%"><br><br>

      <p>components/ClassroomList.vue (คอมโพเนนท์รายการ) </p>
      <img src="../img/frontend 1.5.4.png" width="70%"><br><br>

      <p>pages/index.vue (หน้าหลัก) </p>
      <img src="../img/frontend 1.5.5.png" width="70%"><br><br>
      <br><br>

      <!-- ขั้นตอน 6 -->
      <h2>ขั้นตอนที่ 1.6: ทดสอบ Frontend</h2><br>
      <p>ใน Terminal อันที่สอง (ที่โฟลเดอร์ smartclass-frontend) ให้พิมพ์คำสั่ง npm run dev</p>
      <p>เปิดเว็บไปที่ http://localhost:3000 (หรือ URL ที่ Nuxt บอก)</p>
      <br><br>

  <!-- ข้อ 2 -->
  <h1>2. การสร้าง Frontend (Vue 3 + Nuxt) ส่วนที่ 2</h1><br>

        <!-- ขั้นตอน 1 -->
      <h2>ขั้นตอนที่ 2.1: สร้างไฟล์ใหม่ใน Frontend</h2><br>
      <p>สร้างโฟลเดอร์ใหม่ตามนี้</p>
      <img src="../img/frontend2.1.png" width="30%"><br>
      <br><br>

        <!-- ขั้นตอน 2 -->
      <h2>ขั้นตอนที่ 2.2: เขียนโค้ดในแต่ละไฟล์</h2><br>
      <p>แก้ไข nuxt.config.ts</p>
      <p>เพิ่ม runtimeConfig สำหรับเก็บค่าลับ:</p>
      <img src="../img/frontend2.2.png" width="70%"><br><br>

      <p>ถ้า Process Error ให้ npm i --save-dev @types/node ใน BPIC/smartclass-frontend </p>
      <img src="../img/frontend2.2.2.png" width="70%"><br><br>

      <p>composables/useAuth.js </p>
      <img src="../img/frontend2.2.3.png" width="70%"><br><br>

      <p>composables/useStudent.js  </p>
      <img src="../img/frontend2.2.4.png" width="70%"><br><br>

      <p>stores/authStore.js </p>
      <img src="../img/frontend2.2.5.png" width="70%"><br><br>

      <p>stores/studentStore.js </p>
      <img src="../img/frontend2.2.6.png" width="70%"><br><br>

      <p>middleware/auth.global.ts </p>
      <img src="../img/frontend2.2.7.png" width="70%"><br><br>

      <p>plugins/auth-initializer.js</p>
      <img src="../img/frontend2.2.8.png" width="70%"><br><br>

      <p>pages/login.vue </p>
      <img src="../img/frontend2.2.9.png" width="70%"><br>
      <img src="../img/frontend2.2.9.2.png" width="70%"><br><br>

      <p>pages/dashboard.vue</p>
      <img src="../img/frontend2.2.10.png" width="70%"><br>
      <img src="../img/frontend2.2.10.2.png" width="70%"><br><br>

      <p>CSS ไว้ทีหลัง 5555</p>
 

</template>

<style scoped>
li {
  margin-left: 50px;
}
.ml-50 {
  margin-left: 50px;
}
.ml-30 {
  margin-left: 30px;
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