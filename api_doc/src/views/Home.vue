<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <main-page></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/views/MainPage'

export default {
  name: 'Home',
  components: {
      MainPage
  }
}
</script>
