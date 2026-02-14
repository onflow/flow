
generate:
	swagger-codegen generate -l go -i ./openapi.yaml -o ./go-client-generated

generate-docker:
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3 generate \
		-i /local/openapi.yaml \
		-l go \
		-o /local/go-client-generated