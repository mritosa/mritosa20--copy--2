import { Component } from '@angular/core';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss'] 
})
export class NavigacijaComponent {

  putanja = 'pocetna';
  prebaciNa(putanja: string) {
    this.putanja = putanja;
    
  }
}
