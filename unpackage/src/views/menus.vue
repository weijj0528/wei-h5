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
                            <yd-navbar v-for="sub in item.sub" :key="sub.id" :title="sub.title" @click.native="menuClick(sub)"> 
                                <yd-icon v-if="sub.icon" :name="sub.icon" slot="left" size='.5rem' style="margin-left:.5rem"  @click.native="menuClose" custom></yd-icon>
                            </yd-navbar>
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
                            title:'个人中心',
                            icon:'yonghu',
                            link:0,
                            sub:[
                                {
                                    id:11,
                                    title:'好友管理',
                                    icon:'hezuoguanxi',
                                    link:'/main/user',
                                }
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
