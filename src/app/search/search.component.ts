import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [YoutubeService]
})

export class AppSearchComponent {
    public searchValue: String;
    public items: Array<any> = [];

    constructor(public youtube: YoutubeService) {
        this.searchValue = '';
    }

    public onKeyUp(): void {
        this.youtube.search(this.searchValue).subscribe((data) => {
            this.items = data.json().items;
        });
    }
}
