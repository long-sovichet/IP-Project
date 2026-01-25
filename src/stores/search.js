import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { brands } from './product.js'

export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  const lastQuery = ref('')

  const filteredProducts = computed(() => {
    if (!query.value) return []
    const allProducts = brands.flatMap((brand) =>
      brand.products.map((product) => ({ ...product, brand: brand.name })),
    )
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.value.toLowerCase()),
    )
  })

  const setQuery = (newQuery) => {
    lastQuery.value = query.value
    query.value = newQuery
  }

  const clearQuery = () => {
    lastQuery.value = query.value
    query.value = ''
  }

  const restoreQuery = () => {
    query.value = lastQuery.value
  }

  return {
    query,
    filteredProducts,
    setQuery,
    clearQuery,
    restoreQuery,
  }
})
