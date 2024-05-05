import WebApp from "@twa-dev/sdk";

export type StyleProps = {
  className?: string;
};

export const clsxString = (...items: string[]) => {
  let res = "";
  for (const it of items) {
    if (it.length === 0) {
      continue;
    }

    if (res.length > 0) {
      res += " ";
    }
    res += it;
  }

  return res;
};

export function getProfileId() {
  let id = WebApp.initDataUnsafe.start_param;

  const searchParams = new URLSearchParams(window.location.search);
  const searchParamsID = searchParams.get("id");
  if (searchParamsID) {
    id = `id${searchParamsID}`;
  }

  if (!id) {
    const _id = WebApp.initDataUnsafe.user?.id;
    if (_id) {
      id = `id${_id}`;
    } else {
      throw new Error("Invalid user");
    }
  }

  return id;
}