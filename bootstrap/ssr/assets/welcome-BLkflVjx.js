import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, GraduationCap, Facebook, Instagram, Linkedin, Youtube, ChevronDown, Bell, Heart, ShoppingCart } from "lucide-react";
import { c as cn, B as Button } from "./button-hAi0Fg-Q.js";
import { I as Input } from "./input-BYMPkoD-.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "bg-gray-900", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "Eduguard flex max-w-80 flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "text-orange-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-semibold text-2xl text-white", children: "E-tutor" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-md text-gray-500", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non veritatis maxime molestias." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3 text-white", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-gray-800 p-3.5", children: /* @__PURE__ */ jsx(Facebook, {}) }),
          /* @__PURE__ */ jsx("span", { className: "bg-gray-800 p-3.5", children: /* @__PURE__ */ jsx(Instagram, {}) }),
          /* @__PURE__ */ jsx("span", { className: "bg-gray-800 p-3.5", children: /* @__PURE__ */ jsx(Linkedin, {}) }),
          /* @__PURE__ */ jsx("span", { className: "bg-gray-800 p-3.5", children: /* @__PURE__ */ jsx(Youtube, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "Explore flex flex-col gap-5 text-gray-500", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white uppercase", children: "TOP 4 CATEGORY" }),
        /* @__PURE__ */ jsxs("ul", { className: "", children: [
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Development" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Finance & Accounting" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Design" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Business" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "Quick flex flex-col gap-5 text-gray-500", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white uppercase", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "", children: [
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "About" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Become Instructor" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Contact" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Career" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "Support flex flex-col gap-5 text-gray-500", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white uppercase", children: "Support" }),
        /* @__PURE__ */ jsxs("ul", { className: "", children: [
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Help Center" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "FAQs" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Terms & Condition" }),
          /* @__PURE__ */ jsx("li", { className: "py-1.5", children: "Privacy Policy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "Download flex flex-col gap-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white uppercase", children: "Downlaod our app" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1.5", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("img", { src: "./images/down/app.png", alt: "", width: "150px", height: "30px" }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("img", { src: "./images/down/app.png", alt: "", width: "150px", height: "30px" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("hr", { className: "text-gray-500" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-7 text-gray-500", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "© 2021 - Eduflex. Designed by Templatecookie. All rights reserved" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Select, { children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Theme" }) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "light", children: "Light" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "dark", children: "Dark" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "system", children: "System" })
        ] })
      ] }) })
    ] }) })
  ] }) });
}
function Header() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between bg-gray-900 px-8", children: [
      /* @__PURE__ */ jsxs("ul", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("li", { className: "text-md p-4 text-gray-500", children: "Home" }),
        /* @__PURE__ */ jsx("li", { className: "text-md p-4 text-gray-500", children: "Courses" }),
        /* @__PURE__ */ jsx("li", { className: "text-md p-4 text-gray-500", children: "About" }),
        /* @__PURE__ */ jsx("li", { className: "text-md p-4 text-gray-500", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex text-gray-500", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex gap-1.5", children: [
          "USD ",
          /* @__PURE__ */ jsx(ChevronDown, {})
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex", children: [
          "English ",
          /* @__PURE__ */ jsx(ChevronDown, {})
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border px-8 py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "text-orange-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-semibold text-2xl text-gray-900", children: "E-tutor" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxs(Select, { children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Theme" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "light", children: "Light" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "dark", children: "Dark" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "system", children: "System" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Input, { id: "search", placeholder: "Search the docs...", className: "pl-8" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx(Bell, {}),
          /* @__PURE__ */ jsx(Heart, {}),
          /* @__PURE__ */ jsx(ShoppingCart, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "10", className: "bg-orange-100 px-6 py-2 text-orange-500", children: "Create Account" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: "default", size: "10", className: "bg-orange-500 px-6 py-2 text-white", children: "Sign In" }) })
      ] })
    ] })
  ] }) });
}
Header.SiteLayout = (page) => /* @__PURE__ */ jsx(SiteLayout, { children: page });
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx("article", { children }) }),
    /* @__PURE__ */ jsx(Footer, { className: "mt-auto" })
  ] }) });
}
function HomeFeatured() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { class: "gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsx("div", { class: "max-w-sm overflow-hidden rounded shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white", children: /* @__PURE__ */ jsxs("div", { class: "px-8 py-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://tailwindcss.com/img/jonathan.jpg", class: "mb-4 h-12 w-12 rounded-full" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("h4", { class: "mb-3 text-lg font-semibold", children: "How to be effective at working remotely?" }) }),
      /* @__PURE__ */ jsx("p", { class: "mb-2 text-sm text-gray-600", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          class: "w-100"
        }
      ),
      /* @__PURE__ */ jsx("hr", { class: "mt-4" }),
      /* @__PURE__ */ jsx("span", { class: "text-xs", children: "ARTICLE" }),
      " ",
      /* @__PURE__ */ jsx("span", { class: "text-xs text-gray-500", children: "PROCESS" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { class: "max-w-sm overflow-hidden rounded shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white", children: /* @__PURE__ */ jsxs("div", { class: "px-8 py-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://tailwindcss.com/img/jonathan.jpg", class: "mb-4 h-12 w-12 rounded-full" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("h4", { class: "mb-3 text-lg font-semibold", children: "How to be effective at working remotely?" }) }),
      /* @__PURE__ */ jsx("p", { class: "mb-2 text-sm text-gray-600", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          class: "w-100"
        }
      ),
      /* @__PURE__ */ jsx("hr", { class: "mt-4" }),
      /* @__PURE__ */ jsx("span", { class: "text-xs", children: "ARTICLE" }),
      " ",
      /* @__PURE__ */ jsx("span", { class: "text-xs text-gray-500", children: "PROCESS" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { class: "max-w-sm overflow-hidden rounded shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white", children: /* @__PURE__ */ jsxs("div", { class: "px-8 py-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://tailwindcss.com/img/jonathan.jpg", class: "mb-4 h-12 w-12 rounded-full" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("h4", { class: "mb-3 text-lg font-semibold", children: "How to be effective at working remotely?" }) }),
      /* @__PURE__ */ jsx("p", { class: "mb-2 text-sm text-gray-600", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          class: "w-100"
        }
      ),
      /* @__PURE__ */ jsx("hr", { class: "mt-4" }),
      /* @__PURE__ */ jsx("span", { class: "text-xs", children: "ARTICLE" }),
      " ",
      /* @__PURE__ */ jsx("span", { class: "text-xs text-gray-500", children: "PROCESS" })
    ] }) })
  ] }) }) }) });
}
function Welcome() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsx(HomeFeatured, {}) }) });
}
export {
  Welcome as default
};
