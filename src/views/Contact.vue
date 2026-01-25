<template>
  <div class="contact-page">
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p class="intro-text">
        We'd love to hear from you! Whether you have questions about our products, need support, or want to provide feedback, our team is here to help. Reach out to us using the form below or through our contact information.
      </p>

      <div class="contact-content">
        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>

        <div class="contact-info">
          <h2>Get in Touch</h2>
          <div class="info-item">
            <div class="icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>Russian Blvd<br>Phnom Penh,<br>Cambodia</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+855 16333740</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>support@techc3.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">🕒</div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-item">
          <h3>How can I track my order?</h3>
          <p>You can track your order by logging into your account and visiting the "Order History" section. You'll find tracking information and delivery updates there.</p>
        </div>
        <div class="faq-item">
          <h3>What is your return policy?</h3>
          <p>We offer a 30-day return policy for all products. Items must be in their original condition and packaging. Please contact our support team to initiate a return.</p>
        </div>
        <div class="faq-item">
          <h3>Do you offer warranty on your products?</h3>
          <p>Yes, all our laptops come with a 1-year manufacturer warranty. Extended warranty options are available for purchase at the time of checkout.</p>
        </div>
        <div class="faq-item">
          <h3>How do I reset my account password?</h3>
          <p>Click on the "Forgot Password" link on the login page. Enter your email address, and we'll send you instructions to reset your password.</p>
        </div>
        <div class="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for online purchases. In-store payments can be made with cash, card, or mobile payments.</p>
        </div>
        <div class="faq-item">
          <h3>Do you offer international shipping?</h3>
          <p>Yes, we ship internationally to most countries. Shipping costs and delivery times vary by location. Please contact us for a quote before placing your order.</p>
        </div>
        <div class="faq-item">
          <h3>How do I check product compatibility?</h3>
          <p>Our product detail pages include compatibility information. For specific questions, contact our technical support team with your system specifications.</p>
        </div>
      </div>

      <div class="social-media-section">
        <h2>Follow Us</h2>
        <p>Stay connected with us on social media for the latest updates, product releases, and tech tips!</p>
        <div class="social-links">
          <a href="#" class="social-link">📘 Facebook</a>
          <a href="#" class="social-link">🐦 Twitter</a>
          <a href="#" class="social-link">📷 Instagram</a>
          <a href="#" class="social-link">💼 LinkedIn</a>
          <a href="#" class="social-link">▶️ YouTube</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Here you would typically send the form data to your backend
  alert('Thank you for your message! We\'ll get back to you soon.')
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 80vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #1f2937;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.intro-text {
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.contact-form h2,
.contact-info h2 {
  color: #1f2937;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #374151;
  font-weight: 500;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #2563eb;
}

.submit-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
}

.submit-btn:hover {
  background: #1d4ed8;
}

.contact-info {
  background: #f9fafb;
  padding: 30px;
  border-radius: 8px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
}

.icon {
  font-size: 1.5rem;
  margin-right: 15px;
  margin-top: 5px;
}

.info-item h3 {
  color: #1f2937;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.info-item p {
  color: #6b7280;
  line-height: 1.5;
}

.faq-section {
  border-top: 1px solid #e5e7eb;
  padding-top: 40px;
}

.faq-section h2 {
  text-align: center;
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 30px;
}

.faq-item {
  margin-bottom: 25px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 8px;
}

.faq-item h3 {
  color: #1f2937;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.faq-item p {
  color: #6b7280;
  line-height: 1.6;
}

.social-media-section {
  border-top: 1px solid #e5e7eb;
  padding-top: 40px;
  text-align: center;
}

.social-media-section h2 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 10px;
}

.social-media-section p {
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-link {
  display: inline-block;
  padding: 12px 20px;
  background: #f3f4f6;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

.social-link:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-container {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }
}
</style>
