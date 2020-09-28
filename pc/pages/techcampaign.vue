<template lang="pug">
    div
        .header
            Nav
            .video.relative.cursor-pointer.img-hover-box(onclick="stm_clicki('send', 'event', '播放视频', '点击', '头图视频')" @click="playVideo" data-src="https://id-oss.vw.com.cn/video/IDTech15s.mp4")
                img.w-full(src="~/assets/images/组件 3 – 1.jpg", alt="alt")

        .main.overflow-hidden.px-1
            .mx-auto.content(class="w-full md:w-3/5")
                .w-auto
                    img(src="~/assets/images/IT STARTS WITH ME.jpg", alt="alt")
                .text-64.line
                    .txt-80s ID. 科技
                    .font-hairline
                        |活出简单 自我而始
                .text-30
                    p 当大众汽车在谈ID. 科技时，实际上是在谈让生活变得更简单的解决方案。
                    p ID. 科技正在用创新智能，为电动车赋予越级体验，满足每个人多元化的需求：
                    p 拥有更大空间、轻松驾驭节奏、清晰辨别方向、实现人机互动……
                    p 任何出行愿望，统统都能成为触手可及的体验。
                    p ID. 科技的进化，只为让你的生活简单化。
                    .txt-wrap-h
                    p 全新MEB模块化电驱动平台，代表着大众汽车最智慧的技术，
                    p 集大众汽车丰富经验和创新精神于一身，
                    p 令全新大众纯电动ID. 家族每位成员都充满型格，不可小视。
                    .txt-wrap-h
                    p 不简单的ID. 科技，为你带来简单的生活。

                .text-40.sub-titile.txt-80s
                    |ID. 科技 <br>活出简单 自我而始
                .w-full
                    .img-hover-box.hidden
                        img.img-hover.w-full(src="~/assets/images/组件 4 – 1.jpg", alt="alt")
                .text-64.line.title-4.txt-80s
                    |科技亮点<br> 
                    img(src="~/assets/images/Title.jpg", class="title-4-img" width="50%" alt="alt")
                .relative.list-show
                    .flex(class="flex-col")
                        .flex.mb-1
                            .relative.img-hover-box.w-510
                                img.img-hover(src="~/assets/images/DB2019AU00538_large.jpg", alt="alt")
                                .absolute.cursor-pointer.top-0.left-0.w-full.h-full.text-white.justify-center.items-center.flex(@click="showMask(0)", onclick="stm_clicki('send', 'event', '二维码', '点击', '智能')")
                                    .text-16.btn 了解更多
                            .w-2
                            div.w-510
                                .font-bold.text-40.mt-25.txt-60s 01/智能
                                img(src="~/assets/images/Title-1.png" class="icon-2"  alt="alt")
                        
                        
                        .flex.mb-1
                            
                            .grid.w-510
                                div.justify-self
                                    .font-bold.text-40.txt-60s.justify-self-end.text-right 02/设计
                                    img(src="~/assets/images/Title-2.png" class="icon-1 float-right" alt="alt")
                            .w-2
                            .relative.img-hover-box.w-510
                                img.img-hover(src="~/assets/images/组件 5 – 1.jpg"  alt="alt")
                                .absolute.top-0.left-0.w-full.cursor-pointer.h-full.text-white.justify-center.items-center.flex(@click="showMask(1)", onclick="stm_clicki('send', 'event', '二维码', '点击', '02/设计')")
                                    .text-16.btn 了解更多
                        .flex.mb-1
                            .w-510.relative.img-hover-box.mt-1(class="md:mt-0")
                                img.img-hover(src="~/assets/images/Screenshot 2020-09-01 at 12.20.45.jpg", alt="alt")
                                .absolute.top-0.left-0.w-full.cursor-pointer.h-full.text-white.justify-center.items-center.flex(@click="showMask(2)", onclick="stm_clicki('send', 'event', '二维码', '点击', '03/驾乘体验')")
                                    .text-16.btn 了解更多
                            .flex-grow-0.w-2
                            .w-510
                                .font-bold.text-40.mt-25.txt-60s 03/驾乘体验
                                img(src="~/assets/images/Title.png" class="icon-3" alt="alt")
                .font-bold.text-64.line.title-4.VWHeadWeb-Bold.hidden
                    |ID. 科技 x 滴滴

                    img(src="~/assets/images/Title1.png", class="title-4-img" alt="alt")
     
                .w-full.mb-100.hidden
                    .relative.more.img-hover-box
                        img.img-hover.w-full(src="~/assets/images/组件 10 – 1.jpg", alt="alt")
                        a.absolute.top-0.left-0.w-full.h-full.text-white.justify-center.items-center.flex(href="")
                                    .text-24.txt-60s.btn 了解更多
            .w-full
                .flex(class="flex-col md:flex-row")
                    .flex-1.relative.img-hover-box.mb-20.brand-module
                        img.img-hover(src="~/assets/images/05.jpg", alt="alt")
                        a.absolute.top-0.left-0.w-full.h-full.text-white.justify-center.items-center.flex(href="brand.html" onclick="stm_clicki('send', 'event', '跳转', '点击', '认识ID.  品牌')")
                            .font-bold.text-44.txt-80s 认识ID.  品牌
                    .flex-1.relative.img-hover-box.mb-20
                        img.img-hover(src="~/assets/images/02.jpg", alt="alt")
                        a.absolute.top-0.left-0.w-full.h-full.text-white.justify-center.items-center.flex(href="lifestyle.html" onclick="stm_clicki('send', 'event', '跳转', '点击', '遇见更多新玩法')")
                            .font-bold.text-44.txt-80s 遇见更多新玩法
                .relative.img-hover-box(class="md:flex-col " onclick="stm_clicki('send', 'event', '跳转', '点击', '前往体验')")
                    img.img-hover(src="~/assets/images/组件 12 – 1.jpg", alt="alt")
                    a.absolute.top-0.left-0.w-full.h-full.text-white.justify-center.items-center.flex.flex-col.cursor-pointer(href="campaign.html")
                        p.text-44.VWHeadWeb-Light.txt-60s 和ID. 一起
                        p.font-bold 
                            .txt-80s.text-44
                                |改变玩法 自
                                img.inline.tmp-img(src="~/assets/images/min-Icon.png", alt="alt")
                                |而始
                        .link-experience.text-16 前往体验
        .fix-goindex
            a(href="https://www.vw.com.cn/")
                <img src="~/assets/images/goindex.png" alt="">
                span 回到主页
        <div class="fix-qrcode" @mouseenter="enter" @mouseleave="leave">
            <div class="fix-content">
                <img src="~/assets/images/clickicon.png" alt="">
            </div>
            <img class="qrcode-img" src="https://id-oss.vw.com.cn/img/blue-logo.png" alt="">
        </div>
        .video-box.fixed.top-0.left-0.z-50.w-full.bg-black.h-full.flex.flex-col.justify-center.items-center.hidden(ref="videoBox")
            .close.text-white.self-end(@click="videoClose")
                img.w-1(src="~/assets/images/close.png", alt="alt")
            video.w-full(src="" controls)
        .qr-code.fixed.top-0.left-0.z-50.w-full.bg-black.bg-opacity-50.h-full.flex.flex-col.justify-center.items-center.hidden(@click="hideMask")
            .inner.relative
                //- img(src="~/assets/images/AR-dialog-bg.jpg", alt="alt")
                .absolute.z-10.code
                    img(src="", alt="alt")
                    .text-20.text-white.txt-60s.leading-1 码上进入ID. 世界
</template>
<script>
import Nav from '~/components/Nav.vue'
export default {
    components:{
        Nav
    },
    data(){
        return{
            scrollState: '',
            qr: [require('~/assets/images/智能.png'),require('~/assets/images/设计.png'),require('~/assets/images/驾乘体验.png'), require('~/assets/images/AR-dialog-qrcode.png'),]
            
        }
    },
    mounted(){
        let client = document.body.clientWidth

        document.getElementsByTagName('html')[0].style['font-size'] = client*0.1 + 'px'
        this.scrollEvent()
    },
    methods:{
        playVideo(e){
            let videoSrc = e.target.parentNode.getAttribute('data-src')
            let videoBox = document.querySelector('.video-box')
            let video = videoBox.querySelector('video')
            video.setAttribute('src', videoSrc)
            video.play()
            videoBox.classList.remove('hidden')
        },
        videoClose(){
            let videoBox = document.querySelector('.video-box')
            let video = videoBox.querySelector('video')
            video.src = ''
            videoBox.classList.add('hidden')

        },
        scrollEvent(){
            let cpY = 0
            document.onscroll = function(e){
                let diff = document.documentElement.scrollTop || document.body.scrollTop
                if(diff > cpY){
                    

                    document.querySelector('.menu').classList.add('up')
                }else{
                    document.querySelector('.menu').classList.remove('up')
                }
                setTimeout(() => {
                    cpY = diff
                }, 0);

                
            }
        },
        showMask(target){

            document.querySelector('.code').querySelector('img').src = this.qr[target]
            document.querySelector('.qr-code').style.display= 'block'
        },
        hideMask(e){
            let ele = e.target.nodeName
            if(ele.toLowerCase() == 'img'){
                return
            }

            e.target.style.display = 'none'

        },
        enter(){
            document.querySelector('.fix-qrcode').classList.add('active')
        },
        leave(){
            document.querySelector('.fix-qrcode').classList.remove('active')
        }
    },

}
</script>

<style lang="stylus" scoped>
    .img-hover-box
        overflow hidden
        transition: all 0.8s;
        img.img-hover
            transition: all 0.8s;
        &:hover
            img.img-hover
                
                transform scale(1.08)
    .header
        transition all 0.8s
          
    
    .main
        margin-top $pxTorem(122, 192)
        margin-bottom $pxTorem(134, 192)
        width 100%
        padding 0 $pxTorem(20, 192)
        .content
            // margin $pxTorem(236, 192) $pxTorem(382, 192) $pxTorem(285, 192)
            p 
                font-size $pxTorem(30, 192)
                line-height $pxTorem(54, 192)
            .txt-wrap-h
                height $pxTorem(60, 192)
        
        .line
            border-bottom 2px solid #000
            margin 0 auto $pxTorem(80, 192)
            padding-bottom $pxTorem(30, 192)
        .sub-titile
            margin-top $pxTorem(68, 192)
            margin-bottom $pxTorem(78, 192)
        .title-4
            margin-top $pxTorem(220, 192)
            .title-4-img
                width $pxTorem(514, 192)
                margin-left $pxTorem(160, 192)
        .list-show
            margin-bottom 112px
        .text-200
            font-weight 200
        .list-show,.more
            .icon-1
                width initial
            .icon-2
                width initial
            .icon-3
                width initial
            .btn
                padding $pxTorem(8, 192) $pxTorem(42, 192)
                border 1px solid #fff
                border-radius $pxTorem(200, 192)
                line-height $pxTorem(38, 192)
        .more
            a
                margin-top $pxTorem(80, 192)
        .link-experience
            margin-top $pxTorem(24, 192)
            font-size $pxTorem(24, 192)
            padding $pxTorem(14, 192) $pxTorem(60, 192)
            border 1px solid #fff
            border-radius $pxTorem(200, 192)
            font-size $pxTorem(20, 192)
            font-family '60s'

        .tmp-img
            width $pxTorem(55, 192)
    .video-box
        .close
            padding 10px
    .qr-code
        background: rgba(0, 0, 0, 0.3);
        .inner
            width 70%
            margin-top 40%
            transform translate(25%)
            .code
                text-align: center;
                width: 300px;
                bottom 0
                left: 50%;
                margin-left: (-300/2)px;
                .text-24
                    padding 10px 0;
    .w-510
        width $pxTorem(510, 192)
    .mb-20
        margin-bottom $pxTorem(20, 192)
    .mt-25
        margin-top 25px
    .mr-20
        margin-right $pxTorem(20, 192)
    .mx-20
        margin 0 $pxTorem(20, 192)
    .mr-20
        margin-right $pxTorem(20, 192)
    .mab-20
        margin-bottom $pxTorem(20, 192)
    .text-20
        font-size $pxTorem(20, 192)
    .text-24
        font-size $pxTorem(24, 192)
    .text-44
        font-size $pxTorem(44, 192)
    .text-64
        font-size $pxTorem(64, 192)
    .text-60
        font-size $pxTorem(60, 192)
    .text-16
        font-size $pxTorem(16, 192)
    .text-30
        font-size $pxTorem(30, 192)
    .text-40
        font-size $pxTorem(40, 192)
    .mb-100
        margin-bottom $pxTorem(100, 192)
    .leading-47
        line-height $pxTorem(47, 192)
    // /返回首页
    .fix-goindex
        position: fixed;
        bottom: 172px;
        right: 40px;
        height: 84px;
        width: 192px;
        z-index: 1000;
        cursor: pointer;
        overflow: hidden;
        a
            img 
                position absolute
                top 0
                right 0
                z-index 905
                width 64px
        span
            position: absolute;
            right: 32px;
            top: 0;
            height: 64px;
            z-index: 900;
            line-height: 64px;
            text-align: center;
            width: 0px;
            background: #01b0f1;
            opacity: 0;
            font-size: 16px;
            color: #000;
            border-radius: 50px 0 0 50px;
            transition: .5s;
        &:hover

            span 
                width: 160px;
                opacity: 1;


        

    //悬浮二维码
    .fix-qrcode {
        position: fixed;
        bottom: 280px;
        right: 40px;
        z-index: 1000;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        cursor: pointer;
        .fix-content {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: relative;
            z-index: 1000;
            margin: auto;
            // background: #fff;
            text-align: center;
            // padding-top: 46px;
            img{
                width: 100%;
            }

            p {
                font-family: 'EVW-Text-Bold', 'CVW-HanyiQiHei-60S';
                font-size: 18px;
                color: #002052;
            }
        }

        &.active {
            .fix-content {

                // background: #4DC7F4;
                p {
                    // color: #fff;
                }
            }

            .qrcode-img {
                right: 70px;
                bottom: 0px;
                // width: 120px;
                // height: 120px;
                transform: scale(1.8) translate(-10px, -20px);
            }
        }

        .qrcode-img {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 999;
            width: 64px;
            height: 64px;
            transition: .8s;
        }
    }
    @media (min-width: 768px)
        .brand-module
            margin-right $pxTorem(20, 192)

    
</style>