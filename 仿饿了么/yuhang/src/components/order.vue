<template>
  <div class="big" ref="big">
    <div>
      <ul>
        <li class="order_li-1">
          <div class="order_li-1_area">
            <div class="order_li-1_area_box">
              <div>
                <h1 class="order_li-1_area_title">粥品香坊（回龙观）</h1>
                <p class="order_li-1-p">
                  <span class="el-icon-star-on as"></span>
                  <span class="el-icon-star-on as"></span>
                  <span class="el-icon-star-on as"></span>
                  <span class="el-icon-star-on as"></span>
                  <span class="el-icon-star-on"></span>
                  <span class="order_li-1-p_span">(24)</span>
                  <span class="order_li-1-p_span">月售90单</span>
                </p>
              </div>
              <div class="order_li-1_area_link">
                <p :class="['el-icon-s-opportunity',{'color':shou}]" @click="sc"></p>
                <p v-if="shou" class="order_li-1_area_link_p">已收藏</p>
                <p v-else class="order_li-1_area_link_p">收藏</p>
              </div>
            </div>
            <div class="order_li-1_area_bom">
              <ul class="order_li-1_area_bom_ul">
                <li>
                  <p class="order_li-1_area_bom-p">起送价</p>
                  <p>
                    <span class="order_li-1_area_bom-sp">20</span>
                    <span>元</span>
                  </p>
                </li>
                <li>
                  <p class="order_li-1_area_bom-p">商家配送</p>
                  <p>
                    <span class="order_li-1_area_bom-sp">4</span>
                    <span>元</span>
                  </p>
                </li>
                <li>
                  <p class="order_li-1_area_bom-p">平均配送时间</p>
                  <p>
                    <span class="order_li-1_area_bom-sp">38</span>
                    <span>分钟</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="order_li-border"></li>
        <li>
          <div>
            <p>公告与活动</p>
          </div>
          <div
            class="order_li-2_box"
          >粥品香坊烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，有世界烹饪大师屈浩先生领先研发，坚守纯天然，0添加到良心品质深得消费者青睐，发展至今成为粥类的领导品牌。时2008年奥运会和2013年园博会指定餐饮服务商</div>
          <ul class="shoptrs">
            <li class="order_li-2_li">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIzOTZBNDI1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIzOTZBNDM1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMjM5NkE0MDVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMjM5NkE0MTVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjTlheIAAApJSURBVHja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"
              />在线支付满28减5
            </li>
            <li class="order_li-2_li">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVFQjJFNjI1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFQjJFNjM1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUVCMkU2MDVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRUVCMkU2MTVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqNYEBQAAAnfSURBVHja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"
              />vc无限橙果汁全场8折
            </li>
            <li class="order_li-2_li">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVFQjJFNUE1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFQjJFNUI1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODdEODI1OTVEOUExMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODdEODI1QTVEOUExMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoflnogAAAuWSURBVHja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"
              />单人精彩套餐
            </li>
            <li class="order_li-2_li">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDUxMzhFRTg1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDUxMzhFRTk1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMTIyRTI3RjUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMTIyRTI4MDUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjylpMEAAAaaSURBVHja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"
              />该商家支持发票，请下单写好发票抬头
            </li>
            <li class="order_li-2_li">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVFQjJFNUE1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFQjJFNUI1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODdEODI1OTVEOUExMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODdEODI1QTVEOUExMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoflnogAAAuWSURBVHja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"
              />已加入"外卖保"计划，食品安全保障
            </li>
          </ul>
        </li>
        <li class="order_li-border"></li>
        <li class="order_li-lunbo">
          <h1>商家实景</h1>
          <div class="order_li-lunbo_S" ref="wrapper">
            <div class="content2">
              <ul class="order_li-lunbo_ul">
                <li>
                  <img
                    src="https://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180"
                    width="120"
                    height="90"
                  />
                </li>
                <li>
                  <img
                    src="https://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180"
                    width="120"
                    height="90"
                  />
                </li>
                <li>
                  <img
                    src="https://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180"
                    width="120"
                    height="90"
                  />
                </li>
                <li>
                  <img
                    src="https://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
                    width="120"
                    height="90"
                  />
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="order_li-border"></li>
        <li class="order_li-bottom">
          <ul class="order_li-bottom-ul">
            <li class="order_li-bottom-ul_li">商家信息</li>
            <li>该商家支持发票，请下单写好发票抬头</li>
            <li>品类：其他菜系，包子粥店</li>
            <li>北京市昌平区回龙观西大街龙观置业大厦B座102单元1340</li>
            <li>营业时间：10：00-20：30</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import betterscroll from "better-scroll";
export default {
  data() {
    return {
      shou: false
    };
  },
  methods: {
    sc() {
      console.log(123);
      this.shou = !this.shou;
    }
  },
  created() {
    this.$nextTick(() => {
      this.leftscroll = new betterscroll(this.$refs.wrapper, {
        scrollX: true
      });
      this.bigscrolll = new betterscroll(this.$refs.big, {
        click: true
      });
    });
  }
};
</script>
<style>
ul li {
  list-style: none;
}
.order_li-1 {
  width: 100%;
  height: 150px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.order_li-1_area {
  width: 310px;
  height: 140px;
  /* background-color: blue; */
  border-top: 1px solid #cccccc;
}
.order_li-1_area_title {
  font-size: 14px;
}
.order_li-lunbo h1 {
  font-size: 14px;
  line-height: 14px;
  color: #07111b;
  margin-bottom: 12px;
}
.order_li-lunbo {
  padding: 16px;
}
.order_li-lunbo_S {
  width:100%;
  height: 90px;
  overflow: hidden;
}
.order_li-lunbo_ul {
  display:flex;
}
.order_li-lunbo_ul li {
  margin-right: 6px;
}
.order_li-border {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background: #f3f5f7;
}
.order_li-bottom-ul {
  padding: 10px;
}
.order_li-bottom-ul > .order_li-bottom-ul_li {
  border-top: 0;
  color: black;
  font-weight: 10;
}
.order_li-bottom-ul li {
  border-top: 1px solid #cccccc;
  padding: 16px 12px;
  font-size: 12px;
  line-height: 16px;
  color: #07111b;
  font-weight: 200;
}
.order_li-2_box {
  font-size: 12px;
  font-weight: 200;
  color: #f01414;
  line-height: 24px;
  padding: 15px;
}
.order_li-2_li {
  padding: 16px 12px;
  font-size: 12px;
  line-height: 16px;
  border-top: 1px solid #cccccc;
}
.order_li-2_li > img {
  width: 16px;
  height: 16px;
}
.shoptrs {
  width: 320px;
  margin: 0 auto;
}
.big {
  width: 100%;
  height: 481px;
  overflow: hidden;
}
.as {
  color: orange;
}
.order_li-1-p {
  margin-top: 10px;
}
.order_li-1_area_box {
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-around;
}
.order_li-1_area_link {
  text-align: center;
  line-height: 26px;
  /* background-color: pink; */
}
.el-icon-s-opportunity {
  color: #cccccc;
  font-size: 28px;
}
.order_li-1-p_span {
  font-size: 10px;
}
.color {
  color: red;
}
.order_li-1_area_bom_ul {
  padding: 15px;
  display: flex;
}
.order_li-1_area_bom_ul li {
  text-align: center;
  width: 100px;
  border-right: 1px solid #cccccc;
}
.order_li-1_area_bom_ul :nth-child(3){
  border-right: 0;
}
.order_li-1_area_bom-p {
  font-size: 10px;
  line-height: 10px;
  color: #93999f;
  margin-bottom: 4px;
}
.order_li-1_area_bom-sp {
  font-size: 24px;
  line-height: 24px;
}
.order_li-1_area_link_p{
  font-size: 10px;
    line-height: 10px;
    color: #4d555d;
}
</style>