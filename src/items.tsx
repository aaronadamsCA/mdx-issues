import type { ComponentPropsWithoutRef, ReactElement } from "react";

export const items: Record<
  string,
  (props: ComponentPropsWithoutRef<"li">) => ReactElement
> = {
  Foo: (props) => <li {...props} />,
  Bar: (props) => <li {...props} />,
  Baz: (props) => <li {...props} />,
};
