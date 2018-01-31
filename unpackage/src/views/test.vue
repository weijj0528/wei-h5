<!-- 登录页面 -->
<template>
    <detailsLayout>
        <yd-scrolltab>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height: 350px;background-color: gray;"></div>
            </yd-scrolltab-panel>

            <yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
                <div style="height: 350px;background-color: blue;"></div>
            </yd-scrolltab-panel>

            <yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
                <div style="height: 350px;background-color: yellow;"></div>
            </yd-scrolltab-panel>
        
        </yd-scrolltab>
    </detailsLayout>
</template>
<script>
import detailsLayout from "../components/detailsLayout.vue"
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      param: {
        userName: "weiun",
        password: "123456"
      }
    };
  },
  components: {
      detailsLayout
  },
  methods: {
    ...mapActions(["userLogin"]),
    submit: function() {
      console.log("-----------------登录---------------");
      let _self = this;
      _self.loading = true;
      _self
        .userLogin(_self.param)
        .then(resp => {
          console.log(resp);
          _self.loading = false;
          _self.$router.push("/main/home");
        })
        .catch(err => {
          _self.loading = false;
        });
    }
  }
};
</script>
<style scoped lang="less">
.iconMargin {
  margin-right: 0.2rem;
}
.logo {
  width: 3rem;
}
</style>
