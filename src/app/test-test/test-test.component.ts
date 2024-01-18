import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

@Component({
  selector: 'app-test-test',
  standalone: true,
    imports: [
        TuiButtonModule
    ],
  templateUrl: './test-test.component.html',
  styleUrl: './test-test.component.scss'
})
export class TestTestComponent {

}
