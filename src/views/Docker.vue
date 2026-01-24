<script setup>
</script>

<template>
  <!-- หัวข้อ Ubuntu -->
  <h1>🟢 การติดตั้ง Docker บน Ubuntu 24.04</h1><br>
  <p>การติดตั้งบน Ubuntu เหมาะสำหรับการทำ Server Node เพื่อรัน Service ต่างๆ ในโปรเจกต์ของคุณครับ</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1  -->
  <h2>1. อัปเดตระบบและติดตั้งเครื่องมือพื้นฐาน</h2><br>
  <p class="bggray">sudo apt update && sudo apt upgrade -y
    <br>sudo apt install -y ca-certificates curl gnupg</p>
  <br>

  <!-- ข้อ 2  -->
  <h2>2. เพิ่ม Docker GPG Key และ Repository</h2><br>
  <p class="bggray">sudo install -m 0755 -d /etc/apt/keyrings
<br>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
<br>sudo chmod a+r /etc/apt/keyrings/docker.gpg
<br>
<br>echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu 
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null</p>
  <br>

  <!-- ข้อ 3  -->
  <h2>3. เริ่มการติดตั้ง Docker</h2><br>
  <p class="bggray">sudo apt update
<br>sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</p>
  <br>

  <!-- ข้อ 4  -->
  <h2>4. ตรวจสอบการทำงาน</h2><br>
  <p class="bggray">sudo docker --version
<br>sudo docker run hello-world</p>
  <br><br>
  <hr>
  <br><br><br>





  <!-- หัวข้อ Windows -->
  <h1>🟦 การติดตั้ง Docker บน Windows 11</h1><br>
  <p>เนื่องจากคุณใช้ Windows 11 เป็นเครื่องหลัก การใช้ Docker Desktop จะช่วยให้คุณจัดการ Container ได้ผ่านหน้าจอ GUI ที่สะดวกครับ</p>
  <br><br>
  <hr>
  <br>

  <!-- ข้อ 1  -->
  <h2>1. ดาวน์โหลดตัวติดตั้ง</h2><br>
  <li>เข้าไปที่เว็บไซต์ <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker Desktop for Windows</a></li>
  <li>กดปุ่ม Download for Windows</li>
  <br>

  <!-- ข้อ 2  -->
  <h2>2. ขั้นตอนการติดตั้ง</h2><br>
  <li><strong>เริ่มติดตั้ง:</strong> รันไฟล์ (.exe) ที่ดาวน์โหลดมา</li>
  <li><strong>WSL 2 Support:</strong> มั่นใจว่าได้ ติ๊กถูก ที่ช่อง Use WSL 2 instead of Hyper-V เพื่อประสิทธิภาพที่ดีที่สุดบน Windows 11</li>
  <li><strong>Restart:</strong> เมื่อติดตั้งเสร็จ ให้ทำการรีสตาร์ทเครื่องหนึ่งครั้ง</li>
  <br>

  <!-- ข้อ 3  -->
  <h2>3. การตั้งค่าเริ่มต้น</h2><br>
  <li>เปิดโปรแกรม Docker Desktop และยอมรับเงื่อนไขการใช้งาน</li>
  <li>ระบบจะเริ่ม Start Engine (สังเกตรูปปลาวาฬที่มุมขวาล่างต้องเป็นสีเขียว)</li>
  <br>

  <!-- ข้อ 4  -->
  <h2>4. ตรวจสอบผ่าน Terminal</h2><br>
  <p>เปิด PowerShell แล้วลองพิมพ์คำสั่ง:</p>
  <p class="bggray">docker --version
<br>docker-compose --version</p>
  <br>

  <hr><br>
  <p>ข้อแนะนำเพิ่มเติม: การติดตั้ง Docker จะช่วยให้คุณสามารถจำลอง VM1: Git Server หรือ VM2: Production Server ตามสถาปัตยกรรมของ VECSkill ได้ง่ายขึ้นผ่านการเขียนไฟล์ docker-compose.yml ครับ</p>




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