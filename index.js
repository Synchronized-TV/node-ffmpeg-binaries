const { join } = require('path');

module.exports = {
  ffmpeg: join(__dirname, 'bin', `ffmpeg${process.platform === 'win32' ? '.exe' : ''}`),
  ffprobe: join(__dirname, 'bin', `ffprobe${process.platform === 'win32' ? '.exe' : ''}`),
};

