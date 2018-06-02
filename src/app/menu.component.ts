
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class TestComponent {
  
  bulean: boolean = true;
  test: string;
  petNames: string[] = ['buddy', 'rex', 'fido', 'princess'];

  constructor(private router: Router){}

  redirectVoice(event) {
    this.router.navigate(['/manual']);
    event.preventDefault()
  };

  redirectManual(event){
    this.router.navigate(['/manualControls']);
    event.preventDefault()
  }
  redirectPlan(event){
    this.router.navigate(['/plan']);
    event.preventDefault()
  }
}

