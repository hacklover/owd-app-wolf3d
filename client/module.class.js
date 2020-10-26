import {Module} from "@owd-client/core";

export default class WolfensteinModule extends Module {
  constructor(context) {
    super(context)
  }

  loadCommands({store}) {
    return {
      'wolf3d': function () {
        store.dispatch('core/windows/windowOpen', 'WindowWolf3D');
      },
    }
  }
}