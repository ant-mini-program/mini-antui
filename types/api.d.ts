interface GetSystemInfoSyncRes {
  windowWidth: number;
}

declare namespace my {
  interface My {
    SDKVersion: string;
    canIUse(
      schema: string,
    ): boolean;
    getSystemInfoSync(): GetSystemInfoSyncRes;
    createSelectorQuery(): any;
  }
}

declare const my: my.My;