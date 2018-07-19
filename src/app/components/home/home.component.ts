import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    channelInfo: any;
    channelSubscription: Subscription;

    constructor(private electron: ElectronService, private data: DataService) { }

    ngOnInit() {
        this.channel('UCBJycsmduvYEL83R_U4JriQ,UCZGYJFUizSax-yElQaFDp5Q,UCE_M8A5yxnLfW0KghEeajjw');
    }

    closeWindow() {
        this.electron.window.close();
    }

    minimizeWindow() {
        this.electron.window.minimize();
    }

    channel(name) {
        if (this.channelSubscription) {
            this.channelSubscription.unsubscribe();
        }
        this.channelSubscription = this.data.getStats(name).subscribe((res) => {
            this.channelInfo = res;
        });
    }
}
