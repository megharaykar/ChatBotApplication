import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
      }
  transform(url) {
    var link ="https://www.youtube.com/embed/"+url.substring(16)
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

}