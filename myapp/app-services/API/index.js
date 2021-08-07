import apisetup from "./apisetup";
import api1 from "./api1";
import api2 from "./api2";
window.api = {
    ...apisetup,
    ...api1,
    ...api2
}
export default api;