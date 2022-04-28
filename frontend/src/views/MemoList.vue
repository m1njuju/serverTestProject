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
    created() {
        this.$http.get('/api/memo')
        .then((response)=> {
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