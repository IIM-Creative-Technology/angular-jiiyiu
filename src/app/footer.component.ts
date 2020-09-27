import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer mb-4 mt-5">
    Angular 
    <br/>
    Yuner NI - DW2 - IIM
    <br/> 
    Projet e-learning
  </footer>
  `,
  styles: [
    `
      .footer {
        line-height: 2;
        text-align: center;
        font-size: 69%;
        color: #FFFFFF;
        font-family: var(--font-family-monospace);
        background-color:#F29F8D;
      }
      a{
        color: #F21D2F;
      }
    `,
  ],
})
export class FooterComponent {
  version = VERSION.full;
}
