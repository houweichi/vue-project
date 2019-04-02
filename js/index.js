var vm = new Vue({
    el: "#warp",
    data: function () {
        return {
            message: "hello vue",
            myP: "我是p",
            header: "头部",
            headerTitle: "头的title",
            navMessageTitle: "身体的title",
            navMessage: "身体",
            flag: 1,
            list: [
                { text: "姓名" },
                { text: "xuehao" },
                { text: "xingbie" }
            ],
            aClass:"my-class",
            bClass:"myStyle-class"
        }
    }
});