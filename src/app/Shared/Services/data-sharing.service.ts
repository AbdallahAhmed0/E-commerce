import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private isVisible = new BehaviorSubject<boolean>(false);

  public toggle(): void {
    this.isVisible.next(!this.isVisible.value);
  }

  public getVisibility(): BehaviorSubject<boolean> {
    return this.isVisible;
  }
}
