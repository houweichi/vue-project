;(function () {
    var vm = new Vue ({
        el: "#showMsg",
        data: function () {
            return {
                list: [
                    {
                        imgSrc: "./img/1a.jpg",
                        text: "今天又写vue",
                        date: "2019-4-2",
                        buttonDeleteText: "删除"
                    },
                    {
                        imgSrc: "./img/2a.jpg",
                        text: "今天又写vue, 很高兴",
                        date: "2019-4-2",
                        buttonDeleteText: "删除"
                    }
                ],
                btnSendMessage: "发布留言",
                closeIcon: "X",
                confimSendMessage: "确认发布",
                showMessageBlock: false,
                textareaValue: "",
                imgArrSrc: ["./img/1a.jpg", "./img/2a.jpg", "./img/3a.jpg", "./img/4a.jpg", "./img/5a.jpg"]

            }
        },
        methods: {
            handleSendMessage: function () {
                this.showMessageBlock = true;
            },
            handleCloseMessageBlock: function () {
                this.showMessageBlock = false;
            },
            handleDelete: function (index) {
                
                this.list.splice(index, 1);
            },
            handleConfimSendMessage: function () {
                //  创建一行列表数据
            
                var data = {
                    imgSrc: this.handleRandom(),
                    text: this.textareaValue,
                    date: this.handleGetYear(),
                    buttonDeleteText: "删除"
                };
                // 追加数据
                this.list.push(data);

                // 清空的函数
                this.handleClearnText();
            },
            handleRandom: function () {
                
                return this.imgArrSrc[Math.floor(Math.random () * 5)];
            },
            handleGetYear: function () {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDay();
                var hour = date.getHours();
                var minute = date.getMinutes ();

                return year + "-" + month + "-" + day + "   " + hour + ":" + minute;           
            },
            handleClearnText: function () {
                this.showMessageBlock = false;
                this.textareaValue = "";
            }
            
        },
        computed: {
            
        },
    })

    


})();