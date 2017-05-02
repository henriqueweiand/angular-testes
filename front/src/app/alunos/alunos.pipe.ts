import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alunos'
})
export class AlunosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value == undefined)
      return value;

    if(value.length === 0 || args === undefined)
      return value;

    let filter = args.toLocaleLowerCase();

    return value.filter(
      v => v.name.toLocaleLowerCase().indexOf(filter) != -1
    );
    
  }

}
