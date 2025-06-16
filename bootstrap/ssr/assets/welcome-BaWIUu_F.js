import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Link, usePage } from "@inertiajs/react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, GraduationCap, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
import { useState, useEffect } from "react";
import "clsx";
import "tailwind-merge";
const Hero = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "-mx-4 flex flex-wrap", children: /* @__PURE__ */ jsx("div", { className: "w-full px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[800px] text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight", children: "Free and Open-Source Next.js Template for Startup & SaaS" }),
          /* @__PURE__ */ jsx("p", { className: "mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl", children: "Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "https://nextjstemplates.com/templates/saas-starter-startup",
                className: "rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80",
                children: "🔥 Get Pro"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "https://github.com/NextJSTemplates/startup-nextjs",
                className: "inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5",
                children: "Star on GitHub"
              }
            )
          ] })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "450",
            height: "556",
            viewBox: "0 0 450 556",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "277",
                  cy: "63",
                  r: "225",
                  fill: "url(#paint0_linear_25:217)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "17.9997",
                  cy: "182",
                  r: "18",
                  fill: "url(#paint1_radial_25:217)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "76.9997",
                  cy: "288",
                  r: "34",
                  fill: "url(#paint2_radial_25:217)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "325.486",
                  cy: "302.87",
                  r: "180",
                  transform: "rotate(-37.6852 325.486 302.87)",
                  fill: "url(#paint3_linear_25:217)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  opacity: "0.8",
                  cx: "184.521",
                  cy: "315.521",
                  r: "132.862",
                  transform: "rotate(114.874 184.521 315.521)",
                  stroke: "url(#paint4_linear_25:217)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  opacity: "0.8",
                  cx: "356",
                  cy: "290",
                  r: "179.5",
                  transform: "rotate(-30 356 290)",
                  stroke: "url(#paint5_linear_25:217)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  opacity: "0.8",
                  cx: "191.659",
                  cy: "302.659",
                  r: "133.362",
                  transform: "rotate(133.319 191.659 302.659)",
                  fill: "url(#paint6_linear_25:217)"
                }
              ),
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint0_linear_25:217",
                    x1: "-54.5003",
                    y1: "-178",
                    x2: "222",
                    y2: "288",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7", stopOpacity: "0" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "radialGradient",
                  {
                    id: "paint1_radial_25:217",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(17.9997 182) rotate(90) scale(18)",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0.145833", stopColor: "#4A6CF7", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7", stopOpacity: "0.08" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "radialGradient",
                  {
                    id: "paint2_radial_25:217",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(76.9997 288) rotate(90) scale(34)",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0.145833", stopColor: "#4A6CF7", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7", stopOpacity: "0.08" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint3_linear_25:217",
                    x1: "226.775",
                    y1: "-66.1548",
                    x2: "292.157",
                    y2: "351.421",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7", stopOpacity: "0" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint4_linear_25:217",
                    x1: "184.521",
                    y1: "182.159",
                    x2: "184.521",
                    y2: "448.882",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint5_linear_25:217",
                    x1: "356",
                    y1: "110",
                    x2: "356",
                    y2: "470",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint6_linear_25:217",
                    x1: "118.524",
                    y1: "29.2497",
                    x2: "166.965",
                    y2: "338.63",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7", stopOpacity: "0" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "364",
            height: "201",
            viewBox: "0 0 364 201",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24",
                  stroke: "url(#paint0_linear_25:218)"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24",
                  stroke: "url(#paint1_linear_25:218)"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24",
                  stroke: "url(#paint2_linear_25:218)"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481",
                  stroke: "url(#paint3_linear_25:218)"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  opacity: "0.8",
                  cx: "214.505",
                  cy: "60.5054",
                  r: "49.7205",
                  transform: "rotate(-13.421 214.505 60.5054)",
                  stroke: "url(#paint4_linear_25:218)"
                }
              ),
              /* @__PURE__ */ jsx("circle", { cx: "220", cy: "63", r: "43", fill: "url(#paint5_radial_25:218)" }),
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint0_linear_25:218",
                    x1: "184.389",
                    y1: "69.2405",
                    x2: "184.389",
                    y2: "212.24",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint1_linear_25:218",
                    x1: "156.389",
                    y1: "69.2405",
                    x2: "156.389",
                    y2: "212.24",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint2_linear_25:218",
                    x1: "125.389",
                    y1: "69.2405",
                    x2: "125.389",
                    y2: "212.24",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint3_linear_25:218",
                    x1: "93.8507",
                    y1: "67.2674",
                    x2: "89.9278",
                    y2: "210.214",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "paint4_linear_25:218",
                    x1: "214.505",
                    y1: "10.2849",
                    x2: "212.684",
                    y2: "99.5816",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { stopColor: "#4A6CF7" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#4A6CF7", stopOpacity: "0" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "radialGradient",
                  {
                    id: "paint5_radial_25:218",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(220 63) rotate(90) scale(43)",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0.145833", stopColor: "white", stopOpacity: "0" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "white", stopOpacity: "0.08" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  ) });
};
function HomeFeatured() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-sm overflow-hidden rounded shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white", children: /* @__PURE__ */ jsxs("div", { className: "px-8 py-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://tailwindcss.com/img/jonathan.jpg", className: "mb-4 h-12 w-12 rounded-full" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("h4", { className: "mb-3 text-lg font-semibold", children: "How to be effective at working remotely?" }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-gray-600", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          className: "w-100"
        }
      ),
      /* @__PURE__ */ jsx("hr", { className: "mt-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs", children: "ARTICLE" }),
      " ",
      /* @__PURE__ */ jsx("span", { class: "text-xs text-gray-500", children: "PROCESS" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-sm overflow-hidden rounded shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white", children: /* @__PURE__ */ jsxs("div", { className: "px-8 py-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://tailwindcss.com/img/jonathan.jpg", className: "mb-4 h-12 w-12 rounded-full" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("h4", { className: "mb-3 text-lg font-semibold", children: "How to be effective at working remotely?" }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-gray-600", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          className: "w-100"
        }
      ),
      /* @__PURE__ */ jsx("hr", { className: "mt-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs", children: "ARTICLE" }),
      " ",
      /* @__PURE__ */ jsx("span", { class: "text-xs text-gray-500", children: "PROCESS" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-sm overflow-hidden rounded shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white", children: /* @__PURE__ */ jsxs("div", { className: "px-8 py-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://tailwindcss.com/img/jonathan.jpg", className: "mb-4 h-12 w-12 rounded-full" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("h4", { className: "mb-3 text-lg font-semibold", children: "How to be effective at working remotely?" }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-gray-600", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          className: "w-100"
        }
      ),
      /* @__PURE__ */ jsx("hr", { className: "mt-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs", children: "ARTICLE" }),
      " ",
      /* @__PURE__ */ jsx("span", { class: "text-xs text-gray-500", children: "PROCESS" })
    ] }) })
  ] }) }) }) });
}
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
const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "aria-label": "theme toggler",
      onClick: toggleTheme,
      className: "bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black md:h-14 md:w-14 dark:text-white",
      children: [
        /* @__PURE__ */ jsx("svg", { viewBox: "0 0 23 23", className: "h-5 w-5 stroke-current md:h-6 md:w-6 dark:hidden", fill: "none", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "hidden h-5 w-5 md:h-6 md:w-6 dark:block", children: [
          /* @__PURE__ */ jsx("mask", { id: "path-1-inside-1_977:1934", fill: "white", children: /* @__PURE__ */ jsx("path", { d: "M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z" }) }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z",
              fill: "black",
              stroke: "white",
              strokeWidth: "2",
              mask: "url(#path-1-inside-1_977:1934)"
            }
          )
        ] })
      ]
    }
  );
};
const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false
  },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
    newTab: false
  },
  {
    id: 5,
    title: "Kontakt",
    path: "/contact",
    newTab: false
  },
  {
    id: 6,
    title: "Kursy",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Kursy Online",
        path: "/courses/courses-online",
        newTab: false
      },
      {
        id: 62,
        title: "Kursy Offline",
        path: "/courses/courses-offline",
        newTab: false
      }
    ]
  },
  {
    id: 7,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "About Page",
        path: "/about",
        newTab: false
      },
      {
        id: 72,
        title: "Contact Page",
        path: "/contact",
        newTab: false
      },
      {
        id: 73,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false
      },
      {
        id: 74,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false
      },
      {
        id: 75,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false
      },
      {
        id: 76,
        title: "Sign In Page",
        path: "/signin",
        newTab: false
      },
      {
        id: 77,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false
      },
      {
        id: 78,
        title: "Error Page",
        path: "/error",
        newTab: false
      }
    ]
  }
];
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const { url } = usePage();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "header",
    {
      className: `header top-0 left-0 z-40 flex w-full items-center ${sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition" : "absolute bg-transparent"}`,
      children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "relative -mx-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "w-60 max-w-full px-4 xl:mr-12", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/",
            className: `header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"} `,
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/logo/logo-2.svg",
                  alt: "logo",
                  width: 140,
                  height: 30,
                  className: "w-full dark:hidden"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/logo/logo.svg",
                  alt: "logo",
                  width: 140,
                  height: 30,
                  className: "hidden w-full dark:block"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between px-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: navbarToggleHandler,
                id: "navbarToggler",
                "aria-label": "Mobile Menu",
                className: "ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[7px] rotate-45" : " "}`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : " "}`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[-8px] -rotate-45" : " "}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "nav",
              {
                id: "navbarCollapse",
                className: `navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"}`,
                children: /* @__PURE__ */ jsx("ul", { className: "block lg:flex lg:space-x-12", children: menuData.map((menuItem, index) => /* @__PURE__ */ jsx("li", { className: "group relative", children: menuItem.path ? /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: menuItem.path,
                    className: `flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${url === menuItem.path ? "text-primary dark:text-white" : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"}`,
                    children: menuItem.title
                  }
                ) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs(
                    "p",
                    {
                      onClick: () => handleSubmenu(index),
                      className: "text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white",
                      children: [
                        menuItem.title,
                        /* @__PURE__ */ jsx("span", { className: "pl-3", children: /* @__PURE__ */ jsx("svg", { width: "25", height: "24", viewBox: "0 0 25 24", children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z",
                            fill: "currentColor"
                          }
                        ) }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"}`,
                      children: menuItem.submenu.map((submenuItem, index2) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: submenuItem.path,
                          className: "text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white",
                          children: submenuItem.title
                        },
                        index2
                      ))
                    }
                  )
                ] }) }, index)) })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end pr-16 lg:pr-0", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/signin",
                className: "text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white",
                children: "Sign In"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/signup",
                className: "ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9",
                children: "Sign Up"
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ThemeToggler, {}) })
          ] })
        ] })
      ] }) })
    }
  ) });
};
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "className={`bg-[#FCFCFC] ${inter.className}`} dark:bg-black", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx("article", { children }) }),
    /* @__PURE__ */ jsx(Footer, { className: "mt-auto" })
  ] }) });
}
function Welcome() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(HomeFeatured, {})
  ] }) });
}
export {
  Welcome as default
};
