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