String.prototype.date = 
Number.prototype.date = 
Date.prototype.date = function(){
    return new Date(this);
}
Date.prototype.toDate = function() {
    let dd = this.getDate();
    let mm = this.getMonth()+1;
    let yy = this.getFullYear();
    return `${yy}-${mm.fillZero()}-${dd.fillZero()}`;
}

Date.prototype.toTime = function() {
    let hh = this.getHours();
    let mm = this.getMinutes();
    let ss = this.getSeconds();
    return `${hh.fillZero()}:${mm.fillZero()}:${ss.fillZero()}`;
}

Date.prototype.toAM = function(sf=false,frmt=12){
    let [ hh,mm,ss ] = this.toTime().split(":");
    let am = frmt==12?"AM":"";
    if(hh>12&&frmt==12) {
        hh = hh-12;
        am = "PM";
    }
    let res = `${Number(hh).fillZero()}:${mm}${(sf?(`:${ss}`):'')} ${am}`;
    return res.trim();
}

Date.prototype.addDay = function(day) {
    return new Date(this.setDate(this.getDate()+day));
}


Date.prototype.genTill = function(To){
    let FromDate = new Date(this.toDate());
    let ToDate = new Date(To.toDate());
    let curDate = FromDate;
    let ar = [];
    while(ToDate.getTime()>=curDate.getTime()){
        ar.push(curDate.toDate());
        curDate = curDate.addDay(1);    
    }
    return ar;
}

Date.prototype.addDay = function (num=1) {
    let dateVar = this.toDate().date();
    return new Date(new Date(dateVar).setDate(dateVar.getDate() + num));
}