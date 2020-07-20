import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent {
    constructor(private route: RouterExtensions) {

    }
    onSignIn() {
        this.route.navigate(['/challenge-tabs'], {
            clearHistory: true
        })
    }
}
