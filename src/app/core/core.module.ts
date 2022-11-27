import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterseptorService } from "./interseptors/token-interseptor.service";
import { NgModule, Optional, SkipSelf } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterseptorService,
            multi: true,
        }
    ],
    exports: [],
    declarations: [
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded.Import only in AppModule")
        }
    }
}