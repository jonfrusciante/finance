import {describe, expect, it} from '@angular/core/testing';
import {MyArray} from './my-array';

describe('My array', () => {

  it('it should find index', () => {
    var array = [
      {uuid: '3', name: 32234},
      {uuid: '4', name: 324234}
    ];

    expect(MyArray.findIndex('4',array)).toEqual(1);
  });
});
