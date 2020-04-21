<template>
  <div class="category-page">
    <h1>You can create new category here...</h1>
    <AddCategory />
    <CategoryList />
  </div>
</template>

<script>
import AddCategory from '@/components/AddCategory.vue';
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'Category',
  components: {
    AddCategory, CategoryList,
  },
};
</script>
