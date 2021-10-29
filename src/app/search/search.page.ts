import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public userListe: any;
  public liste: any;

  constructor(private afs: AngularFireDatabase) {
    this.afs.list("Users").valueChanges().subscribe(
      (result) => {
        this.userListe = result;
      }
    );
   }

  ngOnInit() {
  }

}
