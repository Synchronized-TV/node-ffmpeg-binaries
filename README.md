# node-ffmpeg-binaries
A platform indepindependent installer of [FFmpeg](https://ffmpeg.org/)


Supported architectures:
Linux | Windows | Mac
----- | ------- | ---
x64   | x64     | x64
ia32  | ia32    |
arm   |         |
arm64 |         |

## API
`node-ffmpeg-binaries` exports an object of strings containing the path to the `ffmpeg` and `ffprobe` executables.

```
const ffmpeg = require('ffmpeg-binaries').ffmpeg;
const ffprobe = require('ffmpeg-binaries').ffprobe;
```

This software uses code of <a href=http://ffmpeg.org>FFmpeg</a> licensed under the <a href=http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html>LGPLv2.1</a> and its source can be downloaded [here](ffmpeg)