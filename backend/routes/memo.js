var express = require('express');
var router = express.Router();
const memos = require('../memo.json');
// memos의 길이: 2
let count = memos.length;

/* 메모리스트를 보내주는 주소 */
router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

// post로 받아온 값을 memos에 추가(push)
router.post('/writeform', function(req, res, next) {
    // axios로 받아왔다는 조건하에 body.data
    const memo = req.body.data;
    count++;
    const m = {
        id: count,
        writer: "익명",
        title: memo.title,
        memo: memo.memo
    };
    memos.push(m);
    res.send('ok');
});

/*  id 값을 통해 메모를 구분, 노출 상관 없음
    한 개의 메모만 보냄 */
router.get('/:id', function(req, res, next) {
    // 파람 id값에는 memo의 id가 담겨있다
    // id값을 토앻서 하나의 메모를 찾거나(find) 걸러낸다(filter)
    const id = req.params.id;

    const m = memos.filter((memo) => { if(memo.id == id) { return true } } )
    console.log(m[0]);
    res.send(m[0]);
});

router.post('/writeform/form', function(req, res, next) {
    // form 태그를 통해 받아옴 (data 사용 X, 바로 body)
    const memo = req.body;
    count++;
    const m = {
        id: count,
        writer: "익명",
        title: memo.title,
        memo: memo.memo
    };
    memos.push(m);
    res.redirect('/');
})

module.exports = router;