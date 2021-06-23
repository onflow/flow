.PHONY: generate-go-stubs
generate-go-stubs:
	rm -rf ./protobuf/go/flow/access ./protobuf/go/flow/execution ./protobuf/go/flow/entities ./protobuf/go/flow/legacy && buf generate
