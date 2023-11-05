export default interface LinkImpl {
  children?: React.ReactNode;
  className?: string;
  onClick?(): void;
  locale?: string;
  href: string;
}
