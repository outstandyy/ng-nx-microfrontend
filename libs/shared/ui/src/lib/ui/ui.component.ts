import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'angular-monorepo-ui',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
})
export class UiComponent {}
