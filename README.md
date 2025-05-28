# MCPE-TransferAddon

MCPE-TransferAddon is a Minecraft Bedrock Edition script pack designed to automatically transfer players to a specified server upon spawning

## Installation

[Download the latest release here](https://github.com/jeanmajid/MCPE-TransferAddon/releases/tag/release)

## Configuration

To configure the target server, edit the `BP/scripts/config.js` file:

```javascript
export const config = {
    targetIp: "",
    targetport: 19132
};
```

- **`targetIp`**: The IP address of the server you want players to be transferred to
- **`targetport`**: The port number of the target server

Make sure to save your changes after editing the file

## Usage

1. Add the behavior pack to your Minecraft world
2. Start the world and ensure the script is enabled
3. Players will automatically be transferred to the configured server upon spawning

## Requirements

- Beta scripts enabled

## License

This project is licensed under the MIT License