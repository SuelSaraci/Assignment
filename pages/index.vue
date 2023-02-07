<template>
  <div class="app">
    <div class="form">
      <RegistrationForm />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  background: lightgray;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
