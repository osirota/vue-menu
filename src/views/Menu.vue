<template>
  <div class="menu">
    <div class="container">
      <div class="menu-row">
        <h3 class="menu-title">Popular</h3>
        <p class="menu-text">Our classic Thai dishes that inspire again and again!</p>
      </div>
      <div class="menu-list">
        <div class="menu-row" v-for="(product, key) in getProducts.products" :key="product+key">
          <Card :product='product' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '@/components/Card.vue';
export default {
  name: 'menu',
  components: {
    Card,
  },
  computed: {
    ...mapGetters('products', ['getProducts'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style lang='scss' scoped>
  .menu {
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) {
      &-title {
        font-family: 'Ubuntu-Light';
        font-size: 24px;
        font-weight: 400;
        color: #4a4a4a;
      }
      &-text {
        font-family: 'HindVadodara-Light';
        font-size: 16px;
        font-weight: 300;
        color: #757575;
      }
      &-row {
        margin: 24px 8px 0;
        padding: 0 0 24px;
        border-bottom: 1px solid #eaeaea;
      }
    }
  }
</style>