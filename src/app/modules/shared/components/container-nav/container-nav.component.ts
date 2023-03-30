import { Component, Input } from '@angular/core';
import { navItems } from './navItems';

@Component({
  selector: 'app-container-nav',
  templateUrl: './container-nav.component.html'
})
export class ContainerNavComponent {
  protected navItems = navItems;
  protected navCollapsed = false;

  @Input() currentRoute: string = "";

}
