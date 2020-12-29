function createCounter() {
    var counter = 0
    var a = 1
    var myFunction = function(){
        counter += 1
         var myfun = function(){
             counter += 1
             return counter
         }
        return myfun
    }
    return myFunction
}

// 闭包是否会传递？ 哇~居然是会的~

var a1 = createCounter()
var a2 = a1()
console.log(a2())