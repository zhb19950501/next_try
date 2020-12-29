
// 获取样式
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name]
    }
    else {
        return obj.currentStyle[name]
    }
}

// move动画
function move(obj, attr, destination, speed, frequency, callback) {
    clearInterval(obj.timer);

    var s_attr = parseInt(getStyle(obj, attr));

    if (s_attr > destination) { speed = -speed };

    obj.timer = setInterval(function () {
        s_attr = parseInt(getStyle(obj, attr));
        var e_attr = s_attr + speed;
        
        
        if ((speed < 0 && e_attr < destination) || (speed > 0 && e_attr > destination)) {
            e_attr = destination;
        }
        obj.style[attr] = e_attr + "px";

        if (e_attr == destination) {
            
            clearInterval(obj.timer);
            callback && callback();
            
        };

    }, frequency)
}

// 为指定元素切换类,如果元素里有这个类，没则加上，有则去除
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn)
    }
    else{
        addClass(obj,cn)
    }
}

// 为指定元素删除类
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b")
    obj.className = obj.className.replace(reg, "")
}


// 为指定元素添加类
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += "" + cn
    }
}


// 创建一个正则表达式的方法判断是否包含传入的类名
function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b")
    return reg.test(obj.className)
}