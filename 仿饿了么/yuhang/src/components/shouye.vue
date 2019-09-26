<template>
  <div>
    <div class="shou_book" v-show="book"></div>
    <div class="shangpin">
      <div class="warpper" ref="wrapper">
        <div class="content">
          <ul>
            <li
              ref="wrapr1"
              class="left_li"
              v-for="(num,index) in liebiao"
              :key="num.id"
              @click="fun(num.quantitiy,num.ge,index)"
            >
              <p class="left_li-p">{{num.type}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="warpper1" ref="wrapper1">
        <div class="content2">
          <ul class="content">
            <li v-for="(num,index) in left_shangpin" :key="num.id" class="right_li">
              <div class="right_li_area">
                <div class="right_li_area-left">
                  <img :src="num.img_url" alt width="57px" height="57px" @click="xiangqing(index)" />
                </div>
                <div class="right_li_area-right">
                  <p>{{num.title}}</p>
                  <p class="right_li_area-right-p">
                    <span>月售{{num.market}}&nbsp;&nbsp;</span>
                    好评率{{num.good}}
                    <span></span>
                  </p>
                  <div class="right_li_area-right-price">
                    <div class="shou_price">
                      <span>￥{{num.price}}</span>
                    </div>
                    <div class="shou_jia">
                      <i class="el-icon-circle-plus" @click="price_jia(num.price,num.title)"></i>
                      <i class="el-icon-remove"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shou_xiangqing" v-if="xiangqing_s">
      <img :src="xq_shuju.img_url" alt />
      <div>
        <p>{{xq_shuju.title}}</p>
        <p>月售{{xq_shuju.market}}份&nbsp;好评率{{xq_shuju.good}}</p>
      </div>
      <button @click="xq_hide">12</button>
    </div>
    <gouwu :shu="price_jias"></gouwu>
  </div>
</template>
<script>
import betterscroll from "better-scroll";
import axios from "axios";
import gouwu from "./gouwu";
export default {
  components: {
    gouwu
  },
  data() {
    return {
      liebiao: [],
      left_shangpin: [],
      price_jias: [],
      book: false,
      xiangqing_s: false,
      xq_shuju: {}
    };
  },
  created() {
    this.$nextTick(() => {
      this.leftscroll = new betterscroll(this.$refs.wrapper, {
        click: true,
        probeType: 3
      });

      this.rightscroll = new betterscroll(this.$refs.wrapper1, {
        click: true,
        probeType: 3
      });
      this.rightscroll.on("scroll", right_res => {
        let right = right_res.y;
        if (right == 0 || right > -1061) {
          this.for_left(0);
        } else if (right == -1091 || right > -1180) {
          this.for_left(1);
        } else if (right == -1199 || right > -1318) {
          this.for_left(2);
        } else if (right == -1317 || right > -1646) {
          this.for_left(3);
        } else if (right == -1650 || right > -1867) {
          this.for_left(4);
        } else if (right == -1861 || right > -2086) {
          this.for_left(5);
          this.leftscroll.scrollTo(0, -45, 2);
        } else if (right == -2088 || right > -2416) {
          this.for_left(6);
        } else if (right == -2417 || right > -2960) {
          this.for_left(7);
        } else if (right == -2974 || right > -3200) {
          this.for_left(8);
        }
      });
      axios
        .get("http://localhost:3000/mode")
        .then(num => {
          // console.log("12")
          this.liebiao = num.data;
          return axios.get("http://localhost:3000/comments");
        })
        .then(inx => {
          this.left_shangpin = inx.data;
        });
    });
  },
  methods: {
    fun(quantitiy, ge, index) {
      this.for_left(index);
      this.rightscroll.scrollTo(0, -(quantitiy - ge) * 110, 2);
    },
    for_left(index) {
      let left_li;
      left_li = this.$refs.wrapr1;
      for (let i = 0; i < left_li.length; i++) {
        left_li[i].className = "left_li";
        left_li[index].className = "br";
      }
    },
    price_jia(a, b) {
      let obj = {
        title: b,
        price: a
      };
      this.price_jias.push(obj);
    },
    xiangqing(index) {
      console.log("12");
      this.xq_shuju = this.left_shangpin[index];
      this.xiangqing_s = !this.xiangqing_s;
    },
    xq_hide() {
      this.xiangqing_s = !this.xiangqing_s;
    }
  }
};
</script>

<style>
a ul li {
  list-style: none;
}
.right_li {
  width: 280px;
  height: 110px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.left_li {
  height: 54px;
  font-size: 12px;
  background-color: #e6e6e6;
}
.shangpin {
  position: relative;
}
.warpper1 {
  width: 280px;
  height: 397px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}
.warpper {
  width: 80px;
  height: 397px;
  overflow: hidden;
}
.left_li-p {
  width: 56px;
  height: 100%;
  padding: 15px;
}
ul > .br {
  height: 54px;
  font-size: 12px;
  background-color: white；;
}
.right_li_area {
  width: 260px;
  height: 70px;
  display: flex;
}
.right_li_area-left {
  width: 57px;
  height: 70px;
}
.right_li_area-right {
  width: 180px;
  height: 70px;
  margin-left: 10px;
}
.right_li_area-right-p {
  color: #93999f;
  font-size: 13px;
}
.right_li_area-right-price {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
.shou_price {
  color: red;
}
.shou_jia {
  color: blue;
}
.el-icon-remove {
  font-size: 0px;
}
.shou_book {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
}
.shou_xiangqing {
  width: 100%;
  height: 585px;
  background-color: aqua;
  position: absolute;
  top: 0;
}
</style>
