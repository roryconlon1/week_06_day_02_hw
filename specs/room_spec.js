const assert = require('assert');
const Room = require('../room.js')
const PaintCan = require('../paintcan.js')
const Painter = require('../painter.js')

describe('Room', function(){
    let room;

    this.beforeEach(function(){
        room = new Room ('Living Room', 100)
    })

    it('should have a name', function(){
        const actual = room.name;
        assert.strictEqual(actual, 'Living Room');
    })

    it('should have a size', function(){
        const actual = room.size;
        assert.strictEqual(actual, 100);
    })

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, 0)
    })

    it('should be able to be painted', function(){
        const actual = room.addPaint(50);
        assert.strictEqual(actual, 50);
    })
    
    
})

describe ('PaintCan', function(){
    let paintcan;

    this.beforeEach(function(){
        paintcan = new PaintCan(4)
    })

    it('should have a size', function(){
        const actual = paintcan.size;
        assert.strictEqual(actual, 4)
    })

    it('should be able to check if empty', function(){
        const actual = paintcan.checkIfEmpty();
        assert.strictEqual(actual, false);
    })

    it('should be able to empty itself', function(){
        paintcan.empty()
        const actual = paintcan.size;
        assert.strictEqual(actual, 0)
    })
})

describe('Painter', function(){
    let painter;

    this.beforeEach(function(){
        painter = new Painter ('Living Room')
    })

    it('should have a room', function(){
        const actual = painter.room;
        assert.strictEqual(actual, 'Living Room');
    })

    it('should start with empty paint stock', function(){
        const actual = painter.amount();
        assert.strictEqual(actual, 0)
    })

    it('should be able to add a can of paint', function(){
        const actual = painter.addPaintcolour('green');
        assert.strictEqual(actual, 1);


    })

    it('should be able to check amount of paint in litres', function(){
        painter.addPaintlitre(16);
        painter.addPaintlitre(10);
        painter.addPaintlitre(6);
        const actual = painter.total;
        assert.strictEqual(actual, 32)
    })

    
})

// define canItBePainted
// if (paint.amount >= room.size){
//     return true
// } else {
//     return false
// }


//if canItBePainted === true
// remove amount size of room amount from paint amount