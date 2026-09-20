import { Component, JSXElement } from "solid-js";

type Props = {
  children: JSXElement;
  className?: string;
  title?: string;
};

const Layout: Component<Props> = ({ children, className, title }) => {
  return (
    <div class={`p-2 my-8 ${className}`}>
      <div>
        {title && <p class="font-medium text-lg p-text"> ~ {title} </p>}
      </div>
      <div class="ml-4">{children}</div>
    </div>
  );
};

export default Layout;
