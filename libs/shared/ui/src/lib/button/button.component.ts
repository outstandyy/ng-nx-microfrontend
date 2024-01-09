import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button>{{ label }}</button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'default label';
}
