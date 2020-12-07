<template>
    <div class="row-responsive">

      <div class="block block-transparent">
        <img src="~/@/assets/logo.svg" class="img-inv logo mb-4 " />
        <h2 class="mb-4 ul">TITLE</h2>
        <div class="desc-home">
          <div class="text-wrapper">
            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </div>
        <ModalLogin :open="modalLoginOpen" @close="modalLoginOpen = false" />
        <ModalMakePotion
          v-if="isValid"
          :open="modalMakePotionOpen"
          :form="form"
          @close="modalMakePotionOpen = false"
        />
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
