import { Component } from '@angular/core';
import { ProductsComponent } from '@angular-monorepo/products';

@Component({
  standalone: true,
  imports: [ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inventory';
}