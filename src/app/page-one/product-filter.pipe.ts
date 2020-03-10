import { PipeTransform, Pipe } from '@angular/core';
import { ProductObj } from './product';

@Pipe({name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
    transform(inputArrValue: Array<ProductObj>, filterBy: string): Array<ProductObj> {
        return filterBy ? inputArrValue.filter((inputValue: ProductObj) => inputValue.productName.toLocaleLowerCase()
                    .indexOf(filterBy.toLocaleLowerCase()) !== -1) : inputArrValue;
    }
}
