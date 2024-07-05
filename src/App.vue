<template>
  <div class="wrapper-bg">
    <HeaderSite />
    <router-view />
  </div>
</template>

<script>
import HeaderSite from "@/components/HeaderSite";
export default {
  components: { HeaderSite },
};
</script>

<style lang="scss">
* {
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  width: 100%;
  max-width: 1200px;
}
.wrapper-bg {
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #2c3e50;
}
</style>
