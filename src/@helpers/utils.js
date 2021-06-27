export const isVideo = (type) => {
  const mimeTypes = [
    "video/mp4",
    "video/x-flv",
    "video/MP2T",
    "	video/3gpp",
    "video/quicktime",
    "	video/x-msvideo",
    "	video/x-ms-wmv",
  ];
  return mimeTypes.includes(type);
};
export const isImage = (type) => {
  const mimeTypes = ["image/gif", "image/jpeg", "image/png"];
  return mimeTypes.includes(type);
};

export const checkImageExist = (imageUrl) => {
  let request = new XMLHttpRequest();

  request.open("HEAD", imageUrl, false);
  request.send();
  return request.status !== 404;
};
