import { PositionType } from "../interfaces/PositionType";

export interface ColumnSettingType {
  key: string;
  hidden: boolean;
  width: number;
  fixed?: PositionType;
}
