<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>การตั้งค่าพื้นฐาน Ubuntu Server (Post-Installation)</h1><br>
  <p>หลังจากติดตั้งระบบปฏิบัติการ Ubuntu Server (สเปคแนะนำ: CPU 4 Cores+, RAM 8GB+, SSD 100GB+) เรียบร้อยแล้ว ควรดำเนินการตั้งค่าเบื้องต้นดังนี้ครับ:</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1  -->
   <h2>1. อัปเดตระบบให้เป็นปัจจุบัน</h2>
   <br>
   <p>เพื่อให้มั่นใจว่าแพ็กเกจทุกตัวเป็นเวอร์ชันล่าสุดและมีความปลอดภัย:</p>
   <p class="bggray">sudo apt update && sudo apt upgrade -y</p>
   <br>
   
   
   <!-- ข้อ 2 -->
    <h2>2. ตั้งค่าผู้ใช้งาน (User Management)</h2>
    <br>
    <li><strong>เพิ่มผู้ใช้ใหม่:</strong> sudo adduser <ชื่อผู้ใช้> </li>
    <li><strong>ให้สิทธิ์ Admin (sudo):</strong> sudo usermod -aG sudo <ชื่อผู้ใช้> </li><br>
    <br>

    <!-- ข้อ 3  -->
    <h2>3. ตั้งค่าความปลอดภัยพื้นฐาน (UFW)</h2>
    <br>
    <p>เปิดใช้งาน Firewall เพื่อจำกัดการเข้าถึงพอร์ตต่างๆ:</p>
    <li><strong>อนุญาต SSH:</strong> sudo ufw allow ssh <ชื่อผู้ใช้> </li>
    <li><strong>เปิดใช้งาน Firewall:</strong> sudo ufw enable </li>
    <li><strong>ตรวจสอบสถานะ:</strong> sudo ufw status </li>
    <br>

    <!-- ข้อ 4  -->
    <h2>4. ตั้งค่าโซนเวลา (Timezone)</h2>
    <br>
    <p>ตั้งค่าเวลาให้ตรงกับประเทศไทยเพื่อให้ Log ของระบบถูกต้อง</p>
    <p class="bggray">sudo timedatectl set-timezone Asia/Bangkok</p>
    <br>

    <!-- ข้อ 5  -->
    <h2>5. ตั้งค่า IP Address (Static IP)</h2>
    <br>
    <p>สำหรับเครื่องที่เป็น Server Node แนะนำให้ตั้งค่า IP แบบคงที่ผ่าน Netplan เพื่อให้การเชื่อมต่อจากอุปกรณ์อื่นๆ ในแผนผังระบบ (เช่น L3 Switch หรือ Router) ไม่คลาดเคลื่อนครับ</p>
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