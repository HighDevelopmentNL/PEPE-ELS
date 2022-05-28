fx_version 'cerulean'
game 'gta5'

author 'HighDevelopment'
description 'ELS System for FiveM'
version '1.0.1'
lua54 'yes'

ui_page 'html/index.html'

shared_scripts {
    'config.lua',
}

client_script {
    'client/client.lua',
}
 
server_scripts {
    'server/server.lua',
}

files {
    "html/index.html",
    "html/js/script.js",
    "html/css/style.css",
}
   
exports {
    'SetupEmergencyVehicle',
}