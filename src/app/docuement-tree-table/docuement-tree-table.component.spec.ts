import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuementTreeTableComponent } from './docuement-tree-table.component';

describe('DocuementTreeTableComponent', () => {
  let component: DocuementTreeTableComponent;
  let fixture: ComponentFixture<DocuementTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocuementTreeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocuementTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
