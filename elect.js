const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: "brainstorm.png",
      frame: true,
    })
    win.loadFile('index.html')
  }

  const { Menu } = require('electron')
  Menu.setApplicationMenu(null)

  app.whenReady().then(() => {
    createWindow()
  })