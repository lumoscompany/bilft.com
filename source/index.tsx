import "@fontsource-variable/inter";
import { render } from "solid-js/web";
import "./index.css";

import {
  getProfileId,
  getSelfUserId,
  isEqualIds,
  platform,
  removePrefix,
  themeParams,
} from "@/common";
import { ProfilePage } from "@/features/ProfilePage/ProfilePage";
import { SetupTonWallet } from "@/features/SetupTonWallet";
import { TonConnectProvider } from "@/lib/ton-connect-solid";
import { Route } from "@solidjs/router";
import {
  bindThemeParamsCSSVars,
  initNavigator,
  on,
  postEvent,
  type BrowserNavigatorAnyHistoryItem,
} from "@tma.js/sdk";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { Toaster } from "solid-sonner";
import { CommentsPage } from "./features/CommentsPage/CommentsPage";
import { KeyboardStatusProvider } from "./features/keyboardStatus";
import { createRouterWithPageTransition } from "./features/pageTransitions";
import { useFixSafariScroll } from "./features/safariScrollFix";
import { ScreenSizeProvider } from "./features/screenSize";
import { AppQueryClientProvider } from "./queryClient";

const getTonconnectManifestUrl = () => {
  const url = new URL(window.location.href);
  url.hash = "";
  for (const [key] of url.searchParams) {
    url.searchParams.delete(key);
  }

  url.pathname = "tonconnect-manifest.json";
  return url.toString();
};

bindThemeParamsCSSVars(themeParams);

const createTgScreenSize = () => {
  const [width, setWidth] = createSignal(window.innerWidth);
  const [height, setHeight] = createSignal(window.innerHeight);
  const [heightTransition, setHeightTransition] = createSignal(
    window.innerHeight,
  );

  onCleanup(
    on("viewport_changed", (e) => {
      if (e.is_state_stable) {
        setHeight(e.height);
        setWidth(e.width);
      }

      setHeightTransition(e.height);
    }),
  );
  postEvent("web_app_request_viewport");

  return {
    width,
    height,
    heightTransition,
  };
};

const App = () => {
  const isOpenedSelfProfile = isEqualIds(getSelfUserId(), getProfileId());
  const selfEntry: BrowserNavigatorAnyHistoryItem<unknown> = {
    pathname: `/board/${removePrefix(getSelfUserId())}`,
  };
  const navigator = initNavigator("app-navigator-state");

  if (isOpenedSelfProfile) {
    navigator.replace(selfEntry);
  } else {
    navigator.replace(selfEntry);
    navigator.push({
      pathname: `/board/${removePrefix(getProfileId())}`,
    });
  }
  navigator.attach();
  onCleanup(() => {
    void navigator.detach();
  });

  const Router = createRouterWithPageTransition({
    dangerousWillBePatched_navigator: navigator,
  });

  onMount(() => {
    postEvent("web_app_ready");
    postEvent("web_app_expand");
  });

  const windowSize = createTgScreenSize();
  createEffect(() => {
    document.documentElement.style.setProperty(
      "--tg-screen-size",
      `${windowSize.height()}px`,
    );
  });

  if (platform === "ios") {
    useFixSafariScroll();
  }

  return (
    <AppQueryClientProvider>
      <ScreenSizeProvider value={windowSize}>
        <KeyboardStatusProvider>
          <TonConnectProvider manifestUrl={getTonconnectManifestUrl()}>
            <SetupTonWallet />
            <Router>
              <Route component={ProfilePage} path={"/board/:idWithoutPrefix"} />
              <Route component={CommentsPage} path={"/comments/:noteId"} />
            </Router>
          </TonConnectProvider>

          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              classes: {
                title: "font-inter",
                toast: "rounded-xl",
              },
            }}
            theme={themeParams.isDark ? "dark" : "light"}
          />
        </KeyboardStatusProvider>
      </ScreenSizeProvider>
    </AppQueryClientProvider>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
