import { Component, OnInit, HostListener, Output, EventEmitter ,  ViewChild  } from '@angular/core';
import { TimeQComponent } from '../time-q/time-q.component';

@Component({
  selector: 'app-key-count-l',
  templateUrl: './key-count-l.component.html',
  styleUrls: ['./key-count-l.component.css']
})
export class KeyCountLComponent implements OnInit {
  value = 0;
  firstTime = false;

  @Output() messageEvent = new EventEmitter<number>();
  @ViewChild('counter', {read: TimeQComponent})
  private counter: TimeQComponent;

  counterState = 'counter is ticking';
  running = false;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 37) {
      if(this.firstTime) {
        console.log('start timer');
        this.firstTime = false;
        this.running = true;
        this.counter.start();
      }

      this.increment();
    }



  }

  increment() {
    if(this.running) {
    this.value++;
    }
    this.messageEvent.emit(this.value);
  }


  constructor() { this.firstTime = true; }

  ngOnInit() {
    this.counter.startAt = 15;
    this.counter.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        this.counterState = 'counter has stopped';
        this.running = false;
      }
    });



  }

}
