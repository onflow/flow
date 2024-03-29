/*
 * Access API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type SigningAlgorithm string

// List of SigningAlgorithm
const (
	BLSBLS12381_SigningAlgorithm SigningAlgorithm = "BLSBLS12381"
	ECDSAP256_SigningAlgorithm SigningAlgorithm = "ECDSAP256"
	ECDSA_SECP256K1_SigningAlgorithm SigningAlgorithm = "ECDSASecp256k1"
)
