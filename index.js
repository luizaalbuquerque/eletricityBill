
// Electron connection
const electron = require('electron');
const { app, BrowserWindow } = require("electron")

let mainWindow;
// opening Html window 

app.on('ready', () => {

    mainWindow = new BrowserWindow({


    });

    mainWindow.loadURL(`file://${__dirname}/start.html`)

});

