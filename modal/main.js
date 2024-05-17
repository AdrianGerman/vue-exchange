Vue.component("modal", {
  props: ["title"],
  methods: {
    close() {
      this.$emit("close");
    }
  },
  template: `
    <div class="modal-mask" :class="{ show: true }">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>{{ title }}</h3>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button v-on:click="close">Cerrar</button>
          </div>
        </div>
      </div>
    </div>`
});

new Vue({
  el: "#app",
  data() {
    return {
      title: "Titulo del modal",
      showModal: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
});
