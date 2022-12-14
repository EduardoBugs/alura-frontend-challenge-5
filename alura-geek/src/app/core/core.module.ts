import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { RequestInterceptor } from "./auth/request.interceptor";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SignupComponent } from './signup/signup.component';
import { SignupModule } from "./signup/signup.module";

@NgModule({ 
    declarations: [],
    exports: [
      HeaderComponent,
      FooterComponent,
      SignupComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        FooterModule,
        SignupModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }