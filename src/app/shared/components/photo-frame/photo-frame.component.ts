import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: [
    './photo-frame.component.scss'
  ]
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;

  @Output() liked: EventEmitter<void> = new EventEmitter();

  private debounceSubject: Subject<void> = new Subject<void>();
  private unsubscribre: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(
        debounceTime(1000),
      )
      .pipe(
        // metodo para se desenscrever
        takeUntil(this.unsubscribre)
      )
      .subscribe(() => this.liked.emit());
  }

  ngOnDestroy(): void {
    this.unsubscribre.next();
    this.unsubscribre.complete();
  }

  like(): void {
    // ira disparar o evento apenas 1000s
    this.debounceSubject.next();
  }
}
