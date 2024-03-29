/*
 * Access API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger
// TransactionStatus : This value indicates the state of the transaction execution. Only sealed and expired are final and immutable states.
type TransactionStatus string

// List of TransactionStatus
const (
	PENDING_TransactionStatus TransactionStatus = "Pending"
	FINALIZED_TransactionStatus TransactionStatus = "Finalized"
	EXECUTED_TransactionStatus TransactionStatus = "Executed"
	SEALED_TransactionStatus TransactionStatus = "Sealed"
	EXPIRED_TransactionStatus TransactionStatus = "Expired"
)
