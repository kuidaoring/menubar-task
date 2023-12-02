// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent, Tray } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    vibrancy: "under-window",
    frame: false,
    show: false,
    visualEffectState: "active",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  const url = isDev
    ? "http://localhost:8000/task"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  mainWindow.loadURL(url);
  mainWindow.setVisibleOnAllWorkspaces(true);
  const showOrHideWindow = () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
      return;
    }
    mainWindow.show();
    mainWindow.focus();
  };

  mainWindow.on("blur", mainWindow.hide);

  const tray = new Tray(join(__dirname, "../asset/trayIconTemplate@2x.png"));
  const { x, y } = tray.getBounds();
  mainWindow.setBounds({ x: x, y: y });

  tray.on("click", showOrHideWindow);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on("message", (event: IpcMainEvent, message: any) => {
  console.log(message);
  setTimeout(() => event.sender.send("message", "hi from electron"), 500);
});
