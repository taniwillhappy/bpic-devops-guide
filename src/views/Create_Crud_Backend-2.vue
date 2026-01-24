<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>คู่มือสร้างโปรเจค CRUD แบบ Modern (Backend) หน้า 2</h1><br>
  <p>โปรแกรมที่ใช้มี Postman, Navicat (หรือจะเป็น DBeaver ก็ได้), PostgresSQL Database, VSCode (สำหรับการเขียนโค้ด)</p>
  <br><br>
  <hr>
  <br>

  <!-- การเตรียมเครื่องและติดตั้งโปรแกรม -->
  <h1>การออกแบบและสร้างฐานข้อมูล (Database) </h1><br>
  
      <!-- ข้อ 4 -->
       <h2>4. การปรับปรุงฐานข้อมูล</h2><br>
       <p>เราจะทำการปรับปรุงฐานข้อมูลด้วยการเพิ่มตาราง teachers และ students และปรับปรุงตาราง classrooms เล็กน้อย</p><br>

          <!-- ขั้นตอน 1 -->
          <h3>ขั้นตอนที่ 4.1 ลบตารางเก่าและสร้างใหม่ใน Navicat</h3><br>
              <li>เปิด Navicat และเชื่อมต่อไปที่ฐานข้อมูล smartclass_local</li>
              <li>คลิกขวาที่ตาราง classrooms (เก่า) และเลือก "Delete Table" เพื่อลบทิ้ง</li>
          <img src="../img/db4.1.png" width="70%"><br><br>

              <p>คลิกขวาที่ฐานข้อมูล smartclass_local -> "New Query..."</p>
              <li>คัดลอกโค้ด SQL ด้านล่างไปวาง แล้วกดปุ่ม "Run" เพื่อสร้างตารางใหม่ทั้งหมดในครั้งเดียว</li>
          <img src="../img/db4.1.2.png" width="70%"><br><br>

              <p>-- ตารางสำหรับเก็บข้อมูลห้องเรียน </p>
          <img src="../img/db4.1.3.png" width="70%"><br><br>

              <p>กด RUN แล้วจะได้มา 3 ตาราง ดังนี้ </p>
          <img src="../img/db4.1.4.png" width="70%"><br><br>

          <!-- ขั้นตอน 2 -->
          <h3>ขั้นตอนที่ 4.2 เพิ่มข้อมูลตัวอย่าง (Optional แต่แนะนำ)</h3><br>
              <p>เพื่อความสะดวกในการทดสอบ ให้สร้าง Query ใหม่และรันโค้ดนี้เพื่อเพิ่มข้อมูลตัวอย่าง</p><br>

              <p>-- เพิ่มข้อมูลห้องเรียน</p>
              <p>INSERT INTO classrooms (name) VALUES ('ห้อง ม.4/1'), ('ห้อง ม.4/2');</p><br>

              <p>-- เพิ่มข้อมูลครู (รหัสผ่านคือ 'admin123' แต่ในโลกจริงต้อง Hash นะ!)</p>
              <p>INSERT INTO teachers (teacher_name, username, password, classroom_id) VALUES</p>
              <p>('ครูไพจิตร', 'admin', 'admin123', 1),</p>
              <p>('ครูสมศรี', 'teacher2', 'password2', 2);</p><br>

              <p>-- เพิ่มข้อมูลนักเรียน</p>
              <p>INSERT INTO students (student_name, role_id, classroom_id, teacher_id) VALUES</p>
              <p>('นายสมชาย', 1, 1, 1), -- หัวหน้าห้อง ม.4/1</p>
              <p>('นางสมใจ', 2, 1, 1), -- รองหัวหน้าห้อง ม.4/1</p>
              <p>('นายสมศักดิ์', 3, 1, 1), -- เลขาห้อง ม.4/1</p>
              <p>('นางสมหญิง', 4, 1, 1), -- นักเรียนทั่วไป ห้อง ม.4/1</p>
              <p>('นายประสิทธิ', 1, 2, 2); -- หัวหน้าห้อง ม.4/2</p>
          <img src="../img/db4.2.png" width="70%"><br><br>


      <!-- ข้อ 5 -->
       <h2>5. การพัฒนา Backend API (Node.js + Express)</h2><br>

             <!-- ขั้นตอน 1 -->
          <h3>ขั้นตอนที่ 5.1 ติดตั้ง Package เพิ่มเติม</h3><br>
          <p>ใน Terminal ที่โฟลเดอร์ smartclass-api ให้รันคำสั่ง</p>
          <p class="bggray"> npm install jsonwebtoken bcryptjs</p><br>
              <li>jsonwebtoken: สำหรับสร้างและตรวจสอบ JWT Token</li>
              <li>bcryptjs: สำหรับแฮชรหัสผ่าน (ควรใช้จริง แต่ตอนนี้จะใช้เป็นข้อความธรรมดาไปก่อน)</li>
          <br><br>

             <!-- ขั้นตอน 2 -->
          <h3>ขั้นตอนที่ 5.2 สร้างไฟล์ใหม่ใน Backend</h3><br>
          <p>สร้างไฟล์ตามโครงสร้างนี้</p>
          <img src="../img/backend 5.2.png" width="30%"><br><br>

             <!-- ขั้นตอน 3 -->
          <h3>ขั้นตอนที่ 5.3 เขียนโค้ดในแต่ละไฟล์</h3><br>
          <p>src/models/teacherModel.js</p>
          <img src="../img/backend 5.3.png" width="70%"><br><br>

          <p>src/models/studentModel.js </p>
          <img src="../img/backend 5.3.2.png" width="70%"><br><br>

          <p>src/middleware/authMiddleware.js</p>
          <img src="../img/backend 5.3.3.png" width="70%"><br><br>

          <p>src/controllers/authController.js </p>
          <img src="../img/backend 5.3.4.png" width="70%"><br><br>

          <p>src/controllers/dashboardController.js  </p>
          <img src="../img/backend 5.3.5.png" width="70%"><br><br>

          <p>src/controllers/studentController.js   </p>
          <img src="../img/backend 5.3.6.png" width="70%"><br><br>

          <p>src/routes/dashboardRoutes.js    </p>
          <img src="../img/backend 5.3.7.png" width="70%"><br><br>

          <p>src/routes/studentRoutes.js </p>
          <img src="../img/backend 5.3.8.png" width="70%"><br><br>

          <p>แก้ไข src/index.js</p>
          <img src="../img/backend 5.3.9.png" width="70%"><br><br>

          <p>src/controllers/teacherController.js ยาวนิดนึง </p>
          <img src="../img/backend 5.3.10.png" width="70%"><br>
          <img src="../img/backend 5.3.10.1.png" width="70%"><br>
          <img src="../img/backend 5.3.10.2.png" width="70%"><br><br>

          <p>src/routes/teacherRoutes.js</p>
          <img src="../img/backend 5.3.11.png" width="70%"><br><br>

          <p>src/routes/authRoutes.js</p>
          <img src="../img/backend 5.3.12.png" width="70%"><br><br><br>

          <!-- ขั้นตอน 4 -->
          <h3>ขั้นตอนที่ 5.4 ทดสอบ Backend ด้วย Postman</h3><br>
          <p>รัน Backend ด้วยคำสั่ง npm run dev</p><br>
          <li><strong>ทดสอบ Login (POST):</strong>
            <br>URL: http://localhost:3001/api/auth/login
            <br>Body (JSON): { "username": "admin", "password": "admin123" }
            <br>คุณต้องได้รับ token กลับมา
          </li>
          <img src="../img/backend 5.4.png" width="70%"><br><br>

          <li><strong>ทดสอบ Dashboard (GET):</strong>
            <br>URL: http://localhost:3001/api/dashboard
            <br>ไปที่แท็บ Authorization -> เลือก Bearer Token
            <br>ในช่อง Token ให้ใส่ token ที่ได้จากการ Login มา
          </li>
          <img src="../img/backend 5.4.2.png" width="70%"><br><br>

          <p>เมื่อกรอก Token แล้ว ให้กด Send คุณต้องได้รับข้อมูล Dashboard กลับมา </p>
          <img src="../img/backend 5.4.3.png" width="70%"><br><br>

          <!-- ขั้นตอน 5 -->
          <h3>ขั้นตอนที่ 5.5 การดึงข้อมูลครู</h3><br>
          <p>ในขั้นตอนนี้ เราจะใช้ Token ที่เพิ่งได้มาเพื่อเข้าถึงข้อมูลที่ต้องการการป้องกัน</p><br>
          <li><strong>สร้างคำขอใหม่:</strong> คลิกปุ่ม + อีกครั้ง</li>
          <img src="../img/backend 5.5.png" width="70%"><br><br>

          <li><strong>ตั้งค่า Request สำหรับดึงข้อมูลครู:</strong>
            <br>เลือก Method: GET
            <br>กรอก URL: http://localhost:3001/api/teachers
            <br>ไปที่แท็บ Authorization (นี่คือจุดสำคัญ!)
            <br>--- ที่ช่อง Type ให้เลือก Bearer Token
            <br>--- ที่ช่อง Token ทางขวามือ ให้วาง (Paste) ค่า Token ที่คัดลอกไว้จากขั้นตอนที่ 1
          </li>
          <li>กดปุ่ม Send</li>
          <br>

          <li><strong>ตรวจสอบผลลัพธ์:</strong>
            <br>Status: ต้องเป็น 200 OK
            <br>Response Body: คุณจะได้รับข้อมูลครูทั้งหมดที่อยู่ในฐานข้อมูลกลับมาในรูปแบบ Array เช่น:
            <br>[{ "id": 1, "teacher_name": "ครูไพจิตร", "username": "admin", "classroom_id": 1, "classroom_name": "ห้อง ม.4/1" },
            <br>{ "id": 2, "teacher_name": "ครูสมศรี", "username": "teacher2", "classroom_id": 2, "classroom_name": "ห้อง ม.4/2" } ]
          </li>
          <li>กดปุ่ม Send</li>
          <img src="../img/backend 5.5.2.png" width="70%"><br><br>

          <!-- ขั้นตอน 6 -->
          <h3>ขั้นตอนที่ 5.6 ทดสอบการเพิ่มข้อมูล (Create Teacher)</h3><br>
          <p>เราจะลองสร้างข้อมูลครูคนใหม่เพื่อทดสอบการทำงานแบบ POST</p><br>
          <li><strong>สร้างคำขอใหม่:</strong> คลิกปุ่ม +</li>
          <li><strong>ตั้งค่า Request:</strong>
            <br>เลือก Method: POST
            <br>กรอก URL: http://localhost:3001/api/teachers
            <br>แท็บ Authorization: ตั้งค่า Bearer Token เหมือนเดิม (ใส่ Token ของคุณ)
            <br>ไปที่แท็บ Body:
            <br>--- เลือก raw และ JSON
            <br>--- พิมพ์ข้อมูลครูคนใหม่:
            <br>{ "teacher_name": "ครูใหม่", "username": "new_teacher_01", "password": "password123", "classroom_id": 1 }
          </li>
          <li>กดปุ่ม Send</li>
          <br>

          <li><strong>ตรวจสอบผลลัพธ์:</strong>
            <br>Status: ต้องเป็น 201 Created
            <br>Response Body: จะได้รับข้อมูลครูคนที่เพิ่งสร้าง พร้อม id ที่ฐานข้อมูลสร้างให้ เช่น:
            <br>{ "id": 3, "teacher_name": "ครูใหม่", "username": "new_teacher_01", "password": "password123", "classroom_id": 1 }
          </li>
          <li>กดปุ่ม Send</li>
          <img src="../img/backend 5.6.png" width="70%"><br><br>

          <li><strong>ปัญหาที่อาจเจอและวิธีแก้ไข</strong>
            <br>Status 401 Unauthorized หรือ 403 Forbidden:
            <br>--- สาเหตุ: Token ผิด, หมดอายุ, หรือไม่ได้ใส่
            <br>--- แก้ไข: กลับไปทำ ขั้นตอนที่ 1 Login ใหม่เพื่อรับ Token ใหม่ แล้วนำมาใส่ในแท็บ Authorization ใหม่

            <br>Status 404 Not Found:
            <br>--- สาเหตุ: พิมพ์ URL ผิด (อาจจะพิมพ์ผิด /api/teacher ตัวเดียว หรือพิมพ์ port ผิด)
            <br>--- แก้ไข: ตรวจสอบให้แน่ใจว่า URL ถูกต้องตามตัวอย่าง

            <br>Status 500 Internal Server Error:
            <br>--- สาเหตุ: มีปัญหาที่ฝั่ง Backend (เช่น โค้ดผิดพลาด, ต่อฐานข้อมูลไม่ได้)
            <br>--- แก้ไข: ดูที่ Terminal ที่รัน npm run dev อยู่ มักจะมีข้อความแสดงข้อผิดพลาดที่เกิดขึ้นมาให้ดู
          </li>
          <li>กดปุ่ม Send</li>

          


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