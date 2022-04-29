<template>
    <div>
        <h1>글을 작성하는 공간입니다</h1> 
        <input type="text" size="27" v-model="title"><br>
        <textarea cols="30" rows="10" v-model="memo"></textarea><br>
        <button @click="addmemo">전송</button>

        <hr>
        <h1>폼을 통해서 작성하는 곳입니다</h1>
        <!-- 폼을 이용해서 서버에 전달하면 새로고침이 일어난다 -->
        <form action="/api/memo/writeform/form" method="post">
            <input type="text" name="title"> <br>
            <textarea name="memo" cols="30" rows="10"></textarea> <br>
            <input type="submit" value="제출">
        </form>
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
        // axios를 이용해 전송 버튼을 눌렀을 때 값을 보내줌 - post
        addmemo() {
            this.$http.post('/api/memo/writeform', {
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