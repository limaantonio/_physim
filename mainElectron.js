const { app, BrowserWindow, screen } = require('electron')
const path = require("path");
const url = require("url");


//Responsável por definir as características da janela do Menu
function createMenu () {
  const win = new BrowserWindow({
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true, 
      enableRemoteModule: true
  }
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/menu/menu.html'),
    protocol: 'file:',
    slashes: true,
  }));
  // win.webContents.openDevTools()
}

//Responsável por criar a janela do Menu
app.whenReady().then(() => {
  createMenu()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMenu()
  }
})

//Responsável por encerrar a aplicação.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})