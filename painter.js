const Painter = function(room){
    this.room = room;
    this.paint = [];
    this.total = 0;
}

Painter.prototype.amount = function(){
    return this.paint.length;
}

Painter.prototype.addPaintcolour = function(amount){
    return this.paint.push(amount)
}

Painter.prototype.addPaintlitre = function(volume){
    return this.total += volume
}

Painter.prototype.checkAmount = function(){
    return this.total
}



module.exports = Painter