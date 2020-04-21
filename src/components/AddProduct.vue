<template>
  <div>
    <b-form @submit.prevent="onSendProduct">
      <b-form-group
        id="product-name-group"
        label="Product name:"
        label-for="product-name"
      >
        <b-form-input
          id="product-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter product name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Select categories:">
        <b-form-checkbox-group
          id="categories-group"
          v-model="form.categories"
          :options="categoriesList"
          name="categories"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-row
        v-for="(img, index) in form.gallery"
        :key="index">
        <b-col>
          <b-form-group
            :id="`gallery-group-${index}`"
            label="Gallery item:"
            :label-for="`gallery-item-${index}`"
          >
            <b-form-input
              :id="`gallery-item-${index}`"
              v-model="form.gallery[index]"
              type="text"
              placeholder="Enter gallery item link"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-img
            v-if="!!img.length"
            v-bind="{height: 60}"
            :src="form.gallery[index]"
            rounded
            :alt="`Gallery item ${index}`" />
        </b-col>
      </b-row>

      <b-form-group>
        <b-button
          block
          variant="outline-primary"
          @click="addNewGalleryItem">
          Add new image
        </b-button>
      </b-form-group>

      <b-row>
        <b-col>
          <b-form-group
            id="regular-price-group"
            label="Regular price:"
            label-for="regular-price"
          >
            <b-form-input
              id="regular-price"
              v-model="form.price.regular"
              type="number"
              placeholder="Enter regular price"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="sale-price-group"
            label="sale price:"
            label-for="sale-price"
          >
            <b-form-input
              id="sale-price"
              v-model="form.price.sale"
              type="number"
              placeholder="Enter sale price"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group
        label="Product description"
        label-for="product-description"
      >
        <b-form-textarea
          id="product-description"
          v-model="form.description"
          placeholder="Enter product description"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Select available sizes:">
        <b-form-checkbox-group
          id="sizes-group-1"
          v-model="form.availableSizes"
          :options="sizes"
          name="sizes"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Add product</b-button>
    </b-form>
    <div class="my-3">
      <b-alert v-model="isSuccess" variant="success">{{ success }}</b-alert>
      <b-alert v-model="isError" variant="danger">{{ error }}</b-alert>
    </div>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BImg,
  BButton,
  BAlert,
  BFormCheckboxGroup,
  BFormTextarea,
} from 'bootstrap-vue';

export default {
  name: 'AddProduct',
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BImg,
    BButton,
    BAlert,
    BFormCheckboxGroup,
    BFormTextarea,
  },
  data() {
    return {
      form: {
        name: '',
        gallery: [''],
        categories: [],
        price: {
          regular: 0,
          sale: 0,
        },
        description: '',
        availableSizes: [],
      },
      sizes: ['xs', 's', 'l', 'xl', 'xxl'],
      isError: false,
      error: '',
      isSuccess: false,
      success: '',
    };
  },
  beforeMount() {
    this.$store.dispatch('getCategories');
  },
  computed: {
    categoriesList() {
      return this.$store.getters.categories.map(({ _id, name }) => ({
        text: name,
        value: _id,
      }));
    },
  },
  methods: {
    async onSendProduct() {
      try {
        const { data: { message } } = await this.$store.dispatch('addProduct', this.form);
        this.success = message;
        this.isSuccess = true;
        this.form.name = '';
        this.form.img = '';
        setTimeout(() => {
          this.isSuccess = false;
          this.success = '';
        }, 1500);
      } catch ({ message }) {
        this.error = message;
      }
    },
    addNewGalleryItem() {
      this.form.gallery = [...this.form.gallery, ''];
    },
  },
};
</script>
