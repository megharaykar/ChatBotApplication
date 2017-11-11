import { Component, OnInit, OnDestroy, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { DirectLine, ConnectionStatus } from 'botframework-directlinejs';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  private message = "";
  private messages = [];
  private directLine;
  private backend = "http://localhost:3000/upload";
  private displayWindow = false;
  private secret = "";
  private intruderMessage = "";
    private context;
  constructor(private http: Http) {

  }
  // adding a comment just to trigger buil
  send() {
    this.messages.push({ "text": this.message, "from": { name: "user" } });
    console.log(this.message);
    console.log("posting to backend");
    this.http.post(this.backend,
      {
        "input": {
          "text": this.message
        },
        "context": this.context
      }).subscribe(
      (data) => {
        console.log(data);
        var packet = JSON.parse(data["_body"]);
        this.messages.push({
          "text":packet.text,
          "img":packet.img,
          "from":{name:"watson"}
        });
        this.context = packet.context;
        console.log("current_context",this.context);
      },
      (err) => console.log(err)
      )
    this.message = "";
  }
  ngOnInit() {
    this.scrollToBottom();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
