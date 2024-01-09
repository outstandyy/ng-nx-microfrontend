import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@angular-monorepo/ui';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, ButtonComponent],
  selector: 'angular-monorepo-cart-entry',
  template: `<angular-monorepo-nx-welcome></angular-monorepo-nx-welcome>`,
})
export class RemoteEntryComponent {}
