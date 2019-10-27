import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }

}
