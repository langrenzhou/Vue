<template>
  <div class="hello">
    <div class="world">
      <world @show="books" :hide-s="book"></world>
      <div class="shou_book" v-show="book">
        <div class="shou_book-area">
          <h2>粥品香坊（回龙观）</h2>
          <p class="shou_book-xing">
            <span class="el-icon-star-on one"></span>
            <span class="el-icon-star-on one"></span>
            <span class="el-icon-star-on one"></span>
            <span class="el-icon-star-on one"></span>
            <span class="el-icon-star-on"></span>
          </p>
          <div class="shou_book-youhui">
            <div class="shou_book-xian"></div>
            <div>优惠信息</div>
            <div class="shou_book-xian"></div>
          </div>
          <div class="shou_book-xinxi">
            <ul>
              <li>在线支付满28减5</li>
              <li>vc无限橙果汁全场8折</li>
              <li>单人精彩套餐</li>
              <li>该商家支持发票，请下单写好发票抬头</li>
              <li>已加入"外卖保"计划，视频安全保障</li>
            </ul>
          </div>
           <div class="shou_book-youhui">
            <div class="shou_book-xian"></div>
            <div>商家公告</div>
            <div class="shou_book-xian"></div>
          </div>
          <div class="shou_book-gonggao">
            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由始截烹饪大师屈浩先生领衔研发。坚守纯天然，0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌，是2008年奥运会和2013奶奶园博会指定餐饮服务商。
          </div>
          <div class="cha" @click="hide">
            <i class="el-icon-close"></i>
          </div>
        </div>
      </div>
      <nav class="nav">
        <router-link active-class="org" tag="div" to="/">
          <p>商品</p>
        </router-link>
        <router-link tag="div" to="/dicover">
          <p>评价</p>
        </router-link>
        <router-link tag="div" to="order">
          <p>商家</p>
        </router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import world from "@/components/world";
export default {
  components: {
    world
  },
  name: "minu",
  data() {
    return {
      book: false
    };
  },
  props: {},
  methods: {
    books(res) {
      console.log(res);
      this.book = res;
      console.log(this.book);
    },
    hide() {
      this.book = !this.book;
    }
  }
};
</script>
<style>
.world {
  width: 100%;
  /* background-color: red; */
}
.nav {
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-around;
  /* background-color: pink; */
}
.router-link-exact-active {
  color: red;
}
.shou_book {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  color: white;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.shou_book h2 {
  line-height: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}

.one {
  color: orange;
}
.shou_book-xing {
  margin-top: 16px;
  padding: 2px 0;
  text-align: center;
  font-size: 22px;
}
.shou_book-area{
  width: 340px;
  height: 550px;
  /* background-color: blue; */
}
.shou_book-youhui{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.shou_book-xian{
  margin-top: 10px;
  width: 130px;
  border-top: 1px solid #cccccc;
}
ul li{
  list-style: none;
}
.shou_book-xinxi{
  margin-left: 20px;
  margin-top: 20px;
  line-height: 35px;
  font-size: 12px;
}
.shou_book-gonggao{
  margin-left: 20px;
  margin-top: 20px;
  font-size: 12px;
  line-height: 20px;
}
.cha{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 26px;
}
</style>
