import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  //Let's add the credential to be filled automaticly
  //Speeds up the testing and also the teacher can have access easily
  credentials = {
    email: 'admin@email.com',
    password: 'admin'
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  //This here is the login logic we use
  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        //If ok we navigate to members path
        this.router.navigateByUrl('/members');
      } else {
        const alert = await this.alertCtrl.create({
          //Message if the credentials are wrong
          header: 'Login failed',
          message: 'Wrong email or password.',
          buttons: ['Ok']
        });
        await alert.present();
      }
    });
  }
}
