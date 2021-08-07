import method1 from "./method1";
import method2 from "./method2";
window.mixins = {
    ...method1,
    ...method2
}
let { connect,initialConstruct,watch } = mixins;
window.connect = connect;
window.initialConstruct = initialConstruct;
window.watch = watch;
export default mixins;