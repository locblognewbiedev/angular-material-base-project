import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureRichTextComponent } from './pure-rich-text.component';

describe('PureRichTextComponent', () => {
  let component: PureRichTextComponent;
  let fixture: ComponentFixture<PureRichTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PureRichTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureRichTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
