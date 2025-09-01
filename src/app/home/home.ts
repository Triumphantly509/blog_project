import { Component } from '@angular/core';
import { BodyComponent } from '../body/body';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Header, BodyComponent, Footer, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
