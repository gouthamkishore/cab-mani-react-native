Array.prototype.chunk = function(size){
    let chunk = [];
    let splitLen = Math.ceil(this.length/size);
    for(let i=0;i<splitLen;i++) {
        let start = i*size;
        chunk[i] = this.slice(start,start+size);
    } 
    return chunk;
}

Array.prototype.unique = function(){
    return Array.from(new Set(this));
}

Array.prototype.autosearch = function (search, key = "value") {
    search = search || "";
    let custFunc = (name)=>{
        return this.filter((val)=>{
            let item = typeof val == "object"?val[key]:val;
            item = typeof key == "function"?key(val):item.toString();
            switch(name) {
                case "startsWith":
                    return item.toLowerCase().startsWith(search.toLowerCase());
                case  "includes":
                   return item.toLowerCase().startsWith(search.toLowerCase());
                default:
                    return true;
            }
        })
    };
    let fistWords = custFunc("startsWith");
    let wordIncludes = custFunc("includes");

    return [...fistWords, ...wordIncludes ].unique();
}

Array.prototype.sum = function () {
    return this.reduce((a, b) => (a + b), 0);
}

Array.prototype.middleSum = function () {
    return this.map((num, i, arr) => ({ first: (i == 0 ? 0 : arr.slice(0, i).sum()), num: num, i: i + 1, last: arr.slice(i + 1).sum() })).filter((o) => o.first == o.last)[0]?.i;
}