import { Component, Input } from '@angular/core';
import { navItems } from './navItems';

@Component({
  selector: 'app-container-nav',
  templateUrl: './container-nav.component.html'
})
export class ContainerNavComponent {
  protected navItems = new Array();
  protected navCollapsed = false;

  @Input() currentRoute: string = "";

  constructor() {
    this.navItems = navItems
  }

}
