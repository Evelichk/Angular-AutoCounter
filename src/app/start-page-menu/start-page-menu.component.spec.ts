import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageMenuComponent } from './start-page-menu.component';

describe('StartPageMenuComponent', () => {
  let component: StartPageMenuComponent;
  let fixture: ComponentFixture<StartPageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
