const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // We'll add scrcpy launching here later
});
