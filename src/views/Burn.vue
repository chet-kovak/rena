<template>
  <div class="column">
    
    <div class="row-responsive">
<div class="block"><h2>TOTAL RENA LOCKED</h2>

  <div class="value">43,051.23</div>
  </div>

<div class="block"><h2>AVERAGE APR</h2>

  <div class="value">125%</div>
  </div>

<div class="block"><h2>YOUR SHARE</h2>

  <div class="value">17.99%</div>

  </div>
</div>
    <div class="row-responsive">
      <div class="block"><h2>What is This?</h2><div class="text-wrapper"><p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>
      <div class="block">
          <img src="~/@/assets/logo.svg" class="mb-2 img-inv img-cen" />
          <h2 class="mb-4">One-Sided Burner Market</h2>
          <p class="mb-6"></p>
          <form @submit.prevent="handleSubmit" class="form">
            <div class="mb-4">
              <ButtonSelectToken class="d-block mb-4" v-model="form.asset" />
              <input
                type="number"
                class="input mb-4"
                placeholder="Quantity"
                step="0.001"
                v-model="form.quantity"
              />
              <div class="d-flex">
                <div class="col-6 mr-2">
                  <input
                    type="number"
                    class="input mb-4"
                    placeholder="Strike price"
                    step="0.001"
                    :max="maxStrike"
                    v-model="form.strike"
                  />
                </div>
                <div class="col-6 ml-2">
                  <ButtonSelectExpiry v-model="form.expiry" />
                </div>
              </div>
            </div>
            <button
              v-if="settings.address"
              :disabled="!isValid"
              type="submit"
              class="button button-primary"
            >
              Make potion
            </button>
            <a v-else class="button button-primary button-fw" @click="modalLoginOpen = true">Connect wallet</a>
          </form>
          <ModalLogin :open="modalLoginOpen" @close="modalLoginOpen = false" />
          <ModalMakePotion
            v-if="isValid"
            :open="modalMakePotionOpen"
            :form="form"
            @close="modalMakePotionOpen = false"
          />
        </div>
        <div class="block"><h2>ETH / RENA</h2>
        <p class="price">PRICE</p>
        <div class="ex-box">
          <div class="asset-a"><p>0.0154</p><p>ETH</p></div>
          <div class="arrow"><h1>→</h1></div>
          <div class="asset-b"><p>1</p><p>RENA</p></div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      form: {
        asset: '',
        quantity: '',
        strike: '',
        expiry: ''
      },
      modalLoginOpen: false,
      modalMakePotionOpen: false
    };
  },
  computed: {
    ...mapState(['settings']),
    isValid() {
      return (
        this.form.asset && parseFloat(this.form.quantity) && this.form.strike && this.form.expiry
      );
    },
    maxStrike() {
      const exchangeRate = this.settings.exchangeRates[this.form.asset];
      return exchangeRate && exchangeRate.usd ? exchangeRate.usd : 1e9;
    }
  },
  methods: {
    handleSubmit() {
      this.modalMakePotionOpen = true;
    }
  }
};
</script>
