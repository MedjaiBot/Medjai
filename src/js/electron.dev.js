const electron             = require('electron');
const path                 = require('path');
const url                  = require('url');
const fs                   = require('fs');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port         = isDeveloping ? 3000 : process.env.PORT;
const electronApp  = electron.app;

let mainWindow;

function createWindow()
{
        // Create the browser window.
        mainWindow = new electron.BrowserWindow({
                width: 800,
                height: 600,
                title: 'MedjaiBot',
                autoHideMenuBar: true
        });

        // and load the index.html of the app.
        mainWindow.loadURL('http://localhost:1234');

        // Open the DevTools.
        mainWindow.webContents.openDevTools();

        // Emitted when the window is closed.
        mainWindow.on('closed', function ()
        {
                // Dereference the window object, usually you would store windows
                // in an array if your app supports multi windows, this is the time
                // when you should delete the corresponding element.
                mainWindow = null
        });
}

// Open Electron
electronApp.on('ready', createWindow);

electronApp.on('window-all-closed', function ()
{
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin')
        {
                electronApp.quit()
        }
});

electronApp.on('activate', function ()
{
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null)   
        {
                createWindow()
        }
});
