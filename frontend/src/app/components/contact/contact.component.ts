import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { NgForm } from '@angular/forms'
import { Contact } from 'src/app/models/contact';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern("[a-zA-Z]+")
  ]);
  surnameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern("[a-zA-Z]+")
  ]);
  ageControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(125)
  ]);
  idControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z0-9]+"),
    Validators.maxLength(9),
    Validators.minLength(9)
  ]);
  birthdayControl = new FormControl('', [
    Validators.required
  ]);
  favoriteColorControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern("[a-zA-Z]+")
  ]);
  genderControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  resetForm(form: NgForm) {
    form.reset()
  }

  getContacts() {
    this.contactService.getContacts().subscribe(
      (res) => {
        this.contactService.contacts = res
      },
      (err) => console.log(err)
    )
  }

  addContact(form: NgForm) {
    if(form.value._id) {
      this.contactService.updateContact(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }else {
      this.contactService.createContact(form.value).subscribe(
        (res) => {
          this.getContacts();
          form.reset()
        },
        (err) => console.log(err)
      )
    } 
  }

  deleteContact(id: String) {
    if (confirm('Do you really want to delete this contact?')){
      this.contactService.deleteContact(id as string).subscribe(
        (res) => {
          this.getContacts();
        },
        (err) => console.error(err)
      )
    }
  }

  editContact(contact: Contact) {
    this.contactService.newContact = contact
  }
}
