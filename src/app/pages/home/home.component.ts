import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomesecComponent } from '../../components/homesec/homesec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomesecComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
