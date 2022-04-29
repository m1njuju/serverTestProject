<template>
    <div>
        <h2>{{memo.title}}</h2>
        <p>작성자: {{memo.writer}}</p> <br>
        <p>{{memo.memo}}</p> <br>
        <button @click="$router.go(-1)">back</button>
    </div>
</template>
<script>
export default {
    data() {
        return({
            memo: {}
        })
    },
    created() {
        // axios 값을 가져옴 단, id값에 따른 1개의 값 - get
        // 값을 받아와서 this.memo에 저장
        // route.params.id를 통해 memo의 id값 전달
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
            this.memo = response.data;
        })
    }
}
</script>
<style scoped>
button {
    border: 2px dashed gray;
    border-radius: 20px;
    background: inherit;
    padding: 5px;
}
button:hover {
    background-color: lightslategray;
    color: white;
}
</style>