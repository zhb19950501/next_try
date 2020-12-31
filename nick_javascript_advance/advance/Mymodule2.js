/*
    这种方式需要在引入的文件里调用这个函数才能获得它向外暴露的函数

*/ 
function Mymodule2(){
    var msg = "huihui"
    function ToUpper(){
        console.log(msg.toUpperCase())
    }

    function ToLower(){
        console.log(msg.toLowerCase())
    }
    return {
        ToUpper:ToUpper,
        ToLower:ToLower
    }

}