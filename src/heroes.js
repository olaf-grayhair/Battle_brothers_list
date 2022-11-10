import hitpoints from "./assets/hitpoints.webp"
import meleeSkill from "./assets/meleeSkill.webp"
import fatigue from "./assets/Fatigue.webp"
import rangedSkill from "./assets/rangedSkill.webp"
import resolve from "./assets/Resolve.webp"
import meleeDefense from "./assets/meleeDefense.webp"
import initiative from "./assets/Initiative.webp"
import rangedDefense from "./assets/rangedDefense.webp"
import level from "./assets/Level.webp"
import gold from "./assets/gold.png"


const heroes = [
    {
        "name": "Adventurous Noble",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/7/7f/Background_06.png",
        "level": "1-3",
        "price": 25,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 45,
                "max": 60
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": -10,
                "max": 0
            }
        ],
        "special": "Combat, Noble & Veteran",
        "specialIcon": ""
    },
    {
        "name": "Anatomist",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/ed/Background_70.png",
        "level": "1",
        "price": 12,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 46,
                "max": 56
            },
            {
                "skill": "meleeSkill",
                "min": 54,
                "max": 64
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 41,
                "max": 51
            },
            {
                "skill": "resolve",
                "min": 40,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 1,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 1,
                "max": 5
            }
        ],
        "special": "No Affiliation (Affiliation)",
        "specialIcon": ""
    },
    {
        "name": "Apprentice",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/5/5b/Background_40.png",
        "level": "1",
        "price": 8,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+10% ",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/0/08/Xp_received.png"
    },
    {
        "name": "Assassin",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/33/Background_53.png",
        "level": "4",
        "price": 25,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 59,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 40,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 120,
                "max": 125
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Southern Assassin",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/33/Background_53.png",
        "level": "1",
        "price": 25,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 40,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 120,
                "max": 125
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Barbarian",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/39/Background_58.png",
        "level": "2-4",
        "price": 20,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 65
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 40,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 105,
                "max": 120
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Bastard",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/0/0c/Background_37.png",
        "level": "1-3",
        "price": 14,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": -5,
                "max": 10
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat & Veteran",
        "specialIcon": ""
    },
    {
        "name": "Beast Slayer",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/f4/Background_57.png",
        "level": "2-3",
        "price": 15,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 63
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 107
            },
            {
                "skill": "rangedSkill",
                "min": 43,
                "max": 49
            },
            {
                "skill": "resolve",
                "min": 43,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 107,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Beggar",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/c/c2/Background_18.png",
        "level": "1",
        "price": 3,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 40,
                "max": 50
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 90
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 20,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn & Thief",
        "specialIcon": ""
    },
    {
        "name": "Belly Dancer",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/c/cb/Background_64.png",
        "level": "1",
        "price": 20,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 37,
                "max": 47
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 110,
                "max": 120
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Bowyer",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/3e/Background_29.png",
        "level": "1",
        "price": 8,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 42,
                "max": 52
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Brawler",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/38/Background_27.png",
        "level": "1",
        "price": 13,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 55,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 37,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 105,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+100% Damage when unarmed ",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/7/74/Active_08.png"
    },
    {
        "name": "Butcher",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/5/51/Background_43.png",
        "level": "1",
        "price": 7,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 64
            },
            {
                "skill": "meleeSkill",
                "min": 50,
                "max": 59
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 104
            },
            {
                "skill": "rangedSkill",
                "min": 29,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 37,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Caravan Hand",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/e1/Background_12.png",
        "level": "1",
        "price": 8,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 53,
                "max": 65
            },
            {
                "skill": "meleeSkill",
                "min": 51,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 107
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 33,
                "max": 43
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Companion (2Hand)",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/b/b1/BackgroundCompanion.png",
        "level": "1",
        "price": 14,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 65
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 40,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 2,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 95,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 2,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Companion (1Hand)",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/b/b1/BackgroundCompanion.png",
        "level": "1",
        "price": 14,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 37,
                "max": 47
            },
            {
                "skill": "resolve",
                "min": 40,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 10
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 5,
                "max": 10
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Companion (Ranged)",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/b/b1/BackgroundCompanion.png",
        "level": "1",
        "price": 14,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 48,
                "max": 52
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 105,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Converted Crusader",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/1/1a/Background_65.png",
        "level": "2-4",
        "price": 30,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 60,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 44,
                "max": 52
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 5,
                "max": 13
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Crusader",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/7/77/Background_54.png",
        "level": "9",
        "price": 25,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 22,
                "max": 37
            },
            {
                "skill": "resolve",
                "min": 45,
                "max": 60
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": -5,
                "max": 5
            }
        ],
        "special": "Combat & Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Cultist",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/b/bd/Cultist.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 65
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 93,
                "max": 103
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 45,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Daytaler",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/5/57/Daytaler.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 103
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Laborer, Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Disowned Noble",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/9/93/Disowned_noble.png",
        "level": "1-3",
        "price": 18,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 55,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 35,
                "max": 48
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 38
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 8
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat, Noble & Veteran",
        "specialIcon": ""
    },
    {
        "name": "Eunuch",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/2/2e/Eunuch.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Farmhand",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/2/23/Farmhand.png",
        "level": "1",
        "price": 10,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 62,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 120
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 28,
                "max": 37
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Laborer, Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Fisherman",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/f0/Fisherman.png",
        "level": "1",
        "price": 7,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 55,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Flagellant",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/9/94/Flagellant.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 40,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 52
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Monk turned Flagellant",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/9/94/Flagellant.png",
        "level": "1",
        "price": 5,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 42,
                "max": 52
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 41,
                "max": 51
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Gambler",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/8/8a/Gambler.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 48,
                "max": 58
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 84,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 52
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 7
            },
            {
                "skill": "initiative",
                "min": 112,
                "max": 120
            },
            {
                "skill": "rangedDefense",
                "min": 2,
                "max": 13
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Gladiator",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/2/27/Background_61.png",
        "level": "2-4",
        "price": 35,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 60,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 40,
                "max": 48
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 5,
                "max": 13
            }
        ],
        "special": "Has  50 if he is from the Origin",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/4/42/Asset_daily_money.png"
    },
    {
        "name": "Gravedigger",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/8/87/Gravedigger.png",
        "level": "1",
        "price": 5,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 64
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 107
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 37,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 95,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Laborer, Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Graverobber",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/4/45/Background_25.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 50,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 38,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 6
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 114
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 6
            }
        ],
        "special": "Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Hedge Knight",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/2/2e/Background_33.png",
        "level": "2-5",
        "price": 35,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 62,
                "max": 73
            },
            {
                "skill": "meleeSkill",
                "min": 58,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 105,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 39,
                "max": 44
            },
            {
                "skill": "meleeDefense",
                "min": 6,
                "max": 10
            },
            {
                "skill": "initiative",
                "min": 86,
                "max": 103
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Historian",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/3a/Historian.png",
        "level": "1",
        "price": 8,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 48,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 42,
                "max": 52
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 29,
                "max": 40
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+15% ",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/0/08/Xp_received.png"
    },
    {
        "name": "Houndmaster",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/e4/Houndmaster.png",
        "level": "1",
        "price": 7,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 55,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 3,
                "max": 8
            },
            {
                "skill": "initiative",
                "min": 105,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Unleashes confident  Hounds.",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/d/d1/Active_83.png"
    },
    {
        "name": "Hunter",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/b/b9/Hunter2.png",
        "level": "1-2",
        "price": 20,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 97,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 52,
                "max": 59
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 8
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Juggler",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/b/be/Juggler.png",
        "level": "1",
        "price": 7,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 35,
                "max": 45
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 112,
                "max": 120
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+5% chance to hit the head ",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/6/65/Chance_to_hit_head.png"
    },
    {
        "name": "Killer on the Run",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/d/d6/Killer_on_the_run.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 51,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 34,
                "max": 45
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+10% chance to hit the  head.",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/6/65/Chance_to_hit_head.png"
    },
    {
        "name": "King's Guard",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/fb/Background_59.png",
        "level": "3",
        "price": 30,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 65
            },
            {
                "skill": "meleeSkill",
                "min": 54,
                "max": 64
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 27,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeDefense",
                "min": 7,
                "max": 12
            },
            {
                "skill": "initiative",
                "min": 85,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 7,
                "max": 12
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Lindwurm Slayer",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/31/Background_71.png",
        "level": "1",
        "price": 28,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 56,
                "max": 63
            },
            {
                "skill": "meleeSkill",
                "min": 55,
                "max": 65
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 42,
                "max": 50
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 9
            },
            {
                "skill": "initiative",
                "min": 108,
                "max": 122
            },
            {
                "skill": "rangedDefense",
                "min": -3,
                "max": 2
            }
        ],
        "special": "No Affiliation (Affiliation)",
        "specialIcon": ""
    },
    {
        "name": "Lumberjack",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/c/cc/Lumberjack.png",
        "level": "1",
        "price": 13,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 95,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Manhunter",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/f0/Background_62.png",
        "level": "1",
        "price": 10,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 52,
                "max": 63
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 93,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 37,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 2,
                "max": 7
            },
            {
                "skill": "initiative",
                "min": 103,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": -1,
                "max": 4
            }
        ],
        "special": "If you are playing the Manhunters origin:\n10% less  experience received",
        "specialIcon": ""
    },
    {
        "name": "Mason",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/8/84/Mason.png",
        "level": "1",
        "price": 8,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+5% ",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/0/08/Xp_received.png"
    },
    {
        "name": "Messenger",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/f2/Messenger.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 105,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 7
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 3,
                "max": 8
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Militia",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/e7/Militia.png",
        "level": "1-2",
        "price": 10,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 93,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 38,
                "max": 47
            },
            {
                "skill": "resolve",
                "min": 33,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 2,
                "max": 7
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 2,
                "max": 7
            }
        ],
        "special": "Combat & Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Miller",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/5/5d/Miller.png",
        "level": "1",
        "price": 7,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 53,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 98,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Miner",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/4/4a/Miner.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 90
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 48
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Laborer, Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Minstrel",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/6/66/Minstrel.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 57
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 90
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Monk",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/4/44/Monk.png",
        "level": "1",
        "price": 5,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 42,
                "max": 52
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 41,
                "max": 51
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Pacified Flagellant",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/4/44/Monk.png",
        "level": "1",
        "price": 5,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 40,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 95,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 52
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Melee Nomad",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/9/9a/Background_63.png",
        "level": "2-4",
        "price": 28,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 59,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 92,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 37,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 37
            },
            {
                "skill": "meleeDefense",
                "min": 6,
                "max": 10
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 6,
                "max": 10
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Ranged Nomad",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/9/9a/Background_63.png",
        "level": "2-4",
        "price": 28,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 52,
                "max": 60
            },
            {
                "skill": "fatigue",
                "min": 92,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 47,
                "max": 56
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 37
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 8
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 6,
                "max": 10
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Oathtaker",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/7/7e/Background_69.png",
        "level": "1-3",
        "price": 22,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 66
            },
            {
                "skill": "meleeSkill",
                "min": 60,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 96
            },
            {
                "skill": "rangedSkill",
                "min": 30,
                "max": 39
            },
            {
                "skill": "resolve",
                "min": 43,
                "max": 56
            },
            {
                "skill": "meleeDefense",
                "min": 4,
                "max": 10
            },
            {
                "skill": "initiative",
                "min": 113,
                "max": 122
            },
            {
                "skill": "rangedDefense",
                "min": -10,
                "max": 0
            }
        ],
        "special": "Combat (Affiliation)",
        "specialIcon": ""
    },
    {
        "name": "Orc Slayer",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/e5/Background_55.png",
        "level": "9",
        "price": 25,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 60,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 57,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedSkill",
                "min": 22,
                "max": 37
            },
            {
                "skill": "resolve",
                "min": 45,
                "max": 60
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": -5,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Peddler",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/e5/Peddler.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 37,
                "max": 48
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 2,
                "max": 12
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 117
            },
            {
                "skill": "rangedDefense",
                "min": 2,
                "max": 12
            }
        ],
        "special": "Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Pimp",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/7/7c/Background_56.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 42,
                "max": 52
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 2,
                "max": 12
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 117
            },
            {
                "skill": "rangedDefense",
                "min": 2,
                "max": 12
            }
        ],
        "special": "None",
        "specialIcon": ""
    },
    {
        "name": "Poacher",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/9/9a/Poacher.png",
        "level": "1",
        "price": 8,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 49,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 93,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 47,
                "max": 49
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 114
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Raider",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/c/cc/Raider2.png",
        "level": "2-4",
        "price": 28,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 59,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 92,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 37,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 37
            },
            {
                "skill": "meleeDefense",
                "min": 6,
                "max": 10
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 6,
                "max": 10
            }
        ],
        "special": "Combat & Veteran",
        "specialIcon": ""
    },
    {
        "name": "Ratcatcher",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/f1/Ratcatcher.png",
        "level": "1",
        "price": 4,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 118,
                "max": 125
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn",
        "specialIcon": ""
    },
    {
        "name": "Refugee",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/2/22/Refugee.png",
        "level": "1",
        "price": 4,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 42,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 97,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 1,
                "max": 5
            }
        ],
        "special": "Laborer, Lowborn, Offended by Violence, Thief & Village",
        "specialIcon": ""
    },
    {
        "name": "Retired Soldier",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/0/0e/Retired_soldier.png",
        "level": "2-3",
        "price": 15,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 40,
                "max": 45
            },
            {
                "skill": "meleeSkill",
                "min": 60,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 80,
                "max": 90
            },
            {
                "skill": "rangedSkill",
                "min": 37,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 43,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 95,
                "max": 100
            },
            {
                "skill": "rangedDefense",
                "min": 5,
                "max": 13
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Sellsword",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/d/d3/Sellsword.png",
        "level": "2-4",
        "price": 35,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 60,
                "max": 67
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 44,
                "max": 52
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 45
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 5,
                "max": 13
            }
        ],
        "special": "Combat & Veteran",
        "specialIcon": ""
    },
    {
        "name": "Servant",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/8/83/Servant.png",
        "level": "1",
        "price": 4,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 45,
                "max": 55
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 35
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 105,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 2,
                "max": 5
            }
        ],
        "special": "Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Shepherd",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/8/80/Shepherd.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 37,
                "max": 49
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn & Offended by Violence",
        "specialIcon": ""
    },
    {
        "name": "Squire",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/0/00/Squire.png",
        "level": "1",
        "price": 20,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 54,
                "max": 62
            },
            {
                "skill": "fatigue",
                "min": 97,
                "max": 105
            },
            {
                "skill": "rangedSkill",
                "min": 39,
                "max": 50
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 52
            },
            {
                "skill": "meleeDefense",
                "min": 1,
                "max": 8
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 1,
                "max": 8
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Swordmaster",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/4/4f/Swordmaster2.png",
        "level": "3-5",
        "price": 35,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 38,
                "max": 48
            },
            {
                "skill": "meleeSkill",
                "min": 72,
                "max": 77
            },
            {
                "skill": "fatigue",
                "min": 75,
                "max": 90
            },
            {
                "skill": "rangedSkill",
                "min": 27,
                "max": 37
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 10,
                "max": 20
            },
            {
                "skill": "initiative",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Combat",
        "specialIcon": ""
    },
    {
        "name": "Tailor",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/6/6d/Tailor.png",
        "level": "1",
        "price": 5,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 47,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 85,
                "max": 95
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 30,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Lowborn & Village",
        "specialIcon": ""
    },
    {
        "name": "Thief",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/fc/Thief.png",
        "level": "1",
        "price": 10,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 35,
                "max": 40
            },
            {
                "skill": "meleeDefense",
                "min": 5,
                "max": 13
            },
            {
                "skill": "initiative",
                "min": 112,
                "max": 120
            },
            {
                "skill": "rangedDefense",
                "min": 5,
                "max": 13
            }
        ],
        "special": "Lowborn & Thief",
        "specialIcon": ""
    },
    {
        "name": "Vagabond",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/e/e7/Vagabond.png",
        "level": "1",
        "price": 6,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 47,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 100,
                "max": 115
            },
            {
                "skill": "rangedSkill",
                "min": 32,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 25,
                "max": 33
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "Laborer, Lowborn & Thief",
        "specialIcon": ""
    },
    {
        "name": "Wildman",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/3/38/Wildman.png",
        "level": "1-2",
        "price": 12,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 62,
                "max": 70
            },
            {
                "skill": "meleeSkill",
                "min": 53,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 108,
                "max": 123
            },
            {
                "skill": "rangedSkill",
                "min": 27,
                "max": 42
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": -5,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 95,
                "max": 105
            },
            {
                "skill": "rangedDefense",
                "min": -5,
                "max": 0
            }
        ],
        "special": "-15%",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/0/08/Xp_received.png"
    },
    {
        "name": "Witchhunter",
        "img": "https://static.wikia.nocookie.net/battlebrothers/images/f/fd/Witchhunter.png",
        "level": "1-3",
        "price": 13,
        "bool": true,
        "stats": [
            {
                "skill": "hitpoints",
                "min": 50,
                "max": 60
            },
            {
                "skill": "meleeSkill",
                "min": 47,
                "max": 57
            },
            {
                "skill": "fatigue",
                "min": 90,
                "max": 100
            },
            {
                "skill": "rangedSkill",
                "min": 47,
                "max": 50
            },
            {
                "skill": "resolve",
                "min": 42,
                "max": 50
            },
            {
                "skill": "meleeDefense",
                "min": 0,
                "max": 5
            },
            {
                "skill": "initiative",
                "min": 100,
                "max": 110
            },
            {
                "skill": "rangedDefense",
                "min": 0,
                "max": 5
            }
        ],
        "special": "+20  at morale checks against fear, panic or mind-control effects.",
        "specialIcon": "https://static.wikia.nocookie.net/battlebrothers/images/5/5c/Resolve.png"
    }
]

const heroesTitle = [hitpoints, meleeSkill, fatigue, rangedSkill, resolve, meleeDefense, initiative, rangedDefense, gold, level ]
export {heroes, heroesTitle}