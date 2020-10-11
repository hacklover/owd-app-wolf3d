<template>
  <WindowIframe :data="data" @iframeLoaded="iframeFocus" />
</template>

<script>
  import WindowIframe from "~/core/components/window/iframe/WindowIframe";

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
        document.getElementsByTagName('iframe')[0].focus()
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