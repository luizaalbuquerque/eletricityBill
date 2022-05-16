const electron = require ('electron');
const { app, BrowserWindow } = require("electron")

let mainWindowç

app.on('ready', () => {

    mainWindow = new BrowserWindow({


    });

    mainWindow.loadURL(`file://${__dirname}/start.html`)

});

