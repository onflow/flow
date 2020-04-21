# Visual Studio Code Extension

To install the Visual Studio Code extension for Cadence,
you first need to [install Visual Studio Code](https://code.visualstudio.com/Download).

Once installed, open Visual Studio Code, open the command palette
(press `Shift+Command+P` on macOS and `Shift+Ctrl+P` on Linux/Windows),
then search for `Install code command` and press enter.

![Visual Studio Code extension: Install code command](images/vscode-extension1.png)


## Installing the extension using the Flow CLI

The Visual Studio Code extension is bundled with the [Flow CLI](cli.md),
a command-line interface for working with Flow.

To install the extension, run the following command in a terminal on macOS/Linux,
or in PowerShell on Windows:

```sh
flow cadence install-vscode-extension
```

Restart Visual Studio Code to complete the installation of the extension.

## Running the Emulator

The emulator can be run directly from Visual Studio Code.

To do so, open the command palette
(press `Shift+Command+P` on macOS and `Shift+Ctrl+P` on Linux/Windows),
and search for `Run emulator`.

![Visual Studio Code extension: Run emulator](images/vscode-extension2.png)

This will open a new terminal and start an emulated version of the Flow blockchain.

![Visual Studio Code extension: Running emulator in terminal](images/vscode-extension3.png)
