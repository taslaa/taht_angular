import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core'; // Import TranslateService

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent implements OnInit {
  isLanguageDropdownOpen: boolean = false;
  selectedLanguage: string = 'en';

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService // Inject TranslateService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.languageService.getLanguage();
  }

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.languageService.setLanguage(language);

    this.translate.use(language);

    console.log('Selected Language:', this.selectedLanguage);
  }
}
