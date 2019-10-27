import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }

}
