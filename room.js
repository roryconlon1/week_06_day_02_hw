const Room = function(name, size){
    this.name = name
    this.size = size;
    this.painted = 0
}

Room.prototype.addPaint = function(paint){
    return this.painted += paint
}


module.exports = Room