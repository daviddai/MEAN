import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../shared/toggle-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  display: string;

  constructor(private toggleService: ToggleService) {
    this.toggleService.toggleAnnounced$.subscribe(
      () => {
        this.toggleSideBar();
      }
    );
  }

  ngOnInit() {
    this.display = SideBarDisplayStyle.None;
  }

  toggleSideBar() {
    if (this.display === SideBarDisplayStyle.None) {
      this.display = SideBarDisplayStyle.Block;
    } else {
      this.display = SideBarDisplayStyle.None;
    }
  }

}

enum SideBarDisplayStyle {
  None = 'none',
  Block = 'block'
}
