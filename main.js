const {app, BrowserWindow} = require('electron'); 

 

function createWindow()
{
    const win = new BrowserWindow({
        width:800,
        height:600,
        // frame: false,
        resizable : false,
        alwaysOnTop:true,
        title :"awesome app",
        backgroundColor:"#EFF5F5",

    })
    win.loadFile('index.html'); // run file 

    // Method use (webContents.openDevTools())
    // win.webContents.openDevTools();   // open automatic Web dev tool
}

app.whenReady().then(createWindow);