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
    // id값을 통해서 하나의 메모를 찾거나(find) 걸러낸다(filter)
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

// 메모의 id값을 주소로 받아와서 삭제
router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    // memo.id값을 통해 memos의 인덱스를 찾아서 삭제
    // >> findindex()를 이용해서 index값 찾을 수 있음
    const index = memos.findIndex((memo)=> memo.id == id);

    // memo.id값을 통해서 memo의 값을 찾음
    //const m = memos.filter((memo) => { if(memo.id == id) { return true } } );
    // memo의 값으로 index를 찾아서
    //const index = memos.indexOf(m[0]);

    // memos에서 제거
    memos.splice(index, 1);

    console.log(memos);
    res.send(memos);
})

// put을 통해 받아온 값 수정: body의 data로 받아옴
router.put('/updateform', function(req, res, next) {
    const memo = req.body.data.memo; // data는 객체로 받아오기 때문에 memo를 써주지 않으면 id 값을 찾지 못함
    console.log(memo);

    // 메모의 인덱스를 찾아서 값을 할당
    // *title과 memo의 값이 바뀌었기 때문에, memo.id값으로 찾아야 한다
    const index = memos.findIndex((m)=> memo.id == m.id);
    memos[index] = memo;
    res.send('ok');
})

module.exports = router;