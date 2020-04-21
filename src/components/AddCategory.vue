<template>
  <div class="">
    <b-form @submit.prevent="onSendCategory">
      <b-form-group
        id="category-name-group"
        label="Category name:"
        label-for="category-name"
      >
        <b-form-input
          id="category-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter category name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="category-img-group"
        label="Your Name:"
        label-for="category-img">
        <b-form-input
          id="category-img"
          v-model="form.img"
          required
          placeholder="Enter category img link"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-img
          v-if="!!form.img.length"
          v-bind="{height: 120}"
          :src="form.img"
          rounded
          alt="Category img" />
      </b-form-group>

      <b-button type="submit" variant="primary">Add category</b-button>
    </b-form>
    <div class="my-3">
      <b-alert v-model="isSuccess" variant="success">{{ success }}</b-alert>
      <b-alert v-model="isError" variant="danger">{{ error }}</b-alert>
    </div>
  </div>
</template>

<script>
import {
  BForm, BFormGroup, BFormInput, BButton, BImg, BAlert,
} from 'bootstrap-vue';

export default {
  name: 'AddCategory',
  components: {
    BForm, BFormGroup, BFormInput, BButton, BImg, BAlert,
  },
  data() {
    return {
      form: {
        name: '',
        img: '',
      },
      isError: false,
      error: '',
      isSuccess: false,
      success: '',
    };
  },
  methods: {
    async onSendCategory() {
      try {
        const { data: { message } } = await this.$store.dispatch('addCategory', this.form);
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
  },
};
</script>
