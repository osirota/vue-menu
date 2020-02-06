<template>
  <div class="menu">
    <div class="container">
      <div class="menu-row">
        <h3 class="menu-title">Popular</h3>
        <p class="menu-text">Our classic Thai dishes that inspire again and again!</p>
      </div>
      <div class="menu-list">
        <div class="menu-row" v-for="(product, key) in getProducts.popular" :key="product+key">
          <Card :product='{ ...product, key } ' />
        </div>
      </div>
      <div class="menu-row">
        <h3 class="menu-title">Appetizers</h3>
        <p class="menu-text">Enjoy our delicious appetizers made with fresh asian ingriedents.</p>
      </div>
      <div class="menu-list">
        <div class="menu-row" v-for="(product, key) in getProducts.appetizers" :key="product+key">
          <Card :product='{ ...product, key } ' />
        </div>
      </div>
    </div>
    <CardPopUp />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '@/components/Card.vue';
import CardPopUp from '@/components/CardPopUp.vue';
export default {
  name: 'Menu',
  components: {
    Card,
    CardPopUp,
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  methods: {
    ...mapActions(['fetchProducts'])
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
        padding: 0 10px 24px;
        border-bottom: 1px solid #eaeaea;
      }
    }
  }
</style>
