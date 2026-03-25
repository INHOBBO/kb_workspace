<template>
  <img :src="item.url" :alt="item.id" @click="onClick" />
</template>

<script>
export default {
  name: 'GalleryListItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('change-image', this.item);
    },
  },
};
</script>
