interface Props {
  condition: boolean;
  wrapper: any;
  children: any;
}

const ConditionalWrapper = ({ condition, wrapper, children }: Props) =>
  condition ? wrapper(children) : children;

export default ConditionalWrapper;
