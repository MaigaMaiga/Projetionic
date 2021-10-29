import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';
import { ServicesService } from '../Nosservices/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private userId: any
  private nom: any
  private prenom: any
  private email: any
  private telephone: any

  constructor(
    private authService: ServicesService,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private navCrl: NavController
  ) {
    this.auth.authState.subscribe(
      (res)=>{
        this.userId = res.uid;
        this.db.list('Users/'+this.userId).valueChanges().subscribe(data =>{
          this.nom = data[1]
          this.prenom = data[3]
          this.email = data[0]
          this.telephone = data[4]
          console.log(data);
          
        })
      }
    )
   }

  ngOnInit() {
  }

}
