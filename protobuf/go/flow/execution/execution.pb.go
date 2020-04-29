// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flow/execution/execution.proto

package execution

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	entities "github.com/onflow/flow/protobuf/go/flow/entities"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type PingRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PingRequest) Reset()         { *m = PingRequest{} }
func (m *PingRequest) String() string { return proto.CompactTextString(m) }
func (*PingRequest) ProtoMessage()    {}
func (*PingRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{0}
}

func (m *PingRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PingRequest.Unmarshal(m, b)
}
func (m *PingRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PingRequest.Marshal(b, m, deterministic)
}
func (m *PingRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PingRequest.Merge(m, src)
}
func (m *PingRequest) XXX_Size() int {
	return xxx_messageInfo_PingRequest.Size(m)
}
func (m *PingRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PingRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PingRequest proto.InternalMessageInfo

type PingResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PingResponse) Reset()         { *m = PingResponse{} }
func (m *PingResponse) String() string { return proto.CompactTextString(m) }
func (*PingResponse) ProtoMessage()    {}
func (*PingResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{1}
}

func (m *PingResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PingResponse.Unmarshal(m, b)
}
func (m *PingResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PingResponse.Marshal(b, m, deterministic)
}
func (m *PingResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PingResponse.Merge(m, src)
}
func (m *PingResponse) XXX_Size() int {
	return xxx_messageInfo_PingResponse.Size(m)
}
func (m *PingResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_PingResponse.DiscardUnknown(m)
}

var xxx_messageInfo_PingResponse proto.InternalMessageInfo

type GetAccountAtBlockIDRequest struct {
	BlockId              []byte   `protobuf:"bytes,1,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	Address              []byte   `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetAccountAtBlockIDRequest) Reset()         { *m = GetAccountAtBlockIDRequest{} }
func (m *GetAccountAtBlockIDRequest) String() string { return proto.CompactTextString(m) }
func (*GetAccountAtBlockIDRequest) ProtoMessage()    {}
func (*GetAccountAtBlockIDRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{2}
}

func (m *GetAccountAtBlockIDRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAccountAtBlockIDRequest.Unmarshal(m, b)
}
func (m *GetAccountAtBlockIDRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAccountAtBlockIDRequest.Marshal(b, m, deterministic)
}
func (m *GetAccountAtBlockIDRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAccountAtBlockIDRequest.Merge(m, src)
}
func (m *GetAccountAtBlockIDRequest) XXX_Size() int {
	return xxx_messageInfo_GetAccountAtBlockIDRequest.Size(m)
}
func (m *GetAccountAtBlockIDRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAccountAtBlockIDRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetAccountAtBlockIDRequest proto.InternalMessageInfo

func (m *GetAccountAtBlockIDRequest) GetBlockId() []byte {
	if m != nil {
		return m.BlockId
	}
	return nil
}

func (m *GetAccountAtBlockIDRequest) GetAddress() []byte {
	if m != nil {
		return m.Address
	}
	return nil
}

type GetAccountAtBlockIDResponse struct {
	Account              *entities.Account `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *GetAccountAtBlockIDResponse) Reset()         { *m = GetAccountAtBlockIDResponse{} }
func (m *GetAccountAtBlockIDResponse) String() string { return proto.CompactTextString(m) }
func (*GetAccountAtBlockIDResponse) ProtoMessage()    {}
func (*GetAccountAtBlockIDResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{3}
}

func (m *GetAccountAtBlockIDResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAccountAtBlockIDResponse.Unmarshal(m, b)
}
func (m *GetAccountAtBlockIDResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAccountAtBlockIDResponse.Marshal(b, m, deterministic)
}
func (m *GetAccountAtBlockIDResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAccountAtBlockIDResponse.Merge(m, src)
}
func (m *GetAccountAtBlockIDResponse) XXX_Size() int {
	return xxx_messageInfo_GetAccountAtBlockIDResponse.Size(m)
}
func (m *GetAccountAtBlockIDResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAccountAtBlockIDResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetAccountAtBlockIDResponse proto.InternalMessageInfo

func (m *GetAccountAtBlockIDResponse) GetAccount() *entities.Account {
	if m != nil {
		return m.Account
	}
	return nil
}

type ExecuteScriptAtBlockIDRequest struct {
	BlockId              []byte   `protobuf:"bytes,1,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	Script               []byte   `protobuf:"bytes,2,opt,name=script,proto3" json:"script,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExecuteScriptAtBlockIDRequest) Reset()         { *m = ExecuteScriptAtBlockIDRequest{} }
func (m *ExecuteScriptAtBlockIDRequest) String() string { return proto.CompactTextString(m) }
func (*ExecuteScriptAtBlockIDRequest) ProtoMessage()    {}
func (*ExecuteScriptAtBlockIDRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{4}
}

func (m *ExecuteScriptAtBlockIDRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecuteScriptAtBlockIDRequest.Unmarshal(m, b)
}
func (m *ExecuteScriptAtBlockIDRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecuteScriptAtBlockIDRequest.Marshal(b, m, deterministic)
}
func (m *ExecuteScriptAtBlockIDRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecuteScriptAtBlockIDRequest.Merge(m, src)
}
func (m *ExecuteScriptAtBlockIDRequest) XXX_Size() int {
	return xxx_messageInfo_ExecuteScriptAtBlockIDRequest.Size(m)
}
func (m *ExecuteScriptAtBlockIDRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecuteScriptAtBlockIDRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ExecuteScriptAtBlockIDRequest proto.InternalMessageInfo

func (m *ExecuteScriptAtBlockIDRequest) GetBlockId() []byte {
	if m != nil {
		return m.BlockId
	}
	return nil
}

func (m *ExecuteScriptAtBlockIDRequest) GetScript() []byte {
	if m != nil {
		return m.Script
	}
	return nil
}

type ExecuteScriptAtBlockIDResponse struct {
	Value                []byte   `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExecuteScriptAtBlockIDResponse) Reset()         { *m = ExecuteScriptAtBlockIDResponse{} }
func (m *ExecuteScriptAtBlockIDResponse) String() string { return proto.CompactTextString(m) }
func (*ExecuteScriptAtBlockIDResponse) ProtoMessage()    {}
func (*ExecuteScriptAtBlockIDResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{5}
}

func (m *ExecuteScriptAtBlockIDResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecuteScriptAtBlockIDResponse.Unmarshal(m, b)
}
func (m *ExecuteScriptAtBlockIDResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecuteScriptAtBlockIDResponse.Marshal(b, m, deterministic)
}
func (m *ExecuteScriptAtBlockIDResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecuteScriptAtBlockIDResponse.Merge(m, src)
}
func (m *ExecuteScriptAtBlockIDResponse) XXX_Size() int {
	return xxx_messageInfo_ExecuteScriptAtBlockIDResponse.Size(m)
}
func (m *ExecuteScriptAtBlockIDResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecuteScriptAtBlockIDResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ExecuteScriptAtBlockIDResponse proto.InternalMessageInfo

func (m *ExecuteScriptAtBlockIDResponse) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

type GetEventsForBlockIDsResponse struct {
	Results              []*GetEventsForBlockIDsResponse_Result `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                               `json:"-"`
	XXX_unrecognized     []byte                                 `json:"-"`
	XXX_sizecache        int32                                  `json:"-"`
}

func (m *GetEventsForBlockIDsResponse) Reset()         { *m = GetEventsForBlockIDsResponse{} }
func (m *GetEventsForBlockIDsResponse) String() string { return proto.CompactTextString(m) }
func (*GetEventsForBlockIDsResponse) ProtoMessage()    {}
func (*GetEventsForBlockIDsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{6}
}

func (m *GetEventsForBlockIDsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetEventsForBlockIDsResponse.Unmarshal(m, b)
}
func (m *GetEventsForBlockIDsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetEventsForBlockIDsResponse.Marshal(b, m, deterministic)
}
func (m *GetEventsForBlockIDsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetEventsForBlockIDsResponse.Merge(m, src)
}
func (m *GetEventsForBlockIDsResponse) XXX_Size() int {
	return xxx_messageInfo_GetEventsForBlockIDsResponse.Size(m)
}
func (m *GetEventsForBlockIDsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetEventsForBlockIDsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetEventsForBlockIDsResponse proto.InternalMessageInfo

func (m *GetEventsForBlockIDsResponse) GetResults() []*GetEventsForBlockIDsResponse_Result {
	if m != nil {
		return m.Results
	}
	return nil
}

type GetEventsForBlockIDsResponse_Result struct {
	BlockId              []byte            `protobuf:"bytes,1,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	BlockHeight          uint64            `protobuf:"varint,2,opt,name=block_height,json=blockHeight,proto3" json:"block_height,omitempty"`
	Events               []*entities.Event `protobuf:"bytes,3,rep,name=events,proto3" json:"events,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *GetEventsForBlockIDsResponse_Result) Reset()         { *m = GetEventsForBlockIDsResponse_Result{} }
func (m *GetEventsForBlockIDsResponse_Result) String() string { return proto.CompactTextString(m) }
func (*GetEventsForBlockIDsResponse_Result) ProtoMessage()    {}
func (*GetEventsForBlockIDsResponse_Result) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{6, 0}
}

func (m *GetEventsForBlockIDsResponse_Result) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetEventsForBlockIDsResponse_Result.Unmarshal(m, b)
}
func (m *GetEventsForBlockIDsResponse_Result) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetEventsForBlockIDsResponse_Result.Marshal(b, m, deterministic)
}
func (m *GetEventsForBlockIDsResponse_Result) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetEventsForBlockIDsResponse_Result.Merge(m, src)
}
func (m *GetEventsForBlockIDsResponse_Result) XXX_Size() int {
	return xxx_messageInfo_GetEventsForBlockIDsResponse_Result.Size(m)
}
func (m *GetEventsForBlockIDsResponse_Result) XXX_DiscardUnknown() {
	xxx_messageInfo_GetEventsForBlockIDsResponse_Result.DiscardUnknown(m)
}

var xxx_messageInfo_GetEventsForBlockIDsResponse_Result proto.InternalMessageInfo

func (m *GetEventsForBlockIDsResponse_Result) GetBlockId() []byte {
	if m != nil {
		return m.BlockId
	}
	return nil
}

func (m *GetEventsForBlockIDsResponse_Result) GetBlockHeight() uint64 {
	if m != nil {
		return m.BlockHeight
	}
	return 0
}

func (m *GetEventsForBlockIDsResponse_Result) GetEvents() []*entities.Event {
	if m != nil {
		return m.Events
	}
	return nil
}

type GetEventsForBlockIDsRequest struct {
	Type                 string   `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	BlockIds             [][]byte `protobuf:"bytes,2,rep,name=block_ids,json=blockIds,proto3" json:"block_ids,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetEventsForBlockIDsRequest) Reset()         { *m = GetEventsForBlockIDsRequest{} }
func (m *GetEventsForBlockIDsRequest) String() string { return proto.CompactTextString(m) }
func (*GetEventsForBlockIDsRequest) ProtoMessage()    {}
func (*GetEventsForBlockIDsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{7}
}

func (m *GetEventsForBlockIDsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetEventsForBlockIDsRequest.Unmarshal(m, b)
}
func (m *GetEventsForBlockIDsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetEventsForBlockIDsRequest.Marshal(b, m, deterministic)
}
func (m *GetEventsForBlockIDsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetEventsForBlockIDsRequest.Merge(m, src)
}
func (m *GetEventsForBlockIDsRequest) XXX_Size() int {
	return xxx_messageInfo_GetEventsForBlockIDsRequest.Size(m)
}
func (m *GetEventsForBlockIDsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetEventsForBlockIDsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetEventsForBlockIDsRequest proto.InternalMessageInfo

func (m *GetEventsForBlockIDsRequest) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *GetEventsForBlockIDsRequest) GetBlockIds() [][]byte {
	if m != nil {
		return m.BlockIds
	}
	return nil
}

type GetTransactionResultRequest struct {
	BlockId              []byte   `protobuf:"bytes,1,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	TransactionId        []byte   `protobuf:"bytes,2,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetTransactionResultRequest) Reset()         { *m = GetTransactionResultRequest{} }
func (m *GetTransactionResultRequest) String() string { return proto.CompactTextString(m) }
func (*GetTransactionResultRequest) ProtoMessage()    {}
func (*GetTransactionResultRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{8}
}

func (m *GetTransactionResultRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTransactionResultRequest.Unmarshal(m, b)
}
func (m *GetTransactionResultRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTransactionResultRequest.Marshal(b, m, deterministic)
}
func (m *GetTransactionResultRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTransactionResultRequest.Merge(m, src)
}
func (m *GetTransactionResultRequest) XXX_Size() int {
	return xxx_messageInfo_GetTransactionResultRequest.Size(m)
}
func (m *GetTransactionResultRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTransactionResultRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetTransactionResultRequest proto.InternalMessageInfo

func (m *GetTransactionResultRequest) GetBlockId() []byte {
	if m != nil {
		return m.BlockId
	}
	return nil
}

func (m *GetTransactionResultRequest) GetTransactionId() []byte {
	if m != nil {
		return m.TransactionId
	}
	return nil
}

type GetTransactionResultResponse struct {
	StatusCode           uint32            `protobuf:"varint,1,opt,name=status_code,json=statusCode,proto3" json:"status_code,omitempty"`
	ErrorMessage         string            `protobuf:"bytes,2,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
	Events               []*entities.Event `protobuf:"bytes,3,rep,name=events,proto3" json:"events,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *GetTransactionResultResponse) Reset()         { *m = GetTransactionResultResponse{} }
func (m *GetTransactionResultResponse) String() string { return proto.CompactTextString(m) }
func (*GetTransactionResultResponse) ProtoMessage()    {}
func (*GetTransactionResultResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_699624211ed46c53, []int{9}
}

func (m *GetTransactionResultResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTransactionResultResponse.Unmarshal(m, b)
}
func (m *GetTransactionResultResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTransactionResultResponse.Marshal(b, m, deterministic)
}
func (m *GetTransactionResultResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTransactionResultResponse.Merge(m, src)
}
func (m *GetTransactionResultResponse) XXX_Size() int {
	return xxx_messageInfo_GetTransactionResultResponse.Size(m)
}
func (m *GetTransactionResultResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTransactionResultResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetTransactionResultResponse proto.InternalMessageInfo

func (m *GetTransactionResultResponse) GetStatusCode() uint32 {
	if m != nil {
		return m.StatusCode
	}
	return 0
}

func (m *GetTransactionResultResponse) GetErrorMessage() string {
	if m != nil {
		return m.ErrorMessage
	}
	return ""
}

func (m *GetTransactionResultResponse) GetEvents() []*entities.Event {
	if m != nil {
		return m.Events
	}
	return nil
}

func init() {
	proto.RegisterType((*PingRequest)(nil), "execution.PingRequest")
	proto.RegisterType((*PingResponse)(nil), "execution.PingResponse")
	proto.RegisterType((*GetAccountAtBlockIDRequest)(nil), "execution.GetAccountAtBlockIDRequest")
	proto.RegisterType((*GetAccountAtBlockIDResponse)(nil), "execution.GetAccountAtBlockIDResponse")
	proto.RegisterType((*ExecuteScriptAtBlockIDRequest)(nil), "execution.ExecuteScriptAtBlockIDRequest")
	proto.RegisterType((*ExecuteScriptAtBlockIDResponse)(nil), "execution.ExecuteScriptAtBlockIDResponse")
	proto.RegisterType((*GetEventsForBlockIDsResponse)(nil), "execution.GetEventsForBlockIDsResponse")
	proto.RegisterType((*GetEventsForBlockIDsResponse_Result)(nil), "execution.GetEventsForBlockIDsResponse.Result")
	proto.RegisterType((*GetEventsForBlockIDsRequest)(nil), "execution.GetEventsForBlockIDsRequest")
	proto.RegisterType((*GetTransactionResultRequest)(nil), "execution.GetTransactionResultRequest")
	proto.RegisterType((*GetTransactionResultResponse)(nil), "execution.GetTransactionResultResponse")
}

func init() { proto.RegisterFile("flow/execution/execution.proto", fileDescriptor_699624211ed46c53) }

var fileDescriptor_699624211ed46c53 = []byte{
	// 544 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x54, 0xdd, 0x6e, 0xd3, 0x30,
	0x14, 0x56, 0x69, 0x69, 0xd7, 0x93, 0x74, 0x08, 0x33, 0x95, 0x2c, 0x85, 0x31, 0x8c, 0xb6, 0x15,
	0x21, 0x65, 0x52, 0x91, 0xe0, 0xba, 0x40, 0xd9, 0x8a, 0x04, 0x1a, 0x86, 0xfb, 0x2a, 0x4b, 0x0e,
	0x5d, 0x44, 0x17, 0x17, 0xdb, 0x19, 0xf0, 0x10, 0x3c, 0x20, 0x2f, 0xc1, 0x33, 0xa0, 0xd8, 0xce,
	0xda, 0x6d, 0xe9, 0xcf, 0xee, 0x72, 0xbe, 0xf3, 0xf3, 0x7d, 0x3e, 0x3f, 0x81, 0x9d, 0x6f, 0x13,
	0xfe, 0xf3, 0x10, 0x7f, 0x61, 0x94, 0xa9, 0x84, 0xa7, 0xb3, 0xaf, 0x60, 0x2a, 0xb8, 0xe2, 0xa4,
	0x79, 0x09, 0xf8, 0x1d, 0x13, 0x9a, 0xaa, 0x44, 0x25, 0x28, 0x0f, 0xc3, 0x28, 0xe2, 0x59, 0xaa,
	0x4c, 0x9c, 0xbf, 0x7d, 0xd5, 0x89, 0x17, 0x58, 0xb8, 0x68, 0x0b, 0x9c, 0x93, 0x24, 0x1d, 0x33,
	0xfc, 0x91, 0xa1, 0x54, 0x74, 0x13, 0x5c, 0x63, 0xca, 0x29, 0x4f, 0x25, 0xd2, 0xcf, 0xe0, 0x1f,
	0xa1, 0xea, 0x9b, 0x6a, 0x7d, 0xf5, 0x66, 0xc2, 0xa3, 0xef, 0xc3, 0x77, 0x36, 0x9a, 0x6c, 0xc3,
	0xc6, 0x69, 0x8e, 0x8c, 0x92, 0xd8, 0xab, 0xec, 0x56, 0xba, 0x2e, 0x6b, 0x68, 0x7b, 0x18, 0x13,
	0x0f, 0x1a, 0x61, 0x1c, 0x0b, 0x94, 0xd2, 0xbb, 0x63, 0x3c, 0xd6, 0xa4, 0x1f, 0xa0, 0x53, 0x5a,
	0xd2, 0x30, 0x92, 0x17, 0xd0, 0xb0, 0xe2, 0x75, 0x49, 0xa7, 0x77, 0x3f, 0x28, 0x84, 0x07, 0x36,
	0x89, 0x15, 0x11, 0x94, 0xc1, 0xe3, 0x81, 0x6e, 0x01, 0x7e, 0x89, 0x44, 0x32, 0xbd, 0x95, 0xc2,
	0x36, 0xd4, 0xa5, 0x4e, 0xb2, 0x02, 0xad, 0x45, 0x5f, 0xc1, 0xce, 0xa2, 0x9a, 0x56, 0xe2, 0x16,
	0xdc, 0xbd, 0x08, 0x27, 0x19, 0xda, 0x8a, 0xc6, 0xa0, 0x7f, 0x2b, 0xf0, 0xe8, 0x08, 0xd5, 0x20,
	0x6f, 0xae, 0x7c, 0xcf, 0x85, 0xcd, 0x92, 0x97, 0x69, 0xc7, 0xd0, 0x10, 0x28, 0xb3, 0x89, 0x92,
	0x5e, 0x65, 0xb7, 0xda, 0x75, 0x7a, 0x41, 0x30, 0x1b, 0xe8, 0xb2, 0xcc, 0x80, 0xe9, 0x34, 0x56,
	0xa4, 0xfb, 0x1c, 0xea, 0x06, 0x5a, 0xf6, 0xbe, 0xa7, 0xe0, 0x1a, 0xd7, 0x19, 0x26, 0xe3, 0x33,
	0xf3, 0xca, 0x1a, 0x73, 0x34, 0x76, 0xac, 0x21, 0x72, 0x00, 0x75, 0xbd, 0x0b, 0xd2, 0xab, 0x6a,
	0x41, 0xf7, 0x66, 0xad, 0xd6, 0x62, 0x98, 0x75, 0xd3, 0x4f, 0x7a, 0x66, 0x25, 0x02, 0x4d, 0x97,
	0x09, 0xd4, 0xd4, 0xef, 0xa9, 0xe9, 0x47, 0x93, 0xe9, 0x6f, 0xd2, 0x81, 0x66, 0xa1, 0x2c, 0x5f,
	0x81, 0x6a, 0xd7, 0x65, 0x1b, 0x56, 0x9a, 0xa4, 0x23, 0x5d, 0xef, 0xab, 0x08, 0x53, 0x19, 0x46,
	0xf9, 0xfb, 0xed, 0x0b, 0x57, 0x4f, 0x6d, 0x0f, 0x36, 0xd5, 0x2c, 0x2d, 0x0f, 0x30, 0xd3, 0x6b,
	0xcd, 0xa1, 0xc3, 0x98, 0xfe, 0x31, 0xc3, 0x28, 0x61, 0xb0, 0xc3, 0x78, 0x02, 0x8e, 0x54, 0xa1,
	0xca, 0xe4, 0x28, 0xe2, 0xb1, 0x51, 0xde, 0x62, 0x60, 0xa0, 0xb7, 0x3c, 0x46, 0xf2, 0x0c, 0x5a,
	0x28, 0x04, 0x17, 0xa3, 0x73, 0x94, 0x32, 0x1c, 0xa3, 0xe6, 0x69, 0x32, 0x57, 0x83, 0x1f, 0x0d,
	0xb6, 0x76, 0x03, 0x7b, 0xff, 0xaa, 0xe0, 0x0e, 0x8a, 0x61, 0xf7, 0x4f, 0x86, 0xe4, 0x35, 0xd4,
	0xf2, 0x43, 0x23, 0xed, 0xb9, 0x1d, 0x98, 0x3b, 0x44, 0xff, 0xe1, 0x0d, 0xdc, 0x0a, 0x8f, 0xe1,
	0x41, 0xc9, 0xf9, 0x90, 0xbd, 0xab, 0xbb, 0xb4, 0xe0, 0x62, 0xfd, 0xfd, 0x55, 0x61, 0x96, 0xe5,
	0x1c, 0xda, 0xe5, 0x47, 0x40, 0xba, 0x73, 0x15, 0x96, 0xde, 0x9e, 0xff, 0x7c, 0x8d, 0x48, 0x4b,
	0x37, 0x86, 0xad, 0xb2, 0xfd, 0x22, 0xfb, 0x2b, 0x2f, 0xc4, 0x50, 0x1d, 0xac, 0x79, 0x49, 0x96,
	0xe8, 0xc6, 0x5a, 0x5c, 0x27, 0x5a, 0xb4, 0x99, 0xd7, 0x89, 0x16, 0xee, 0xd7, 0x69, 0x5d, 0xff,
	0x5e, 0x5f, 0xfe, 0x0f, 0x00, 0x00, 0xff, 0xff, 0xee, 0x0c, 0xd7, 0xff, 0xc3, 0x05, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ExecutionAPIClient is the client API for ExecutionAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ExecutionAPIClient interface {
	// Ping is used to check if the access node is alive and healthy.
	Ping(ctx context.Context, in *PingRequest, opts ...grpc.CallOption) (*PingResponse, error)
	// GetAccountAtBlockID gets an account by address at the given block ID
	GetAccountAtBlockID(ctx context.Context, in *GetAccountAtBlockIDRequest, opts ...grpc.CallOption) (*GetAccountAtBlockIDResponse, error)
	// ExecuteScriptAtBlockID executes a ready-only Cadence script against the execution state at the block with the given ID.
	ExecuteScriptAtBlockID(ctx context.Context, in *ExecuteScriptAtBlockIDRequest, opts ...grpc.CallOption) (*ExecuteScriptAtBlockIDResponse, error)
	// GetEventsForBlockIDs retrieves events for all the specified block IDs that have the given type
	GetEventsForBlockIDs(ctx context.Context, in *GetEventsForBlockIDsRequest, opts ...grpc.CallOption) (*GetEventsForBlockIDsResponse, error)
	// GetTransactionResult gets the result of a transaction.
	GetTransactionResult(ctx context.Context, in *GetTransactionResultRequest, opts ...grpc.CallOption) (*GetTransactionResultResponse, error)
}

type executionAPIClient struct {
	cc *grpc.ClientConn
}

func NewExecutionAPIClient(cc *grpc.ClientConn) ExecutionAPIClient {
	return &executionAPIClient{cc}
}

func (c *executionAPIClient) Ping(ctx context.Context, in *PingRequest, opts ...grpc.CallOption) (*PingResponse, error) {
	out := new(PingResponse)
	err := c.cc.Invoke(ctx, "/execution.ExecutionAPI/Ping", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *executionAPIClient) GetAccountAtBlockID(ctx context.Context, in *GetAccountAtBlockIDRequest, opts ...grpc.CallOption) (*GetAccountAtBlockIDResponse, error) {
	out := new(GetAccountAtBlockIDResponse)
	err := c.cc.Invoke(ctx, "/execution.ExecutionAPI/GetAccountAtBlockID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *executionAPIClient) ExecuteScriptAtBlockID(ctx context.Context, in *ExecuteScriptAtBlockIDRequest, opts ...grpc.CallOption) (*ExecuteScriptAtBlockIDResponse, error) {
	out := new(ExecuteScriptAtBlockIDResponse)
	err := c.cc.Invoke(ctx, "/execution.ExecutionAPI/ExecuteScriptAtBlockID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *executionAPIClient) GetEventsForBlockIDs(ctx context.Context, in *GetEventsForBlockIDsRequest, opts ...grpc.CallOption) (*GetEventsForBlockIDsResponse, error) {
	out := new(GetEventsForBlockIDsResponse)
	err := c.cc.Invoke(ctx, "/execution.ExecutionAPI/GetEventsForBlockIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *executionAPIClient) GetTransactionResult(ctx context.Context, in *GetTransactionResultRequest, opts ...grpc.CallOption) (*GetTransactionResultResponse, error) {
	out := new(GetTransactionResultResponse)
	err := c.cc.Invoke(ctx, "/execution.ExecutionAPI/GetTransactionResult", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ExecutionAPIServer is the server API for ExecutionAPI service.
type ExecutionAPIServer interface {
	// Ping is used to check if the access node is alive and healthy.
	Ping(context.Context, *PingRequest) (*PingResponse, error)
	// GetAccountAtBlockID gets an account by address at the given block ID
	GetAccountAtBlockID(context.Context, *GetAccountAtBlockIDRequest) (*GetAccountAtBlockIDResponse, error)
	// ExecuteScriptAtBlockID executes a ready-only Cadence script against the execution state at the block with the given ID.
	ExecuteScriptAtBlockID(context.Context, *ExecuteScriptAtBlockIDRequest) (*ExecuteScriptAtBlockIDResponse, error)
	// GetEventsForBlockIDs retrieves events for all the specified block IDs that have the given type
	GetEventsForBlockIDs(context.Context, *GetEventsForBlockIDsRequest) (*GetEventsForBlockIDsResponse, error)
	// GetTransactionResult gets the result of a transaction.
	GetTransactionResult(context.Context, *GetTransactionResultRequest) (*GetTransactionResultResponse, error)
}

// UnimplementedExecutionAPIServer can be embedded to have forward compatible implementations.
type UnimplementedExecutionAPIServer struct {
}

func (*UnimplementedExecutionAPIServer) Ping(ctx context.Context, req *PingRequest) (*PingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Ping not implemented")
}
func (*UnimplementedExecutionAPIServer) GetAccountAtBlockID(ctx context.Context, req *GetAccountAtBlockIDRequest) (*GetAccountAtBlockIDResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAccountAtBlockID not implemented")
}
func (*UnimplementedExecutionAPIServer) ExecuteScriptAtBlockID(ctx context.Context, req *ExecuteScriptAtBlockIDRequest) (*ExecuteScriptAtBlockIDResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecuteScriptAtBlockID not implemented")
}
func (*UnimplementedExecutionAPIServer) GetEventsForBlockIDs(ctx context.Context, req *GetEventsForBlockIDsRequest) (*GetEventsForBlockIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEventsForBlockIDs not implemented")
}
func (*UnimplementedExecutionAPIServer) GetTransactionResult(ctx context.Context, req *GetTransactionResultRequest) (*GetTransactionResultResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTransactionResult not implemented")
}

func RegisterExecutionAPIServer(s *grpc.Server, srv ExecutionAPIServer) {
	s.RegisterService(&_ExecutionAPI_serviceDesc, srv)
}

func _ExecutionAPI_Ping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExecutionAPIServer).Ping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/execution.ExecutionAPI/Ping",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExecutionAPIServer).Ping(ctx, req.(*PingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExecutionAPI_GetAccountAtBlockID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAccountAtBlockIDRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExecutionAPIServer).GetAccountAtBlockID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/execution.ExecutionAPI/GetAccountAtBlockID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExecutionAPIServer).GetAccountAtBlockID(ctx, req.(*GetAccountAtBlockIDRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExecutionAPI_ExecuteScriptAtBlockID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecuteScriptAtBlockIDRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExecutionAPIServer).ExecuteScriptAtBlockID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/execution.ExecutionAPI/ExecuteScriptAtBlockID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExecutionAPIServer).ExecuteScriptAtBlockID(ctx, req.(*ExecuteScriptAtBlockIDRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExecutionAPI_GetEventsForBlockIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEventsForBlockIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExecutionAPIServer).GetEventsForBlockIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/execution.ExecutionAPI/GetEventsForBlockIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExecutionAPIServer).GetEventsForBlockIDs(ctx, req.(*GetEventsForBlockIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExecutionAPI_GetTransactionResult_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTransactionResultRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExecutionAPIServer).GetTransactionResult(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/execution.ExecutionAPI/GetTransactionResult",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExecutionAPIServer).GetTransactionResult(ctx, req.(*GetTransactionResultRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ExecutionAPI_serviceDesc = grpc.ServiceDesc{
	ServiceName: "execution.ExecutionAPI",
	HandlerType: (*ExecutionAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Ping",
			Handler:    _ExecutionAPI_Ping_Handler,
		},
		{
			MethodName: "GetAccountAtBlockID",
			Handler:    _ExecutionAPI_GetAccountAtBlockID_Handler,
		},
		{
			MethodName: "ExecuteScriptAtBlockID",
			Handler:    _ExecutionAPI_ExecuteScriptAtBlockID_Handler,
		},
		{
			MethodName: "GetEventsForBlockIDs",
			Handler:    _ExecutionAPI_GetEventsForBlockIDs_Handler,
		},
		{
			MethodName: "GetTransactionResult",
			Handler:    _ExecutionAPI_GetTransactionResult_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "flow/execution/execution.proto",
}
