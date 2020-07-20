import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'challenge-tabs',
    templateUrl: './challenge-tabs.component.html',
    styleUrls: ['./challenge-tab.component.css']
})

export class ChallengeTabsComponent implements OnInit {

    constructor(private route: RouterExtensions, private activate: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.navigate([{
            outlets: {
                currentChallenge: ['current-challenge'], today: ['today']

            }

        }], {
            relativeTo: this.activate
        })

    }

}
