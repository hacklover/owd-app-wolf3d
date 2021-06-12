<template>
  <WindowIframe>
    <template v-slot:nav-prepend>
      <v-btn>
        <v-icon>mdi-information-variant</v-icon>
        <a href="https://en.wikipedia.org/wiki/Wolfenstein_3D" target="_blank" className="text-grey" />
      </v-btn>
    </template>
  </WindowIframe>
</template>

<script setup>
import WindowIframe from "@owd-client/core/src/components/window/app/WindowAppIframe.vue"
</script>