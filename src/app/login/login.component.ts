import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isInvalid: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === "test" && this.password === "test") {
      this.isInvalid = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.isInvalid = true;
    }
    console.log(this.username)
  }
}
