import { Component, OnInit, Output , Input} from '@angular/core';
import { JwtService } from '../../Services/jwt.service';
import { User } from 'src/app/Interfaces/User';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() userLoggedIn: boolean;
  @Input() userName: string;
  isNavbarCollapsed = true;
  user: User;
  userAuthenticated: boolean;
  constructor(
    private auth: JwtService,
    private route: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit() {

    this.setUser();

  }

  setUser() {
    console.log('set user called');
    console.log(this.userLoggedIn);
    if (this.userLoggedIn) {
      console.log(this.auth.user);
      this.userAuthenticated = this.auth.loggedIn;
      this.user = this.auth.user;
    } else {
      this.userAuthenticated = false;
      this.user = null;

    }
  }
  logOut() {
    this.auth.logout();
    this.router.navigate(['/']);

  }
}
