var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VMJJXCZV.css";

// app/root.tsx
var import_react5 = require("@remix-run/react");

// app/componets/nav.tsx
var import_react2 = require("react"), import_ai = require("react-icons/ai"), import_fa = require("react-icons/fa"), import_ci = require("react-icons/ci");

// app/componets/list.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function List(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: `flex ${props.className}`, children: props.children }, void 0, !1, {
    fileName: "app/componets/list.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/list.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/componets/listItem.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function ListItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: `flex hover:cursor-pointer ${props.className}`, children: props.children }, void 0, !1, {
    fileName: "app/componets/listItem.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/listItem.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/componets/nav.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("@material-tailwind/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), data = [
  {
    name: "Dashboard",
    link: "./",
    icon: import_ai.AiOutlineHome
  },
  {
    name: "Stock",
    link: "/stocks",
    icon: import_ci.CiBag1
  },
  {
    name: "Reports",
    link: "./",
    icon: import_ai.AiOutlinePieChart
  },
  {
    name: "Accounts",
    link: "./",
    icon: import_fa.FaUsersCog
  }
];
function NavBar() {
  let [open, setOpen] = (0, import_react2.useState)(!1), handleMobile = () => setOpen(!open);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed flex flex-row gap-4 bg-blue-900 text-white w-full h-auto z-1 p-4 mb-28", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-2/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Typography, { variant: "h4", className: "text-bold", children: "Cement" }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:block lg:w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(List, { className: "flex-row gap-2 float-right", children: data.map((links2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItem, { className: "flex-row gap-1 place-content-center align-center mx-auto hover:bg-blue-500 hover:rounded-md p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(links2.icon, { className: "w-5 h-5" }, void 0, !1, {
          fileName: "app/componets/nav.tsx",
          lineNumber: 52,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.NavLink, { to: links2.link, children: links2.name }, void 0, !1, {
          fileName: "app/componets/nav.tsx",
          lineNumber: 53,
          columnNumber: 33
        }, this)
      ] }, links2.name, !0, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 51,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute right-[60px] top-5 lg:hidden", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_ai.AiOutlineClose, { className: "text-[#0068ff] hover:cursor-pointer h-8 w-8 p-1 rounded-full", onClick: handleMobile }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 62,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_ai.AiOutlineMenu, { className: "text-[#0068ff] hover:cursor-pointer font-semibold h-8 w-8 p-1 rounded-full", onClick: handleMobile }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/nav.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: open ? "absolute bg-white top-12 right-3 z-[2] p-4 rounded-lg border-[1px] border-gray-600  lg:hidden" : "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(List, { className: "flex-col gap-2", children: data.map((links2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItem, { className: "flex-row gap-1 hover:bg-blue-500 hover:rounded-md p-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(links2.icon, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 70,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.NavLink, { to: links2.link, children: links2.name }, void 0, !1, {
        fileName: "app/componets/nav.tsx",
        lineNumber: 71,
        columnNumber: 29
      }, this)
    ] }, links2.name, !0, {
      fileName: "app/componets/nav.tsx",
      lineNumber: 69,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/componets/nav.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/componets/nav.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/nav.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavBar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];

// app/routes/stocks.tsx
var stocks_exports = {};
__export(stocks_exports, {
  default: () => stocks_default
});

// app/componets/pagetitle.tsx
var import_react6 = require("@material-tailwind/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function PageTitle(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Typography, { variant: "h3", className: "font-bold text-xl", children: props.title }, void 0, !1, {
    fileName: "app/componets/pagetitle.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/pagetitle.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var pagetitle_default = PageTitle;

// app/componets/stock/newstock.tsx
var import_react7 = require("@material-tailwind/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NewStock() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-3 mt-9", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Add new stock item" }, void 0, !1, {
      fileName: "app/componets/stock/newstock.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/componets/stock/newstock.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-y-4 md:w-1/4 gap-x-4 md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Input, { type: "text", label: "Product Name" }, void 0, !1, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Input, { type: "text", label: "Product Code" }, void 0, !1, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Input, { type: "text", label: "Product Manufacturer" }, void 0, !1, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Input, { type: "text", label: "Quantity" }, void 0, !1, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Button, { children: "Add" }, void 0, !1, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/stock/newstock.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/stock/newstock.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var newstock_default = NewStock;

// app/componets/table.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Table(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("table", { className: "mt-4 w-full text-left border-[1px] rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("thead", { className: "p-4 bg-gray-600 text-white", children: props.Head.map((head) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { children: head }, void 0, !1, {
      fileName: "app/componets/table.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/componets/table.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { className: "p-4", children: props.data.map(({ name, Code, Manufacturer, Quantity }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { className: index % 2 == 0 ? "bg-gray-400" : "bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: name }, void 0, !1, {
        fileName: "app/componets/table.tsx",
        lineNumber: 30,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: Code }, void 0, !1, {
        fileName: "app/componets/table.tsx",
        lineNumber: 31,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: Manufacturer }, void 0, !1, {
        fileName: "app/componets/table.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: `${Quantity}` }, void 0, !1, {
        fileName: "app/componets/table.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/table.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/componets/table.tsx",
      lineNumber: 26,
      columnNumber: 12
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/table.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/table.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/componets/stock/instock.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Head = ["Name", "Code", "Manufacturer", "Quantity"], data2 = [
  {
    name: "Cement 1",
    Code: "C1",
    Manufacturer: "Lafage",
    Quantity: 300
  },
  {
    name: "Cement 3",
    Code: "C3",
    Manufacturer: "Lafage",
    Quantity: 300
  },
  {
    name: "Cement 4",
    Code: "C4",
    Manufacturer: "Lafage",
    Quantity: 300
  }
];
function InStock() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col mt-6 w-full md:w-3/4 lg:w-2/4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Instock" }, void 0, !1, {
      fileName: "app/componets/stock/instock.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Table, { Head, data: data2 }, void 0, !1, {
      fileName: "app/componets/stock/instock.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/componets/stock/instock.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/stock/instock.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/stocks.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Stocks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative flex flex-col p-6 top-28 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(pagetitle_default, { title: "Stock Management" }, void 0, !1, {
      fileName: "app/routes/stocks.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(newstock_default, {}, void 0, !1, {
      fileName: "app/routes/stocks.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(InStock, {}, void 0, !1, {
      fileName: "app/routes/stocks.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/stocks.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var stocks_default = Stocks;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function _index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var index_default = _index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RUSYJJD7.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-WV4AJGMH.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-U2Y3RCQT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ORE5CMOZ.js", imports: ["/build/_shared/chunk-GGVPD3LR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IJORHA7V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stocks": { id: "routes/stocks", parentId: "root", path: "stocks", index: void 0, caseSensitive: void 0, module: "/build/routes/stocks-RASMHTZ5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "783e264f", hmr: { runtime: "/build/_shared\\chunk-U2Y3RCQT.js", timestamp: 1700755740213 }, url: "/build/manifest-783E264F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/stocks": {
    id: "routes/stocks",
    parentId: "root",
    path: "stocks",
    index: void 0,
    caseSensitive: void 0,
    module: stocks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
