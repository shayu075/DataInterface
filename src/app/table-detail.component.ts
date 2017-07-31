import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
// import { HeroService } from './hero.service';
import { Table } from './model/table';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'table-detail',
  template: `

  `,

})
export class TableDetailComponent implements OnInit {
  constructor(
    // private heroService: HeroService,
    private route: ActivatedRoute,
    // private location: Location
  ) { }
  // @Input() table: Table;

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);
  }

  // save(): void {
  //   // this.heroService.update(this.hero)
  //   //   .then(() => this.goBack());
  // }

  // goBack(): void {
  //   // this.location.back();
  // }
}
