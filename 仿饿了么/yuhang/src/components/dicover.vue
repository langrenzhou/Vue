<template>
  <div class="dicover">
        <div>
          <div class="dicover_header">
            <div class="dicover_header-area">
              <div class="dicover_header-area-left">
                <p>4.2</p>
                <p>综合评分</p>
                <p>高于周边商家69.2%</p>
              </div>
              <div class="dicover_header-area-right">
                <p>
                  服务态度&nbsp;
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on el-icon-star-one"></span>
                  <span class="dicover_header-area-right_sp">4.1</span>
                </p>
                <p>
                  商品评分
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="el-icon-star-on el-icon-star-one"></span>
                  <span class="dicover_header-area-right_sp">4.3</span>
                </p>
                <p>
                  送达时间
                  <span class="el-icon-star-one">38分钟</span>
                </p>
              </div>
            </div>
          </div>
          <div class="order_li-border"></div>
          <div class="dicover_body">
            <div class="dicover_body-area">
              <div class="dicover_body-area_top">
                <el-button size="small" type="primary" @click="man">全部24</el-button>
                <el-button size="small" type="primary" @click="noman_s">满意18</el-button>
                <el-button size="small" type="info" @click="content_s">不满意6</el-button>
              </div>
              <div class="dicover_body-area_bottom">
                <el-checkbox v-model="checked">只看有评论的</el-checkbox>
              </div>
            </div>
          </div>
          <div class="order_bottom">
            <ul>
              <li v-for="(num,index) in data" :key="index">
                <div class="order_bottom-pingjia">
                  <div class="order_bottom-pingjia_left">
                    <div class="order_bottom-pingjia_left_img">
                      <img :src="num.img_url" alt />
                    </div>
                  </div>
                  <div class="order_bottom-pingjia_right">
                    <div class="order_bottom-pingjia_right-one">
                      <p>{{num.name}}</p>
                      <p>{{num.time}}</p>
                    </div>
                    <div>
                      <span class="el-icon-star-on" v-for="(xing,index) in num.xing" :key="index"></span>
                      <span class="order_bottom-pingjia_right-span">{{num.song_time}}分钟送达</span>
                    </div>
                    <p class="order_bottom-content">{{num.contnent}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import betterscroll from "better-scroll";
export default {
  data() {
    return {
      checked: true,
      data: [],
      noman: [],
      content: []
    };
  },
  created() {
    axios.get("http://localhost:3000/pingja").then(res => {
      this.data = res.data;
    });
  },
  methods: {
    man() {
      this.data = this.data;
    },
    noman_s() {
      for (const i = 0; i < this.data.length; i++) {
        if (this.data[i].manyi == false) {
          this.noman.push(this.data[i]);
        }
      }
      this.data = this.noman;
    },
    content_s() {
      for (const k = 0; k < this.data.length; k++) {
        if (this.data[k].contnent == "") {
          this.data.splice(k, 1);
        }
      }
    }
  }
};
</script>

<style>
.dicover_header {
  width: 100%;
  height: 112px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.dicover_header-area {
  width: 100%;
  height: 76px;
  /* background-color: pink; */
  display: flex;
}
.dicover_header-area-left {
  width: 128px;
  height: 76px;
  /* background-color: blue; */
  border-right: 1px solid #cccccc;
  text-align: center;
}
.dicover_header-area-left :nth-child(1) {
  font-size: 24px;
  line-height: 28px;
  color: #f90;
  margin-bottom: 6px;
}
.dicover_header-area-left :nth-child(2) {
  font-size: 12px;
  line-height: 12px;
  color: #07111b;
  margin-bottom: 8px;
}
.dicover_header-area-left :nth-child(3) {
  font-size: 10px;
  line-height: 10px;
  color: #93999f;
}
.dicover_header-area-right {
  width: 230px;
  height: 76px;
  /* background-color: orange; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
}
.dicover_header-area-right span {
  color: #f90;
}
.el-icon-star-one {
  color: #07111b;
}
.order_li-border {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background: #f3f5f7;
}
.dicover_body {
  width: 100%;
  height: 134px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}
.dicover_body-area {
  width: 100%;
  height: 103px;
  /* background-color:pink; */
}
.dicover_body-area_top {
  width: 100%;
  height: 68px;
  /* background-color: #f90; */
  display: flex;
  align-items: center;
}
.dicover_body-area_bottom {
  width: 100%;
  height: 33px;
  border-top: 1px solid #cccccc;
  /* background-color: #000; */
  display: flex;
  align-items: center;
}
.order_bottom li {
  width: 100%;
  height: 117px;
  /* background-color: #93999f; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.order_bottom-pingjia {
  width: 324px;
  height: 99px;
  /* background-color: pink; */
  display: flex;
}
.order_bottom-pingjia_left {
  width: 29px;
  height: 60px;
  /* background-color: blue; */
}
.order_bottom-pingjia_left_img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  /* background-color: red; */
  overflow: hidden;
}
.order_bottom-pingjia_right {
  width: 284px;

  /* background-color: orange; */
  margin-left: 5px;
}
.order_bottom-pingjia_right-one {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
.order_bottom-content {
  font-size: 12px;
  line-height: 18px;
  color: #07111b;
}
.order_bottom-pingjia_right-span {
  font-size: 10px;
  font-weight: 200;
  line-height: 12px;
  color: #93999f;
}
.el-icon-star-on {
  color: #f90;
}
.dicover_gun {
  width: 100%;
  height: 464px;
  background-color: red;
  overflow: hidden;
}
</style>