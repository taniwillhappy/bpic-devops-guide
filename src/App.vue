<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/sidebar.css'
import './assets/footer.css'
import { ref } from 'vue'

const isCollapsed = ref(false)
const isMobileMenuOpen = ref(false) // สถานะเปิด/ปิดเมนูบน Mobile

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <!-- navbar sidebar -->
  <div class="app-layout">
    <button class="mobile-toggle-btn" @click="isMobileMenuOpen = !isMobileMenuOpen"> ☰ </button>

    <aside :class="['sidebar', { 'collapsed': isCollapsed, 'mobile-active': isMobileMenuOpen }]">
      <div class="sidebar-logo">
        <button class="toggle-btn desktop-only" @click="isCollapsed = !isCollapsed">
          {{ isCollapsed ? '>' : '<' }}
        </button>
        <span v-if="!isCollapsed" class="logo-text">DevOps Guide</span>
      </div>
      <nav class="sidebar-menu">
        <router-link to="/" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🏠</span>
          <span v-if="!isCollapsed" class="text">ภาพรวมการพัฒนา</span>
        </router-link>
        <router-link to="/nodered" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🤖</span>
          <span v-if="!isCollapsed" class="text">Node-Red</span>
        </router-link>
        <router-link to="/nodejs_ubuntu" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🟢</span>
          <span v-if="!isCollapsed" class="text">Node.js (Ubuntu)</span>
        </router-link>
        <router-link to="/nodejs_windows" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🟦</span>
          <span v-if="!isCollapsed" class="text">Node.js (Windows)</span>
        </router-link>
        <router-link to="/ubuntuserver" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🐧</span>
          <span v-if="!isCollapsed" class="text">การตั้งค่าพื้นฐานสำหรับ<br>Ubuntu Server</span>
        </router-link>
        <router-link to="/docker" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🐳</span>
          <span v-if="!isCollapsed" class="text">การติดตั้ง Docker</span>
        </router-link>
        <router-link to="/vite_example" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">⚡</span>
          <span v-if="!isCollapsed" class="text">การใช้งาน Vite</span>
        </router-link>
        <router-link to="/nuxt_example" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">⛰️</span>
          <span v-if="!isCollapsed" class="text">การใช้งาน Nuxt</span>
        </router-link>
        <router-link to="/postgres" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🐘</span>
          <span v-if="!isCollapsed" class="text">การใช้งาน PostgresSQL <br>ด้วย DBeaver</span>
        </router-link>
        <router-link to="/postman" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">🚀</span>
          <span v-if="!isCollapsed" class="text">การใช้งาน Postman <br>สำหรับงาน Backend</span>
        </router-link>
        <router-link to="/create_crud_backend" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">📑</span>
          <span v-if="!isCollapsed" class="text">คู่มือสร้างโปรเจค CRUD <br>แบบ Modern (Backend)</span>
        </router-link>
        <router-link to="/create_crud_backend_2" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">📑</span>
          <span v-if="!isCollapsed" class="text">คู่มือสร้างโปรเจค CRUD <br>แบบ Modern (Backend) <br>หน้า 2</span>
        </router-link>
        <router-link to="/create_crud_frontend" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">📖</span>
          <span v-if="!isCollapsed" class="text">คู่มือสร้างโปรเจค CRUD <br>แบบ Modern (Frontend)</span>
        </router-link>
        <router-link to="/file_download" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">📥</span>
          <span v-if="!isCollapsed" class="text">ดาวน์โหลดโปรเจค CRUD</span>
        </router-link>
        <router-link to="/about" class="menu-item" active-class="active" @click="closeMobileMenu">
          <span class="icon">👥</span>
          <span v-if="!isCollapsed" class="text">รายชื่อผู้จัดทำ</span>
        </router-link>
      
      </nav>
    </aside>

    <div v-if="isMobileMenuOpen" class="sidebar-overlay" @click="isMobileMenuOpen = false"></div>

    <main :class="['main-content', { 'expanded': isCollapsed }]">
      <div class="content-area">
        <RouterView />
      </div>
      <footer class="footer-section">
        <div class="footer-content">
          <div class="footer-brand">
            <p>จัดทำโดย นายแทนบุญ เหล่าภัทรเกษม และ นายกรีธา จุมพลา | แผนกวิชาเทคโนโลยีสารสนเทศ | วิทยาลัยการอาชีพบ้านไผ่</p>
          </div>
        </div>
      </footer>
      
    </main>
  </div>
      
 

</template>

<style scoped>
/* นำเข้าไฟล์ CSS ที่เราแยกออกมา */
</style>