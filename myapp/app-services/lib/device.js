export const getDevice = function(){
    let standards = [
        {min:0,max:319,device:"Small",class:"small"},
        {min:320,max:480,device:"Mobile",class:"mob"},
        {min:481,max:768,device:"Tablet",class:"tab"},
        {min:769,max:1024,device:"Laptop",class:"lap"},
        {min:1025,max:1899,device:"Desktops",class:"desk"},
        {min:1900,max:Infinity,device:"TV",class:"tv"},
    ];
    let device = "";
    let width = window.document.body.clientWidth;
    standards.map((screen)=>{
        device =  device||(screen.min<=width&&screen.max>=width&&screen);
    })
    return device;
}

export default getDevice;