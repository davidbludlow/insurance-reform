<template>
  <ForkInTheRoad :options="[]">
    <p>bla</p>
  </ForkInTheRoad>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForkInTheRoad from '../components/fork-in-the-road.vue';

export default defineComponent({
  name: 'InsuranceSucks',

  components: {
    ForkInTheRoad,
  },
});
</script>
