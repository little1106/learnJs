import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
    @Input() hero: Hero;
    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location){};


}

