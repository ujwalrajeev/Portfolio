import { PUBLIC_URL } from "./Constants";

function getAssetbasepath(type, imageName) {
  return PUBLIC_URL + "/assets/" + type + "/" + imageName;
}

export { getAssetbasepath };
