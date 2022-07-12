import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form.value);
    form.reset();
    this.formSubmitted = true;
  }

}
