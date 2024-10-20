import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pure-rich-text',
  templateUrl: './pure-rich-text.component.html',
  styleUrl: './pure-rich-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PureRichTextComponent),
      multi:true
    }
  ]
})
export class PureRichTextComponent implements ControlValueAccessor {
  content: string = '';
  @Input() label: string = '';
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  onContentChange(e: Event) {
    const taget = e.target as HTMLTextAreaElement;
    this.content = taget.value;
    this.onChange(this.content);
    this.onTouched();
  }
  writeValue(obj: any): void {
    this.content = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
