import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
   standalone: true,
   imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

form = {
  name: '',
  email: '',
  phone: '',
  program: '',
  message: ''
};



sendEmail() {
  emailjs.send(
    'service_zmu3wik',
    'template_aivy2m9',
    {
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
      program: this.form.program,
      message: this.form.message
    },
    'iDKdm3DifxNU7P1Ac'
  )
  .then(() => {
    alert('Inquiry Sent Successfully');
  })
  .catch(error => {
    console.error(error);
  });
}

}
