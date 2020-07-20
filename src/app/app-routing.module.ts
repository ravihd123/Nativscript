import { NgModule, Component } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/Today/today.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { combineLatest } from "rxjs";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { ChallengeTabsComponent } from "./challenges/challange-tabs/challenge-tab.component";

const routes: Routes = [
    { path: "", component: AuthComponent },

    { path: 'challenge-edit', component: ChallengeEditComponent },
    {
        path: 'challenge-tabs', component: ChallengeTabsComponent, children: [
            { path: 'today', component: TodayComponent, outlet: 'today' },
            { path: 'current-challenge', component: CurrentChallengeComponent, outlet: 'currentChallenge' },
        ]
    }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
