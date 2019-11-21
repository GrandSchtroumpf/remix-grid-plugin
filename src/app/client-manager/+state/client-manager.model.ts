export interface ClientManager {
  name: string;
  displayName: string;
  about: {
    description: string;
    app: {
      name: string;
      url: string;
      dependencies: {
        name: string;
        settings: { id: string, value: string }[]
      }
    }[];
    links: {
      name: string;
      url: string;
    }[];
    docs: {
      name: string;
      url: string;
    }[];
    community: {
      name: string;
      url: string;
    }[];
  };
  settings: {
    id: string;
    default: string;
    label: string;
    flag?: string;
    type?: string;
    options: { value: string, label: string, flag: string }[]
  }[];
}

export function createClientManager(params: Partial<ClientManager>) {
  return {

  } as ClientManager;
}
