import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public resume={
    nom:'MODOU',
    prenom:'GUEYE',
    email: 'doumogueye.mg@gmail.com',
    phone:'0629155960',
    contry: 'Maroc',
    statut:'Angular - FullStack - developper',
    adresse:'casablanca Maroc , Sidi Marouf Quartier Mostakbal',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
