import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ToggleService {

  constructor() { }

  private toggleAnnouncedSource = new Subject();

  toggleAnnounced$ = this.toggleAnnouncedSource.asObservable();

  announceToggle() {
    this.toggleAnnouncedSource.next();
  }

}
