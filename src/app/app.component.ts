import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LoginEvent} from './events/login-event';
import {LoginApp} from './login/app/login';
import {Sha1} from './login/sha1/sha1';
import {Sync} from './shared/services/sync/sync';
import {FinanceApi} from './shared/services/api/finance-api';
import {UserRepository} from './shared/services/repository/user-repository';
import {BackupService} from './shared/services/backup/backup.service';
import {CsvCreatorService} from './shared/services/backup/csv/csv-creator.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [Sha1, Sync, FinanceApi, LoginApp, LoginEvent, BackupService, CsvCreatorService]
})
export class AppComponent implements OnInit {
  isLogged: boolean;
  title: 'Financeiro';
  private userRepository: UserRepository;
  private loginApp: LoginApp;
  private router: Router;
  private backupService: BackupService;
  private sync: Sync;

  constructor(repository: UserRepository, loginEvent: LoginEvent, loginApp: LoginApp,
    router: Router, backupService: BackupService, sync: Sync) {
    this.userRepository = repository;
    this.loginApp = loginApp;
    this.router = router;
    this.backupService = backupService;
    this.sync = sync;

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

  download() {
    let user = this.userRepository.getUser();
    this.sync.getAllDataFromServer(user, () => {}, () => {});
  }

  export() {
    let csvData = this.backupService.generate();
    let blob = new Blob([csvData], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
