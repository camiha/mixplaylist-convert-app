export const generateRandomString = (length: number) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export const setUrlParams = (
  url: string,
  params: Record<string, string | number | boolean | undefined>,
) => {
  const urlObject = new URL(url);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlObject.searchParams.set(key, value.toString());
    }
  });
  return urlObject;
};
