export interface GroupModel {
  id: number;
  company_id: number;
  parent_id?: number | null;
  head_id: number;
  title: string;
}
