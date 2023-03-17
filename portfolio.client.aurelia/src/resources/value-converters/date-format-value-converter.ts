import {format} from "date-fns";

export class DateFormatValueConverter {
  toView(value) {
    return format(value, "dd/MM/yy");
  }

  fromView(value) {
    //
  }
}
