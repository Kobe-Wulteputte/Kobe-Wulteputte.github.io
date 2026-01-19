import type { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faGlobe,
  
} from '@fortawesome/free-solid-svg-icons';

export const registerFontawesomeComponent = (app: App): void => {
  library.add(
    faGlobe,
  );
  app.component('FontAwesomeIcon', FontAwesomeIcon);
};
