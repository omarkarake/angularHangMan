import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTransform'
})
export class CustomTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    // spaces should be handled correctly
    const removeSpaces = value.replace(/\s+/g, '');
    // Add a space before each uppercase letter, then convert the whole string to uppercase
    const formattedValue = removeSpaces.replace(/([A-Za-z])/g, ' $1').toUpperCase();
    // Trim the resulting string to remove any leading space
    return formattedValue.trim();
  }
}
