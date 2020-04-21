<template>
  <div>
    <h1>You can create new product here...</h1>
    <AddProduct />
    <ProductsList />
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import ProductsList from '@/components/ProductsList.vue';

export default {
  name: 'Product',
  components: {
    AddProduct, ProductsList,
  },
};
</script>

<style scoped>

</style>
