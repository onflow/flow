# Flow Protocol Buffer Source Files

This folder contains the [Protocol Buffer](https://developers.google.com/protocol-buffers) sources files that define the Flow Access gRPC API.

> ❓ What is the Access API?

Check out the [Flow Access API specification](/docs/access-api-spec.md).

## Generating stubs

You can use [prototool](https://github.com/uber/prototool) to generate gRPC client stubs in a variety of languages.

Running the command below (in the current directory) will generate stubs for Go and Java:

```shell script
prototool generate
```
