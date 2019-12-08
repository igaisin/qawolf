import { makeTempDir } from "@qawolf/config";
import { sleep } from "@qawolf/web";
import { pathExists, remove } from "fs-extra";
import { ScreenCapture } from "../../src/ScreenCapture";

it("captures a video and gif", async () => {
  const tempDir = await makeTempDir();
  const screenCapture = await ScreenCapture.start({
    savePath: tempDir,
    size: { height: 1080, width: 1920 }
  });
  await sleep(1000);
  await screenCapture!.stop();
  expect(await pathExists(screenCapture.videoPath)).toBeTruthy();
  expect(await pathExists(screenCapture.gifPath)).toBeTruthy();
  await remove(tempDir);
});