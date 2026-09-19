import { Component } from "solid-js";

const navigations = [
  { id: 1, name: "/", description: "Home page", url: "#home" },
  { id: 2, name: "/about", description: "About me", url: "#about" },
  { id: 3, name: "/work", description: "Work", url: "#work" },
  { id: 4, name: "/projects", description: "Projects", url: "#projects" },
];

const Header: Component = () => {
  return (
    <header class="max-w-xl w-full fixed top-0 py-2">
      <ul class="flex flex-row justify-evenly">
        {navigations.map((nav) => (
          <li>
            <a href={nav.url}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;