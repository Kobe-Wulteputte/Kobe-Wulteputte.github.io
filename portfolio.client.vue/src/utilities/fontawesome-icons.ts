import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faStrava,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Register all used icons
library.add(faUser);
library.add(faFlag);
library.add(faInstagram);
library.add(faStrava);
library.add(faLinkedin);

export default FontAwesomeIcon;
