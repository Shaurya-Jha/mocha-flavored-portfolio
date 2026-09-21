import { Component, ParentProps } from "solid-js";

export const Container: Component<ParentProps> = (props) => {
  return (
    <div class="w-full h-full flex p-4">
      { props.children }
    </div>
  )
}