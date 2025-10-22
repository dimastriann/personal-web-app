export type ContactDetail = {
  label: string;
  value: string;
};

export type Contact = {
  [key: string]: ContactDetail;
};
