import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterseptorService } from "./interseptors/token-interseptor.service";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { LoadingInterseptorService } from "./interseptors/loading-interseptor.service";
import { ErrorInterseptorService } from "./interseptors/error-interseptor.service";


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
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterseptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterseptorService,
            multi: true
        }
    ],
    exports: [HttpClientModule],
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