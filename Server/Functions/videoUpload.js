const path = require("path");
const fs = require("fs");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

const videoUpload = (video, folder) => {
  return new Promise((resolve) => {
    if (
      !fs.existsSync(path.normalize(__dirname + "./../../upload/" + folder))
    ) {
      fs.mkdirSync(path.normalize(__dirname + "./../../upload/" + folder));
    }
    const timePath = Date.now();
    const video_path = path.normalize(
      __dirname + "./../../upload/" + folder + "/" + timePath
    );
    video.mv(video_path + ".mp4", (err) => {
      const v_p = video_path + ".mp4";

      ffmpeg(v_p)
        .withOutputFormat(".mp4")
        .videoCodec("libx264")
        .audioCodec("libmp3lame")
        .videoBitrate(720)
        .size("320x?")
        .on("error", function (err) {
          console.log("An error occurred: " + err);
        })
        .on("end", function () {
          console.log("Processing finished !");
        })
        .save(path.normalize(video_path + "_output_(720).mp4"));

      ffmpeg(v_p)
        .videoCodec("libx264")
        .audioCodec("libmp3lame")
        .videoBitrate(480)
        .size("320x240")
        .on("error", function (err) {
          console.log("An error occurred: " + err);
        })
        .on("end", function () {
          console.log("Processing finished !");
        })
        .save(path.normalize(video_path + "_output_(480).mp4"));

      if (err) {
        console.log("file upload err");
      } else {
        console.log("file upload successfull");
        resolve("upload/" + folder + "/" + timePath + ".mp4");
      }
    });
  });
};

module.exports = {
  videoUpload,
};
