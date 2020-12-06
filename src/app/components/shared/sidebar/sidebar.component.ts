import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  expandNav: boolean = false;
  
  @Output() navFlag:EventEmitter<boolean>;

  userName: string = "Hector Roa Castillo ASDASD";

  userEmail: string = "hroa.castillo@gmail.com";

  constructor(private router: Router) { 
    this.navFlag = new EventEmitter();
  }

  ngOnInit(): void {
    //console.log(document.querySelector('#nav-toggle'));
  }

  mostrarMenu = () => {
    const toggle = document.querySelector('#nav-toggle');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');
    
    toggle.classList.toggle('rotate');
    nav.parentElement.classList.toggle('show');
    
    if(nav.parentElement.classList.contains('show')) {
      this.expandNav = true;
    } else {
      this.expandNav = false;
    }

    body.classList.toggle('expander');

    this.navFlag.emit( this.expandNav );
  }

  logout() {
    localStorage.setItem('clientes', '');
    this.router.navigate(['/login']);
  }

}
