#!/usr/bin/env bash

# $1 is the first file. It should look like that
# {
#   "autonomy": 6,
#   "departure": "Tatooine",
#   "arrival": "Endor",
#   "routes_db": "universe.db"
# }

# $2 is the second file. It should look like that
# {
#   "countdown": 6, 
#   "bounty_hunters": [
#     {"planet": "Tatooine", "day": 4 },
#     {"planet": "Dagobah", "day": 5 }
#   ]
# }

# Call the command like that:
# $ ./give-me-the-odds.sh src/examples/example1/millenium-falcon.json src/examples/example1/empire.json

node ./src/scripts/give-me-the-odds.js "$1" "$2"
