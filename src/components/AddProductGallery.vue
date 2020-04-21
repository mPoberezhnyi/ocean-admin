<template>
  <div>
    <b-row>
      <b-col>
        <b-form-group
          :id="`gallery-group-${index}`"
          label="Gallery item:"
          :label-for="`gallery-item-${index}`"
        >
          <b-form-input
            :id="`gallery-item-${index}`"
            v-model="img"
            type="text"
            placeholder="Enter gallery item link"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-img
          v-if="!!img.length"
          v-bind="{height: 60}"
          :src="img"
          rounded
          :alt="`Gallery item ${index}`" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BImg,
} from 'bootstrap-vue';

export default {
  name: 'AddProductGallery',
  components: {
    BRow, BCol, BFormGroup, BFormInput, BImg,
  },
  props: {
    img: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>
