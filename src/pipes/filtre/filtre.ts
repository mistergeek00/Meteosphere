import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FiltrePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtre',
})
export class FiltrePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(arranger: any[], texte: string): any[] {

    if ( texte === '' ){
      return arranger;
    }

    texte = texte.toLowerCase();

    return arranger.filter(a => {
      return a.name.toLowerCase()
        .includes( texte );
    });

  }
}
