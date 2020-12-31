/*
    这种方式在引入的文件里可以直接通过window.Mymodule获取到它向外暴露的方法

*/ 


(function(){
    var msg = "huihui"
    function ToUpper(){
        console.log(msg.toUpperCase())
    }

    function ToLower(){
        console.log(msg.toLowerCase())
    }

    window.Mymodule = {
        ToUpper:ToUpper,
        ToLower:ToLower
    }
})()