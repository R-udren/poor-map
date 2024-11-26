# Poor map

This is an interactive map application built using **Leaflet** and **OpenStreetMap**. It displays geographical data from a `geomap.json` file and plots markers on the map with popups containing information about each location.

## Features

- Interactive map with zoom and pan functionality
- Markers with popups displaying location information
- Data fetched from a `geomap.json` file

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/R-udren/poor-map.git
    ```
2. Navigate to the project directory:
    ```sh
    cd poor-map
    ```

## Usage

1. Start a local server to serve the `index.html` file. You can use any static server, for example, `http-server`:
    ```sh
    npx http-server
    ```
   
    Or use Python's built-in HTTP server:
    ```sh
    python -m http.server
    ```
2. Open your browser and navigate to the local server address, typically `http://localhost:8080`.

## Project Structure

- `index.html`: The main HTML file that includes the map container and scripts.
- `index.js`: The main JavaScript file that initializes the map and loads the data.
- `geomap.json`: The JSON file containing geographical data.
- `package.json`: The project configuration file.

## Dependencies

- [Leaflet](https://leafletjs.com/): A JavaScript library for interactive maps.
- [OpenStreetMap](https://www.openstreetmap.org/): A collaborative project to create a free editable map of the world.

## License

This project is licensed under the MIT License.