import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEditorComponent } from './auto-editor.component';

describe('AutoEditorComponent', () => {
  let component: AutoEditorComponent;
  let fixture: ComponentFixture<AutoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
