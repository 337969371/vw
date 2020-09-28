<template lang="pug">
    div
        .menu.w-full.fixed.top-0.left-0.z-10
            .relative
                .vw-logo
                    a(href="https://www.vw.com.cn")
                        img(src="~/assets/images/vw-logo.png", alt="alt")
                .flex.text-white.nav
                    a.inline-block.flex-1(v-for="item in menus" :key="item.to" :href="item.to" @click="stm_clicki('send', 'event', '页面跳转', '点击', item.name)" :class="item.actived") 
                        span.txt-80s(v-html="item.name")
            .sign
                img(src="~/assets/images/i-logo.png", alt="alt")
        
</template>
<script>
export default {
    name: 'Nav',
    data(){
        return {
            menus: [
                {to: '', name: '连线<span class="VWHeadWeb-Bold">ID.</span>'},
                {to: 'brand.html', name: '<span class="txt-80s">ID. </span>世界'},
                {to: 'techcampaign', name: '<span class="VWHeadWeb-Bold">ID. </span>造物', actived: 'actived'},
                {to: 'lifestyle.html', name: '<span class="VWHeadWeb-Bold">ID. </span>玩场'},
                {to: 'me.html', name: '<span class="VWHeadWeb-Bold">ID. </span>ME'},
            ]
       }
    }
}
</script>
<style lang="stylus" scoped>
    .menu
        font-size $pxTorem(60, 192)
        .vw-logo
            position: absolute;
            right: 5%;
            top: 10px;
            padding: 0 14px;
            transition: 0.8s;
            width: 68px;
            &:before
                position: absolute;
                right: 100%;
                top: 50%;
                margin-top: 0px;
                width: 2500px;
                background: #fff;
                content: "";
                height: 2px;
            &:after
                position: absolute;
                left: 100%;
                top: 50%;
                margin-top: 0px;
                width: 2500px;
                background: #fff;
                content: "";
                height: 2px;
        .sign
            width: 55px;
            height: 35px;
            position: absolute;
            left: 110px;
            top: 80px;
            transition: 0.8s;
        .nav
            font-size 20px
            position: absolute;
            right: 12%;
            top: 56px;
            display: block;
            transition: 0.8s;
            a
                margin-right 50px
                line-height: 40px;
                &.actived
                    border-bottom: 2px solid #fff;
         &.up
            // top -100px 
            .vw-logo
                transform: translateY(-100px);
            .nav
                transform: translateY(-100px); 
</style>