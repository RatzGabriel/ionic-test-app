import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: any[] = [];

  constructor(private callNumber: CallNumber) {}

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    try {
      const permission = await Contacts.requestPermissions();

      if (!permission.contacts) return;
      else if (permission.contacts == 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
          },
        });
        this.contacts = result.contacts;
      }
    } catch (error) {
      console.log(error);
    }
  }
  call(contact: any) {}
}
