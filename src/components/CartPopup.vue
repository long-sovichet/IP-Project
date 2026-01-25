<template>
  <div v-if="isVisible" class="cart-popup-overlay" @click="closePopup">
    <div class="cart-popup" @click.stop>
      <div class="cart-header">
        <h3>Your Cart</h3>
        <button class="close-btn" @click="cartStore.toggleCartPopup">&times;</button>
      </div>

      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
      </div>

      <div v-else class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h4 class="item-name">{{ item.name }}</h4>
            <p class="item-price">{{ item.price }}</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(item.id)" class="qty-btn">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)" class="qty-btn">+</button>
            </div>
          </div>
          <button @click="removeItem(item.id)" class="remove-btn">×</button>
        </div>
      </div>

      <div v-if="cartItems.length > 0" class="cart-footer">
        <div class="total">
          <span>Total: ${{ totalPrice }}</span>
        </div>
        <button class="checkout-btn" @click="checkout">Order</button>
      </div>
    </div>
  </div>

  <!-- Payment Method Popup -->
  <div v-if="isPaymentPopupVisible" class="payment-method-popup-overlay" @click="closePaymentPopup">
    <div class="payment-method-popup" @click.stop>
      <div class="payment-method-header">
        <h3>Select Payment Method</h3>
        <button class="close-btn" @click="closePaymentPopup">&times;</button>
      </div>
      <div class="payment-method-body">
        <div class="payment-summary">
          Total: ${{ totalPrice }}
        </div>
        <div class="payment-methods">
          <button class="payment-method-btn" @click="selectPaymentMethod('Bank Transfer')">Bank Transfer</button>
          <button class="payment-method-btn" @click="selectPaymentMethod('Visa')">Visa</button>
          <button class="payment-method-btn" @click="selectPaymentMethod('Mastercard')">Mastercard</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bank Transfer Popup -->
  <div v-if="isBankTransferPopupVisible" class="payment-method-popup-overlay" @click="closeBankTransferPopup">
    <div class="payment-method-popup" @click.stop>
      <div class="payment-method-header">
        <h3>Bank Transfer Details</h3>
        <button class="close-btn" @click="closeBankTransferPopup">&times;</button>
      </div>
      <div class="payment-method-body">
        <div class="bank-transfer-details">
          <p><strong>BANK ACCOUNT:</strong> 123 456 789</p>
          <p><strong>BANK NAME:</strong> LONG SOVICHET</p>
          <p><strong>AMOUNT:</strong> ${{ totalPrice }} USD</p>
        </div>
        <button class="payment-method-btn confirm-btn" @click="confirmBankTransfer">Confirm Transfer</button>
      </div>
    </div>
  </div>

  <!-- Payment Confirmation Popup -->
  <div v-if="isConfirmationPopupVisible" class="payment-method-popup-overlay" @click="closeConfirmationPopup">
    <div class="payment-method-popup" @click.stop>
      <div class="payment-method-header">
        <h3>Payment Confirmed</h3>
        <button class="close-btn" @click="closeConfirmationPopup">&times;</button>
      </div>
      <div class="payment-method-body">
        <div class="confirmation-message">
          <p>Your payment has been confirmed successfully!</p>
        </div>
        <button class="payment-method-btn confirm-btn" @click="done">Done</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const totalPrice = computed(() => cartStore.totalPrice)
const isPaymentPopupVisible = ref(false)
const isBankTransferPopupVisible = ref(false)
const isConfirmationPopupVisible = ref(false)

const closePopup = () => {
  emit('close')
}

const removeItem = (productId) => {
  cartStore.removeItem(productId)
}

const increaseQuantity = (productId) => {
  const item = cartItems.value.find(item => item.id === productId)
  if (item) {
    cartStore.updateQuantity(productId, item.quantity + 1)
  }
}

const decreaseQuantity = (productId) => {
  const item = cartItems.value.find(item => item.id === productId)
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(productId, item.quantity - 1)
  }
}

const checkout = () => {
  isPaymentPopupVisible.value = true
}

const closePaymentPopup = () => {
  isPaymentPopupVisible.value = false
}

const selectPaymentMethod = (method) => {
  if (method === 'Visa' || method === 'Mastercard') {
    alert(`${method} is under maintenance. Please choose another option.`)
  } else if (method === 'Bank Transfer') {
    closePaymentPopup()
    isBankTransferPopupVisible.value = true
  } else {
    alert(`Selected payment method: ${method}`)
    closePaymentPopup()
    cartStore.toggleCartPopup()
  }
}

const closeBankTransferPopup = () => {
  isBankTransferPopupVisible.value = false
}

const confirmBankTransfer = () => {
  closeBankTransferPopup()
  isConfirmationPopupVisible.value = true
}

const closeConfirmationPopup = () => {
  isConfirmationPopupVisible.value = false
}

const done = () => {
  cartStore.clearCart()
  closeConfirmationPopup()
  cartStore.toggleCartPopup()
}
</script>

<style scoped>
.cart-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1100;
}

.cart-popup {
  background: white;
  width: 400px;
  max-width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.cart-header h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #374151;
}

.empty-cart {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.empty-cart p {
  color: #6b7280;
  font-size: 1.1rem;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f3f4f6;
}

.item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 15px;
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 5px 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
}

.item-price {
  margin: 0 0 10px 0;
  font-size: 0.9rem;
  color: #2563eb;
  font-weight: 600;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  background: #f3f4f6;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover {
  background: #e5e7eb;
}

.quantity {
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: #ef4444;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.remove-btn:hover {
  background: #dc2626;
}

.cart-footer {
  padding: 20px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}

.total {
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
}

.checkout-btn {
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.checkout-btn:hover {
  background: #1d4ed8;
}

@media (max-width: 480px) {
  .cart-popup {
    width: 100vw;
  }
}

.payment-method-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
}

.payment-method-popup {
  background: white;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.payment-method-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.payment-method-header h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.payment-method-body {
  padding: 20px;
}

.payment-summary {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.payment-method-btn {
  background: #f3f4f6;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.payment-method-btn:hover {
  background: #e5e7eb;
}

.bank-transfer-details {
  text-align: left;
  margin-bottom: 20px;
}

.bank-transfer-details p {
  margin: 10px 0;
  font-size: 1rem;
  color: #1f2937;
}

.confirm-btn {
  background: #2563eb !important;
  color: white !important;
  width: 100%;
}

.confirm-btn:hover {
  background: #1d4ed8 !important;
}

.confirmation-message {
  text-align: center;
  margin-bottom: 20px;
}

.confirmation-message p {
  font-size: 1.1rem;
  color: #1f2937;
}
</style>
