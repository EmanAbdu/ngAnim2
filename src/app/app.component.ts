import { Component } from '@angular/core';
import { trigger, style, state, transition, query, stagger, animate, keyframes, group } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('bannerAnimation', [
      transition(":increment", group([
        query(':enter', [
          style({ left: '100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '-100%' }))
        ])
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({ left: '-100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '100%' }))
        ])
      ]))
    ])
  ]


})
export class AppComponent {
  allBanners: string[] = ['1', '2', '3', '4'];
  selectedIndex: number = 0;
 
  get banners() {
     return [this.allBanners[this.selectedIndex]];
  }
 
  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
  }
 
  next() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this.allBanners.length - 1);
  }
}
