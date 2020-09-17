import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options) {
    super($root, options.listeners);
  }
  // Возвращает шабло компонента
  toHtml() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
