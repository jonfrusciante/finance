import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LoginEvent} from './events/login-event';
import {LoginApp} from './login/app/login';
import {Sha1} from './login/sha1/sha1';
import {Sync} from './services/sync/sync';
import {FinanceApi} from './services/api/finance-api';
import {UserRepository} from './services/repository/user-repository';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [Sha1, Sync, FinanceApi, LoginApp, LoginEvent]
})
export class AppComponent implements OnInit {
  isLogged: boolean;
  title: 'Financeiro';
  private userRepository: UserRepository;
  private loginApp: LoginApp;
  private router: Router;

  constructor(repository: UserRepository, loginEvent: LoginEvent, loginApp: LoginApp, router: Router)  {
    this.userRepository = repository;
    this.loginApp = loginApp;
    this.router = router;

    loginEvent.logginAnnouced$.subscribe(
      user => {
        this.isLogged = this.userRepository.isLogged();
      });
  }

  ngOnInit() {
    this.isLogged = this.userRepository.isLogged();
  }

  logout() {
    this.loginApp.logout();
    this.router.navigate(['/login']);
  }
}
