# Frame Maker

Sick and tired of sketching on paper the calculations to take a length of frame
material and account for matting to make a frame, thought I'd Make (my) Life
Easier™.

## TODO

*   Sinatra to React.js
*   Coffeescript to Ecmascript
*   History / Auto load
*   Colour picker for frame/matt
*   Optional increase of number of matts
*   Non-uniform matting

## Getting Started

Docker is sweet.

### Build a container

```bash
docker-compose -f docker-compose.dev.yml build web
```

### Run the container

```bash
docker-compose -f docker-compose.dev.yml run web
```

### Adding a new Gem

With Docker you'll need to do the old double install trick:

1.  Install into existing container to update the [Gemfile.lock](./Gemfile.lock)
    file; and
2.  Rebuild your container using the updated [Gemfile.lock](./Gemfile.lock).
