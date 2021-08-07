import { connect } from "react-redux";
import mixins from ".";
export default {
    connect(component){
        return connect(
            (state)=>({store:state}),
            (dispatch)=>({
                dispatch:(func,...payload)=>dispatch({type:func,payload:payload})
            })
        )(component);
    },
    initialConstruct(key){
        this.$store = this.props.store;
        this.dispatch = this.props.dispatch;
        this.history = this.props.history||window.reduxHistory;
        this.setStore = mixins.setStore.bind(this);
        this.setStates = mixins.setStates.bind(this);
        this.watch = mixins.watch.bind(this);
        window[key] = this;
    },
    getDotedKeyValue(key,obj){
        let arr = key.split(".");
        if(arr.length>1) {
            let tmp = obj,key = "",old = null;
            arr.forEach(k => {
                old = tmp,tmp = tmp[k],key = k;
            });
            return old[key];
        }  else {
            return obj[key]
        }
    },
    getDotedValueKeys(key,obj) {
        let arr = key.split(".");
        if(arr.length>1) {
            let tmp = obj || {},key = "",old = null;
            arr.forEach(k => {
                old = tmp,tmp = tmp[k],key = k;
            });
            return {
                obj:old,
                key
            };
        }  else {
            return {
                obj,
                key
            }
        }
    },
    setStore(key,value) {
        let storeObject = this.props.store;
        let payload = {name:key,value:value};
        let arr = payload.name.split(".");
        if(arr.length>1) {
            let tmp = storeObject,key = "",old = null;
            arr.forEach(k => {
                old = tmp,tmp = tmp[k],key = k;
            });
            old[key] = payload.value;
        }  else {
            storeObject[key] = payload.value;
        }
        return this.props.dispatch((state)=>{
            return {
                ...storeObject
            }
        });
    },
    setStates(key, val) {
        let self = this;
        return new Promise((res,rej)=>{
            self.setState((...arg) => {
                let ret = mixins.getDotedValueKeys(key, arg[0]);
                let obj = ret.obj;
                ret.obj[ret.key] = (typeof val == "function") ? val(...arg) : val;
                // key = ret.key;
                // let obj = {};
                // obj[key] = (typeof val == "function") ? val(...arg) : val;
                console.log("obj[key]", obj[key]);
                return {
                    ...arg[0]
                };
            },(...arg)=>{
                res(...arg);
            });
        });
    },
    watch(watchers,prevState,nextState=null) {
        nextState = nextState||{...this.props};
        let keys = Object.keys(watchers);
        keys.map((key)=>{
            let oldval = mixins.getDotedKeyValue(key,prevState);
            let newval = mixins.getDotedKeyValue(key,nextState);
            if(oldval!=newval) {
                let func = watchers[key];
                if(func instanceof Function) {
                    func.bind(this)(newval,oldval);
                }
            }
        })
        
    }
}