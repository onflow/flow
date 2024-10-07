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

### Publishing with GitHub Actions

The "com.vanniktech.maven.publish" plugin is used to automate Maven releases for JVM protobuf generation. More information on the release process can be found [here](https://vanniktech.github.io/gradle-maven-publish-plugin/central/).

There are two GitHub Actions configured to run on the master branch:

- SNAPSHOT: On every commit to the `master` branch a build is performed and if successful it is deployed as a snapshot version.
- RELEASE: Whenever a tag is created with the pattern of `vXXX` a version with the name XXX is built and if successful deployed as a release version.

The following GitHub repository secrets configure these actions:

- `FLOW_JVM_SDK_CICD_PUBLISH_ENABLED`: (optional) Must be `true` for the publishing of artifacts to happen (defaults to `false`)
- `FLOW_JVM_SDK_SIGNING_KEY`: (required if publish enabled) ascii armored version of the pgp key for signing releases
- `FLOW_JVM_SDK_SIGNING_PASSWORD`: (required if publish enabled) password to the pgp key
- `FLOW_JVM_SDK_SONATYPE_USERNAME`: (required if publish enabled) sonatype username
- `FLOW_JVM_SDK_SONATYPE_PASSWORD`: (required if publish enabled) sonatype password
