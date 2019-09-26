<template>
  <div class="gouwu">
    <div class="gouwu_left">
      <div class="gouwu_left-gouwuche">
         <div class="gouwu_left-che-shu" v-if="blue">{{shu_s}}</div>
        <div class="gouwu_left-che">
          <div :class="['gouwu_left-che-area',{'gouwu_left-che-blue':blue}]">
            <i class="el-icon-shopping-cart-1"></i>
          </div>
        </div>
        <div>￥{{price}}</div>
      </div>
      <div class="gouwu_peisong">另需配送费4元</div>
    </div>
    <div class="gouwu_right" v-if="old_price>price">差{{old_price-price}}元起送</div>
    <div class="gouwu_right green" v-else @click="zhifu">去结算</div>
  </div>
</template>
<script>
export default {
  props: {
    shu: Array
  },
  data() {
    return {
      price: 0,
      old_price: 20,
      blue:false,
      shu_s:0
    };
  },
  computed: {
    demo() {
      return this.shu;
    }
  },
  methods:{
    zhifu(){
      alert(`请给大贱转账共${this.price}元,支持微信支付宝`)
    }
      }
  ,
  watch: {
    shu() {
      if (this.shu.length == 0) {
        this.price = 0;
      } else {
        this.price=0;
        this.blue=true
        this.shu_s=this.shu.length
        for (var i = 0; i < this.shu.length; i++) {
          this.price += parseInt(this.shu[i].price);
        }
      }
    }
  }
};
</script>

<style>
.gouwu>.green{
  background-color: #00b43c;
}
.gouwu {
  width: 100%;
  height: 56px;
  /* background-color: red; */
  display: flex;
}
.gouwu_left {
  width: 220px;
  height: 100%;
  background-color: #141d27;
  display: flex;
}
.gouwu_right {
  width: 140px;
  height: 100%;
  background-color: #2b333b;
  text-align: center;
  line-height: 56px;
  color: white;
  font-size: 12px;
}
.gouwu_left-gouwuche {
  width: 100px;
  height: 56px;
  background-color: #141d27;
  position: relative;
  display: flex;
  justify-content: space-between;
  line-height: 56px;
  color: white;
}
.gouwu_left-che {
  width: 56px;
  height: 56px;
  background-color: #141d27;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16px;
  line-height: 56px;
}
.gouwu_left-che-area {
  width: 44px;
  height: 44px;
  background-color: #2b343c;
  border-radius: 50%;
  text-align: center;
  line-height: 44px;
  color: white;
  font-size: 22px;
}
.gouwu_peisong {
  text-align: center;
  line-height: 56px;
  margin-left: 10px;
  font-size: 10px;
  color: #cccccc;
  border-left: 1px solid #cccccc;
  font-weight: 200;
}
.gouwu_left-che-blue{
  background-color: #00a0dc;
}
.gouwu_left-che-shu{
  width:20px;
  height: 14px;
  background-color: red;
  position: absolute;
  top:-12px;
  left: 35px;
  border-radius: 15px;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
}
</style>