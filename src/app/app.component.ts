import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy  {
  name = 'Angular Sandbox';
  subject = new Subject<boolean>();
  subscription: Subscription;
  value = false;
  

  ngOnInit(): void {
    this.subscription = this.subject.subscribe((data: boolean) => {
      this.value = data;
    });
  }

  toggleActivate(): void {
    this.value = !this.value;
    this.subject.next(this.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
