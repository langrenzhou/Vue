<template>
  <div class="header">
    <div class="world_box">
      <div class="world_box-content">
        <div class="world_box_title">
          <div class="img">
            <img src="https://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" />
          </div>
          <div class="world_title">
            <p>粥品香坊（回龙观）</p>
            <p>蜂鸟专送/38分钟送达</p>
            <p>在线支付满28减5</p>
          </div>
          <div class="world_box_five">5&nbsp;></div>
        </div>
      </div>

      <div class="world_box_bottom" @click="show">粥品香坊其烹饪的秘方源于中国千年古法，在融和现代制作...</div>
    </div>
    <img
      src="https://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
      alt
      class="world_img"
    />
  </div>
</template>

<script>
export default {
  peops:[]
  ,
  data(){
    return {
    }
  },
  methods:{
    show(){
      this.book= !this.book
      this.$emit("show",this.book)
    }
  }
};
</script>

<style>
.world_box {
  width: 100%;
  height: 137.5px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.header {
  height: 137.5px;
}
.world_img {
  width: 100%;
  height: 100%;
}
.world_box_title {
  width: 310px;
  height: 100px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
}
.world_box-content{
  width: 100%;
  height: 113px;
  /* background-color: pink; */
   display: flex;
     align-items: center;
  justify-content: center;
}
.world_box_bottom {
  width: 100%;
  height: 25px;
  background-color: rgba(7,17,27,.2);
  font-size: 10px;
  text-align: center;
  line-height: 25px;
}
.img {
  width: 64px;
  height: 64px;
}
img {
  width: 100%;
}
.world_title {
  color: white;
  margin-left: 5px;
}
.world_box_five {
  width: 36px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 41px;
}
.world_title p{
  margin-top: 3px;
}
.world_title p:nth-child(2){
  font-size: 12px;
}
.world_title p:nth-child(3){
  font-size: 12px;
}
</style>