import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToArray'
})
export class MapToArrayPipe implements PipeTransform {
  transform(map: Map<string, string>): { key: string, value: string }[] {
    return Array.from(map, ([key, value]) => ({ key, value }));
  }
}
