const PaintCan = function(size){
    this.size = size
    // this.empty = 0
}

PaintCan.prototype.checkIfEmpty = function(){
    if (this.size > 0) {
        return false
    } else {
        return true
    }
}

PaintCan.prototype.empty = function(){
    this.size = 0
}

module.exports = PaintCan;