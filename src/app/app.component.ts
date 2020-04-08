import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocket-test-app';

  newMessage = new FormControl('');
  websocketMessage=''
  
  sendMessage() {
    this.websocketMessage = 'received: "'+this.newMessage.value+'"';
  }
  
}
