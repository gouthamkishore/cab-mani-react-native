import axios from "axios";

export default {
    CancelOrder(OrderId) {
        return this.handelAlert((res, rej) => {
            axios.get(`${base}api/Admin/CancelOrder?OrderId=${OrderId}`).then(d => {
                res(d.data);
            }).catch(rej);
        },"Cancelling your order please wait...")
    },
    UpdateOrder(data) {
        return this.handelAlert((res, rej) => {
            axios.post(`${base}api/Vehicle/UpdateTripStatus`, data).then(d => {
                res(d.data);
            }).catch(rej);
        },"Getting Order By Vehicle");
    },
    GetVehicleTripStatus(vehicleID) {
        return this.handelAlert((res, rej) => {
            axios.get(`${base}api/Vehicle/GetVehicleTripStatus?vehicleID=${vehicleID}`).then(d => {
                res(d.data);
            }).catch(rej);
        },"Getting Vehicle Status...");
    },
    GetConfirmPassword(query,data) {
        return this.handelAlert((res, rej) => {
            let queryString = Object.QueryString(query);
            axios.post(`${base}/api/Account/ResetPassword?${queryString}`,data).then(d => {
                res(d.data);
            }).catch(rej);
        },"Confirming Password Please Wait...");
    },
    GetVehicleImages(vehicleID) {
        return this.handelAlert((res, rej) => {
            axios.get(`${base}/api/vehicle/GetVehicleImages?vehicleId=${vehicleID}`).then(d => {
                res(d.data);
            }).catch(rej);
        },"Getting Vehicle Images please wait...")
    }


}