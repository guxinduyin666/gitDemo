const app = new Vue({
    el: '#app',
    data() {
        return {
            userName: '俺是隔壁老王'
        }
    },
    methods: {
        clickMe() {
            this.userName = '别点我'
        }
    }
})