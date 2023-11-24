import {
  require_react
} from "/build/_shared/chunk-GGVPD3LR.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-U2Y3RCQT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/componets/pagetitle.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\pagetitle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\pagetitle.tsx"
  );
  import.meta.hot.lastModified = "1699877510254.2695";
}
function PageTitle(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Typography, { variant: "h3", className: "font-bold text-xl", children: props.title }, void 0, false, {
    fileName: "app/componets/pagetitle.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/pagetitle.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = PageTitle;
var pagetitle_default = PageTitle;
var _c;
$RefreshReg$(_c, "PageTitle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/stock/newstock.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\stock\\\\newstock.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\stock\\newstock.tsx"
  );
  import.meta.hot.lastModified = "1700753472058.7644";
}
function NewStock() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-3 mt-9", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Add new stock item" }, void 0, false, {
      fileName: "app/componets/stock/newstock.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/componets/stock/newstock.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-y-4 md:w-1/4 gap-x-4 md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Input, { type: "text", label: "Product Name" }, void 0, false, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Input, { type: "text", label: "Product Code" }, void 0, false, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Input, { type: "text", label: "Product Manufacturer" }, void 0, false, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Input, { type: "text", label: "Quantity" }, void 0, false, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Button, { children: "Add" }, void 0, false, {
        fileName: "app/componets/stock/newstock.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/componets/stock/newstock.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/componets/stock/newstock.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = NewStock;
var newstock_default = NewStock;
var _c2;
$RefreshReg$(_c2, "NewStock");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/table.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\table.tsx"
  );
  import.meta.hot.lastModified = "1700755739002.6562";
}
function Table(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "mt-4 w-full text-left border-[1px] rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "p-4 bg-gray-600 text-white", children: props.Head.map((head) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { children: head }, void 0, false, {
      fileName: "app/componets/table.tsx",
      lineNumber: 26,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/componets/table.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { className: "p-4", children: props.data.map(({
      name,
      Code,
      Manufacturer,
      Quantity
    }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: index % 2 == 0 ? "bg-gray-400" : "bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { children: name }, void 0, false, {
        fileName: "app/componets/table.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { children: Code }, void 0, false, {
        fileName: "app/componets/table.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { children: Manufacturer }, void 0, false, {
        fileName: "app/componets/table.tsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { children: `${Quantity}` }, void 0, false, {
        fileName: "app/componets/table.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/componets/table.tsx",
      lineNumber: 34,
      columnNumber: 22
    }, this)) }, void 0, false, {
      fileName: "app/componets/table.tsx",
      lineNumber: 28,
      columnNumber: 12
    }, this)
  ] }, void 0, true, {
    fileName: "app/componets/table.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/table.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c3 = Table;
var _c3;
$RefreshReg$(_c3, "Table");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/stock/instock.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\stock\\\\instock.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\stock\\instock.tsx"
  );
  import.meta.hot.lastModified = "1700754054699.865";
}
var Head = ["Name", "Code", "Manufacturer", "Quantity"];
var data = [{
  name: "Cement 1",
  Code: "C1",
  Manufacturer: "Lafage",
  Quantity: 300
}, {
  name: "Cement 3",
  Code: "C3",
  Manufacturer: "Lafage",
  Quantity: 300
}, {
  name: "Cement 4",
  Code: "C4",
  Manufacturer: "Lafage",
  Quantity: 300
}];
function InStock() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col mt-6 w-full md:w-3/4 lg:w-2/4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Instock" }, void 0, false, {
      fileName: "app/componets/stock/instock.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Table, { Head, data }, void 0, false, {
      fileName: "app/componets/stock/instock.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/componets/stock/instock.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/componets/stock/instock.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c4 = InStock;
var _c4;
$RefreshReg$(_c4, "InStock");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/stocks.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\stocks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\stocks.tsx"
  );
  import.meta.hot.lastModified = "1699898263472.1477";
}
function Stocks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative flex flex-col p-6 top-28 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(pagetitle_default, { title: "Stock Management" }, void 0, false, {
      fileName: "app/routes/stocks.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(newstock_default, {}, void 0, false, {
      fileName: "app/routes/stocks.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InStock, {}, void 0, false, {
      fileName: "app/routes/stocks.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/stocks.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c5 = Stocks;
var stocks_default = Stocks;
var _c5;
$RefreshReg$(_c5, "Stocks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stocks_default as default
};
//# sourceMappingURL=/build/routes/stocks-RASMHTZ5.js.map
