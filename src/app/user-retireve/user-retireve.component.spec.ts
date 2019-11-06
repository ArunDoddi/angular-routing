import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRetireveComponent } from './user-retireve.component';

describe('UserRetireveComponent', () => {
  let component: UserRetireveComponent;
  let fixture: ComponentFixture<UserRetireveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRetireveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRetireveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
