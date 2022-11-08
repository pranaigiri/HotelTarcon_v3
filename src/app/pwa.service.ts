import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class PwaService {
    private promptEvent: any;

    constructor( @Inject(PLATFORM_ID) private platformId: string) {
        if (isPlatformBrowser(this.platformId)) {
            window.addEventListener('beforeinstallprompt', (event) => {
                this.promptEvent = event;
                event.preventDefault();
            });
        }
    }

    prompt() {
        this.promptEvent.prompt();
    }
}
