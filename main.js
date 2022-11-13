const {app, BrowserWindow} = require('electron'); 

console.log('Main Process');

function createWindow()
{
    const win = new BrowserWindow({
        width:800,
        height:600,
    })
    win.loadFile('index.html'); // run file 

    // Method use (webContents.openDevTools())
    // win.webContents.openDevTools();   // open automatic Web dev tool
}

app.whenReady().then(createWindow);