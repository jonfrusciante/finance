import { Component, OnInit } from '@angular/core';
import {BalancePerCategory} from '../shared/report/balance-per-category.service';
import {BalancePerCategoryReport} from '../shared/report/balance-per-category-report';
import {BalancePerCategoryRow} from '../shared/report/balance-per-category-row';
import {BalancePerCategoryCell} from '../shared/report/balance-per-category-cell';
import {MyDate} from '../shared/util/my-date';

@Component({
  moduleId: module.id,
  selector: 'app-balance-per-category',
  templateUrl: 'balance-per-category.component.html',
  styleUrls: ['balance-per-category.component.css'],
  providers: [BalancePerCategory, BalancePerCategoryReport, BalancePerCategoryRow, BalancePerCategoryCell]
})
export class BalancePerCategoryComponent implements OnInit {
  public initialDate: string;
  public finalDate: string;
  public show: string;
  public balancePerCategoryReport: BalancePerCategoryReport;
  public balancePerCategory: BalancePerCategory;

  constructor(balancePerCategory: BalancePerCategory) {
    this.balancePerCategory = balancePerCategory;
  }

  ngOnInit() {
    var firstDayOfMonth = MyDate.getFirstDayOfMonth();
    var lastDayOfMonth = MyDate.getLastDayOfMonth();;
    this.initialDate = MyDate.convertToUsString(firstDayOfMonth);
    this.finalDate = MyDate.convertToUsString(lastDayOfMonth);
    this.show = 'last';

    this.balancePerCategoryReport = this.balancePerCategory.get(firstDayOfMonth, lastDayOfMonth);
  }

  search() {
    var initialDate = MyDate.convertToDateFromString(this.initialDate);
    var finalDate = MyDate.convertToDateFromString(this.finalDate);

    this.balancePerCategoryReport = this.balancePerCategory.get(initialDate, finalDate);
  }

  hide(index: number, length: number) {
    if (this.show === 'all') {
      return false;
    }
    return index !== length - 1;
  }
}
