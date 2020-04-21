<template>
  <div class="category-list">
    <h2>Created categories: </h2>
    <b-table striped hover :items="categories" :fields="fields"></b-table>
  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue';

export default {
  name: 'CategoryList',
  components: {
    BTable,
  },
  data() {
    return {
      fields: ['name', 'img'],
    };
  },
  beforeMount() {
    this.$store.dispatch('getCategories');
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>

<style lang="css" scoped>
  .category-list {
    margin-top: 50px;
  }
</style>
