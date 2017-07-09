<template lang="html">
  <content>
    <div class="container">
      <button class='change' type="button" name="button" v-on:click="genCode()">&#x21bb;</button>
      <div class="box">

          <h3>10% Off Everything</h3>
          <div class="table">
              <template v-for='code, index in offs.tenPercent'>
                <div class="row">
                <div class="cell">{{ index + 1}}:</div>
                <div class="cell">{{ code }}</div>
                <div class="cell">
                  <button v-clipboard:copy="code">&#128203;</button>
                </div>
                </div>
              </template>
          </div>
        </div>
      <div class="box">
          <h3>$15 off 50</h3>
          <div class="table">
              <template v-for='code, index in offs.FifteenOff'>
                <div class="row">
                <div class="cell">{{ index + 1}}:</div>
                <div class="cell">{{ code }}</div>
                <div class="cell">
                  <button v-clipboard:copy="code">&#128203;</button>
                </div>
                </div>
              </template>
          </div>
        </div>
      <div class="box">
          <h3>$20 off 100</h3>
          <div class="table">
              <template v-for='code, index in offs.TwentyOff'>
                <div class="row">
                <div class="cell">{{ index + 1}}:</div>
                <div class="cell">{{ code }}</div>
                <div class="cell">
                  <button v-clipboard:copy="code">&#128203;</button>
                </div>

                </div>
              </template>
          </div>
        </div>

      </div>
    </div>
    <button class='change' type="button" name="button" v-on:click="genCode()">&#x21bb;</button>
  </content>
</template>

<script>

export default {
  name: 'Lowescoupon',
  data () {
    return {
      copyData: 'copy data',
      sequences: {
        tenPercent: '7685',
        fifteenFifty: '7632',
        twentyHundred: '7687',
        tenFifty: '7673',
      },
      lead: '47000',
      offs: {
        tenPercent: [],
        TenOff:[],
        FifteenOff:[],
        TwentyOff:[],
      }

    }
  },
  methods: {

    checkDigit: function(aString) {
      let result = 0
      let reversed = aString.split('').reverse().join('')

      for (var i = 0; i < reversed.length; i++) {
        result = result + parseInt(reversed.charAt(i)) * Math.pow(3, ((i+1) % 2))
      }
      return (10 - (result % 10 )) % 10
    },

    paddingRandom: function (max) {
      let ran = (Math.floor(Math.random() * max) + 1).toString()
      return ran.length === 5 ? ran : String('00000' + ran).slice(-5)
    },

    genCode: function () {
      this.offs = {
        tenPercent: [],
        TenOff:[],
        FifteenOff:[],
        TwentyOff:[],
      }
      for (var i = 0; i < 5; i++) {
        let padded = this.paddingRandom(99999)
        this.offs.tenPercent.push(this.lead+padded+this.sequences.tenPercent+this.checkDigit(this.lead+padded+this.sequences.tenPercent))
        }

      for (var i = 0; i < 3; i++) {
        let padded = this.paddingRandom(50000)
        this.offs.TenOff.push(this.lead+padded+this.sequences.tenFifty+this.checkDigit(this.lead+padded+this.sequences.tenFifty))
        this.offs.FifteenOff.push(this.lead+padded+this.sequences.fifteenFifty+this.checkDigit(this.lead+padded+this.sequences.fifteenFifty))
        this.offs.TwentyOff.push(this.lead+padded+this.sequences.twentyHundred+this.checkDigit(this.lead+padded+this.sequences.twentyHundred))
      }
    },
  }, //methods ended.

  created: function () {
    this.genCode();
  }
  }

</script>

<style lang="css" scoped>

  button {
    border-radius: 5px;
    border: none;
    background: none;
    font-size: 130%;
  }

  .change {
    padding: 10px 14px;
    margin: 10px 5px;
    border-radius: 5px;
    border: 1px solid black;
    background: none;
  }

  .container {
    width: 320px;
    margin: 0 auto;
  }

  .center {
    margin: 0 auto;
  }
  .table {
    display: table;
    width: 100%;
    margin: 10px auto;

  }
  .row {
    display: table-row;
  }
  .cell {
    display: table-cell;
    text-align: left;
    padding-bottom: 10px;
  }

  .box {
    border: 1px solid black;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 10px 0;
  }

  h3 {
    font-weight: 900;
    font-size: 130%;
    color: #34bf49;
  }


</style>
