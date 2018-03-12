import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContactComponent } from './components/contact/contact.component';
import { GlobalComponent } from './components/global/global.component';
import { ChatComponent } from './components/chat/chat.component';
import { MyAngularAppComponent } from './components/my-angular-app/my-angular-app.component';
import { MyReactAppComponent } from './components/my-react-app/my-react-app.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    ProjectsComponent,
    HeaderComponent,
    SliderComponent,
    ContactComponent,
    GlobalComponent,
    ChatComponent,
    MyAngularAppComponent,
    MyReactAppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
