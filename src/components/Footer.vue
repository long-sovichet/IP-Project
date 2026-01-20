<template>
  <footer class="footer-container">
    <!-- LEFT SECTION -->
    <div class="footer-left">
      <h2 class="foot-logo">Tech <span class="logo-foot">C3</span></h2>

      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <span class="search-icon">🔍</span>
      </div>

      <p class="address">
        Address: Kampuchea Krom Blvd, Sangkat Teuk La’ak ti pir,<br />
        Khan Toul Kork, Phnom Penh, Cambodia
      </p>
    </div>

    <!-- MIDDLE SECTION -->
    <div class="footer-middle">
      <h4>information:</h4>
      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>product</li>
        <li>contact</li>
      </ul>
    </div>

    <!-- RIGHT SECTION -->
    <div class="footer-right">
      <h4>Contact</h4>
      <ul>
        <li>Telegram: @Vi_Chhi</li>
        <li>Sale Phone Number: 016 333 740</li>
        <li>Email: sovichet516@gmail.com</li>
      </ul>

      <div class="social-icons">
        <a href="https://t.me/Vi_Chhi" target="_blank">
          <img :src="telegram" alt="Telegram" />
        </a>

        <a href="#" target="_blank">
          <img :src="instagram" alt="Instagram" />
        </a>

        <a href="#" target="_blank">
          <img :src="xIcon" alt="X" />
        </a>

        <a href="#" target="_blank">
          <img :src="facebook" alt="Facebook" />
        </a>

        <a href="#" target="_blank">
          <img :src="tiktok" alt="TikTok" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import telegram from '@/IMG/Social_1.jpg'
import instagram from '@/IMG/Social_2.jpg'
import xIcon from '@/IMG/Social_3.jpg'
import facebook from '@/IMG/Social_4.jpg'
import tiktok from '@/IMG/Social_5.jpg'
</script>

<style scoped>
footer {
  background: #f1f1f1;
  padding: 40px;
  border-top: 3px solid #ddd;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer-left {
  max-width: 300px;
}

.foot-logo {
  font-size: 28px;
  font-weight: bold;
  color: rgb(246, 152, 21);
}

.logo-foot {
  color: #a46bff;
}

.search-box {
  margin-top: 15px;
  background: white;
  border: 1px solid #ccc;
  padding: 6px 10px;
  width: 260px;
  height: 38px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;
}

.search-box input {
  border: none;
  outline: none;
  flex: 1; /* Makes input take full width */
  font-size: 14px;
}

.search-icon {
  font-size: 90%;
  opacity: 0.9;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* Middle Section */
.footer-middle h4 {
  margin-bottom: 10px;
  font-weight: 600;
}

.footer-middle ul {
  list-style: disc;
  padding-left: 18px;
}

.footer-middle li {
  margin-bottom: 6px;
  font-size: 14px;
}

/* Right Side Section */
.footer-right h4 {
  margin-bottom: 10px;
  font-weight: 600;
}

.footer-right ul {
  list-style: disc;
  padding-left: 18px;
  font-size: 14px;
}

.footer-right li {
  margin-bottom: 6px;
}

.social-icons {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.social-icons img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
</style>
