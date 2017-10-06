import { Component } from '@angular/core';

export class Hero{
  id:number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name: '蠃鱼'},
  {id: 12, name: '孰湖'},
  {id: 13, name: '穷奇'},
  {id: 14, name: '驳'},
  {id: 15, name: '冉遗鱼'},
  {id: 16, name: '鵸鵌'},
  {id: 17, name: '讙'},
  {id: 18, name: '帝江'},
  {id: 19, name: '天狗'},
  {id: 20, name: '毕方'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes = HEROES;
}
