Config = Config or {}

Config.UiOpend = false

Config.ButtonData = {}

Config.EmergencyData = {}

Config.SirenData = {
    [GetHashKey('PolitieMotor')] = {
      ['Name'] = 'Politie Motor',
      ['SoundId'] = nil,
      ['SirenSound'] = "RESIDENT_VEHICLES_SIREN_WAIL_03",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
        ['Blauw'] = {1},
        ['Oranje'] = {2}, 
        ['Groen'] = {},
        ['Stop'] = {3},
        ['Volg'] = {4},
      },
    },
    [GetHashKey('PolitieTouran')] = {
      ['Name'] = 'Politie Touran',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
        ['Blauw'] = {1,7},
        ['Oranje'] = {2,8},
        ['Groen'] = {5},
        ['Stop'] = {3},
        ['Volg'] = {4},
      },
    },
    [GetHashKey('PolitieRS6')] = {
      ['Name'] = 'Politie Audi',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
          ['Blauw'] = {1},
          ['Oranje'] = {2},
          ['Groen'] = {},
          ['Stop'] = {3},
          ['Volg'] = {4},
        },
    },
    [GetHashKey('PolitieVito')] = {
      ['Name'] = 'Politie Vito',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
          ['Blauw'] = {1},
          ['Oranje'] = {2},
          ['Groen'] = {},
          ['Stop'] = {3},
          ['Volg'] = {4},
        },
    },
    [GetHashKey('PolitieKlasse')] = {
      ['Name'] = 'Politie Klasse',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
          ['Blauw'] = {1},
          ['Oranje'] = {2},
          ['Groen'] = {5},
          ['Stop'] = {3},
          ['Volg'] = {4},
        },
    },
    [GetHashKey('PolitieAudiUnmarked')] = {
      ['Name'] = 'Politie Audi Unmarked',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = true,
      ['LightSettings'] = {
          ['Blauw'] = {1,2},
          ['Oranje'] = {},
          ['Groen'] = {},
          ['Stop'] = {3},
          ['Volg'] = {4},
          ['Pit'] = {6,10},
        },
    },
    [GetHashKey('PolitieBmw')] = {
      ['Name'] = 'Politie BMW M5',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = true,
      ['LightSettings'] = {
          ['Blauw'] = {1,2},
          ['Oranje'] = {},
          ['Groen'] = {},
          ['Stop'] = {3},
          ['Volg'] = {4},
          ['Pit'] = {6,10},
        },
    },
    [GetHashKey('PolitieVelar')] = {
      ['Name'] = 'Politie Velar',
      ['SoundId'] = nil,
      ['SirenSound'] = "VEHICLES_HORNS_SIREN_1",
      ['IsUnmarked'] = true,
      ['LightSettings'] = {
          ['Blauw'] = {1,2},
          ['Oranje'] = {},
          ['Groen'] = {},
          ['Stop'] = {3},
          ['Volg'] = {4},
          ['Pit'] = {6,10},
        },
    },
    [GetHashKey('AmbulanceSprinter')] = {
      ['Name'] = 'Ambulance Sprinter',
      ['SoundId'] = nil,
      ['SirenSound'] = "RESIDENT_VEHICLES_SIREN_WAIL_01",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
          ['Blauw'] = {1,2,3,4,5},
          ['Oranje'] = {6},
          ['Groen'] = {7},
          ['Stop'] = {},
          ['Volg'] = {},
          ['Pit'] = {},
        },
    },
    [GetHashKey('AmbulanceTouran')] = {
      ['Name'] = 'Ambulance Touran',
      ['SoundId'] = nil,
      ['SirenSound'] = "RESIDENT_VEHICLES_SIREN_WAIL_01",
      ['IsUnmarked'] = false,
      ['LightSettings'] = {
          ['Blauw'] = {1,6,7},
          ['Oranje'] = {2,5},
          ['Groen'] = {3},
          ['Stop'] = {},
          ['Volg'] = {},
          ['Pit'] = {},
        },
    },
}