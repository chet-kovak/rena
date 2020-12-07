<template>

<div class="row-responsive">
  <div class="block column">
    <a href=""><div class="button-outline"><h3>Telegram</h3></div></a>
    <a href=""><div class="button-outline"><h3>Twitter</h3></div></a>
    <a href=""><div class="button-outline"><h3>Medium</h3></div></a>
    <a href=""><div class="button-outline"><h3>Contact</h3></div></a>
    </div>


  <div class="block">
    <img src="~/@/assets/logo.svg" class="mb-2 img-inv" />
    <h2 class="mb-4">About</h2>
    
    <div class="prog-row"><h2 class="prog-title">Summary: </h2><div class="data">---</div></div>
    <div class="prog-row"><h2 class="prog-title">Staking: </h2><div class="data">---</div></div>
    <div class="prog-row"><h2 class="prog-title">Vaults: </h2><div class="data">---</div></div>
    <div class="prog-row"><h2 class="prog-title">Burner Pool: </h2><div class="data">---</div></div>
    <div class="prog-row"><h2 class="prog-title">GME: </h2><div class="data">---</div></div>
    <div class="prog-row"><h2 class="prog-title">Roadmap: </h2><div class="data">---</div></div>
  </div>


    <div class="block column">
    <a href=""><div class="button-outline"><h3>Uniswap</h3></div></a>
    <a href=""><div class="button-outline"><h3>Etherscan</h3></div></a>
    <a href=""><div class="button-outline"><h3>Dextools</h3></div></a>
    <a href=""><div class="button-outline"><h3>Stats</h3></div></a>
    
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
