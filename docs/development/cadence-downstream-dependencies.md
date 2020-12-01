# Updating the Cadence Downstream Dependencies / Releasing the CLI

Updating the Cadence downstream dependencies should be done in the following steps:
     
1. Update [Flow Go SDK](https://github.com/onflow/flow-go-sdk):
   - Update to the latest Cadence version by running the following command (replace `X.X.X` with the version number):
     ```sh
     $ go get github.com/onflow/cadence@vX.X.X 
     ```
   - Tag a new release and push it
   
2. Update [Flow Go](https://github.com/onflow/flow-go):
     - Update `github.com/onflow/cadence` to the new release
     - Update `github.com/onflow/flow-go-sdk` to the new release
     - In the root directory
     - In the `integration` directory

3. Update the [Flow Emulator](https://github.com/onflow/flow-emulator):
   - Update `github.com/onflow/flow-go` to the latest commit
   - Update `github.com/onflow/flow-go-sdk` to the new release
   - Update `github.com/onflow/cadence` to the new release
   - Tag a new release and push it
   
4. Update the [Cadence Language Server](https://github.com/onflow/cadence/tree/master/languageserver):
   - Update `github.com/onflow/flow-go-sdk` to the new release
   - Update `github.com/onflow/cadence` to the new release
   - Tag a new release as `languageserver/vX.X.X` and push it

5. Update the [Flow CLI](https://github.com/onflow/flow-cli):
   - Update `github.com/onflow/cadence` to the new release
   - Update `github.com/onflow/cadence/languageserver` to the new release
   - Update `github.com/onflow/flow-emulator` to the new release
   - Update `github.com/onflow/flow-go-sdk` to the new release
   - Tag a new release and push it
   - Run `make versioned-binaries` to build the binaries
   - Run `make publish` to upload the binaries (`cmd/flow/flow-*`) to https://console.cloud.google.com/storage/browser/flow-cli/?project=dl-flow&authuser=0
   - Change the contents of `version.txt` in the bucket to `vX.X.X`
   
