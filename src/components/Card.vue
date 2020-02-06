<template>
  <div :class="['card', isActiveClass]" @click="handlePopUp">
    <span class="card-img">
      <img :src="imageSrc" alt="product-img">
    </span>
    <p class="card-title">
      <span v-if="isActiveClass" class="card-title__count">{{getCountProductInCart(product.id)}}x</span>
      {{ product.title }}
    </p>
    <p class="card-description">{{ product.description }}</p>
    <p class="card-price">CHF {{ product.price }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters(['isProductChoose', 'getCountProductInCart']),
    imageSrc: function() {
     return require(`@/assets/som-tam${this.product.key}.png`)
    },
    isActiveClass: function () {
      return this.isProductChoose(this.product.id) ? 'active' : ''
    }
  },
  methods: {
    ...mapActions(['openCardPopUp']),
    handlePopUp() {
      const { openCardPopUp, product } = this;

      openCardPopUp(product);
    }
  }
}
</script>

<style lang='scss' scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    &.active {
      &:before {
        position: absolute;
        content: "";
        width: 6px;
        height: 165px;
        background-color: #2a8289;
        left: -18px;
        top: 0;
      }
    }
    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-title {
      font-family: 'Ubuntu-Light';
      font-size: 18px;
      color: #4a4a4a;
      margin: 8px 0 16px;
      &__count {
        color: #2a8289;
      }
    }
    &-price {
      font-family: 'Ubuntu-Regular';
      font-size: 16px;
      line-height: 1.25;
      color: #4a4a4a;
    }
  }
</style>
