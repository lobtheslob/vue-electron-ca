const electron = require('electron')

const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

const windows = []

let mainWindow

app.on('ready', _ => {
    [1, 2, 3].forEach(i => {
        let win = new BrowserWindow({
            height: 500,
            width: 400,
            webPreferences: {
                nodeIntegration: true,
                allowEval: false,
            }
        })

        win.loadFile(path.join(__dirname, 'countdown.html'))
        win.on('closed', _ => {
            win = null
        })
        windows.push(win)
    })
})

ipc.on('countdown-start', _ => {
    console.log('starting!')

    countdown(count => {
        console.log("count", count)
        windows.forEach(win => {
            win.webContents.send('countdown', count)
        })
    })
})