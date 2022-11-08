import {Injectable} from '@angular/core';

export interface ICustomWindow extends Window {
  //__custom_global_stuff : string;
  [__custom_global_stuff: string]: any
}

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  get nativeWindow() : ICustomWindow {
    return getWindow();
  }

}
