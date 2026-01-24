<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การจัดการ PostgreSQL ด้วย DBeaver</h1><br>
  <p>การใช้งาน DBeaver ร่วมกับ PostgreSQL เป็นแนวทางที่นิยมมากสำหรับนักพัฒนา Backend เพราะ DBeaver เป็นเครื่องมือประเภท GUI ที่ช่วยให้การจัดการฐานข้อมูลที่ซับซ้อนกลายเป็นเรื่องง่ายและมองเห็นภาพได้ชัดเจน</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1 -->
  <h2>1. การเชื่อมต่อฐานข้อมูล (Database Connection)</h2>
  <p>เมื่อเปิดโปรแกรม DBeaver ขึ้นมา ให้ทำตามขั้นตอนดังนี้ครับ</p><br>
  <p class="ml-50"><strong>1. สร้างการเชื่อมต่อใหม่:</strong> คลิกที่ไอคอน "New Database Connection" (รูปปลั๊กไฟสีฟ้า)</p>
  <p class="ml-50"><strong>2. เลือก Driver:</strong> ค้นหาและเลือก PostgreSQL แล้วกด Next</p>
  <p class="ml-50"><strong>3. กรอกรายละเอียดการเชื่อมต่อ:</strong></p>
    <li class="ml-120"><strong>Host:</strong> localhost (หากรันในเครื่องหรือ Docker) หรือ IP ของ Server</li>
    <li class="ml-120"><strong>Port:</strong> 5432 (ค่าเริ่มต้นของ Postgres)</li>
    <li class="ml-120"><strong>Database:</strong> ชื่อฐานข้อมูลที่ต้องการเข้าถึง (เช่น postgres)</li>
    <li class="ml-120"><strong>Authentication:</strong> กรอก Username และ Password ที่ตั้งไว้</li>

  <p class="ml-50"><strong>4. ดาวน์โหลด Driver:</strong> หากเป็นการใช้งานครั้งแรก DBeaver จะขอให้ดาวน์โหลด Driver ไฟล์ ให้กด Download</p>
  <p class="ml-50"><strong>5. ทดสอบ:</strong> กดปุ่ม Test Connection หากขึ้น Success แสดงว่าเชื่อมต่อได้ถูกต้อง</p>
  <br>

  <!-- ข้อ 2 -->
  <h2>2. ฟีเจอร์เด่นสำหรับงาน Backend</h2><br>
  <li><strong>ER Diagram:</strong> DBeaver สามารถสร้างแผนผังความสัมพันธ์ของตาราง (ER Diagram) ให้โดยอัตโนมัติ ช่วยให้คุณเห็นภาพรวมของฐานข้อมูลได้ทันที</li>
  <li><strong>SQL Editor:</strong> มีระบบ Auto-complete (ช่วยเติมคำสั่ง SQL) และการจัดรูปแบบโค้ด (Format) ที่ช่วยให้เขียน Query ได้รวดเร็ว</li>
  <li><strong>Data Editor:</strong> สามารถแก้ไขข้อมูลในตารางได้เหมือนการใช้งาน Excel (Edit cells) แล้วกด Save (Commit) ลงฐานข้อมูลได้เลย</li>
  <li><strong>Import/Export:</strong> รองรับการสำรองข้อมูล (Backup) และการนำเข้าข้อมูลจากไฟล์ CSV หรือ SQL ได้อย่างง่ายดาย</li>
  <br>

  <!-- ข้อ 3 -->
  <h2>3. การจัดการ Schema และ Table</h2><br>
  <li><strong>ตาราง (Tables):</strong> คุณสามารถคลิกขวาที่โฟลเดอร์ Tables เพื่อสร้างตารางใหม่ กำหนด Column, Data Type (เช่น uuid, varchar, jsonb) 
    และตั้งค่า Primary Key/Foreign Key ได้ผ่านหน้า UI</li>
  <li><strong>Constraints:</strong> จัดการข้อกำหนดต่างๆ เช่น Unique หรือ Not Null เพื่อรักษาความถูกต้องของข้อมูล (Data Integrity)</li>
  <br>

  <!-- ข้อ 4 -->
  <h2>4. การใช้งาน Query Manager</h2><br>
  <p>DBeaver จะบันทึกประวัติการรันคำสั่ง SQL ไว้ใน Query Manager ช่วยให้คุณย้อนกลับไปดูคำสั่งเก่าๆ ที่เคยเขียนไว้ได้ ซึ่งมีประโยชน์มากเวลาทำ Debugging หรือทดสอบ API</p>
  <br><br>
  <hr>
  <br>
  
  <!-- ข้อแนะนำเพิ่มเติมสำหรับการพัฒนา -->
  <h2>ข้อแนะนำเพิ่มเติมสำหรับการพัฒนา</h2><br>
  <li><strong>Tunneling (SSH):</strong> หากฐานข้อมูลอยู่บน Server จริง คุณสามารถตั้งค่า SSH Tunnel ใน DBeaver เพื่อเชื่อมต่อผ่านระบบความปลอดภัยโดยไม่ต้องเปิดพอร์ต 5432 สู่สาธารณะ</li>
  <li><strong>Dark Mode:</strong> DBeaver มี Dark Mode ที่ช่วยถนอมสายตาขณะทำงานร่วมกับโค้ด Backend นานๆ โดยตั้งค่าได้ที่ Window -> Preferences -> Appearance</li>
  <br>



</template>

<style scoped>
li {
  margin-left: 50px;
}
.ml-50 {
  margin-left: 50px;
}
.ml-120 {
  margin-left: 120px;
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