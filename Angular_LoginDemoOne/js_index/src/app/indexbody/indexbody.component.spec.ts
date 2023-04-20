import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexbodyComponent } from './indexbody.component';

describe('IndexbodyComponent', () => {
  let component: IndexbodyComponent;
  let fixture: ComponentFixture<IndexbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
