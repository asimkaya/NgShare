import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private socialAuthService: SocialAuthService,private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user);
  }
  logout() {
    this.socialAuthService.signOut();
    return this.router.navigate(['login']);
  }
}
