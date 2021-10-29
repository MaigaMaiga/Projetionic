import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Nosservices/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public service : ServicesService) { }

  ngOnInit() {
  }

  createUser(data){
    this.service.createUser(data);
  }

}
