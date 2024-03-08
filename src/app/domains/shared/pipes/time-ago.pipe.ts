import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) return ''; // Devuelve una cadena vacía si no hay valor

    const dateValue: Date = new Date(value);

    if (isNaN(dateValue.getTime())) {
      return '';
    }

    const now: Date = new Date();
    const seconds: number = Math.floor((now.getTime() - dateValue.getTime()) / 1000);

    // Definir los intervalos de tiempo en segundos
    const intervals: { [key: string]: number } = {
      'año': 31536000,
      'mes': 2592000,
      'semana': 604800,
      'día': 86400,
      'hora': 3600,
      'minuto': 60,
      'segundo': 1
    };

    // Calcular la diferencia de tiempo en el intervalo más grande
    for (const interval in intervals) {
      const intervalInSeconds: number = intervals[interval];
      const counter: number = Math.floor(seconds / intervalInSeconds);

      if (counter > 0) {
        if (counter === 1) {
          return 'hace ' + counter + ' ' + interval; // Singular (1 hora, 1 minuto, etc.)
        } else {
          return 'hace ' + counter + ' ' + interval + 's'; // Plural (2 horas, 3 minutos, etc.)
        }
      }
    }
    return 'hace ' + seconds + ' segundos';

  }
}
