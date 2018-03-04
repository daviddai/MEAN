import { Component, OnInit } from '@angular/core';
import {ToggleService} from '../../services/toggle-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appName = 'MEAN';

  constructor(private toggleService: ToggleService) {}

  ngOnInit() {}

  toggleSideBar() {
    this.toggleService.announceToggle();
  }

}
