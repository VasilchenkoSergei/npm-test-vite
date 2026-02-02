export type Nullable<T> = T | null;

export interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}