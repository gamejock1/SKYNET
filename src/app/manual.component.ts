
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { manualService } from './services/manual.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css'],
  providers: [manualService]
})



export class manualComponent {

  constructor(private manualService: manualService) {}

  turnLeft() {
    this.manualService.turnLeft()
    .then(response => {
      console.log(response)
    })
  }

  getCommandString(value : HTMLDivElement){
    console.log("chat value: " + value.innerHTML)
  }


}

