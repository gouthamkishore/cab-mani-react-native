export default {
    getVehicleList(){
        return new Promise((resolve,reject)=>{
            let payload = {
                "FromId":this.props.store.searched_vehicle_obj.FromId,
                "ToId" : [...this.props.store.searched_vehicle_obj.ToId],          
                "FromDate":this.props.store.searched_vehicle_obj.FromDate,
                "ToDate":this.props.store.searched_vehicle_obj.ToDate
            }
    
            let varify = Object.entries(payload).map(arr=>{
                let flag =  Boolean(arr[1])?false:arr[0];
                if(!this.props.store.searched_vehicle_obj.roundTrip&&arr[0]=="ToDate") {
                    return false;
                }
                return flag;
            }).filter(v=>v);
            
            if(varify.length>0) {
                let errStr = "Please fill "+varify.map(v=>v.camel2Title()).join(',')+"";
                alert(errStr);
                reject(errStr);
                return;
            }
            api.searchVehicleAsync(payload).then(data=>{
                if(typeof data=="object") {
                    this.props.dispatch((state)=>{
                        return {
                            ...state,
                            searched_vehicle_list:data
                        }
                    });
                    resolve(data);
                }
            }).catch((err)=>{
                reject(err);
            });
        });
    },
    getVehicleTypes(){
        let self = this;
        api.getVehicleTypes().then((data) => {
            self.setStore("vehicleTypes",data)
        });
    },
    loginUser(payload,callbackURL=""){
        let self = this;
        api.login_user(payload).then((d) => {
            if (d.status == "Failure") {
                alert("Something went wrong. Please try again later.");
            } else {
                d.user.company = d.company || {};
                d.user.roles = d.roles;
                self.props.dispatch((state) => ({
                    ...state,
                    user: d.user,
                }));
                setTimeout(() => {
                    if(!callbackURL) {
                        if (d.user.company.CompanyId) {
                            callbackURL = "/vehicle-slot";
                        } else {
                            callbackURL = "/"
                        }
                    }
                    self.props.history.push(callbackURL);
                }, 0);
            }
        })
        .catch((rej) => {
            alert("Invalid login credentials");
        });
    },

    registerUser(payload,callbackURL){
        return new Promise((resolve,reject)=>{
            api.signup_user(payload).then((res)=>{
                let data = res.status;              
                    if(data&&data.Succeeded) {
                        resolve(data);
                        mixins.loginUser.bind(this)({
                            UserName: reg.mobileNumber,
                            Password: reg.password,
                            RememberMe: true,
                            byOTP:false,
                            UID:""
                        },callbackURL);
                    } else {
                        reject(data.Errors);
                    }                
            }).catch(err=>{
                reject(err);
            });
        })
    },
    getCitiesFromDB() {
        let self = this;
        return new Promise((res, rej) => {
            api.getCities().then((data) => {
                res(data.map((o) => {
                    return {
                        value: o.PlaceId,
                        label: o.PlaceName,
                        suggestion: (o.Touristry||[])
                    };
                }));
            }).catch(rej);
        });
    }
}