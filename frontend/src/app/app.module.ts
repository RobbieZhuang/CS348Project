import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputformComponent } from './inputform/inputform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { CoursePathComponent } from './degreeReq/degreeReq.component';
import { FindCourseComponent } from './find-course/find-course.component';
import { FormatCourseCodeDirective } from './directives/format-course-code.directive';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TerminfotableComponent } from './terminfotable/terminfotable.component';

@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    HomepageComponent,
    CoursePathComponent,
    FindCourseComponent,
    FormatCourseCodeDirective,
    NavbarComponent,
    TerminfotableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
