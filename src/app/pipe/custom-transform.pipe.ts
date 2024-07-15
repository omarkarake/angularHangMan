// src/app/pipes/custom-transform.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTransform'
})
export class CustomTransformPipe implements PipeTransform {

  transform(value: string): string {
    // Add a space before each uppercase letter, then convert the whole string to uppercase
    const formattedValue = value.replace(/([A-Z])/g, ' $1').toUpperCase();
    // Trim the resulting string to remove any leading space
    return formattedValue.trim();
  }
}
