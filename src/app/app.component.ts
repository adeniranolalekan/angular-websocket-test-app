import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WebsocketService } from './websocket.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocket-test-app';
  status="";
  newMessage = new FormControl('');
  websocketMessage=''
  wsSubscription:Subscription
  constructor(private websocketService:WebsocketService){
    this.wsSubscription =
      this.websocketService.createObservableSocket("ws://localhost:8085")
       .subscribe(
        data => this.websocketMessage = data,
         err => console.log( 'err'),
        () =>  console.log( 'The observable stream is complete')
      );
  }
  sendMessage() {
    this.status=this.websocketService.sendMessage(this.newMessage.value)
  }

  closeSocket(){
    this.wsSubscription.unsubscribe
    this.status="conection closed"
  }
  
}
