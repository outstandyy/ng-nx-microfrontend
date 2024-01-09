import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@angular-monorepo/ui';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    My cart remote app

    <angular-monorepo-button label="Hello cart"></angular-monorepo-button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
