import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMaterialModules } from './Modules/angularMaterialModules';
import { InitialRoutingComponents, InitialRouting } from './Modules/initialRouting';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UserComponent } from './Components/Pages/user/user.component';
import { PostComponent } from './Components/Pages/post/post.component';
const config: SocketIoConfig = { url: 'http://64.202.184.96:5555', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    InitialRoutingComponents,
    UserComponent,
    PostComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InitialRouting,
    AngularMaterialModules,
    HttpClientModule,
     SocketIoModule.forRoot(config),
    
  ],
  exports: [],
  providers: [],
 
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
