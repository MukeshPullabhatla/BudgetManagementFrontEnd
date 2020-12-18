import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {DataService} from './data.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.title = 'Budget Management';

    // Initializing all the required Cookies.
    if (this.userService.getUserDetails().length <= 0) {
      // this.userService.storeOnLocalStorage(['', 'false', '']);
    }
  }


}
