<template>
<footer class="footer-container">

  <!-- LEFT SECTION -->
  <div class="footer-left">
    <h2 class="foot-logo">
  Tech <span class="logo-foot">C3</span>
</h2>

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
    <p> Hello This is empty for now</p>
  </div>

  <!-- RIGHT SECTION -->
  <div class="footer-right">
    <p>
      Hello This is the right side!
    </p>
  </div>

</footer>

</template>

<script setup>

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

.footer-left{
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
  flex: 1;           /* Makes input take full width */
  font-size: 14px;
}

.search-icon {
  font-size: 90%;
  opacity: 0.9;
  cursor: pointer;
  display: flex;
  align-items: center;
}


</style>
