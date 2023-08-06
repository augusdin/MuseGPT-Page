import { j as jsxs, a as jsx, g as generateUtilityClass, b as generateUtilityClasses, s as styled, T as Typography, r as rootShouldForwardProp, c as react, u as useThemeProps, _ as _objectWithoutPropertiesLoose, d as _extends, e as clsx, f as composeClasses, h as requireCreateSvgIcon, i as interopRequireDefault, k as require$$2, S as Switch, l as useMediaQuery, R as React, m as createTheme, n as blueGrey, o as orange, p as ThemeProvider, C as CssBaseline, q as Container, A as AppBar, t as Toolbar, B as Box, v as logo, w as Snackbar, M as MuiAlert, N as NotionOAuthDialog, L as Link, x as TextField, y as default_1$3, z as LoadingButton, D as default_1$4, E as Dialog, F as DialogContent, G as DialogActions, H as initLocalBaseOption, I as initPromptOption, J as v4, K as createRoot } from "../../../assets/js/700.js";
import { i as i18n, a as addHmrIntoView } from "../../../assets/js/config.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const wizard = "";
const SvgComponent = (props) => /* @__PURE__ */ jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20,
  preserveAspectRatio: "none",
  viewBox: "0 0 650 650",
  ...props,
  children: [/* @__PURE__ */ jsx("title", {
    children: "NotionLogo"
  }), /* @__PURE__ */ jsx("path", {
    d: "m186.84 13.95c-79.06 5.85-146.27 11.23-149.43 11.86-8.86 1.58-16.92 7.59-20.71 15.5l-3.32 6.96.32 165.88.47 165.88 5.06 10.28c2.85 5.69 22.14 32.26 43.17 59.61 41.59 53.92 44.59 56.93 60.4 58.51 4.59.47 39.06-1.11 76.38-3.32 37.48-2.37 97.56-6.01 133.62-8.06 154.01-9.35 146.1-8.56 154.95-16.15 11.07-9.17 10.28 5.85 10.75-195.76.32-170.94.16-182.16-2.37-187.38-3-5.85-8.38-9.96-78.59-59.3-46.96-32.89-50.28-34.63-71.32-34.95-8.69-.31-80.48 4.43-159.38 10.44zm177.73 21.66c6.64 3 55.19 36.84 62.3 43.33 1.9 1.9 2.53 3.48 1.58 4.43-2.21 1.9-302.66 19.77-311.35 18.5-3.95-.63-9.8-3-13.12-5.22-13.76-9.33-47.91-37.32-47.91-39.37 0-5.38-1.11-5.38 132.83-15.02 25.62-1.74 67.68-4.9 93.3-6.96 55.49-4.43 72.1-4.27 82.37.31zm95.51 86.5c2.21 2.21 4.11 6.48 4.74 10.59.47 3.8.79 74.64.47 157.18-.47 141.68-.63 150.54-3.32 154.65-1.58 2.53-4.74 5.22-7.12 6.01-6.63 2.69-321.46 20.56-327.94 18.66-3-.79-7.12-3.32-9.33-5.53l-3.8-4.11-.47-152.75c-.32-107.21 0-154.65 1.27-158.92.95-3.16 3.32-6.96 5.38-8.22 2.85-1.9 21.51-3.48 85.71-7.27 45.07-2.53 114.8-6.8 154.81-9.17 95.17-5.86 94.86-5.86 99.6-1.12z"
  }), /* @__PURE__ */ jsx("path", {
    d: "m375.48 174.45c-17.08 1.11-32.26 2.69-34 3.64-5.22 2.69-8.38 7.12-9.01 12.18-.47 5.22 1.11 5.85 18.18 7.91l7.43.95v67.52c0 40.16-.63 66.73-1.42 65.94-.79-.95-23.24-35.1-49.97-75.9-26.72-40.95-48.86-74.64-49.18-74.95-.32-.32-17.71.63-38.58 2.06-25.62 1.74-39.69 3.32-42.54 4.9-4.59 2.37-9.65 10.75-9.65 16.29 0 3.32 6.01 5.06 18.66 5.06h6.64v194.18l-10.75 3.32c-8.38 2.53-11.23 4.11-12.65 7.27-2.53 5.38-2.37 10.28.16 10.28.95 0 18.82-1.11 39.37-2.37 40.64-2.37 45.22-3.48 49.49-11.86 1.27-2.53 2.37-5.22 2.37-6.01 0-.63-5.53-2.53-12.18-4.11-6.8-1.58-13.6-3.16-15.02-3.48-2.69-.79-2.85-5.69-2.85-73.69v-72.9l48.07 75.43c50.44 79.06 56.77 88.08 64.52 92.03 9.65 5.06 34.16 1.58 46.49-6.48l3.8-2.37.32-107.84.47-108 8.38-1.58c9.96-1.9 14.55-6.48 14.55-14.39 0-5.06-.32-5.38-5.06-5.22-2.83.13-19.12 1.08-36.04 2.19z"
  })]
});
const showHowToUseGif = "/assets/gif/imgShow_how_to_start.chunk.gif";
function getDialogContentTextUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContentText", slot);
}
generateUtilityClasses("MuiDialogContentText", ["root"]);
const _excluded = ["children", "className"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getDialogContentTextUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const DialogContentTextRoot = styled(Typography, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
const DialogContentText = /* @__PURE__ */ react.exports.forwardRef(function DialogContentText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogContentText"
  });
  const {
    className
  } = props, ownerState = _objectWithoutPropertiesLoose(props, _excluded);
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsx(DialogContentTextRoot, _extends({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, props, {
    classes
  }));
});
const DialogContentText$1 = DialogContentText;
var ErrorOutlineOutlined = {};
var _interopRequireDefault$2 = interopRequireDefault.exports;
Object.defineProperty(ErrorOutlineOutlined, "__esModule", {
  value: true
});
var default_1$2 = ErrorOutlineOutlined.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = require$$2;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutlineOutlined");
default_1$2 = ErrorOutlineOutlined.default = _default$2;
var ReportProblemOutlined = {};
var _interopRequireDefault$1 = interopRequireDefault.exports;
Object.defineProperty(ReportProblemOutlined, "__esModule", {
  value: true
});
var default_1$1 = ReportProblemOutlined.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = require$$2;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");
default_1$1 = ReportProblemOutlined.default = _default$1;
var SettingsOutlined = {};
var _interopRequireDefault = interopRequireDefault.exports;
Object.defineProperty(SettingsOutlined, "__esModule", {
  value: true
});
var default_1 = SettingsOutlined.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
}), "SettingsOutlined");
default_1 = SettingsOutlined.default = _default;
const MaterialUISwitch = styled(Switch)(({
  theme
}) => ({
  width: 46,
  height: 24,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(16px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : theme.palette.secondary.main
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.primary.main,
    width: 22,
    height: 22,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));
const Wizard = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [userChosenDark, setUserChosenDark] = react.exports.useState(prefersDarkMode);
  const [toastState, setToastState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    toastMessage: i18n("panel_default_toast_state_message"),
    severity: "info",
    duration: 4e3
  });
  const {
    open: toastOpen
  } = toastState;
  const [openAIApiKeyValue, setOpenAIApiKeyValue] = react.exports.useState("");
  const [apiKeyValueInvalidText, setApiKeyValueInvalidText] = react.exports.useState(i18n("option_setup_apiKeyValueInvalidText"));
  const [finishedFistStep, setFinishedFistStep] = react.exports.useState(false);
  const [isFinishNotionOAuth, setIsFinishNotionOAuth] = react.exports.useState(false);
  const [isChooseNotOAuthNotion, setIsChooseNotOAuthNotion] = react.exports.useState(false);
  const [isFinishAll, setIsFinishAll] = react.exports.useState(false);
  const [isNotionStateLoading, setIsNotionStateLoading] = react.exports.useState(false);
  const [isConfirmChooseNotOAuthNotionOpen, setIsConfirmChooseNotOAuthNotionOpen] = react.exports.useState(false);
  const [isNotionOAuthDialogOpen, setIsNotionOAuthDialogOpen] = react.exports.useState(false);
  const theme = react.exports.useMemo(() => createTheme({
    shape: {
      borderRadius: 8
    },
    palette: {
      primary: {
        light: blueGrey[200],
        main: blueGrey[300],
        dark: blueGrey[500],
        contrastText: "#fff"
      },
      secondary: {
        light: orange[600],
        main: orange[400],
        dark: orange[300],
        contrastText: "#000"
      },
      mode: userChosenDark ? "dark" : "light"
    },
    typography: {
      h6: {
        fontWeight: 500,
        fontSize: 18
      },
      body1: {
        fontSize: 16
      }
    }
  }), [userChosenDark]);
  const init2 = async () => {
    const museOption = await initLocalBaseOption();
    if (museOption && museOption.openAIApiKey && museOption.openAIApiKey !== "") {
      console.log("openai key \u662F\u6709\u7684");
      setOpenAIApiKeyValue(museOption.openAIApiKey);
      setApiKeyValueInvalidText("");
      setFinishedFistStep(true);
    }
    initPromptOption();
  };
  react.exports.useEffect(() => {
    init2();
    const checkNotioState = async () => {
      const isNotionOAuth = await checkNotionOAuth();
      if (isNotionOAuth) {
        setIsFinishNotionOAuth(true);
        setIsFinishAll(true);
      } else {
        setIsFinishNotionOAuth(false);
      }
    };
    checkNotioState();
    const handleBlur = () => {
      console.log("\u9875\u9762\u5931\u7126");
    };
    const handleFocus = () => {
      console.log("\u9875\u9762\u56DE\u5230\u7126\u70B9");
      checkNotioState();
    };
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
  react.exports.useEffect(() => {
    setUserChosenDark(prefersDarkMode);
  }, [prefersDarkMode]);
  const handleThemSwitchChange = (e) => {
    setUserChosenDark((prevMode) => !prevMode);
  };
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToastState({
      vertical: "top",
      horizontal: "center",
      open: false,
      toastMessage: i18n("panel_default_toast_state_message"),
      severity: "info",
      duration: 4e3
    });
  };
  const validateAPIKeyValue = async (apiKeyValue) => {
    if (apiKeyValue.trim().length === 0) {
      setApiKeyValueInvalidText(i18n("option_setup_apiKeyValueInvalidText"));
    } else {
      if (apiKeyValue.startsWith("sk-") && apiKeyValue.length >= 50) {
        setApiKeyValueInvalidText("");
        const museOptions = await initLocalBaseOption();
        const newMuseOption = {
          ...museOptions,
          openAIApiKey: apiKeyValue
        };
        await chrome.storage.local.set({
          museOptions: newMuseOption
        });
        console.log("key value saved:", newMuseOption);
        showToast(i18n("wizard_toast_save_secret_key"), "success");
        setFinishedFistStep(true);
      } else {
        setApiKeyValueInvalidText(i18n("wizard_toast_invalid_key"));
      }
    }
  };
  const handleAPIKeyTextFieldChange = (event) => {
    const newValue = event.target.value;
    setOpenAIApiKeyValue(newValue);
    validateAPIKeyValue(newValue);
  };
  const handleAPIKeyTextFieldFocus = (event) => {
    event.target.select();
  };
  const handleNotionBtnClick = async () => {
    setIsNotionOAuthDialogOpen(true);
  };
  const handleChooseNotOAuthNotionBtnClick = (event) => {
    setIsConfirmChooseNotOAuthNotionOpen(true);
  };
  const handleConfirmChooseNotOAuthNotionDialogClose = (event, isConfirm) => {
    if (isConfirm) {
      setIsChooseNotOAuthNotion(true);
      setIsFinishAll(true);
    }
    setIsConfirmChooseNotOAuthNotionOpen(false);
  };
  const fetchInBackground = async (url, options) => {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({
        method: "http-fetch",
        url,
        options
      }, (response) => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response.data);
        }
      });
    });
  };
  const finishNotionOAuth = async () => {
    const localUuid = v4();
    console.log("\u672C\u5730\u751F\u6210\u7684localUuid:", localUuid);
    chrome.storage.local.set({
      localUuid
    });
    const clientId = "d75836e5-9a73-4307-958f-10d58d366894";
    const encodeRedirectUri = encodeURIComponent("https://api.musegpt.net/v1/oauth2/notion/redirect");
    const notionURL = `https://api.notion.com/v1/oauth/authorize?client_id=${clientId}&response_type=code&owner=user&state=${localUuid}&redirect_uri=${encodeRedirectUri}`;
    window.open(notionURL, "_blank");
  };
  const checkNotionOAuth = async () => {
    const localStore = await chrome.storage.local.get(["localUuid"]);
    if (!localStore.localUuid) {
      return false;
    }
    console.log("\u672C\u5730\u6709localUuid");
    const nidStore = await chrome.storage.local.get(["userNId"]);
    if (!nidStore.userNId) {
      setIsNotionStateLoading(true);
      try {
        console.log("\u4F46\u6CA1\u6709userNid,\u53BB\u670D\u52A1\u5668\u8BF7\u6C42");
        const nidUrl = `https://api.musegpt.net/v1/users/nid/${localStore.localUuid}`;
        console.log("fetching url:", nidUrl);
        const response = await fetchInBackground(nidUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer whatever`
          }
        });
        console.warn("in content script fetch response:", response);
        if (response.data && response.data.nid) {
          const userNId = response.data.nid;
          await chrome.storage.local.set({
            userNId
          });
          setIsNotionStateLoading(false);
          return true;
        } else {
          setIsNotionStateLoading(false);
          console.error("\u672C\u5730\u7684uuid\u65E0\u6548\uFF0COAuth\u8BA4\u8BC1\u672A\u5B8C\u6210\uFF0C\u9700\u8981\u7EE7\u7EED\u5B8C\u6210");
          return false;
        }
      } catch (error2) {
        setIsNotionStateLoading(false);
        console.error("fetch server error:", error2);
        showToast(i18n("option_setup_notion_check_fetch_error"), "error", 5e3);
        return false;
      } finally {
        setIsNotionStateLoading(false);
      }
    } else {
      return true;
    }
  };
  const showToast = (message, severity = "info", duration = 4e3) => {
    setToastState({
      vertical: "top",
      horizontal: "center",
      open: true,
      toastMessage: message,
      severity,
      duration
    });
  };
  const handleRedirectToOptionBtnClick = (e) => {
    window.location.reload();
  };
  const handleClosePageBtnClick = (e) => {
    window.close();
  };
  const handleNotionOAuthDialogClose = (isContinue) => {
    if (isContinue) {
      finishNotionOAuth();
    }
    setIsNotionOAuthDialogOpen(false);
  };
  return /* @__PURE__ */ jsxs(ThemeProvider, {
    theme,
    children: [/* @__PURE__ */ jsx(CssBaseline, {}), /* @__PURE__ */ jsxs(Container, {
      maxWidth: "md",
      children: [/* @__PURE__ */ jsx(AppBar, {
        position: "static",
        children: /* @__PURE__ */ jsxs(Toolbar, {
          style: {
            minHeight: "54px",
            display: "flex"
          },
          children: [/* @__PURE__ */ jsx(Box, {
            mr: 2,
            children: /* @__PURE__ */ jsx("img", {
              src: logo,
              alt: "logo",
              style: {
                height: "28px",
                width: "28px"
              }
            })
          }), /* @__PURE__ */ jsx(Typography, {
            variant: "h6",
            children: "MuseGPT Page"
          }), /* @__PURE__ */ jsx(Box, {
            style: {
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end"
            },
            mr: -1,
            children: /* @__PURE__ */ jsx(MaterialUISwitch, {
              sx: {
                m: 1
              },
              checked: userChosenDark,
              onChange: handleThemSwitchChange
            })
          })]
        })
      }), /* @__PURE__ */ jsx(Snackbar, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        open: toastOpen,
        autoHideDuration: toastState.duration,
        onClose: handleToastClose,
        children: /* @__PURE__ */ jsx(MuiAlert, {
          variant: "standard",
          onClose: handleToastClose,
          severity: toastState.severity,
          sx: {
            width: "100%"
          },
          children: toastState.toastMessage
        })
      }), /* @__PURE__ */ jsxs(Container, {
        maxWidth: "sm",
        sx: {
          marginTop: 6,
          bgcolor: "background.paper"
        },
        children: [/* @__PURE__ */ jsx(NotionOAuthDialog, {
          theme,
          open: isNotionOAuthDialogOpen,
          onClose: handleNotionOAuthDialogClose
        }), /* @__PURE__ */ jsx(Typography, {
          variant: "h4",
          sx: {
            textAlign: "center"
          },
          children: i18n("wizard_welcome_title")
        }), /* @__PURE__ */ jsxs(Typography, {
          mt: 2,
          variant: "h6",
          sx: {
            textAlign: "center"
          },
          children: [i18n("wizard_welcome_tips1"), /* @__PURE__ */ jsx(Typography, {
            sx: {
              fontSize: "inherit"
            },
            component: "span",
            color: "error",
            children: ` ${i18n("wizard_welcome_tips2")} `
          }), i18n("wizard_welcome_tips3")]
        }), /* @__PURE__ */ jsxs(Box, {
          sx: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          },
          children: [/* @__PURE__ */ jsxs(Typography, {
            mt: 2,
            variant: "body1",
            sx: {
              textAlign: "center"
            },
            children: [/* @__PURE__ */ jsx(Typography, {
              component: "span",
              color: "error",
              mt: 0.5,
              children: "*"
            }), i18n("wizard_first_step_label1"), /* @__PURE__ */ jsx(Link, {
              sx: {
                "&:hover": {
                  color: theme.palette.text.primary
                }
              },
              rel: "noopener",
              target: "_blank",
              color: "primary",
              underline: "none",
              href: "https://platform.openai.com/account/api-keys",
              children: i18n("wizard_first_step_link_label")
            }), i18n("wizard_first_step_label2")]
          }), /* @__PURE__ */ jsxs(Box, {
            sx: {
              mt: 1,
              display: "flex",
              alignItems: "center"
            },
            children: [/* @__PURE__ */ jsx(
              TextField,
              {
                sx: {
                  zIndex: 5,
                  minWidth: 550,
                  flex: 1,
                  marginRight: 2
                },
                id: "textFiledOpenAIKey",
                label: i18n("options_setup_openai_key_textfield_label"),
                variant: "outlined",
                size: "small",
                value: openAIApiKeyValue,
                onChange: handleAPIKeyTextFieldChange,
                onFocus: handleAPIKeyTextFieldFocus,
                color: apiKeyValueInvalidText === "" ? "success" : "error",
                helperText: apiKeyValueInvalidText,
                error: apiKeyValueInvalidText !== ""
              }
            ), apiKeyValueInvalidText === "" ? /* @__PURE__ */ jsx(default_1$3, {
              color: "success"
            }) : /* @__PURE__ */ jsx(default_1$2, {
              sx: {
                marginTop: -3
              },
              color: "error"
            })]
          }), finishedFistStep ? /* @__PURE__ */ jsxs(Box, {
            sx: {
              textAlign: "center"
            },
            children: [/* @__PURE__ */ jsx(Typography, {
              mt: 6,
              variant: "body1",
              children: i18n("wizard_seccend_step_label")
            }), !isFinishNotionOAuth ? /* @__PURE__ */ jsx(Box, {
              children: /* @__PURE__ */ jsxs(Box, {
                sx: {
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between"
                },
                children: [/* @__PURE__ */ jsx(LoadingButton, {
                  color: "secondary",
                  loading: isNotionStateLoading,
                  startIcon: /* @__PURE__ */ jsx(SvgComponent, {
                    style: {
                      fill: "rgba(0, 0, 0, 0.85)",
                      marginTop: "4px"
                    }
                  }),
                  sx: {
                    minWidth: 120,
                    ml: 10
                  },
                  size: "medium",
                  variant: "contained",
                  onClick: handleNotionBtnClick,
                  children: /* @__PURE__ */ jsx("span", {
                    style: {
                      whiteSpace: "nowrap"
                    },
                    children: i18n("wizard_notion_oauth_btn")
                  })
                }), /* @__PURE__ */ jsx(LoadingButton, {
                  color: "secondary",
                  loading: isNotionStateLoading,
                  sx: {
                    ml: 4,
                    minWidth: 120,
                    mr: 10
                  },
                  size: "medium",
                  variant: "outlined",
                  onClick: handleChooseNotOAuthNotionBtnClick,
                  children: /* @__PURE__ */ jsx("span", {
                    style: {
                      whiteSpace: "nowrap"
                    },
                    children: i18n("wizard_notion_not_now_oauth_btn")
                  })
                })]
              })
            }) : /* @__PURE__ */ jsxs(Box, {
              sx: {
                color: "success.main",
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: [/* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                sx: {
                  mr: 1,
                  textAlign: "center"
                },
                children: i18n("wizard_notion_finished_oauth")
              }), /* @__PURE__ */ jsx(default_1$3, {
                sx: {
                  width: 15,
                  height: 15
                }
              })]
            })]
          }) : null, isChooseNotOAuthNotion ? /* @__PURE__ */ jsxs(Box, {
            sx: {
              color: "warning.main",
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [/* @__PURE__ */ jsx(Typography, {
              variant: "h6",
              sx: {
                mr: 1,
                textAlign: "center"
              },
              children: i18n("wizard_notion_not_finish_oauth")
            }), /* @__PURE__ */ jsx(default_1$1, {
              sx: {
                width: 15,
                height: 15
              }
            })]
          }) : null]
        }), isFinishAll ? /* @__PURE__ */ jsxs(Box, {
          children: [/* @__PURE__ */ jsxs(Box, {
            children: [/* @__PURE__ */ jsx(Typography, {
              variant: "h5",
              sx: {
                mt: 4,
                textAlign: "center"
              },
              children: i18n("wizard_congratulations_finish_text1")
            }), /* @__PURE__ */ jsx(Typography, {
              variant: "h5",
              sx: {
                textAlign: "center"
              },
              children: i18n("wizard_congratulations_finish_text2")
            })]
          }), /* @__PURE__ */ jsxs(Box, {
            sx: {
              mt: 1,
              display: "flex",
              justifyContent: "space-between"
            },
            children: [/* @__PURE__ */ jsx(LoadingButton, {
              color: "secondary",
              startIcon: /* @__PURE__ */ jsx(default_1$4, {}),
              sx: {
                minWidth: 140,
                ml: 15
              },
              size: "medium",
              variant: "contained",
              onClick: handleClosePageBtnClick,
              children: /* @__PURE__ */ jsx("span", {
                style: {
                  whiteSpace: "nowrap"
                },
                children: i18n("wizard_close_page_btn")
              })
            }), /* @__PURE__ */ jsx(LoadingButton, {
              color: "secondary",
              sx: {
                ml: 4,
                minWidth: 170,
                mr: 15
              },
              size: "medium",
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsx(default_1, {}),
              onClick: handleRedirectToOptionBtnClick,
              children: /* @__PURE__ */ jsx("span", {
                style: {
                  whiteSpace: "nowrap"
                },
                children: i18n("wizard_redirect_to_option")
              })
            })]
          }), /* @__PURE__ */ jsx(Box, {
            children: /* @__PURE__ */ jsxs(Typography, {
              variant: "body1",
              sx: {
                mt: 4,
                textAlign: "center"
              },
              children: [/* @__PURE__ */ jsx(Typography, {
                sx: {
                  textAlign: "center",
                  mb: 1
                },
                children: i18n("wizard_congratulations_finish_how_to_use_text1")
              }), /* @__PURE__ */ jsx(Container, {
                maxWidth: "sm",
                sx: {
                  textAlign: "center",
                  mb: 1
                },
                children: /* @__PURE__ */ jsx("img", {
                  width: "400px",
                  src: chrome.runtime.getURL(showHowToUseGif),
                  alt: "buy Me a Coffee"
                })
              }), /* @__PURE__ */ jsxs(Typography, {
                sx: {
                  textAlign: "center",
                  mb: 4
                },
                children: [i18n("wizard_congratulations_finish_how_to_use_text2"), /* @__PURE__ */ jsx("br", {}), "\uF8FF Mac: Command+Shift+X (Mac)", /* @__PURE__ */ jsx("br", {}), "\u{1FA9F} Win: Ctrl+Shift+X (Windows)"]
              })]
            })
          })]
        }) : null, /* @__PURE__ */ jsxs(Dialog, {
          open: isConfirmChooseNotOAuthNotionOpen,
          "aria-describedby": "confirm-delete-dialog-description",
          children: [/* @__PURE__ */ jsx(DialogContent, {
            children: /* @__PURE__ */ jsxs(DialogContentText$1, {
              id: "confirm-delete-dialog-description",
              children: [i18n("wizard_not_now_notion_oauth_dialog_content_text1"), /* @__PURE__ */ jsx("br", {}), i18n("wizard_not_now_notion_oauth_dialog_content_text2")]
            })
          }), /* @__PURE__ */ jsxs(DialogActions, {
            children: [/* @__PURE__ */ jsx(
              LoadingButton,
              {
                size: "medium",
                variant: "outlined",
                color: "secondary",
                onClick: (event) => handleConfirmChooseNotOAuthNotionDialogClose(event, true),
                children: /* @__PURE__ */ jsx("span", {
                  children: i18n("wizard_not_now_notion_oauth_dialog_confirm_btn")
                })
              }
            ), /* @__PURE__ */ jsx(LoadingButton, {
              autoFocus: true,
              sx: {
                marginLeft: 2
              },
              size: "medium",
              variant: "contained",
              color: "secondary",
              onClick: (event) => handleConfirmChooseNotOAuthNotionDialogClose(event, false),
              children: /* @__PURE__ */ jsx("span", {
                children: i18n("wizard_not_now_notion_oauth_dialog_cancel_btn")
              })
            })]
          })]
        })]
      })]
    })]
  });
};
const index = "";
addHmrIntoView("pages/options");
async function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const {
    museOptions
  } = await chrome.storage.local.get(["museOptions"]);
  const museOption = museOptions;
  console.log("index->Options:", museOption);
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsx(Wizard, {}));
}
init();
