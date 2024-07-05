<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <h3 style="padding-bottom: 15px">{{ title }}</h3>
      <p>{{ message }}</p>
      <a class="gradient-button red" @click="confirm">Видалити</a>
      <a class="gradient-button green" @click="cancel">Скасувати</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDelete",
  props: ["isVisible", "title", "message"],
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 20px;
    color: white;
    text-align: center;
  }
  .gradient-button {
    text-decoration: none;
    display: inline-block;
    color: white;
    padding: 15px 20px;
    margin: 10px 20px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-size: 200% auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    cursor: pointer;
  }
  .gradient-button:hover {
    background-position: right center;
  }
  .red {
    background-image: linear-gradient(
      to right,
      #ff7a7a 0%,
      #4830f0 51%,
      #9eefe1 100%
    );
  }
  .green {
    background-image: linear-gradient(
      to right,
      #65f959 0%,
      #4830f0 51%,
      #9eefe1 100%
    );
  }
}
</style>
