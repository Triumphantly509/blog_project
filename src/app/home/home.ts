import { Component } from '@angular/core';
import { BodyComponent } from '../body/body';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BodyComponent, FooterComponent, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent{

}
