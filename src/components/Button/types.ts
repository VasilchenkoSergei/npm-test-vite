import type { Nullable } from '../../common/types';

export type ShipDirection = 'horizontal' | 'vertical';

export interface IShipProps {
  length: number;
  direction: ShipDirection;
  onDoubleClickCallback: () => void;
  className?: string;
  ref?: Nullable<React.RefObject<HTMLDivElement>>;
}
