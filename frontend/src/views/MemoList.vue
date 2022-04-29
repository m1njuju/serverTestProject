<template>
    <div id="memolist">
        <h1>메모</h1> <br>
        <table id="memo">
            <tr id="title">
                <td>번호</td>
                <td>작성자</td>
                <td>제목</td>
            </tr>
            <tr v-for="(memo, i) in memo" :key="i">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <!-- 타이틀을 눌렀을 때 /list/:id 링크로 이동 -->
                <td @click="$router.push(`/page/${memo.id}`)">{{memo.title}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return ({
            memo: []
        })
    },
    // 컴포지션이 처음 생성될 때 값을 가져와야 화면에 출력할 수 있다
    created() {
        // axios를 통해 값을 가져옴
        // this.memo에 가져온 값 넣어줌
        this.$http.get('/api/memo')
        .then((response)=> {
            // data를 통해서 값 가져올 수 있다
            console.log(response.data);
            this.memo = response.data;
        })
    }
}
</script>

<style scoped>
#memolist {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
#memo {
    padding: 20px;
    text-align: center;
    border: 2px dashed lightgray;
}
#title {
    font-weight: bold;
}
</style>