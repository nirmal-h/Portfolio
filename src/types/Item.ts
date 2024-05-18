export interface Item {
  [key: string]: string | string[];
}

export interface Config {
  title: string;
  fields: { label: string; key: string }[];
}
