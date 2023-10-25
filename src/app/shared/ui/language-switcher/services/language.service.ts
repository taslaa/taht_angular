import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: string;

  constructor() {
    this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
    this.setLanguage(this.currentLanguage);
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('currentLanguage', this.currentLanguage);
  }

  getLanguage(): string {
    return this.currentLanguage;
  }
}
