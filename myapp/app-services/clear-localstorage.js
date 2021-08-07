let localStore = JSON.parse(localStorage.reduxStore||`{"timestamp":0}`);
let newTime = new Date().getTime();
let diff = (newTime - (localStore.timestamp||0))/(1000*60*60);
if(diff>3) {
  localStorage.clear()
}