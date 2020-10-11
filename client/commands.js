export default ({ store }) => {
  return {
    'wolf3d': function () {
      store.dispatch('core/windows/windowOpen', 'WindowWolf3D');
    },
  }
}
