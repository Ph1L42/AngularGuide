import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    template: `
    <p>
        This is the name of {{name}}
    </p>
    `,
    styles: []
})

export class PropertyBindingComponent{
    @Input() name: string;

}