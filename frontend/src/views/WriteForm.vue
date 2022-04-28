<template>
    <div>
        <h1>글을 작성하는 공간입니다</h1> 
        <input type="text" size="27" v-model="title"><br>
        <textarea cols="30" rows="10" v-model="memo"></textarea><br>
        <button @click="addmemo">전송</button>
    </div>
</template>
<script>
export default {
    data() {
        return ({
            title: '',
            memo: ''
        })
    },
    methods: {
        addmemo() {
            this.$http.post('/api/memo', {
                data: {
                    title: this.title,
                    memo: this.memo
                }
            }).then((response) => {console.log(response.data)})
            this.$router.push('/')
        }
    }
}
</script>