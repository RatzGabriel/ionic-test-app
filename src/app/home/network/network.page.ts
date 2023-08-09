import { Toast } from '@capacitor/toast';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import {
  ConnectionStatus,
  ConnectionStatusChangeListener,
  Network,
} from '@capacitor/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {
  netWorkListener: PluginListenerHandle | undefined;
  status: any;

  constructor(public ngZone: NgZone) {}

  async ngOnInit() {
    this.netWorkListener = await Network.addListener(
      'networkStatusChange',
      (status) => {
        console.log('Network status changed', status);
        //this.status = status;
        this.ngZone.run(() => {
          this.status = status.connected ? 'Online' : 'Offline';
        });
      }
    );
    const status = await Network.getStatus();
    this.changeStatus(status);
    console.log('Network status:', status);
  }

  changeStatus(status: any) {
    this.status = status.connected ? 'Online' : 'Offline';
    async () => {
      await Toast.show({
        position: 'center',
        duration: 'long',
        text: this.status,
      });
    };
  }

  ngOnDestroy(): void {
    if (this.netWorkListener) {
      this.netWorkListener.remove();
    }
  }
}
