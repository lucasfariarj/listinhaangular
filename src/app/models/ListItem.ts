export interface ListItem {
  id: number,
  name: string,
  link: string,
  category: string,
  value: string,
  bought: boolean,
  editMode?: boolean
}
