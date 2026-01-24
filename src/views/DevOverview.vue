<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>ภาพรวมการพัฒนาและสถาปัตยกรรม</h1><br>
  <p>ภาพรวมสถาปัตยกรรมและโครงสร้างระบบ
  ข้อมูลส่วนนี้สรุปแนวทางการตั้งค่า Server เพื่อให้เห็นความเชื่อมโยงของระบบ ตั้งแต่ระดับอุปกรณ์พื้นฐาน ผังการเชื่อมต่อเครือข่าย จนถึงแหล่งข้อมูลสำหรับการพัฒนาผ่าน 
  <a href="https://github.com/mangcom/vecskill">VECSkill GitHub Repository</a></p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1 -->
  <h2>1. ภาพรวมและอุปกรณ์ที่เกี่ยวข้อง (Project & Hardware)</h2>
  <p>การสร้างสภาพแวดล้อม DevOps/Homelab ใช้เทคโนโลยี Virtualization เพื่อแยกการทำงานของ Service ให้เป็นอิสระต่อกัน ประกอบด้วย</p><br>

    <li><strong>Server/Mini PC:</strong> อุปกรณ์หลักสำหรับติดตั้ง Ubuntu Server และ Docker (คุณสมบัติแนะนำ: CPU 4 Cores+, RAM 8GB+, SSD 100GB+) 
      หรือใช้ระบบ Virtualization เช่น Proxmox, VMware ESXi หรือ VirtualBox ก็ได้</li>

    <li><strong>Router:</strong> เครื่องคอมพิวเตอร์สำหรับเข้าถึง Server ผ่านโปรโตคอล SSH และจัดการซอร์สโค้ดผ่าน Git</li>

    <li><strong>Client Machine:</strong> เครื่องคอมพิวเตอร์ส่วนตัวของคุณ (PC/Laptop) ที่ใช้สำหรับ SSH เข้าไปจัดการ Server และใช้งาน Git เพื่อ push โค้ด</li>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 2 -->
  <h2>2. ผังการเชื่อมต่อ (Connection Diagram)</h2>
  <p>แผนภาพแสดงโครงสร้างเครือข่ายที่แบ่งสัดส่วนระหว่างส่วนบริหารจัดการ (Management Zone) และพื้นที่ใช้งาน (Team Zones) เพื่อประสิทธิภาพและความปลอดภัยในการทดสอบระบบ</p><br>
  <img src="../img/00-ConnectionDiagram.png" width="100%">
  <img src="../img/00-visio.png" width="100%">
  <br><br><br>
  <hr>
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