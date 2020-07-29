import { Controller } from '@nestjs/common';
import { LayoutService } from './layout.service';

export class LayoutController {
  protected service: LayoutService;

  private data: any;

  assgin(name?: string | object, value?: object) {
    const menus = this.service.getMenu();
    const setting = this.service.getSetting();

    if (typeof name === 'object') {
      return { ...name, menus, setting };
    }

    if (name && value) {
      return { [name]: value, menus, setting };
    }

    return { menus, setting };
  }
}
