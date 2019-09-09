<template>
    <div>
        <div style="margin: 20px 0 20px">
            <input type="text" v-focus>
            <input type="text" v-test="{name: 'hh', age: '18'}" value="123">
        </div>
        <div
            class="div"
            v-for="item in list"
            :key="item.url">
            <img src="../../assets/images.png" alt="默认图片" v-image='item.url'>
        </div>
    </div>
</template>

<script>
export default {
    name: 'provide-inject',
    directives: {
        focus: {
            // 指令的定义
            inserted (el) {
                el.focus();
            }
        },
        test: {
            bind (el, binding) {
                console.log(el.value);
                console.log(binding.value);
            }
        },
        image: {
            inserted (el, binding) {
                setTimeout(function () {
                    el.setAttribute('src', binding.value);
                }, Math.random() * 1200);
            }
        }
    },
    data () {
        return {
            list: [
                {
                    url: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg'
                },
                {
                    url: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg'
                },
                {
                    url: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg'
                }
            ]
        };
    },
    created () {
    },
    methods: {
    }
};

</script>

<style lang='scss' scoped>
.div {
    display: inline-block;
    img {
        width: 100px;
        height: 100px;
    }
}
</style>
