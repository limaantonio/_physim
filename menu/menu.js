//import { defaultWidth, defaultHeight } from "../constants/constants.js";
const remote = require('electron').remote;
const { screen, BrowserWindow } = require('electron').remote;

displaySize = screen.getPrimaryDisplay().size


const path = require("path");
const url = require("url");

let menuWindow = remote.getCurrentWindow();

  //Configuração do botão NOVA SIMULAÇÃO
  document.getElementById("new-button").onclick = function() {createMain()};
  function createMain() {
   const mainWindow = new BrowserWindow({
      simpleFullscreen: true,
      width: displaySize.width,
      height: displaySize.height,
      webPreferences: {
        nodeIntegration: true, 
        enableRemoteModule: true
    }
    })
    // Maximiza a janela principal após ser criada
    mainWindow.maximize()
    // Carrega as páginas HTML das janelas
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../main/main.html'),
      protocol: 'file:',
      slashes: true,
    }));

    mainWindow.webContents.openDevTools()
    menuWindow.close()
  }

  //Configuração do botão SAIR
  document.getElementById("exit-button").onclick = function() {exit()};
  function exit() {
     menuWindow.close();
  }