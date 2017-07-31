import { Component, Input } from '@angular/core';
import { Table } from './model/table';
import { Router } from '@angular/router';

@Component({
    selector: 'my-tables',
    template: `
    <h2>My Tables</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.id}}</span>
    <span>{{hero.name}}</span>
    <button class="delete" (click)="delete(hero); $event.stopPropagation()">x</button>
  </li>
</ul>
<div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
<div>
  <label>Hero name:</label> <input #heroName />
  <button (click)="add(heroName.value); heroName.value=''">
    Add
  </button>
</div>
  `,
  styles: [`.search-result{
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width:195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
}.search-result:hover {
  color: #eee;
  background-color: #607D8B;
}
#search-box{
  width: 200px;
  height: 20px;
}
`]
})
export class TablesComponent {
  constructor(private router: Router) { }

gotoDetail(): void {
    // this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
