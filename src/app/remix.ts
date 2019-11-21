import { InjectionToken } from '@angular/core';
import { createIframeClient, PluginApi, IRemixApi, remixProfiles, boxProfile, IBox, ProfileMap, PluginClient } from '@remixproject/plugin';

export const REMIX = new InjectionToken<PluginClient>('Remix client', {
  providedIn: 'root',
  factory:  () => createIframeClient()
});
