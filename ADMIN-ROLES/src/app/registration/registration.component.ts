import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('confirmpassword', {static: false}) confirmpassword: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;
  @ViewChild('uname', {static: false}) uname: ElementRef;
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('email', {static: false}) email: ElementRef;
  @ViewChild('actType', {static: false}) actType: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  register() {
    if(this.name.nativeElement.value.length <= 0 || this.email.nativeElement.value.length <= 0
      || this.password.nativeElement.value.length <= 0 || this.confirmpassword.nativeElement.value.length <= 0) {
      alert("Please fill all the mandatory fields");
    }
    else {
      if (this.password.nativeElement.value != this.confirmpassword.nativeElement.value) {
        alert("Password doesn't match");
      } else {
        localStorage.setItem("name", this.name.nativeElement.value);
        localStorage.setItem("password", this.password.nativeElement.value);
        localStorage.setItem("actType", this.actType.nativeElement.value),
        this.router.navigate(['/login']);
      }
    }
  }
}
