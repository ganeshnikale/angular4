import { Pipe, PipeTransform } from '@angular/core';
import { ILatLong } from './products/ILatLong';

@Pipe({
  name: 'filtercity'
})

  export class FiltercityPipe implements PipeTransform {
    transform(items: any[], queryString: string): any[] {
      if(!items) return [];
      if(!queryString) return items;


      queryString = queryString.toLowerCase();

      console.log(queryString);
      console.log(items);
      


  return items.filter(items => items.pincode );
     }
  }


