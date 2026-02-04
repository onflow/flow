.PHONY: generate
generate:
	rm -rf ./go/flow/access ./go/flow/execution ./go/flow/executiondata ./go/flow/entities ./go/flow/legacy && buf generate

.PHONY: format
format:
	find ./flow/ -name "*.proto" | xargs clang-format -style=google -i