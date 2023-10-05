import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showDropdown: boolean = false;


  constructor(private router: Router) { }

  GoToHomePage(){
    this.router.navigate(['']);
  }
  


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  clickedOutside(){
    this.showDropdown = false;

  }

}
