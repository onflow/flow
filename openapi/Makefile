
generate:
	swagger-codegen generate -l go -i ./access.yaml -o ./go-client-generated

generate-docker:
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3 generate \
		-i /local/access.yaml \
		-l go \
		-o /local/go-client-generated