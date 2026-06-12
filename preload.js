const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  saveVideo: (arrayBuffer) => ipcRenderer.invoke('save-video', arrayBuffer)
})