import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css'],
})
export class CurrencySwitcherComponent {
  isCurrencyDropdownOpen: boolean = false;
  selectedCurrency: string = 'BAM'; // Default currency

  toggleCurrencyDropdown() {
    this.isCurrencyDropdownOpen = !this.isCurrencyDropdownOpen;
  }

  changeCurrency(currency: string) {
    console.log(`Changing currency to ${currency}`);
    this.selectedCurrency = currency;
    localStorage.setItem('currentCurrency', this.selectedCurrency);
    this.isCurrencyDropdownOpen = false; 
  }
  
}
