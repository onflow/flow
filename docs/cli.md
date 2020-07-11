# Flow CLI

> Version 0.5.1

The Flow CLI is a command-line interface that provides useful utilities for building Flow applications.

## Installation

The Flow CLI can be installed on macOS, Linux and Windows:

### Linux and macOS

_This installation method only works on macOS/x86-64 and Linux/x86-64 architectures._

This script downloads and installs the appropriate binary for your system:

```sh
sh -ci "$(curl -fsSL https://storage.googleapis.com/flow-cli/install.sh)"
```

### Windows

_This installation method only works on Windows 10, 8.1, or 7 (SP1, with [PowerShell 3.0](https://www.microsoft.com/en-ca/download/details.aspx?id=34595)), on x86-64._

1. Open PowerShell ([Instructions](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-7#finding-powershell-in-windows-10-81-80-and-7))
2. In PowerShell, run:

    ```powershell
    iex "& { $(irm 'https://storage.googleapis.com/flow-cli/install.ps1') }"
    ```

### Upgrading an existing installation

Simply re-run the installation commands above.

# Changelog

## Version 0.5.1

- Upgraded Cadence to [v0.5.1](https://github.com/onflow/cadence/releases/tag/v0.5.1)
- Upgraded Flow Emulator to [v0.5.1](https://github.com/onflow/flow/blob/master/docs/emulator.md#version-051)

## Version 0.5.0

- Upgraded Cadence to [v0.5.0](https://github.com/onflow/cadence/releases/tag/v0.5.0)
- Upgraded Flow Emulator to [v0.5.0](https://github.com/onflow/flow/blob/master/docs/emulator.md#version-050)

## Version 0.4.0

- Upgraded Cadence to [v0.4.0](https://github.com/onflow/cadence/releases/tag/v0.4.0)
- Upgraded Flow Emulator to [v0.4.0](https://github.com/onflow/flow/blob/master/docs/emulator.md#version-040)
- Upgraded Cadence VS Code Extension to [v0.4.0](https://github.com/onflow/flow/blob/master/docs/vscode-extension.md#version-040)
