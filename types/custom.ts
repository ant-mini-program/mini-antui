declare function Component(options: any): void;

interface GetSystemInfoSyncRes {
  windowWidth: number;
}

declare namespace my {

  const SDKVersion: number;

  function canIUse(
    schema: string,
  ): boolean;

  function getSystemInfoSync(): GetSystemInfoSyncRes;

  function createSelectorQuery(): any;
}