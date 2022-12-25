<template>
  <Transition>
  <div @click="hide" v-show="modalAttr.visible" style="display: block; background-color: rgba(0,0,0,.4);" tabindex="-1" class="modal fade show" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div @click.stop class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalAttr.modalTitle }}</h5>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hide">Закрыть</button>
          <button @click="$emit('modalMethod')" type="button" class="btn btn-primary">{{ modalAttr.buttonTitle }}</button>
        </div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script>
export default {
  name: "base-modal",
  props: {
    modalAttr:{
      id: String,
      modalTitle: String,
      buttonTitle: String,
      visible: Boolean,
      required: true,
    },
  },

  methods:{
    hide(){
      this.modalAttr.visible = false
    }
  },
}

</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>