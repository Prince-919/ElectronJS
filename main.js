const {app, BrowserWindow} = require('electron'); 

 

function createWindow()
{
    const win = new BrowserWindow({
        width:900,
        height:600,
        // frame: false,
        // resizable : false,
        // alwaysOnTop:true,
        title :"awesome app",
        backgroundColor:"#EFF5F5",

    });

    // =========  Start 2 ====================
    // Child Window open Method and show Method 
    // let child = new BrowserWindow({parent : win});
    // child.loadFile('child.html'); 
    // child.show();

    // Load File parent Window 
    win.loadFile('index.html'); // run file 


    // ================= Start 1 ==================

    // Method use (webContents.openDevTools())
    // win.webContents.openDevTools();   // open automatic Web dev tool
}

// app.whenReady().then(createWindow);

// ================= Start 3 ==================
// console.log(app.isReady()); // False (check output app not ready)
// Event - 1 
// event call hone ke bad bhi window close nhi hoga, why- (e) - e.preventDefault()
// app.on('before-quit', (e) =>{
//     console.log('call will quit app');
//     e.preventDefault();
// });


// Event - 2
// app close hoga hi hoga use method (will-quit) 
// e.preventDefault(); isse koi fark nhi padega

// app.on('will-quit', (e) => {
//     console.log("call will quit app");
//     e.preventDefault();
// })

// Event - 3  {'browser-window-focus'}

// app.on('browser-window-focus', () =>{
//     console.log('you are on app');
// });

app.on('browser-window-blur', ()=>{
    console.log('you are unfocus app');
})

// Ready App 
app.on('ready', ()=>{ 
    console.log(app.isReady());     // True (check output app ready)

    createWindow();
});




// =================== Start 3 end =================