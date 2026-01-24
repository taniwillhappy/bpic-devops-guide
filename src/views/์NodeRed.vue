<script setup>
</script>

<template>
  <!-- หัวข้อ  -->
  <h1>Node-RED</h1><br>
  <p>Node-RED คือเครื่องมือพัฒนาซอฟต์แวร์ในรูปแบบ Low-code ที่เน้นการเขียนโปรแกรมแบบลากวาง (Flow-based Programming) 
    พัฒนาโดย IBM บนพื้นฐานของ Node.js เหมาะอย่างยิ่งสำหรับการเชื่อมต่ออุปกรณ์ Hardware, API และ Online Services เข้าด้วยกันครับ</p>
  <br><br>
  <hr>
  <br>

  <!-- จุดเด่น  -->
   <h2>จุดเด่นของ Node-RED</h2>
   <br>
   <li><strong>Visual Programming:</strong> ใช้การลากเส้นเชื่อมต่อระหว่าง "Node" (กล่องคำสั่ง) แทนการเขียนโค้ดบรรทัดยาวๆ ทำให้มองเห็นภาพรวมของระบบได้ชัดเจน</li>
   <li><strong>Lightweight:</strong> ทำงานบน Node.js ซึ่งใช้ทรัพยากรน้อยมาก สามารถรันได้ตั้งแต่บน Raspberry Pi, คลาวด์ ไปจนถึงเครื่อง Server ทั่วไป</li>
   <li><strong>Large Ecosystem:</strong> มี "Nodes" สำเร็จรูปให้โหลดใช้งานจากชุมชนมากกว่า 4,000 แบบ (เช่น โหนดสำหรับ Postgres, Docker, หรือ Dashboard)</li>
   <li><strong>Real-time Interaction:</strong> สามารถดูสถานะการทำงานของข้อมูลได้ทันทีผ่าน Debug Node</li>
   <br>
   
  <!-- ส่วนประกอบหลักในหน้า Editor  -->
   <h2>ส่วนประกอบหลักในหน้า Editor</h2>
   <br>
   <li><strong>Palette (ซ้าย):</strong> แหล่งรวมโหนดคำสั่งต่างๆ แบ่งตามหมวดหมู่ เช่น input, output, function, social และ storage</li>
   <li><strong>Workspace (กลาง):</strong> พื้นที่สำหรับวางโหนดและลากเส้นเชื่อมโยงลำดับการทำงาน (Flow)</li>
   <li><strong>Sidebar (ขวา):</strong> ส่วนแสดงข้อมูล Debug, ข้อมูลความช่วยเหลือ (Help) และการตั้งค่า Dashboard</li>
   <li><strong>Deploy Button (ขวาบน):</strong> ปุ่มสำหรับสั่งให้ Flow ที่เราออกแบบเริ่มทำงานจริงบน Server</li>
   <br>
   
  <!-- การติดตั้ง Node-RED (ผ่าน Docker)  -->
   <h2>การติดตั้ง Node-RED (ผ่าน Docker)</h2>
   <br>
   <p>เพื่อให้เข้ากับแนวทาง DevOps ที่คุณสนใจ การรัน Node-RED ผ่าน Docker เป็นวิธีที่สะอาดและจัดการง่ายที่สุดครับ</p>
   <p class="bggray"># รัน Node-RED Container
    <br>docker run -it -p 1880:1880 --name mynodered -v node_red_data:/data nodered/node-red
   </p><br>
   <li>เมื่อรันแล้ว สามารถเข้าใช้งานได้ที่: http://localhost:1880</li>
   <br>
   
   <br><a href="https://vecskill.bncc.ac.th/" target="_blank">ศึกษาที่เว็บนี้ต่อได้ครับ</a>
   
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