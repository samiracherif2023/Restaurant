import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlatsComponent } from './table-plats.component';

describe('TablePlatsComponent', () => {
  let component: TablePlatsComponent;
  let fixture: ComponentFixture<TablePlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
