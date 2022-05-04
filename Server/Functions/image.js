const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

function DeleteFile(imagepath) {
  if (fs.existsSync(imagepath)) {
    fs.unlink(imagepath, (error) => {
      if (error) {
        console.log("file deleted Error :" + error);
      } else {
        console.log(imagepath);
        console.log("FILE deleted");
      }
    });
  } else {
    console.log("Dosnt the file");
  }
}

const OneImageUploadMV = (image, folder_name) => {
  var pwd = process.cwd();

  return new Promise((resolve) => {
    if (!fs.existsSync(pwd + "/upload/" + folder_name)) {
      fs.mkdirSync(pwd + "/upload/" + folder_name);
    }

    const timePath = Date.now();
    const pathMV = pwd + "/upload/" + folder_name + "/" + timePath;
    image.mv(pathMV, (error) => {
      if (error) {
        resolve(false);
      } else {
        console.log("pathMV");
        console.log(pathMV);
        sharp(pathMV).toFile(pathMV + ".jpg", () => {
          console.log("pathMV");
          console.log(pathMV);
          DeleteFile(pathMV);
          resolve("api/upload/" + folder_name + "/" + timePath);
        });
      }
    });
  });
};

const DeleteImage = (image_path) => {
  var pwd = process.cwd();
  const image_path_del = image_path.substring(4);
  const del_file = pwd + image_path_del + ".jpg";
  DeleteFile(del_file);
  console.log("DELETE image");
};

const DeleteVideo = (video_path) => {
  var pwd = process.cwd();
  DeleteFile(pwd + video_path + ".mp4");
  console.log("DELETE video");
};

const FileUpload = (file, folder_name) => {
  var pwd = process.cwd();

  return new Promise((resolve) => {
    if (!fs.existsSync(pwd + "/api/upload/" + folder_name)) {
      fs.mkdirSync(pwd + "/api/upload/" + folder_name);
    }

    const mimetype = file.mimetype;
    const timePath = Date.now();
    const pathMV = pwd + "/api/upload/" + folder_name + timePath + mimetype;
    const path = "/api/upload/" + folder_name + timePath + mimetype;

    file.mv(pathMV, (error) => {
      if (error) {
        console.log("File upload error:" + error);
        DeleteFile(pathMV);
        resolve(false);
      } else {
        console.log("File upload sucsesfully");
        resolve(path);
      }
    });
  });
};

module.exports = {
  OneImageUploadMV,
  DeleteImage,
  DeleteVideo,
  FileUpload,
  DeleteFile,
};
