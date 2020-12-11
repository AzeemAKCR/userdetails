import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonPanelComponent } from '../Components/Initial Components/common-panel/common-panel.component';
import { MenuComponent } from '../Components/Pages/menu/menu.component';
import { PostComponent } from '../Components/Pages/post/post.component';
import { UserComponent } from '../Components/Pages/user/user.component';



const routings: Routes = [

{ path : 'home', component: CommonPanelComponent,children: [
    { path : 'user', component: UserComponent},
    { path : 'post', component: PostComponent}
]},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routings)],
    exports: [RouterModule],
    entryComponents: []
})

export class InitialRouting { }

export const InitialRoutingComponents = [
    CommonPanelComponent, MenuComponent
];