import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isCartPopupVisible = ref(false)
  const lastPurchaseAmount = ref(0)
  const lastPurchaseItems = ref([])

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + (price * item.quantity)
    }, 0).toFixed(2)
  })

  const addItem = (product) => {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      })
    }
  }

  const removeItem = (productId) => {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId, quantity) => {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    items.value = []
    addNotification('You have successfully purchased your items!')
  }

  const toggleCartPopup = () => {
    isCartPopupVisible.value = !isCartPopupVisible.value
  }

  const setLastPurchaseAmount = (amount) => {
    lastPurchaseAmount.value = amount
  }

  const setLastPurchaseItems = (purchasedItems) => {
    lastPurchaseItems.value = purchasedItems
  }

  return {
    items,
    totalItems,
    totalPrice,
    isCartPopupVisible,
    lastPurchaseAmount,
    lastPurchaseItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCartPopup,
    setLastPurchaseAmount,
    setLastPurchaseItems
  }
})
