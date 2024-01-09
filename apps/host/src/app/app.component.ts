import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent, UiComponent } from '@angular-monorepo/ui';
import { UserService } from '@angular-monorepo/shared-data';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent, ButtonComponent],
  selector: 'angular-monorepo-root',
  template: `
    <ul class="remote-menu">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="cart">Cart</a></li>
      <li><a routerLink="product">Product</a></li>
    </ul>

    isLoggedIn: {{ isLoggedIn }}<br/>

    <angular-monorepo-button
      label="Login"
      (click)="simulateLogin()"
    ></angular-monorepo-button>

    <angular-monorepo-button
      label="Logout"
      (click)="simulateLogout()"
    ></angular-monorepo-button>

    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  get isLoggedIn(): boolean {
    return this.userService?.isLoggedIn;
  }
  constructor(private readonly userService: UserService) {
  }

  simulateLogin(): void {
    this.userService.login();
  }

  simulateLogout(): void {
    this.userService.logout();
  }
}
