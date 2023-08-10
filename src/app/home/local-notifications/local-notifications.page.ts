import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
})
export class LocalNotificationsPage implements OnInit {
  contacts:any;
  constructor() {}

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async schedule() {
    if (isPlatform('android')) {
      await LocalNotifications.createChannel({
        id: '1',
        name: 'local notifications',
      });
    }

    const notify = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Native Plugins App',
          body: 'Checking local notifications',
          id: 1,
          schedule: { at: new Date(Date.now() + 100 * 3) },
          extra: {
            data: 'Checking extras',
          },
        },
      ],
    });
    console.log('notify:', notify);
  }
}
