# Falcon 🦅

### Installation

- packages: `yarn`
- Backend: `yarn server`: this will start the server on http://localhost:8080
- Frontend: `yarn start`: this will open the application at http://localhost:3000

### Features

Once you start the application, you will see the dashboard that the Millenium Falcon crew has access to.

![dashboard](./images/dashboard.png)

You can choose several presets in the menu on the left:
![presets](./images/presets.png)

The dashboard is responsive to those presets and will update accordingly.

##### Key indicators

The first indicators available are the **itinerary**, the **autonomy** and the **odds**.

- The itinerary and autonomy are loaded with the example and cannot change.
- The odds on the other side are computed and depend on the position of the bounty hunters, that can be modified, as we'll see below.

![key_indicators](./images/key_indicators.png)

The answer odds are simply the "expected" answer from those specific examples. It will change according to the selected example, but if you modify the bounty hunter's position, it may be inaccurate because outdated.

##### Bounty hunters' position

The crew aboard the Millenium Falcon may want to tweak the position of the bounty hunters if they receive new information from the rebel command center.

As such, we show an editable form like this:

![edition](./images/edition.png)

In this section, the crew can:

- upload a new file that respect the appropriate schema. ☑️
- directly change the position of the bounty hunters (copy-pasting or editing). 📝

⚠️ However, the form has to be at all time a valid JSON object, as a result, if we want to update `"day": 8` into `"day": 9`, we first need to add a number then delete the other one: (ex: `"day": 89` => `"day": 9`).

If a planet doesn't exist, a warning message will be displayed.

Once we are satisfied with the setup, we can click on "Apply" and the new odds of reaching the destination without getting captured will be computed.

##### Planetary system

Another indicator helpful for the crew and especially the captain is the map, or the planetary system.

![system](./images/system.png)

It shows:

- the departure: color light red + 🛫
- the destination: color light green + 🛬
- the position of the bounty hunters: 🎱 . (death star + luck)

This map updates with the previous section.

### CLI

You can also ask R2D2 (aka the command line interface) for answers.
Simply run:

```bash
$ ./give-me-the-odds.sh src/examples/example2/millenium-falcon.json src/examples/example2/empire.json
0.81
```
