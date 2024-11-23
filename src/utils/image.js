import { toPng as htmlToPng, toJpeg as htmlToJpeg, toSvg as htmlToSvg, toBlob as htmlToBlob } from "html-to-image";

const imageFilter = node => node.tagName !== "TEXTAREA" && !node.dataset?.ignoreInExport;

const htmlToImageOptions = {
  filter: imageFilter,
  pixelRatio: 2,
  skipAutoScale: true,
};

export const toPng = async (node, options) => {
  // sometimes the first render doesn't work fully so we do the rendering twice https://github.com/bubkoo/html-to-image/issues/361
  await htmlToPng(node, {
    ...htmlToImageOptions,
    ...options,
  });
  return htmlToPng(node, {
    ...htmlToImageOptions,
    ...options,
  });
};

export const toJpg = async (node, options) => {
  return htmlToJpeg(node, {
      ...htmlToImageOptions,
      ...options
    }
  )
}

export const toBlob = async (node, options) => {
  return htmlToBlob(node, {
    ...htmlToImageOptions,
    ...options,
  });
};

export const toSvg = async (node, options) => {
  return htmlToSvg(node, {
    ...htmlToImageOptions,
    ...options,
  });
};