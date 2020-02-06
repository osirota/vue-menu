<template>
  <div class="card">
    <span class="card-img">
        IMAGES
    </span>
    <h5 class="card-title">{{ product.title }}</h5>
    <p class="card-discription">{{ product.discription }}</p>
    <p class="card-price">{{ product.price }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'card',
  props: {
    product: {
      type: Object,
      default: () => {},
      required: true,
    }
  },
  computed: {
    ...mapGetters('products', ['getProducts'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  }
}
</script>

<style lang='scss' scoped>
  .card {
    display: flex;
    flex-direction: column;
  }
</style>