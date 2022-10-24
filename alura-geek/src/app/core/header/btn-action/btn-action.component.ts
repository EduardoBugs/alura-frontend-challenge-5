import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss'],
})
export class BtnActionComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  get isLogged() {
    return this.userService.isLogged();
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }

  adminPage() {
    this.router.navigate(['products','add']);
  }
}
