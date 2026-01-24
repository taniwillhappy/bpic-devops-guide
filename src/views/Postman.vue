<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การใช้งาน Postman สำหรับงาน Backend</h1><br>
  <p>Postman คือเครื่องมือสำคัญสำหรับนักพัฒนา Backend เพื่อใช้ในการทดสอบ ดูแล และจัดการ API (Application Programming Interface) 
    โดยช่วยให้เราสามารถส่งคำขอ (Requests) ไปยัง Server และตรวจสอบการตอบกลับ (Responses) ได้อย่างละเอียดโดยไม่ต้องเขียนโค้ด Frontend ครับ</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1 -->
  <h2>1. การสร้างและส่ง Request</h2>
  <p>หัวใจหลักของ Postman คือการจำลองตัวตนเป็น Client เพื่อคุยกับ Server</p><br>
    <li><strong>Method:</strong> เลือกประเภทการทำงาน เช่น GET (ดึงข้อมูล), POST (สร้างข้อมูล), PUT/PATCH (แก้ไข), และ DELETE (ลบ)</li>
    <li><strong>URL:</strong> ระบุที่อยู่ของ API (เช่น http://localhost:3000/api/users)</li>
    <li><strong>Params:</strong> ใช้สำหรับส่งค่าผ่าน URL (Query Strings)</li>
    <li><strong>Body:</strong> สำหรับส่งข้อมูล (มักใช้รูปแบบ JSON) ในคำขอประเภท POST หรือ PUT</li>
    <br>

  <!-- ข้อ 2 -->
  <h2>2. การจัดการสภาพแวดล้อม (Environments & Variables)</h2>
  <p>ฟีเจอร์นี้ช่วยให้คุณสลับการทำงานระหว่างเครื่องตัวเอง (Local) และเครื่องจริง (Production) ได้อย่างรวดเร็ว</p><br>
    <li><strong>Variables:</strong> กำหนดตัวแปรเช่น <img src="../img/base_url.png" width="10%"> เพื่อไม่ต้องพิมพ์ IP หรือ Domain เดิมซ้ำๆ</li>
    <li><strong>Environments:</strong> สร้างชุดตัวแปรแยกตามสถานะ เช่น "Local Environment" หรือ "Production Environment"</li>
    <br>

  <!-- ข้อ 3 -->
  <h2>3. การจัดกลุ่มด้วย Collections</h2>
  <p>คุณสามารถรวบรวม Request ที่เกี่ยวข้องกับโปรเจกต์เดียวกันไว้ใน Collections</p><br>
    <li>ช่วยให้จัดหมวดหมู่ API เป็นโฟลเดอร์ เช่น Folder User, Folder Product</li>
    <li>สามารถแชร์ทั้ง Collection ให้ทีมงานคนอื่นนำไปทดสอบต่อได้ทันที (Export/Import เป็นไฟล์ JSON)</li>
    <br>

  <!-- ข้อ 4 -->
  <h2>4. การตรวจสอบ Response (Debugging)</h2>
  <p>เมื่อกดส่ง (Send) Postman จะแสดงข้อมูลที่ Server ตอบกลับมา</p><br>
    <li><strong>Status Code:</strong> ตรวจสอบว่าสำเร็จหรือไม่ (เช่น 200 OK, 201 Created, 404 Not Found, หรือ 500 Error)</li>
    <li><strong>Pretty Print:</strong> แสดงผล JSON ในรูปแบบที่อ่านง่าย มีการไฮไลต์สี</li>
    <li><strong>Time & Size:</strong> ดูความเร็วในการตอบสนองและขนาดของข้อมูล เพื่อนำไป Optimize ประสิทธิภาพของ API</li>
    <br>

  <!-- ข้อ 5 -->
  <h2>5. การเขียน Script สำหรับทดสอบ (Tests)</h2>
  <p>Postman รองรับการเขียน JavaScript สั้นๆ เพื่อตรวจสอบความถูกต้องอัตโนมัติ</p><br>
    <li>เช่น ตรวจสอบว่า Status Code ต้องเป็น 200 เสมอ</li>
    <li>ตรวจสอบว่าข้อมูลที่ตอบกลับมามี Field ที่ต้องการครบถ้วนหรือไม่</li>
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