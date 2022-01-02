<template>
  <ForkInTheRoad
    :options="[
      {
        text: 'Our system of health insurance sucks',
        route: 'InsuranceSucks-vue-route',
      },
      {
        text: 'Why does our health insurance needs fixing?',
        route: 'TheProblem-vue-route',
      },
    ]"
  >
    <p>
      Ya ya, I am doing fine, but you are getting distracted! This site is about
      my plan to fix our nation's health insurance!
    </p>
    <p>Pick one of the options:</p>
  </ForkInTheRoad>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForkInTheRoad from '../components/fork-in-the-road.vue';

export default defineComponent({
  name: 'HeyDavid',

  components: {
    ForkInTheRoad,
  },
});
</script>
