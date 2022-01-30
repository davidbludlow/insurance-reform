<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mb-4">
        <slot></slot>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn
            v-for="(option, i) in options"
            :key="i"
            :to="option.route ? { name: option.route } : option.to"
            color="primary"
            class="ma-4"
          >
            {{ option.text }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { PropType } from 'vue';

type ForkOption = { text: string; route?: string };

export default {
  name: 'ForkInTheRoad',
  props: { options: { type: Array as PropType<ForkOption[]>, required: true } },
};
</script>

<style scoped lang="scss">
::v-slotted(p) {
  margin-bottom: 1em;
}
</style>
