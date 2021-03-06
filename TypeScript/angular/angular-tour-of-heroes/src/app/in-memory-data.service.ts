import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
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
        return {heroes};
    }
}