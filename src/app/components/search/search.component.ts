import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
  <div class="search">
    <input class="search__input" placeholder="City..." [formControl]="inputSearch">
  </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('')
  @Output() submited: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    this.onChange()
  }

  private onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: any) => search.trim()),
        debounceTime(850),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search:string) => this.submited.emit(search))
      )
      .subscribe()
  }

}
