export default {
    getCities() {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/Place/Get`).then((d) => {
                res(d.data);
            }).catch(rej);
        });
    },
    getCitiesFromGoogle(search) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/Place/NewPlaceList?SearchText=${search}`).then((d) => {
                res(d.data);
            }).catch(rej);
        });
    },
    addCitiesToDB(placeid) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/Place/AddPlace?placeId=${placeid}`).then((d) => {
                res(d.data);
            }).catch(rej);
        });
    },
    getVehicleTypes() {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/Vehicle/GetVehicleTypes`).then((d) => {
                res(d.data);
            }).catch(rej);
        });
    },
    getSlotStatus() {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/VehicleSlot/GetSlotStatus`).then((d) => {
                res(d.data);
            }).catch(rej);
        });
    },
    saveVehicleSlot(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/VehicleSlot/SaveVehicleSlot`, data).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    getVehicleSlot(search) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/VehicleSlot/GetVehicleSlot?vehicleId=${search}`).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    getCompanyList() {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/Vehicle/GetCompanies`).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    getVehicleList(companyId = 0) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.get(`${base}api/Vehicle/GetCompanyVehicles?${companyId ? 'companyId=' + companyId : ''}`).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    upsertVehicle(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Vehicle/UpsertVehicle`, data).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    signup_user(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Account/Register`, data).then(d => {
                res(d.data)
            }).catch(rej);
        });
    },
    login_user(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Account/Login?ReturnUrl=test`, data).then(d => {
                res(d.data)
            }).catch(rej);
        });
    },
    reset_password(email) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Account/ForgotPassword`, {
                "Email": email
            }).then((d) => {
                res(d.data);
            }).catch(rej)
        })
    },
    signup_company(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Account/Register?CompanyName=name`, data).then(d => {
                res(d.data)
            }).catch(rej);
        });
    },
    distCal(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Place/DistanceCalc`, data).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    searchVehicleAsync(data) {
        return this.handelAlert((res, rej, loadObj) => {
            axios.post(`${base}api/Place/SearchVehicle`, data).then(d => {
                res(d.data);
            }).catch(rej);
        }, "Searching for vehicles please wait...");
    },
    placeOrder(data) {
        return this.handelAlert((res, rej) => {
            axios.post(`${base}api/payment/payment`, data).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    getSuggestedPlaces(groupId) {
        return this.handelAlert((res, rej) => {
            axios.post(`${base}api/Place/GetTouristryByGID?groupid=${groupId}`).then(d => {
                res(d.data);
            }).catch(rej);
        });
    },
    sendMessage(data) {
        return this.handelAlert((res, rej) => {
            axios.post(`${base}api/Home/SaveCustomerEnquiry`, data).then(d => {
                res(d.data);
            }).catch(rej);
        }, "Sending Your Request Please Wait...");
    },
    CustomerDetails() {
        return this.handelAlert((res, rej) => {
            axios.get(`${base}api/Customer/Index`).then(d => {
                res(d.data);
            }).catch(rej)
        }, "Getting customer details please wait..");
    },
    GetGuestOrders(data) {
        return this.handelAlert((res, rej) => {
            axios.post(`${base}api/Customer/GetGuestOrders`,data).then(d =>{
                res(d.data);
            }).catch(rej)
        },"Getting your order details")
    }


}