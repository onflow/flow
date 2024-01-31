# Flow Protocol Buffer Source Files

This folder contains the [Protocol Buffer](https://developers.google.com/protocol-buffers) sources files that define the Flow Access gRPC API.

> ❓ What is the Access API?

Check out the [Flow Access API specification](/docs/content/access-api.md).

## Generating Go stubs

You can use [buf](https://github.com/bufbuild/buf) to generate gRPC client stubs in a variety of languages.
Please make sure you have `protoc-gen-go-grpc` installed, for example using command
```shell script
go install github.com/golang/protobuf/protoc-gen-go@v1.3.2
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.3.0
```

Running the command below (in the current directory) will generate stubs for Go:

```shell script
make generate
```

## Generating and publishing JVM stubs

JVM support is in the alpha stage; many steps require manual intervention.

`./gradlew generateProto` compiles Protobuf files into local Java classes.

### Publishing

`./gradlew publishToSonatype` prepares and publishes compiled classes into JAR and uploads to OSSRH staging repository.

This requires signing artifacts which is done by [Signing Gradle plugin](https://docs.gradle.org/current/userguide/signing_plugin.html) - it requires
external configuration and appropriate GPG Keys. Please refer to plugin and [OSSRH](https://central.sonatype.org/pages/working-with-pgp-signatures.html)
documentation.
Uploading to staging repo requires an approved Sonatype account. Please refer to [Gradle Nexus Publish Plugin](https://github.com/gradle-nexus/publish-plugin)
documentation how to provide credentials.
