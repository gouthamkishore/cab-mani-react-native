String.prototype.titleCase = function(){
    return this.split('-').join(' ').split('_').join(' ').split(' ').map(word=>{
        return word.split('').map((char,i)=>{
            return (i==0)?char.toUpperCase():char.toLowerCase();
        }).join('');
    }).join(' ');
}
String.prototype.camel2Title = function(){
    return this.split('').map((char,i)=>{
        return char.charCodeAt(0)<97?(' '+char):(i==0?char.toUpperCase():char);
    }).join('');
}

String.prototype.chunk = function(num,rev=false){
    if(rev) {
        return this.split('').reverse().chunk(num).map(arr=>arr.reverse().join('')).reverse()
    } else {
        return this.split('').chunk(num).map(arr=>arr.join(''));
    }
}

Number.prototype.cur = function (...arg) {
    return this.toString().cur(...arg);
}
String.prototype.cur = function(symbol='inr'){
    let curArr = this.split(".");
    let arr =  curArr[0].chunk(3,true);
    let last = arr.reverse()[0];
    let first = arr.slice(1,arr.length).reverse().join('').chunk(2,true).join(',');
    let cur = "";
    switch (symbol) {
        case "inr":
            cur = <>&#x20B9;</>
            break;    
        default:
            break;
    }
    return <>{cur} {`${first?first+",":""}${last}${curArr[1]?"."+curArr[1]:''}`}</>;
}

String.prototype.word = function(i=0){
    return this.split(",").join(" ").split(" ")[i];
}


String.prototype.url = function(){
    try {
        let str = this.includes("http")?this:(window.location.origin+this);
        let url = new URL(str);
        url.params = Object.fromEntries(url.searchParams.entries());
        return url;
    } catch(e) {
        return this;
    }
}


String.prototype.toVar = function(){
    return this.toLowerCase().split(" ").join("_").split("-").join("_");
}