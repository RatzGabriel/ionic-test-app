import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { ActionSheetController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: any[] = [];
  allContacts: any[] = [];
  page = 1;
  loading: any;
  isLoading: any;
  constructor(
    private loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.showLoading();
    setTimeout(() => {
      this.isLoading = false;
      this.loading.dismiss();
    }, 3000);
    // this.getContacts();
    this.allContacts = [
      {
        id: 1,
        name: 'Elma Herring',
        email: 'elmaherring@unq.com',
        phone: '+1 (913) 497-2020',
      },
      {
        id: 2,
        name: 'Knapp Berry',
        email: 'knappberry@unq.com',
        phone: '+1 (951) 472-2967',
      },
      {
        id: 3,
        name: 'Bell Burgess',
        email: 'bellburgess@unq.com',
        phone: '+1 (887) 478-2693',
      },
      {
        id: 4,
        name: 'Hobbs Ferrell',
        email: 'hobbsferrell@unq.com',
        phone: '+1 (862) 581-3022',
      },
      {
        id: 5,
        name: 'Marylou Medina',
        email: 'maryloumedina@unq.com',
        phone: '+1 (996) 520-2967',
      },
      {
        id: 6,
        name: 'Larson Guerra',
        email: 'larsonguerra@unq.com',
        phone: '+1 (972) 566-2684',
      },
      {
        id: 7,
        name: 'Shelby Ballard',
        email: 'shelbyballard@unq.com',
        phone: '+1 (824) 467-3579',
      },
      {
        id: 8,
        name: 'Lea Faulkner',
        email: 'leafaulkner@unq.com',
        phone: '+1 (899) 528-3402',
      },
      {
        id: 9,
        name: 'Cecelia Wolf',
        email: 'ceceliawolf@unq.com',
        phone: '+1 (862) 507-3140',
      },
      {
        id: 10,
        name: 'Melva Nixon',
        email: 'melvanixon@unq.com',
        phone: '+1 (901) 444-3081',
      },
      {
        id: 11,
        name: 'Bernard Chambers',
        email: 'bernardchambers@unq.com',
        phone: '+1 (831) 539-3366',
      },
      {
        id: 12,
        name: 'Wendi Bender',
        email: 'wendibender@unq.com',
        phone: '+1 (868) 414-2720',
      },
      {
        id: 13,
        name: 'Wall Stewart',
        email: 'wallstewart@unq.com',
        phone: '+1 (814) 558-3191',
      },
      {
        id: 14,
        name: 'Howell Gilbert',
        email: 'howellgilbert@unq.com',
        phone: '+1 (926) 512-3631',
      },
      {
        id: 15,
        name: 'Nguyen Maxwell',
        email: 'nguyenmaxwell@unq.com',
        phone: '+1 (838) 469-2152',
      },
      {
        id: 16,
        name: 'Norris Hendricks',
        email: 'norrishendricks@unq.com',
        phone: '+1 (818) 563-2900',
      },
      {
        id: 17,
        name: 'Salinas Mcleod',
        email: 'salinasmcleod@unq.com',
        phone: '+1 (888) 413-3775',
      },
      {
        id: 18,
        name: 'Michelle Barrett',
        email: 'michellebarrett@unq.com',
        phone: '+1 (988) 446-2594',
      },
      {
        id: 19,
        name: 'Burke Barlow',
        email: 'burkebarlow@unq.com',
        phone: '+1 (965) 492-2552',
      },
      {
        id: 20,
        name: 'Rosie Cummings',
        email: 'rosiecummings@unq.com',
        phone: '+1 (845) 456-2237',
      },
      {
        id: 21,
        name: 'Sanford Frye',
        email: 'sanfordfrye@unq.com',
        phone: '+1 (936) 581-3494',
      },
      {
        id: 22,
        name: 'Janna Peck',
        email: 'jannapeck@unq.com',
        phone: '+1 (824) 512-2437',
      },
      {
        id: 23,
        name: 'Lorraine Sykes',
        email: 'lorrainesykes@unq.com',
        phone: '+1 (959) 422-3635',
      },
      {
        id: 24,
        name: 'Vicki Fulton',
        email: 'vickifulton@unq.com',
        phone: '+1 (916) 455-2402',
      },
      {
        id: 25,
        name: 'Massey Moody',
        email: 'masseymoody@unq.com',
        phone: '+1 (840) 453-3811',
      },
      {
        id: 26,
        name: 'Grant Berg',
        email: 'grantberg@unq.com',
        phone: '+1 (837) 554-3706',
      },
      {
        id: 27,
        name: 'Hawkins Winters',
        email: 'hawkinswinters@unq.com',
        phone: '+1 (945) 469-2432',
      },
      {
        id: 28,
        name: 'Frazier Davidson',
        email: 'frazierdavidson@unq.com',
        phone: '+1 (854) 558-2637',
      },
      {
        id: 29,
        name: 'Francine Cervantes',
        email: 'francinecervantes@unq.com',
        phone: '+1 (923) 520-2916',
      },
      {
        id: 30,
        name: 'Francis Perez',
        email: 'francisperez@unq.com',
        phone: '+1 (885) 461-3054',
      },
    ];

    this.contacts = this.allContacts.filter((x) => x.id <= 12);
  }

  async getContacts() {
    try {
      let result = await Contacts.getContacts({ projection: { name: true } });
      console.log(result);
      this.contacts = result.contacts;
      console.log(this.contacts);
      // for (const contact of result.contacts) {
      //     // console.log(contact);
      // }
    } catch (e) {
      console.log(e);
    }
  }

  info(contact: any) {
    console.log(contact);
  }

  loadData(event: any) {
    console.log(event);
    this.page++;
    let temp = this.allContacts.filter(
      (x) => x.id > 12 * (this.page - 1) && x.id <= 12 * this.page
    );
    this.contacts = this.contacts.concat(temp);
    event.target.complete();
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Dismissing after 2 seconds...',
      duration: 2000,
      backdropDismiss: true,
    });
    console.log(this.loading);

    this.loading.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Call',
          role: 'destructive',
          icon: 'call',
          data: {
            action: 'call',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  handleRefresh(event: any) {
    console.log('refresh data', event);
    this.contacts = [];
    this.ngOnInit();
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }
}
