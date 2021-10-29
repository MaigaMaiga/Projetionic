import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private afAuto: AngularFireAuth,
    private afdb: AngularFireDatabase
  ) { }
  createUser(data: any) {
    this.afAuto.createUserWithEmailAndPassword(data.value.email, data.value.password).then(
      (result) => {
        this.afdb.object("Users/"+result.user.uid).set(data.value);
      }
    )
  
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuto.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.afAuto.currentUser) {
        this.afAuto.signOut()
          .then(() => {
            console.log("Sign out");
            resolve();
          }).catch(() => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuto.user
  }
}
