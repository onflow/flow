# Flow version compatibility

This document outlines the compatibility practices used when releasing new versions of the Flow protocol, APIs and tools. 

## Semantic versioning

Flow follows [Semantic Versioning 2.0](https://semver.org/spec/v2.0.0.html) (semver) for all components and projects. 
Each release version of Flow has the form MAJOR.MINOR.PATCH. For example, Flow Protocol version `1.2.3` has MAJOR version 1, 
MINOR version 2, and PATCH version 3. Changes to each number have the following meaning:

- **MAJOR:** Potentially backwards incompatible changes. Code and data that worked with a previous major release will not necessarily work with the new release.

- **MINOR:** Backwards compatible features, speed improvements, etc. Code and data that worked with a previous minor release and which depends only on the public API will continue to work unchanged. For details on what is and is not the public API, see [Public APIs](#public-apis).

- **PATCH:** Backwards compatible bug fixes.

For example, release `2.0.0` introduced backwards incompatible changes from release `1.12.1`. However, release `2.1.1` was backwards compatible with release `2.0.0`.

### Exception for `0.X.Y` releases

Many Flow projects are still in an early beta phase and therefore are denoted with a `0.X.Y` version tag. 
While the team is moving towards proper versioning for all projects, 
these pre-1.0 releases are not guaranteed to follow the semantic versioning rules outlined above.

## Public APIs

Each Flow component exposes a public API, loosely defined as the functionality that it exposes to other components or users.

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Subcomponent</th>
            <th>Public API(s)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>Flow Protocol</td>
            <td>Collection Node</td>
            <td>
              Ingestion Engine<br/>
              Proposal Engine<br/>
              Pusher Engine<br/>
              Collection RPC API
            </td>
        </tr>
        <tr>
            <td>Consensus Node</td>
            <td>
              Ingestion Engine<br/>
              Provider Engine<br/>
              Matching Engine<br/>
              Compliance Engine
            </td>
        </tr>
        <tr>
            <td>Execution Node</td>
            <td>
              Ingestion Engine<br/>
              Provider Engine<br/>
              Synchronization Engine<br/>
              Flow Virtual Machine<br/>
              Execution RPC API
            </td>
        </tr>
        <tr>
            <td>Verification Node</td>
            <td>
              Finder Engine<br/>
              Matching Engine<br/>
              Verifier Engine
            </td>
        </tr>
        <tr>
            <td>Access Node</td>
            <td>Access RPC API</td>
        </tr>
        <tr>
            <td>Flow Emulator</td>
            <td></td>
            <td>
              Access RPC API<br/>
              Flow Virtual Machine
            </td>
        </tr>
        <tr>
            <td>Cadence</td>
            <td>
              Language<br/>
              Standard Library<br/>
              Language Server
            </td>
            <td>
              Runtime interface<br/>
              Values and types<br/>
              Encoding (JSON-CDC)
            </td>
        </tr>
        <tr>
            <td>FCL-JS (Flow Client Library)</td>
            <td></td>
            <td>FCL (Flow Client Library)</td>
        </tr>
        <tr>
            <td>Flow Go SDK</td>
            <td></td>
            <td>All public functions and variables</td>
        </tr>
        <tr>
            <td>Flow CLI</td>
            <td></td>
            <td>All commands, flags and arguments</td>
        </tr>
    </tbody>
</table>
