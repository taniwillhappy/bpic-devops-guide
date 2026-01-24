<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>คู่มือสร้างโปรเจค CRUD แบบ Modern (Backend)</h1><br>
  <p>โปรแกรมที่ใช้มี Postman, Navicat (หรือจะเป็น DBeaver ก็ได้), PostgresSQL Database, VSCode (สำหรับการเขียนโค้ด)</p>
  <br><br>
  <hr>
  <br>

  <!-- การเตรียมเครื่องและติดตั้งโปรแกรม -->
  <h1>การเตรียมเครื่องและติดตั้งโปรแกรม</h1><br>
  <p>ก่อนอื่นเลย ต้องมีเครื่องมือก่อนครับ ให้ติดตั้งโปรแกรมเหล่านี้ในเครื่องคอมพิวเตอร์ของคุณ</p><br>
  <li><strong>Node.js:</strong> สำหรับรัน Backend และ Frontend <br>ดาวน์โหลด: <a href="https://nodejs.org/" target="_blank">Node.js</a> (เลือกเวอร์ชั่น LTS)</li>
  <li><strong>VS Code:</strong> โปรแกรมสำหรับเขียนโค้ด <br>ดาวน์โหลด: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></li>
  <li><strong>PostgreSQL:</strong> โปรแกรมฐานข้อมูล <br>ดาวน์โหลด: <a href="https://www.postgresql.org/download/" target="_blank">PostgreSQL</a> (เลือกตามระบบปฏิบัติการของคุณ)
  <br>เตือน! : ตอนติดตั้งจะให้ตั้งรหัสผ่านสำหรับ user postgres กรุณาจดไว้ให้ดีๆ นะครับ!</li>
  <li><strong>Navicat:</strong> โปรแกรมจัดการฐานข้อมูล <br>ดาวน์โหลด Trial: <a href="https://www.navicat.com/en/download/navicat-for-postgresql" target="_blank">Navicat Trial</a></li>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1 -->
  <h2>1. การตั้งค่า Database (PostgreSQL + Navicat)</h2><br>

      <!-- ขั้นตอน 1 -->
      <h3>ขั้นตอนที่ 1.1 เปิด Navicat และเชื่อมต่อ PostgreSQL</h3><br>
        <li>เปิด Navicat ขึ้นมา</li>
        <li>คลิก Connection -> PostgreSQL…</li>
      <img src="../img/navicat1.1.png" width="70%">
      <p>กรอกข้อมูลตามนี้:</p><br>
        <li><strong>Connection Name:</strong> Local-PostgreSQL (ตั้งอะไรก็ได้)</li>
        <li><strong>Host:</strong> localhost</li>
        <li><strong>Username:</strong> postgres</li>
        <li><strong>Password:</strong> ใส่รหัสผ่านที่ตั้งไว้ตอนติดตั้ง</li>
      <img src="../img/navicat1.2.png" width="70%">
      <p>คลิก Test Connection ถ้าขึ้น Successful ก็คลิก OK</p>
      <br><br>

      <!-- ขั้นตอน 2 -->
      <h3>ขั้นตอนที่ 1.2 สร้าง Database และ Table</h3><br>
      <p>ใน Navicat ด้านซ้าย คลิกขวาที่ Connection ที่เพิ่งสร้าง -> New Database...</p>
      <img src="../img/navicat1.3.png" width="70%"><br><br>

      <p>ตั้งชื่อว่า smartclass_local แล้วตั้งค่าตามในภาพ และกด OK</p>
      <img src="../img/navicat1.4.png" width="70%"><br><br>

      <p>คลิกขวาที่ฐานข้อมูล smartclass_local -> New Query...</p>
      <img src="../img/navicat1.5.png" width="70%"><br><br>

      <p>คัดลอกโค้ดนี้วางลงไปแล้วกดปุ่ม Run (ไอคอนสามเหลี่ยมเขียว)</p>
      <img src="../img/navicat1.6.png" width="70%">
      <p style="color: green;">ถ้าไม่มี Error แสดงว่าคุณสร้างตาราง classrooms สำเร็จแล้ว! </p>
      <br><br>

  <!-- ข้อ 2 -->
  <h2>2. การสร้าง Backend API (Node.js + Express)</h2><br>

      <!-- ขั้นตอน 1 -->
      <h3>ขั้นตอนที่ 2.1 สร้างโฟลเดอร์และเริ่มโปรเจค</h3><br>
      <p>เปิด Terminal (หรือ Command Prompt) แล้วพิมพ์</p>
        <p class="bggray">mkdir smartclass-api 
                          <br>cd smartclass-api 
                          <br>npm init -y</p>
      <br><br>
      <p>ผลลัพธ์ คือได้ไฟล์ package.json </p>
      <img src="../img/api2.1.png" width="70%">
      <br><br>

      <!-- ขั้นตอน 2 -->
      <h3>ขั้นตอนที่ 2.2 ติดตั้ง Packages ที่จำเป็น </h3><br>
      <p>คำสั่งที่ต้องพิมพ์</p>
        <p class="bggray">npm install express pg cors dotenv 
                          <br> 
                          <br>npm install --save-dev nodemon</p>
      <br><br>
      <p>ผลลัพธ์ คือได้ไฟล์ package-lock.json และ node_modules </p>
      <img src="../img/api2.2.png" width="70%">
      <br><br>

      <!-- ขั้นตอน 3 -->
      <h3>ขั้นตอนที่ 2.3: สร้างไฟล์สำหรับเก็บค่าลับ  </h3><br>
      <p>สร้างไฟล์ชื่อ .env ในโฟลเดอร์ smartclass-api แล้วใส่ข้อความนี้: </p><br>
        <p>DB_USER = postgres</p>
        <p>DB_HOST = localhost</p>
        <p>DB_DATABASE = smartclass_local</p>
        <p>DB_PASSWORD = ใส่รหัสผ่านของคุณตรงนี้ (ตามที่ได้ตั้งค่าตอนติดตั้ง)</p>
        <p>DB_PORT = 5432 (ตามที่ได้ตั้งค่าตอนติดตั้ง)</p>
        <p>PORT=3001 </p>
      <img src="../img/api2.3.png" width="70%">
      <br><br>

      <!-- ขั้นตอน 4 -->
      <h3>ขั้นตอนที่ 2.4: สร้างโครงสร้างโฟลเดอร์และไฟล์   </h3><br>
      <p>ให้สร้างโฟลเดอร์และไฟล์ตามนี้ (สามารถสร้างผ่าน VS Code ได้เลย) ตามภาพดังนี้ </p>
      <img src="../img/api2.4.png" width="70%">
      <br><br>
 
      <!-- ขั้นตอน 5 -->
      <h3>ขั้นตอนที่ 2.5: เขียนโค้ดในแต่ละไฟล์ </h3><br>
      <p>src/config/db.js (ไฟล์เชื่อมต่อฐานข้อมูล) </p>
      <img src="../img/api2.5.png" width="70%"><br><br>

      <p>src/models/classroomModel.js (ไฟล์จัดการฐานข้อมูล) </p>
      <img src="../img/api2.5.2.png" width="70%"><br><br>

      <p>src/controllers/classroomController.js (ไฟล์ควบคุม Logic) </p>
      <img src="../img/api2.5.3.png" width="70%"><br><br>

      <p>src/routes/classroomRoutes.js (ไฟล์กำหนดเส้นทาง API) </p>
      <img src="../img/api2.5.4.png" width="70%"><br><br>

      <p>src/index.js (ไฟล์หลักสำหรับรัน Server)  </p>
      <img src="../img/api2.5.5.png" width="70%"><br><br>
      <br><br>

      <!-- ขั้นตอน 6 -->
      <h3>ขั้นตอนที่ 2.6: แก้ไข package.json</h3><br>
      <p>เปิดไฟล์ package.json แล้วเพิ่มส่วนของ scripts</p><br>
      <p style="color: red;">อันเดิม</p>
      <img src="../img/api2.6.png" width="70%"><br><br>

      <p style="color: green;">เขียนเพิ่ม</p>
      <img src="../img/api2.6.2.png" width="70%"><br><br>
      <br><br>

      <!-- ขั้นตอน 7 -->
      <h3>ขั้นตอนที่ 2.7: ทดสอบ Backend</h3><br>
      <p>ใน Terminal ที่โฟลเดอร์ smartclass-api ให้พิมพ์คำสั่ง npm run dev</p>
      <img src="../img/api2.7.png" width="70%">
      <p style="color: green;">ถ้าขึ้นข้อความ Backend running on http://localhost:3001 ถือว่าสำเร็จครับ</p>
      <br><br>
  
  <!-- ข้อ 3 -->
  <h2>3. การรันและทดสอบทั้งระบบ</h2><br>
  <p>ตอนนี้คือช่วงเวลาแห่งความสำเร็จ!</p>
  <br>
    <li><strong>Terminal 1:</strong> ต้องอยู่ที่ smartclass-api และรัน npm run dev</li>
    <li><strong>Terminal 2:</strong> ต้องอยู่ที่ smartclass-frontend และรัน npm run dev</li>
    <li><strong>เว็บเบราว์เซอร์:</strong> เปิด http://localhost:3000</li>
  <br><br>

    <!-- ขั้นตอน 1 -->
      <h3>ขั้นตอนที่ 3.1 ดาวน์โหลดและติดตั้ง Postman </h3><br>
      <p>ถ้าคุณยังไม่มี Postman ในเครื่องคอมพิวเตอร์ของคุณ สามารถดาวน์โหลดและติดตั้งได้จากลิงก์นี้ครับ Postman Downloads</p>
      <br><br>

    <!-- ขั้นตอน 2 -->
      <h3>ขั้นตอนที่ 3.2 เตรียม Backend ให้พร้อม </h3><br>
      <p>ก่อนจะเปิดใช้งาน Postman ต้องแน่ใจว่า Backend ของคุณกำลังทำงานอยู่ โดยเปิด Terminal ที่โฟลเดอร์ smartclass-api และรันคำสั่ง npm run dev</p><br>
      <p>คุณต้องเห็นข้อความ "Backend running on http://localhost:3001" ปรากฏอยู่</p>
      <br><br>

    <!-- ขั้นตอน 3 -->
      <h3>ขั้นตอนที่ 3.3 ทดสอบแต่ละ Endpoint ด้วย Postman </h3><br>
      <p>เปิดโปรแกรม Postman ขึ้นมาและเริ่มทดสอบแต่ละ Endpoint ดังนี้:</p><br>
      
            <!-- ข้อ 1 -->
             <div class="ml-30">
             <h3>3.3.1 ทดสอบการดึงข้อมูลทั้งหมด (GET)</h3><br>
             <p>ทดสอบว่า API สามารถส่งรายการห้องเรียนทั้งหมดกลับมาได้หรือไม่</p><br>
              <li>เลือก HTTP Method เป็น GET</li>
              <li>พิมพ์ URL: http://localhost:3001/api/classrooms</li>
              <li>กดปุ่ม Send</li>
            <img src="../img/api3.3.png" width="70%">
            <p>ผลลัพธ์ที่ควรได้</p>
              <li>Status: 200 OK</li>
              <li>Response Body: จะเป็น Array [] ว่าง (ถ้ายังไม่มีข้อมูล) หรือ [{"id": 1, "name": "…", …}]</li>
            </div>
            <br><br>

            <!-- ข้อ 2 -->
             <div class="ml-30">
             <h3>3.3.2 ทดสอบการเพิ่มข้อมูลใหม่ (POST) </h3><br>
             <p>ทดสอบการสร้างห้องเรียนใหม่</p><br>
              <li>เลือก HTTP Method เป็น POST</li>
              <li>พิมพ์ URL: http://localhost:3001/api/classrooms</li>
              <li>คลิกแท็บ Body ด้านล่าง</li>
              <li>เลือก raw และเลือก JSON ทางขวามือ</li>
              <li>พิมพ์ข้อมูล JSON นี้ลงในช่องว่าง:</li>
                <p class="ml-50">{
                                  <br>"name": "ห้องทดสอบจาก Postman"
                                 <br>}</p>
              <li>กดปุ่ม Send</li>
              <img src="../img/api3.3.2.png" width="70%">
              <p>ผลลัพธ์ที่ควรได้</p>
               <li>Status: 201 Created</li>
               <li>Response Body: ข้อมูลของห้องเรียนที่เพิ่งสร้าง พร้อมกับ id ที่ฐานข้อมูลสร้างให้โดยอัตโนมัติ</li>
            </div>
            <br><br>

            <!-- ข้อ 3 -->
             <div class="ml-30">
             <h3>3.3.3 ทดสอบการแก้ไขข้อมูล (PUT) </h3><br>
             <p>ทดสอบการแก้ไขชื่อห้องเรียนเดิม โดยใช้ id ที่ได้จากการทดสอบ POST ก่อนหน้านี้ (ในตัวอย่างใช้ id=1)</p><br>
              <li>เลือก HTTP Method เป็น PUT</li>
              <li>พิมพ์ URL: http://localhost:3001/api/classrooms/1 <strong><<< เพิ่ม 1 หรือก็คือ ID : 1</strong></li>
              <li>ไปที่แท็บ Body -> raw -> JSON</li>
              <li>เลือก raw และเลือก JSON ทางขวามือ</li>
              <li>พิมพ์ข้อมูล JSON ที่ต้องการอัปเดต:</li>
                <p class="ml-50">{
                                  <br>"name": "ห้อง 101 (อัปเดตแล้ว)"
                                 <br>}</p>
              <li>กดปุ่ม Send</li>
              <img src="../img/api3.3.3.png" width="70%">
              <p>ผลลัพธ์ที่ควรได้</p>
               <li>Status: 200 OK</li>
               <li>Response Body: ข้อมูลห้องเรียนที่ถูกอัปเดตแล้ว</li>
            </div>
            <br><br>

            <!-- ข้อ 4 -->
             <div class="ml-30">
             <h3>3.3.4 ทดสอบการลบข้อมูล (DELETE) </h3><br>
             <p>ทดสอบการลบข้อมูลห้องเรียน โดยใช้ id เดิม (id=1)</p><br>
              <li>เลือก HTTP Method เป็น DELETE</li>
              <li>พิมพ์ URL: http://localhost:3001/api/classrooms/1 <strong><<< เลือก ID ที่ต้องการลบ</strong></li>
              <li>ไม่ต้องไปตั้งค่าอะไรที่แท็บ Body</li>
              <li>กดปุ่ม Send</li>
              <img src="../img/api3.3.4.png" width="70%">
              <p>ผลลัพธ์ที่ควรได้</p>
               <li>Status: 200 OK</li>
               <li>Response Body: ข้อความยืนยันการลบ</li>
               <p class="ml-50">{
                                  <br>"message": "Classroom deleted successfully"
                                 <br>}</p>
            </div>
            <br><br>

            <!-- 5. การตรวจสอบครั้งสุดท้าย -->
             <div class="ml-30">
             <h3>3.3.5 การตรวจสอบสุดท้าย </h3><br>
             <p>หลังจากลบข้อมูลไปแล้ว ให้กลับไปทดสอบ GET อีกครั้ง (http://localhost:3001/api/classrooms) คุณจะพบว่าข้อมูลที่เพิ่งลบไปนั้นหายไปแล้ว และ Response Body จะกลับไปเป็น Array ว่าง []</p>
              <img src="../img/api3.3.5.png" width="70%">
              <p>ปัญหาที่อาจเจอ</p>
               <li>Could not get any response: ตรวจสอบว่า Backend ของคุณกำลังรันคำสั่ง npm run dev อยู่จริงๆ หรือไม่</li>
               <li>Cannot GET /api/classrooms: ตรวจสอบ URL ให้ถูกต้อง อาจจะพิมพ์ผิด หรือลืม /api/classrooms</li>
               <li>Status 404 Not Found: สำหรับ PUT/DELETE ตรวจสอบว่า id ที่คุณใช้มีอยู่จริงในฐานข้อมูลหรือไม่</li>
            </div>
            <br><br>

      <br><br>

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