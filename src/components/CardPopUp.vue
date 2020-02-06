<template>
    <transition name="slide-fade">
        <div v-if="isOpenCardPopUp" class="cardPopUp">
            <div class="cardPopUp-close" @click="handleClosePopUp">
                <Icons icon="chevron-left" />
            </div>
            <span class="cardPopUp-img">
              <img :src="imageSrc" alt="product-img">
            </span>
            <div class="cardPopUp-content">
                <h5 class="cardPopUp-content__title">{{ productChoose.title }}</h5>
                <p class="cardPopUp-content__description">{{ productChoose.description }}</p>
                <p class="cardPopUp-content__price">CHF {{ productChoose.price }}</p>
            </div>
            <div class="cardPopUp-cart">
                <span class="cardPopUp-icon" @click="handleCountProduct('minus')">
                    <Icons icon="minus" />
                </span>
                <span class="cardPopUp-count">
                    {{countProduct}}
                </span>
                <span class="cardPopUp-icon" @click="handleCountProduct('plus')">
                    <Icons icon="plus" />
                </span>
            </div>
            <div v-if="!countProduct" class="cardPopUp-wrapper">
                <div class="cardPopUp-wrapper__content">
                    Add product
                </div>
            </div>
            <div v-else class="cardPopUp-wrapper">
                <div class="cardPopUp-wrapper__content active">
                    <span>Add {{countProduct}}</span>
                    <span>CHF {{calculatedPrice}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Icons from "./Icons";
    export default {
        name: "CardPopUp",
        components: {
            Icons,
        },
        data: () => ({
           countProduct: 0,
        }),
        computed: {
            ...mapGetters([
                'isOpenCardPopUp',
                'productChoose',
                'isProductChoose',
                'getCountProductInCart',
                'cartLength'
            ]),
            imageSrc: function() {
                return require(`@/assets/som-tam${this.productChoose.key}.png`)
            },
            calculatedPrice: function () {
                return this.productChoose.price * this.countProduct
            }
        },
        methods: {
            ...mapActions(['closeCardPopUp', 'addProductToCart']),
            handleCountProduct(type) {
                switch (type) {
                    case 'minus':
                        this.countProduct = this.countProduct === 0 ? 0 : this.countProduct - 1;
                        break;
                    case 'plus':
                        this.countProduct = this.countProduct + 1;
                        break;
                }
            },
            handleClosePopUp() {
              this.closeCardPopUp();
              this.countProduct = 0;
            },
            handleProduct() {
                const product = { ...this.productChoose, countProduct: this.countProduct };
                const isUpdateProduct = this.isProductChoose(product.id);
                const status = this.countProduct === 0 ? 'remove': isUpdateProduct ? 'update' : 'add';
                this.addProductToCart({ product, status });
                this.countProduct = 0;
            }
        },
        watch: {
            isOpenCardPopUp: function(val) {
                if(val && this.cartLength) {
                    const getCount = this.getCountProductInCart(this.productChoose.id);
                    this.countProduct = getCount > 0 ? getCount : 0;
                }
            },
            countProduct: function(val, oldVal) {
                if(val !== oldVal) {
                    this.handleProduct();
                }
                this.countProduct = val;
            }
        }
    }
</script>

<style scoped lang="scss">
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateY(30px);
        opacity: 0;
    }
    .cardPopUp {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #fff;

        @media (min-width: 320px) {
            width: 100%;
            height: 100%;
        }
        @media (min-width: 775px) {
            width: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: auto;
        }
        &-close {
            position: absolute;
            z-index: 9;
            top: 16px;
            left: 16px;
        }
        &-img {
            position: relative;
            width: 100%;
            margin: 0 0 24px;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 40%;
                background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0));
            }
            img {
                width: 100%;
            }
        }
        &-content {
            padding: 0 16px 90px;
            &__title {
                font-family: 'Ubuntu-Light';
                font-size: 24px;
                color: #4a4a4a;
                margin: 0 0 16px;
                height: 28px;
                white-space: nowrap;
                overflow: hidden;
            }
            &__description {
                font-family: 'HindVadodara-Light';
                font-size: 16px;
                color: #757575;
                margin: 0 0 16px;
                height: 20px;
                white-space: nowrap;
                overflow: hidden;
            }
            &__price {
                font-family: 'Ubuntu-Regular';
                font-size: 16px;
                color: #4a4a4a;
            }
        }

        &-cart {
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 1px solid #eaeaea;
            padding: 24px 0;
            margin: 0 8px;

        }
        &-icon {
            cursor: pointer;
        }
        &-count {
            margin: 0 24px;
            font-family: 'Ubuntu-Regular';
            font-size: 36px;
            color: #637274;
        }
        &-wrapper {
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
            background-color: #ffffff;
            padding: 16px;
            &__content{
                width: 100%;
                height: 100%;
                padding: 14px 90px;
                box-sizing: border-box;
                font-family: 'Ubuntu-Regular';
                font-size: 18px;
                line-height: 1.11;
                text-align: center;
                color: #637274;
                border-radius: 1px;
                background-color: #f8fafd;
                border: none;
                cursor: pointer;
                &.active {
                    padding: 14px 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #1279cf;
                    color: #ffffff;
                }
            }
        }
    }
</style>
