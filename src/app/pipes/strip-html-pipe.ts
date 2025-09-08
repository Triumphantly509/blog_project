import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: unknown): string {
    if (typeof value === 'string') {
      return value.replace(/<[^>]+>/g, '');
    }
    return ''; 
  }

}
