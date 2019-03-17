import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


var fakeData = [{ "id": 1, "name": "nawab shirt", "category": "Shirt", "color": "Red", "size": "L", "price": 4200, url: "https://cdn.nicobar.com/500/media/images/products/2019/03/1551675848J13A6341_2plp.jpg" },
{ "id": 2, "name": "Celestial single shirt", "category": "Shirt", "color": "White", "size": "M", "price": 7800, url: "https://cdn.nicobar.com/500/media/images/products/2019/03/1551956180J13A0550_2plp.jpg" },
{ "id": 3, "name": "Sitth shirt", "category": "Shirt", "color": "Pink", "size": "XL", "price": 6800, url: "https://cdn.nicobar.com/500/media/images/products/2019/03/1551956508J13A0404_2plp.jpg" },
{ "id": 4, "name": "pondicherry", "category": "Shirt", "color": "Pink", "size": "S", "price": 3200, url: "https://cdn.nicobar.com/500/media/images/products/2019/01/1547619422J13A0373_2plp.jpg" },
{ "id": 5, "name": "pocket t-shirt", "category": "T-Shirt", "color": "Brown", "size": "L", "price": 1400, url: "https://cdn.nicobar.com/500/media/images/products/2019/01/1547204740J13A1715_2plp.jpg" },
{ "id": 6, "name": "pocket t-shirt", "category": "T-Shirt", "color": "Blue", "size": "XXL", "price": 1600, url: "https://cdn.nicobar.com/500/media/images/products/2018/05/1525693873A46A5071.jpg" },
{ "id": 7, "name": "Sitth Jacket", "category": "Jacket", "color": "Grey", "size": "L", "price": 9500, url: "https://cdn.nicobar.com/500/media/images/products/2019/03/1551956278J13A1176_2plp.jpg" },
{ "id": 8, "name": "Nehru Jacket", "category": "Jacket", "color": "Green", "size": "XL", "price": 8200, url: "https://cdn.nicobar.com/500/media/images/products/2019/01/1548839056J13A1824_2plp.jpg" },
{ "id": 9, "name": "Travel Hoddie", "category": "Jacket", "color": "Brown", "size": "M", "price": 7800, url: "https://cdn.nicobar.com/500/media/images/products/2018/11/1542619706J13A0630_1plp.jpg" },
{ "id": 10, "name": "Negombo Nehru Jacket", "category": "Jacket", "color": "Black", "size": "L", "price": 8900, url: "https://cdn.nicobar.com/500/media/images/products/2018/10/1539345898IMG_7342_2plp.jpg" },
{ "id": 11, "name": "Moonbeam Vintage", "category": "Trousers", "color": "Blue", "size": "L", "price": 6900, url: "https://cdn.nicobar.com/500/media/images/products/2019/03/1551956095J13A0148_2plp.jpg" },
{ "id": 12, "name": "Shillong jemmies", "category": "Trousers", "color": "White", "size": "M", "price": 7000, url: "https://cdn.nicobar.com/500/media/images/products/2019/01/1547205852J13A0878_2plp.jpg" },
{ "id": 13, "name": "Slim chinos", "category": "Trousers", "color": "Blue", "size": "L", "price": 8900, url: "https://cdn.nicobar.com/500/media/images/products/2018/11/1542621527J13A1035_2plp.jpg" },
{ "id": 14, "name": "Travel Jogger", "category": "Trousers", "color": "Black", "size": "XL", "price": 7200, url: "https://cdn.nicobar.com/500/media/images/products/2018/11/1542621224J13A0697_2plp.jpg" }];


@Injectable({
  providedIn: 'root'
})

export class JsonService {
  public data: any;
  public changeData: Subject<any> = new Subject<any>();

  constructor() { 
    this.data = [...fakeData];
  }
  getItems() {
    return  this.data;
  }

  setData(filterData) {
    this.data=fakeData;
    this.data = this.data.filter((data) => {
      if((filterData.category ? data.category == filterData.category : true) 
      && (filterData.color ? data.color == filterData.color : true) 
      && (filterData.size ? data.size == filterData.size : true)) {
        return true;
      }
      return false;
    });
    this.changeData.next(this.data);
  }

}
