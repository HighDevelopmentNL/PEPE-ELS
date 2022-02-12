ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback('HighEls:server:get:config', function(source, cb)
    cb(Config)
end)

RegisterServerEvent('HighEls:server:setup:first:time')
AddEventHandler('HighEls:server:setup:first:time', function(Plate)
    Config.ButtonData[Plate] = {
        ['Blue'] = false,
        ['Orange'] = false,
        ['Green'] = false,
        ['Stop'] = false,
        ['Follow'] = false,
        ['Siren'] = false,
        ['Pit'] = false,
    }
    TriggerClientEvent('HighEls:client:setup:first:time', -1, Plate)
end)

RegisterServerEvent('HighEls:server:update:button')
AddEventHandler('HighEls:server:update:button', function(Data, Plate)
    Config.ButtonData[Plate][Data.Type] = Data.State
    TriggerClientEvent('HighEls:client:update:button', -1, Data, Plate)
end)

RegisterServerEvent('HighEls:server:toggle:sounds')
AddEventHandler('HighEls:server:toggle:sounds', function(State)
    TriggerClientEvent('HighEls:client:toggle:sounds', -1, source, State)
end)

RegisterServerEvent('HighEls:server:set:sounds:disabled')
AddEventHandler('HighEls:server:set:sounds:disabled', function()
    TriggerClientEvent('HighEls:client:set:sounds:disabled', -1, source)
end)