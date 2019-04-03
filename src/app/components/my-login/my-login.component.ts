import { Component, OnInit } from '@angular/core';
import { OcInfraModule, ResourceService } from '@diaas/ux-web';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss']
})
export class MyLoginComponent implements OnInit {
  username:"agent@csc.com"
  password:"agent"

  constructor() { 
    
  }
  

  ngOnInit() {
  }
  playerName: string;
onSubmit() {
  console.log(this.playerName);
}
  
  private focusoutHandler(refVar) {
    console.log(refVar);
}      
  handleClick(event: Event) {
    
  }

}
