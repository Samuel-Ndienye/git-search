import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserserviceService } from './userservice.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { UsersComponent } from './users/users.component';
import { ReopsitoriesComponent } from './reopsitories/reopsitories.component';
import { DatePipePipe } from './date-pipe.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    SearchFormComponent,
    UsersComponent,
    ReopsitoriesComponent,
    DatePipePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
