import { Pipe, type PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'appTimeAgo1',
  standalone: true,
})
export class TimeAgo1Pipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);
  }

}
