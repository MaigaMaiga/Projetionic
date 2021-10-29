import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  public userListe: any;

  constructor(
    private afd: AngularFireDatabase) 
    { 
    this.afd.list("Users").valueChanges().subscribe(
      (result) => {
        this.userListe = result;

      }
    );
  }

  ngOnInit() {
  }

}
