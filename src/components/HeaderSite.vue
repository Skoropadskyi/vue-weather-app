<template>
  <header>
    <a href="#" class="logo">Weather</a>
  </header>
</template>

<script>
export default {
  name: "HeaderSite",
};
</script>

<style lang="scss" scoped>
header {
  overflow: hidden;
  background: #000038;
  padding: 20px 10px;

  .logo {
    color: white;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    padding: 12px;
  }
}
</style>
