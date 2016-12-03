# Prototype Tagged Photo

Tagging an image.

## Run the scripts

Boot: Installs packages and builds ```npm run boot```

Boot and watch: Installs the packages and then watches for changes ```npm run boot:watch```

Build: Builds the project ```npm run build```

Watch: Watches the project and rebuilds ```npm run watch```

Start: Starts the server and runs watch, in seperate terminal tabs  ```npm run start```

## Clean the slate

Wipe: Deletes the build and node_modules dirs ```npm run wipe```

Clean: Deletes just the build dir ```npm run clean```

## Server

Superstatic is a cool simple webserver that supports HTML pushState.

Start the webserver.

```superstatic -p 4000 public```

For single page apps add a ```superstatic.json``` file to the root of your project.

```
{
  "rewrites": [
    {
      "source": "**",
      "destination": "/index.html"
    }
  ]
}
```

