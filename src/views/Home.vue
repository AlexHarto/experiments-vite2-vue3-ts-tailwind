<template>
  <div class="h-full p-4 text-center">
    <div id="map" class="map">
      <p>Please enter an address!</p>
    </div>
    <form @submit.prevent="searchAddressHandler">
      <input type="text" v-model="address" placeholder="Enter an address" class="address-input">
      <button type="submit" class="address-button" style="outline:none;">SEARCH ADDRESS</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const address = ref('');

    const searchAddressHandler = (event: Event) => {

    }

    return {
      address,
      searchAddressHandler,
    };
  },
});
</script>

<style scoped>
.map {
  @apply flex items-center justify-center mb-4 text-center border border-gray-300 h-5/6;
}
.address-input {
  @apply p-2 my-2 border rounded-md shadow-inner outline-none focus:ring-2 ring-gray-300;
}
.address-button {
  @apply px-3 py-2 ml-4 text-white bg-gray-600 rounded-md focus:ring-2 ring-gray-600;
}
</style>
