const fs = require("fs");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpeg2 = require("@ffmpeg-installer/ffmpeg");
ffmpeg.setFfmpegPath(ffmpeg2.path);

const videoUploadFFMPEG = async (video_path, to_format, size_w, pathMV) => {
  return new Promise((resolve) => {
    ffmpeg(video_path)
      .toFormat(to_format)
      .size(size_w + "x?")
      .on("error", (e) => {
        console.log(e);
        console.log("in .on error");
        resolve(false);
      })
      .on("progress", (progress) => {
        console.log(
          "Processing: " + progress.targetSize + " KB converted : ",
          size_w
        );
      })
      .on("end", (e) => {
        resolve(true);
      })
      .save(pathMV + `-${size_w}.` + to_format);
  });
};

const videUploadMV = async (video, folder_name, id) => {
  return new Promise((resolve) => {
    try {
      var pwd = process.cwd();
      if (
        !fs.existsSync(
          path.normalize(__dirname + "./../../upload/" + folder_name)
        )
      ) {
        fs.mkdirSync(
          path.normalize(__dirname + "./../../upload/" + folder_name)
        );
      }

      var mime = "mp4";
      const timePath = Date.now();
      const pathMV = pwd + "/upload/" + folder_name + "/" + timePath;
      console.log(pathMV);
      video.mv(pathMV + "." + mime, async (error) => {
        if (error) {
          console.log(error);
          console.log("false");
          resolve(false);
        } else {
          //resolve("/upload/" + folder_name + "/" + timePath);
          console.log("TRUE");
          console.log(pathMV);
          var result720 = await videoUploadFFMPEG(
            pathMV + "." + mime,
            "mp4",
            "720",
            pathMV
          );
          if (result720) {
            resolve("/upload/" + folder_name + "/" + timePath + "-720.mp4");
          }
          console.log("-720 ", result720);
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
};

const DeleteFolder = (folderPath) => {
  return new Promise((resolve) => {
    var pwd = process.cwd();
    folderPath = pwd + folderPath;
    console.log("fs.existsSync(folderPath)");
    console.log(fs.existsSync(folderPath));
    if (fs.existsSync(folderPath)) {
      fs.rm(folderPath, { recursive: true, force: true }, async (error) => {
        if (error) {
          console.log("file deleted Error :" + error);
          var r = await DeleteFolder(folderPath);
          resolve(r);
        } else {
          console.log("AAAAAAAAAa fs.existsSync(folderPath)");
          console.log(fs.existsSync(folderPath));
          if (fs.existsSync(folderPath)) {
            console.log("IKINJI GEZEGE FUNC");
            var r = await DeleteFolder(folderPath);
            resolve(r);
          } else {
            resolve(true);
          }
        }
      });
    } else {
      console.log("Dosnt the file");
      resolve(false);
    }
  });
};

module.exports = { videUploadMV, DeleteFolder };
