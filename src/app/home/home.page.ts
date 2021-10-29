import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ServicesService } from '../Nosservices/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export default class HomePage {

  constructor(
    private router: Router,
    private afa: AngularFireAuth,
    private serv: ServicesService
    ) {}
    public connecterUser(value){
      console.log("details",value);
      this.afa.signInWithEmailAndPassword(value.email, value.password)
      .then((result)=>{
        if(result){
          this.router.navigateByUrl('/acceuil');
        }
        else(error)=>{
          console.log(error);
        }
      
      }
        );
    }

   
}
