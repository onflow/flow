# Updating the Cadence Downstream Dependencies

Updating the Cadence downstream dependencies should be done in the following steps:

1. Update [Flow Go](https://github.com/dapperlabs/flow-go):
   - Update to the latest Cadence version by running the following command in both the root directory and in `integration` (replace `X.X.X` with the version number):
     ```sh
     $ go get github.com/onflow/cadence@vX.X.X 
     ```
     
2. Update [Flow Go SDK](https://github.com/onflow/flow-go-sdk):
   - Update `github.com/onflow/cadence` to the new release
   - Tag a new release and push it
   
3. Update the [Flow Emulator](https://github.com/dapperlabs/flow-emulator):
   - Update `github.com/dapperlabs/flow-go` to the latest commit
   - Update `github.com/onflow/flow-go-sdk` to the new release
   - Update `github.com/onflow/cadence` to the new release
   - Tag a new release and push it
   
4. Update the [Cadence Language Server](https://github.com/onflow/cadence/tree/master/languageserver):
   - Update `github.com/onflow/flow-go-sdk` to the new release
   - Update `github.com/onflow/cadence` to the new release
   - Tag a new release as `languageserver/vX.X.X` and push it

5. Update the [Flow CLI](github.com/dapperlabs/flow-cli):
   - Update `github.com/onflow/cadence` to the new release
   - Update `github.com/onflow/cadence/languageserver` to the new release
   - Update `github.com/dapperlabs/flow-emulator` to the new release
   - Update `github.com/onflow/flow-go-sdk` to the new release
   - Tag a new release and push it
