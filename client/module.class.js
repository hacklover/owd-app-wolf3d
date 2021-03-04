import {ModuleApp} from "@owd-client/core";

export default class WolfensteinModule extends ModuleApp {
  constructor(context) {
    super(context)
  }

  loadCommands({store}) {
    return {
      'wolf3d': function () {
        store.dispatch('core/window/windowOpen', 'WindowWolf3D');
      },
    }
  }
}