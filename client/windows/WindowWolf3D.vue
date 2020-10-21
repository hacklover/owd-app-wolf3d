<template>
  <WindowIframe :data="data" @iframeLoaded="iframeFocus" />
</template>

<script>
  import WindowIframe from "@owd-client/core/src/components/window/iframe/WindowIframe";

  export default {
    name: "WindowWolf3D",
    components: {
      WindowIframe
    },
    props: {
      data: Object
    },
    methods: {
      iframeFocus() {
        document.getElementById(this.data.module.name+'-iframe').focus()
      }
    },
    mounted() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'core/windows/SET_WINDOW_FOCUSES') {
          if (this.$store.getters['core/windows/windowFocused'] === this.data.uniqueID) {
            this.iframeFocus()
          }
        }
      })
    }
  }
</script>