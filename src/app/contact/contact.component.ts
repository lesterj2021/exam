import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  subMitedData: any;

  formSubmit = new FormGroup({
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    compname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private data: ContactService) { }

  ngOnInit(): void {
  }

  get formCheck() {
    return this.formSubmit.controls;
  }

  submit() {
    // console.log(this.formSubmit.value);
    // alert(JSON.stringify(this.formSubmit.value));
    this.subMitedData = this.data.sendMessage(this.formSubmit.value)
      .subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error.message);
      });

  }

}
