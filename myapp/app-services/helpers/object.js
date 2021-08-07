Object.filter = (obj, predicate) =>
Object.keys(obj)
.filter( key => predicate(obj[key],key,obj) )
.reduce( (res, key) => (res[key] = obj[key], res), {} );

Object.map = (obj, predicate) =>
Object.keys(obj)
.map( key => ({key:key,value:predicate(obj[key],key,obj)}) )
        .reduce((res, o) => (res[o.key] = o.value, res), {});


Object.QueryString = (obj) => {
    return Object.values(Object.map(obj, (v, k) => `${k}=${encodeURIComponent(v)}`)).join("&");
};