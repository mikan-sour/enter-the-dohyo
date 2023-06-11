import { TBanzuke } from "../../../shared/types";
import DB from "../dbClient";

export class MockDB extends DB {
    constructor(){
        super();
    }

    async returnMockBanzuke():Promise<TBanzuke> {
        return banzuke;
    }
}

const banzuke:TBanzuke = {
    "yokozuna": [
        {
            "rikishi": "Hakuho",
            "rank": "Yokozuna",
            "position": 1,
            "side": "East",
            "weight": 154,
            "multiplier": 1
        },
        {
            "rikishi": "Terunofuji",
            "rank": "Yokozuna",
            "position": 1,
            "side": "West",
            "weight": 171, "multiplier": 1.1
        }
    ],
    "ozeki": [
        {
            "rikishi": "Takakeisho",
            "rank": "Ozeki",
            "position": 1,
            "side": "East",
            "weight": 160, "multiplier": 1.2
        },
        {
            "rikishi": "Shodai",
            "rank": "Ozeki",
            "position": 1,
            "side": "West",
            "weight": 160, "multiplier": 1.3
        }
    ],
    "sekiwake": [
        {
            "rikishi": "Asanoyama",
            "rank": "Sekiwake",
            "position": 1,
            "side": "East",
            "weight": 155, "multiplier": 1.4
        },
        {
            "rikishi": "Takanosho",
            "rank": "Sekiwake",
            "position": 1,
            "side": "West",
            "weight": 148, "multiplier": 1.5
        }
    ],
    "komosubi": [
        {
            "rikishi": "Mitakeumi",
            "rank": "Komusubi",
            "position": 1,
            "side": "East",
            "weight": 155, "multiplier": 1.6
        },
        {
            "rikishi": "Daieisho",
            "rank": "Komusubi",
            "position": 1,
            "side": "West",
            "weight": 160, "multiplier": 1.7
        }
    ],
    "maegashira": [
        {
            "rikishi": "Takayasu",
            "rank": "Maegashira",
            "position": 1,
            "side": "East",
            "weight": 158, "multiplier": 1.8
        },
        {
            "rikishi": "Takarafuji",
            "rank": "Maegashira",
            "position": 1,
            "side": "West",
            "weight": 147, "multiplier": 1.9
        },
        {
            "rikishi": "Onosho",
            "rank": "Maegashira",
            "position": 2,
            "side": "East",
            "weight": 152, "multiplier": 2.0
        },
        {
            "rikishi": "Abi",
            "rank": "Maegashira",
            "position": 2,
            "side": "West",
            "weight": 158, "multiplier": 2.1
        },
        {
            "rikishi": "Kiribayama",
            "rank": "Maegashira",
            "position": 3,
            "side": "East",
            "weight": 160, "multiplier": 2.2
        },
        {
            "rikishi": "Terutsuyoshi",
            "rank": "Maegashira",
            "position": 3,
            "side": "West",
            "weight": 150, "multiplier": 2.3
        },
        {
            "rikishi": "Tochinoshin",
            "rank": "Maegashira",
            "position": 4,
            "side": "East",
            "weight": 151, "multiplier": 2.4
        },
        {
            "rikishi": "Kaisei",
            "rank": "Maegashira",
            "position": 4,
            "side": "West",
            "weight": 137, "multiplier": 2.5
        },
        {
            "rikishi": "Ichinojo",
            "rank": "Maegashira",
            "position": 5,
            "side": "East",
            "weight": 215, "multiplier": 2.6
        },
        {
            "rikishi": "Kotonowaka",
            "rank": "Maegashira",
            "position": 5,
            "side": "West",
            "weight": 190, "multiplier": 2.7
        },
        {
            "rikishi": "Chiyotairyu",
            "rank": "Maegashira",
            "position": 6,
            "side": "East",
            "weight": 170, "multiplier": 2.8
        },
        {
            "rikishi": "Kagayaki",
            "rank": "Maegashira",
            "position": 6,
            "side": "West",
            "weight": 168, "multiplier": 2.9
        },
        {
            "rikishi": "Tamawashi",
            "rank": "Maegashira",
            "position": 7,
            "side": "East",
            "weight": 175, "multiplier": 3.0
        },
        {
            "rikishi": "Myogiryu",
            "rank": "Maegashira",
            "position": 7,
            "side": "West",
            "weight": 157, "multiplier": 3.1
        },
        {
            "rikishi": "Endo",
            "rank": "Maegashira",
            "position": 8,
            "side": "East",
            "weight": 160, "multiplier": 3.2
        },
        {
            "rikishi": "Tsurugisho",
            "rank": "Maegashira",
            "position": 8,
            "side": "West",
            "weight": 150, "multiplier": 3.3
        },
        {
            "rikishi": "Yutakayama",
            "rank": "Maegashira",
            "position": 9,
            "side": "East",
            "weight": 175, "multiplier": 3.4
        },
        {
            "rikishi": "Ishiura",
            "rank": "Maegashira",
            "position": 9,
            "side": "West",
            "weight": 135, "multiplier": 3.5
        },
        {
            "rikishi": "Chiyoshoma",
            "rank": "Maegashira",
            "position": 10,
            "side": "East",
            "weight": 137, "multiplier": 3.6
        },
        {
            "rikishi": "Kotoeko",
            "rank": "Maegashira",
            "position": 10,
            "side": "West",
            "weight": 139, "multiplier": 3.7
        },
        {
            "rikishi": "Tokushoryu",
            "rank": "Maegashira",
            "position": 11,
            "side": "East",
            "weight": 162,"multiplier": 3.8
        },
        {
            "rikishi": "Shimanoumi",
            "rank": "Maegashira",
            "position": 11,
            "side": "West",
            "weight": 156, "multiplier": 3.9
        },
        {
            "rikishi": "Kotoyuki",
            "rank": "Maegashira",
            "position": 12,
            "side": "East",
            "weight": 152, "multiplier": 4.0
        },
        {
            "rikishi": "Sadanoumi",
            "rank": "Maegashira",
            "position": 12,
            "side": "West",
            "weight": 145, "multiplier": 4.1
        },
        {
            "rikishi": "Aoiyama",
            "rank": "Maegashira",
            "position": 13,
            "side": "East",
            "weight": 199, "multiplier": 4.2
        },
        {
            "rikishi": "Kotoeko",
            "rank": "Maegashira",
            "position": 13,
            "side": "West",
            "weight": 142, "multiplier": 4.3
        },
        {
            "rikishi": "Azumaryu",
            "rank": "Maegashira",
            "position": 14,
            "side": "East",
            "weight": 167, "multiplier": 4.4
        },
        {
            "rikishi": "Kotoyuki",
            "rank": "Maegashira",
            "position": 14,
            "side": "West",
            "weight": 154, "multiplier": 4.5
        },
        {
            "rikishi": "Hidenoumi",
            "rank": "Maegashira",
            "position": 15,
            "side": "East",
            "weight": 158, "multiplier": 4.6
        },
        {
            "rikishi": "Ishiura",
            "rank": "Maegashira",
            "position": 15,
            "side": "West",
            "weight": 133, "multiplier": 4.7
        },
        {
            "rikishi": "Chiyonokuni",
            "rank": "Maegashira",
            "position": 16,
            "side": "East",
            "weight": 143, "multiplier": 4.8
        },
        {
            "rikishi": "Kotonowaka",
            "rank": "Maegashira",
            "position": 16,
            "side": "West",
            "weight": 173, "multiplier": 4.9
        },
        {
            "rikishi": "Hoshoryu",
            "rank": "Maegashira",
            "position": 17,
            "side": "East",
            "weight": 144, "multiplier": 5.0
        },
        {
            "rikishi": "Akua",
            "rank": "Maegashira",
            "position": 17,
            "side": "West",
            "weight": 154, "multiplier": 5.1
        }
    ]
}