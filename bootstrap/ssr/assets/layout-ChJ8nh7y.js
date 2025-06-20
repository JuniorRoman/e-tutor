import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./app-logo-icon-Dbm1VCN0.js";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { c as cn } from "./utils-H80jjgLf.js";
import { Link } from "@inertiajs/react";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function HeadingSmall({ title, description }) {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-0.5 text-base font-medium", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
  ] });
}
function Heading({ title, description }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 space-y-0.5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold tracking-tight", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
  ] });
}
const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings/profile",
    icon: null
  },
  {
    title: "Password",
    href: "/settings/password",
    icon: null
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    icon: null
  }
];
function SettingsLayout({ children }) {
  if (typeof window === "undefined") {
    return null;
  }
  const currentPath = window.location.pathname;
  return /* @__PURE__ */ jsxs("div", { className: "px-4 py-6", children: [
    /* @__PURE__ */ jsx(Heading, { title: "Settings", description: "Manage your profile and account settings" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12", children: [
      /* @__PURE__ */ jsx("aside", { className: "w-full max-w-xl lg:w-48", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-1 space-x-0", children: sidebarNavItems.map((item, index) => /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          asChild: true,
          className: cn("w-full justify-start", {
            "bg-muted": currentPath === item.href
          }),
          children: /* @__PURE__ */ jsx(Link, { href: item.href, prefetch: true, children: item.title })
        },
        `${item.href}-${index}`
      )) }) }),
      /* @__PURE__ */ jsx(Separator, { className: "my-6 md:hidden" }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 md:max-w-2xl", children: /* @__PURE__ */ jsx("section", { className: "max-w-xl space-y-12", children }) })
    ] })
  ] });
}
export {
  HeadingSmall as H,
  SettingsLayout as S
};
