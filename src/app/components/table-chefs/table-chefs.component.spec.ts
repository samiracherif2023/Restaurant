import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChefsComponent } from './table-chefs.component';

describe('TableChefsComponent', () => {
  let component: TableChefsComponent;
  let fixture: ComponentFixture<TableChefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableChefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
