<template lang="html">
  <content>
    <div class="container">

      <div class="box">
        <p>轉小數<br>Fraction to decimal</p>
        <input class='decimal-input' type="text" name="" v-model="numerator"><span>/</span>
        <input class='decimal-input' type="text" name="" v-model="denominator" >
        <p>{{fraction}}</p>
      </div>
      <div class="box">
        <p>算面積<br>Calculate area</p>
        <button class='helpToggle' type="button" name="button" v-on:click="helpToggle()">?</button>
        <div class="helpinfo" v-if="help">
          <div class="row">
            <div class="cell">&#8644;</div>
            <div class="cell">數值互換 / swap</div>
          </div>
          <div class="row">
            <div class="cell">bs</div>
            <div class="cell">背板高度 / backsplash height</div>
          </div>
        </div>
        <div class="area-box" v-for='input, index in inputs'>
          <span>{{index + 1}}. </span>
          <input type="text" placeholder="" v-model="input.param1" v-on:click="calThis(index)" >
          <button type="button" class='reverse' v-on:click="reverse(index)">&#8644;</button>
          <input type="text" placeholder="" v-model="input.param2" v-if="!inputs[index+1]" v-on:click.once="addInput(index)">
          <input type="text" placeholder="" v-model="input.param2" v-else>
          <label>bs</label>
          <input type="text" v-bind:id="index" v-model="input.bs">
          <p >{{input.res}} ft<span class='sqf'>2</span></p>
        </div>
</div>
<div class="box">
  <div class="adjustment">
    <p>調整<br>Adjustments</p>
  <button class='helpToggle' type="button" name="button" v-on:click="helpToggle()">?</button>
  <br>
  <div class="table" v-if="help">
    <div class="row">
      <div class="cell">Offset</div>
      <div class="cell">Extra area for error-proof</div>
    </div>
    <div class="row">
      <div class="cell">Cost</div>
      <div class="cell">每平方尺價格/Cost per ft<span class='sqf'>2</span></div>
    </div>
  </div>

          <div class="halfbox">
            <label for="offset">Offset</label>
            <input name="offset" class="offset" type="text" placeholder="Offset" v-model='offset'><span>ft<span class='sqf'>2</span></span>
          </div>
          <div class="halfbox">
            <label for="">Cost</label>
            <input class="cost" type="text" placeholder="Cost" v-model='cost'>
          </div>
        </div>

        </div>



      <div class="box btn-box">
        <button type="button" name="button" v-on:click="getResult()">總數/total</button>
        <button type="button" name="button" v-on:click="reset()">重置/reset</button>
      </div>
      <div class="results">
        <p>總面積/total area： {{result}} ft<span class='sqf'>2</span></p>
        <p>總價/total price： ${{totalCost}}</p>
      </div>
      </div>


    </content>
</template>

<script>
export default {
  name: 'calculator',
  data() {
    return {
      inputs: [{param1: 0, param2: 0, res: 0, bs: 0}],
      result: 0,
      numerator: 1,
      denominator: 16,
      cost: 32,
      totalCost: 0,
      offset: 5,
      help: false,
    }
  },
  computed: {
    fraction: function(){
      return this.numerator / this.denominator
    },
  },
  methods: {
    addInput: function (index) {
      this.inputs[index].res =
        Number((this.inputs[index].param1 * this.inputs[index].param2 / 144)).toFixed(5)/1
      this.inputs.push({param1:'', param2:'', res: 0, bs: 0})
    },
    helpToggle: function () {
      this.help = !this.help
    },

    reverse: function (index) {
      let temp = this.inputs[index].param1
      this.inputs[index].param1 = this.inputs[index].param2
      this.inputs[index].param2 = temp
      if (this.inputs[index].param1 !== 0 && this.inputs[index].param2 !== 0) {
        let param1 = this.inputs[index].param1
        let param2 = this.inputs[index].param2
        let bs = this.inputs[index].bs
        this.inputs[index].res =
          bs >=1 ? Number((param1 * param2 / 144) + (param1 * bs / 144 )).toFixed(5)/1 :
          Number(param1 * param2 / 144).toFixed(5)/1
      }
    },
    calThis: function(index) {
      let param1 = this.inputs[index-1].param1
      let param2 = this.inputs[index-1].param2
      let bs = this.inputs[index-1].bs
      this.inputs[index-1].res =
        bs >=1 ? Number((param1 * param2 / 144) + (param1 * bs / 144 )).toFixed(5)/1 :
        Number(param1 * param2 / 144).toFixed(5)/1
    },
    reset: function() {
      this.inputs= [{param1: '', param2: '', res: 0, bs: 0}]
      this.cost= 0
      this.totalCost= 0
      this.result = 0
    },
    getResult: function() {
      this.result = 0

      for (var i=0; i<this.inputs.length; i++) {
        if (this.inputs[i].param1 === '' || this.inputs[i].param2 ==='') {
          this.inputs.splice(i, 1)
        }
          this.inputs[i].res = this.inputs[i].bs > 1 ? Number((this.inputs[i].param1 * this.inputs[i].param2 / 144) + (this.inputs[i].param1 * this.inputs[i].bs / 144)).toFixed(5)/1 : Number((this.inputs[i].param1 * this.inputs[i].param2 / 144)).toFixed(5)/1
          this.result += (this.inputs[i].res).toFixed(5)/1;
          if(this.cost !== 0 && this.cost > 30) {
            this.totalCost = ((this.result+this.offset) * this.cost).toFixed(2)/1
          }
        }
    },
  }
}
</script>

<style lang="css" scoped>

  input {
    width: 13%;
    margin: 6px 5px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #eee;
    text-align: center;
    background: none;
  }
  p {
    margin: 4px 0;
    /*color: #ef5734;*/
  }

  label {
    /*color: #ef5734;*/
  }

  input:focus {
    border: none;
    border-radius: 5px;
  }
  .table {
    display: table;
    width: 100%;
    margin: 10px auto;
    padding-top: 10px;
    /*border-radius: 5px;*/
  }
  .row {
    display: table-row;
  }
  .cell {
    display: table-cell;
    text-align: left;
    padding-bottom: 10px;
  }
  .cell:first-child {
    padding: 0 20px;
  }

  button {
    padding: 10px 14px;
    margin: 10px 5px;
    border-radius: 5px;
    border: 1px solid black;
    background: none;
  }

  .helpToggle {
    background: none;
    border: none;
    font-weight: 900;
    padding: 0;
    color: #fdbd10;
    font-size: 120%;
    margin: 0;
  }

  .adjustment {

  }

  .halfbox {
    display: inline-block;
    width: 45%;
  }

  .reverse {
    padding: 0;
    margin: 0;
    font-size: 140%;
    background: none;
    border: none;
    color: #76b852;
  }

  .container {
    width: 320px;
    margin: 0 auto;
  }

  .box {
    border: 1px solid black;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 10px 0;
  }

  .btn-box {
    text-align: right;
  }

  .sqf {
    font-size: 70%;
    vertical-align: text-top;
  }

  .area-box {
    border: 1px solid black;
    border-radius: 4px;
    padding:10px 0;
    margin-bottom: 6px;
  }

  .decimal-input {
    width: 10%;
  }

  .results {
    text-align: left;
    font-size: 120%;
  }

  .cost .offset {
    width: 80px;
  }

</style>
