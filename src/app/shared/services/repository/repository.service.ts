import {MyArray} from '../../util/my-array'

export class Repository {
  private _key: string;

  constructor(key: string) { this._key = key; }

  save(object): void {
    var dataObject = this.makeACopy(object);
    var key = object.uuid;
    var data = this.getData();
    var index = MyArray.findIndex(key, data);

    if (index >= 0) {
      data.splice(index, 1, dataObject);
    } else {
      data.push(dataObject);
    }
    this.setData(data);
  }

  saveAll(objects): void { this.setData(objects); }

  get(key: string): any {
    var data = this.getData();
    var index = MyArray.findIndex(key, data);

    return index >= 0 ? data[index] : null;
  }

  delete(key: string): void {
    var data = this.getData();
    var index = MyArray.findIndex(key, data);

    if (index >= 0) {
      data.splice(index, 1);
    }
    this.setData(data);
  }

  getAll(): Array<any> { return this.makeACopy(this.getData()); }

  deleteAll(): void { this.setData('[]'); };

  private makeACopy(object): any { return JSON.parse(JSON.stringify(object)); }

  private getData(): any {
    var data = JSON.parse(localStorage.getItem(this._key));
    return (data !== null) ? data : [];
  }

  private setData(data: any): void {
    var jsonData = typeof(data) === 'string' ? JSON.parse(data) : data;
    localStorage.setItem(this._key, JSON.stringify(jsonData));
  }
}
