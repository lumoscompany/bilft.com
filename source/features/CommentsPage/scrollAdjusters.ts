import { platform, scrollableElement } from "@/common";
import { assertOk } from "@/lib/assert";
import { createWindowScrollTop, useCleanup } from "@/lib/solid";
import { createEffect, on, type Accessor } from "solid-js";
import type { KeyboardStatus } from "../keyboardStatus";
import { getVirtualizerHandle } from "../pageTransitions";

export function createOnResizeScrollAdjuster(
  commentCreatorContainer: () => HTMLDivElement,
) {
  createEffect(() => {
    const commentCreatorContainerRef = commentCreatorContainer();
    assertOk(commentCreatorContainerRef);
    useCleanup((signal) => {
      let prevHeight = commentCreatorContainerRef.clientHeight;
      const resizeObserver = new ResizeObserver(() => {
        const curHeight = commentCreatorContainerRef.clientHeight;
        scrollableElement.scrollBy({
          top: (curHeight - prevHeight) * (platform === "ios" ? 0.5 : 1),
        });
        prevHeight = curHeight;
      });

      resizeObserver.observe(commentCreatorContainerRef);

      signal.onabort = () => resizeObserver.disconnect();
    });
  });
}

export function createScrollAdjuster(innerHeight: Accessor<number>) {
  createEffect(
    on(
      () => innerHeight(),
      (height, prevHeight) => {
        if (prevHeight === undefined) {
          return;
        }
        const diff = prevHeight - height;

        if (Math.abs(diff) > 5) {
          getVirtualizerHandle()?.scrollBy(diff);
        }
      },
    ),
  );
}

export function createSafariScrollAdjuster(
  keyboard: KeyboardStatus,
  commentInputSize: Accessor<number>,
) {
  createEffect(
    on(
      () => keyboard.isKeyboardOpen(),
      (isOpen) => {
        if (!isOpen) return;

        const bottom =
          scrollableElement.scrollHeight -
          scrollableElement.scrollTop -
          scrollableElement.clientHeight;

        if (bottom - commentInputSize() < 50) {
          getVirtualizerHandle()?.scrollBy(bottom);
          return;
        }
      },
    ),
  );
}

export function createCommentInputBottomOffset(
  innerHeight: Accessor<number>,
  tgHeight: Accessor<number>,
  keyboard: KeyboardStatus,
  initialHeightDiff: number,
) {
  const windowScrollTop = createWindowScrollTop();
  const commentInputBottomOffset = () =>
    innerHeight() -
    tgHeight() -
    windowScrollTop() -
    (!keyboard.isKeyboardOpen()
      ? initialHeightDiff
      : keyboard.isPortrait()
        ? 0
        : initialHeightDiff / 2);
  return commentInputBottomOffset;
}