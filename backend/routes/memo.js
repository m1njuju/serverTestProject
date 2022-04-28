var express = require('express');
var router = express.Router();
const memos = require('../memo.json');

let count = 2;

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

router.post('/', function(req, res, next) {
    const memo = req.body.data;
    count++;
    const m = {
        id: count,
        writer: "익명",
        title: memo.title,
        memo: memo.memo
    }
    memos.push(m);
    res.send('ok');
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const m = memos.filter((memo) => { if(memo.id == id) { return true } } )
    res.send(m[0]);
});

module.exports = router;