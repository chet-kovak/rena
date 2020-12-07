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

    <div class="row-responsive mb-4">

      <div class="stake-row"><h1 class=" light-title ">STAKE</h1>
      <input class="input-row" type="text">
      <div class="button-outline-sm"><h3>Deposit</h3></div>
      </div>
      <div class=" stake-row"><h1  class=" light-title ">STAKED</h1>
      <input class=" input-row" type="text">
      <div class="button-outline-sm"><h3>Unstake</h3></div>
      </div>
    </div>
    <div class="row-responsive">
      <div class="block"></div>

      <div class="block">
        <h1>CLAIMABLE</h1>
        <h1 class="light-text">12,145.42</h1></div>
      
        <div class="block"><h2>ETH / RENA</h2>
        <p class="price">PRICE</p>
        <div class="ex-box">
          <div class="asset-a"><p>0.0154</p><p>ETH</p></div>
          <div class="arrow"><h1>→</h1></div>
          <div class="asset-b"><p>1</p><p>RENA</p></div>
        </div>
        </div>
    </div>
    <div class="row-responsive">
      <div class="block block-row">
          <div class="claim-row">
            <div class="coin-label">
              <h2>LP</h2>
            </div>
            <div class="max">
              <input class="input-row-outlined" type="text">


            </div>
            <div class="cost-to-claim">

            </div>
            <div class="claim-button">
              
            </div>
          </div>

          <div class="claim-row">
            <div class="coin-label">
              <h2>ETH</h2>
            </div>
            <div class="max">

            </div>
            <div class="cost-to-claim">

            </div>
            <div class="claim-button">
              
            </div>
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
