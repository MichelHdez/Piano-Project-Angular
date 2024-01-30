import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Piano';
  aplicarSonido(numero:number): void{
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  }
}
