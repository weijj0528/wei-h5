<!-- 登录页面 -->
<template>
    <yd-flexbox direction="vertical">
        <yd-flexbox-item height="2" style="text-align: center;vertical-align:middle;">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src="./../res/icons/logo.png" class="logo">
        </yd-flexbox-item>
        <yd-flexbox-item>
            <yd-cell-group style="padding:.5rem">
                <yd-cell-item>
                    <yd-icon slot="icon" name="morentouxiang" size=".5rem" color="#FF685D" class="iconMargin" custom></yd-icon>
                    <yd-input slot="right" required v-model="param.userName" max="20" placeholder="请输入用户名"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <yd-icon slot="icon" name="suoding" size=".5rem" color="#FF685D" class="iconMargin" custom></yd-icon>
                    <yd-input slot="right" type="password" v-model="param.password" placeholder="请输入密码"></yd-input>
                </yd-cell-item>
                <yd-button size="large" type="primary" style="margin-top:.5rem" @click.native="submit">登录</yd-button>
            </yd-cell-group>
        </yd-flexbox-item>
        <yd-flexbox-item></yd-flexbox-item>
    </yd-flexbox>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                loading:false,
                param: {
                    userName: "",
                    password: ""
                }
            }
        },
        components: {},
        methods: {
            ...mapActions(['userLogin']),
            submit: function () {
                console.log("-----------------登录---------------");
                let _self = this;
                _self.$router.push('/main');
                // _self.loading = true;
                // _self.userLogin(_self.param).then((resp) => {
                //     console.log(resp);
                //     _self.loading = false;
                //     _self.$router.push('/main/home');
                // }, (err) => {
                //     _self.loading = false;
                //     // _self.$router.push('/main');
                // });
            }
        }
    }
</script>
<style scoped lang="less">
    .iconMargin{
        margin-right: 0.2rem
    }
    .logo{
        width: 3rem;
    }
</style>
