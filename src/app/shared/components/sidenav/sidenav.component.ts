import { Component, OnDestroy } from '@angular/core';
import { NavItem } from '@core/models/nav-item.model';
import { filter, map, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { menu } from "@core/data/menu";
// import { websiteTitle } from "@/constants";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent implements OnDestroy {
  public opened = true;
  private mediaWatcher: Subscription;
  public menu: NavItem[] = menu;

  constructor(
    private media: MediaObserver,
    private router: Router
  ) {
    this.mediaWatcher = this.media.asObservable().pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
    )
      .subscribe((mediaChange: MediaChange) => {
        this.handleMediaChange(mediaChange);
      });
  }

  private handleMediaChange(mediaChange: MediaChange): void {
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

  signout() {
    this.router.navigate(['/login']);
  }

  // protected readonly websiteTitle = websiteTitle;
  protected readonly websiteTitle = "MyRoomsAdministrator";
}
