import { Component } from "solid-js";
import { NAVLINKS } from "../../lib/data";
import { A } from "@solidjs/router";

export const Navbar: Component = () => {
  return (
    <nav class="sticky top-0 left-0 z-50 flex h-14 w-full items-center justify-between bg-white/80 px-6 backdrop-blur-md">
      <A href="/" class="font-bold">Shaurya</A>

      <div class="flex gap-8">
        {NAVLINKS.map((nav) => (
          <A href={nav.path}>{nav.name}</A>
        ))}
      </div>
    </nav>
  );
};