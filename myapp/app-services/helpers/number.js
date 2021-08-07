Number.prototype.fillZero =  function(correct=2){
    try {
        let ar = [];
        let numlen = this.toString().split('').length;
        ar.length = (correct-numlen);
        ar.fill(0);
        return (ar.join('')+this);    
    } catch (error) {
        console.log("fillZero: ",this,error);
        return this;
    }
    
}