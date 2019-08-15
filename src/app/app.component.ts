import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My angular app';
  var1 = 10;
  var2 = 20;
  desabilitado = true;


  constructor()
  {
    setTimeout(() =>
    {
        this.desabilitado = false;
    }, 3000);
  }

  ejecutar()
  {
    alert("Ejecutando...");
  }
}
