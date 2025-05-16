
declare interface Window {
  // Meta Pixel properties
  fbq: (
    event: string,
    eventType: string,
    params?: Record<string, any>
  ) => void;
  _fbq: any;
  
  // Mautic properties
  MauticSDKLoaded?: boolean;
  MauticSDK?: {
    onLoad: () => void;
  };
  MauticDomain?: string;
  MauticLang?: {
    submittingMessage: string;
  };
}
