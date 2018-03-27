<!-- 侧边菜单页 -->
<template>
    <yd-flexbox direction="vertical">
            <yd-flexbox-item>
                <yd-navbar title="功能菜单"> 
                    <yd-icon name="xiangzuojiaohuan" slot="right" size='.5rem'  @click.native="menuClose" custom></yd-icon>
                </yd-navbar>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <yd-accordion :accordion="true">
                    <yd-accordion-item v-for="item in menu" :title="item.title" :key="item.id">
                            <yd-icon v-if="item.icon" :name="item.icon" slot="icon" size='.5rem' style="margin-right:.5rem" custom></yd-icon>
                            <yd-cell-group>
                                <yd-cell-item v-for="sub in item.sub" :key="sub.id" :title="sub.title" type='div' @click.native="menuClick(sub)" arrow>
                                    <yd-icon slot="left" v-if="sub.icon" :name="sub.icon" size='.5rem' style="margin-left:.5rem;margin-right:.3rem"  @click.native="menuClose" custom></yd-icon>
                                    <span slot="left">{{sub.title}}</span>
                                </yd-cell-item>
                            </yd-cell-group>
                    </yd-accordion-item>
                </yd-accordion>
            </yd-flexbox-item>
        </yd-flexbox>
</template>
<script>
    export default {
        data() {
            return {
                currentMenu:{
                    title:'首页',
                    link:'/main',
                },
            }
        },
        props:{
            menu:{
                type:Array,
                default:function(){
                    return [
                        {
                            id:1,
                            title:'功能组',
                            icon:'gonggeshitu',
                            link:0,
                            sub:[
                                {
                                    id:11,
                                    title:'首页',
                                    icon:'shouye',
                                    link:'/main/home',
                                },
                                {
                                    id:12,
                                    title:'订单管理',
                                    icon:'caigou',
                                    link:'/main/order',
                                },
                                {
                                    id:13,
                                    title:'消息列表',
                                    icon:'lingdang',
                                    link:'/main/message',
                                },
                                {
                                    id:14,
                                    title:'个人中心',
                                    icon:'yonghu',
                                    link:'/main/user',
                                },
                            ],
                        },
                    ];
                }
            }
        },
        components: {

        },
        methods: {
            menuSelect(){
                this.$emit("menu-select",this.currentMenu);
            },         
            menuClick(sumMenu){
                this.currentMenu = sumMenu;
                this.menuSelect();
                console.log("-----------------菜单点击，关闭菜单："+sumMenu.link+"---------------");
            },
            menuClose(){
                 this.$emit("menu-close");
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
