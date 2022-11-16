<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalAttr.modalTitle }}</h5>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
          <button @click="$emit('modalMethod')" type="button" class="btn btn-primary">{{ modalAttr.buttonTitle }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-modal",
  props: {
    modalAttr:{
      id: String,
      modalTitle: String,
      buttonTitle: String,
      required: true,
    },
  },

  methods:{
  }
}
</script>

<style scoped>

</style>