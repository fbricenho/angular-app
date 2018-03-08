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

    /*
     * function onKeyUp
     * @author: fbricenho
     */
    public onKeyUp(): void {
        // TODO:Bounce on keyPress
        this.youtube.search(this.searchValue).subscribe((data) => {
            this.items = data.json().items;
        });
    }
}
