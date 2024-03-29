// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flow/legacy/entities/block_seal.proto

package entities

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type BlockSeal struct {
	BlockId                    []byte   `protobuf:"bytes,1,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	ExecutionReceiptId         []byte   `protobuf:"bytes,2,opt,name=execution_receipt_id,json=executionReceiptId,proto3" json:"execution_receipt_id,omitempty"`
	ExecutionReceiptSignatures [][]byte `protobuf:"bytes,3,rep,name=execution_receipt_signatures,json=executionReceiptSignatures,proto3" json:"execution_receipt_signatures,omitempty"`
	ResultApprovalSignatures   [][]byte `protobuf:"bytes,4,rep,name=result_approval_signatures,json=resultApprovalSignatures,proto3" json:"result_approval_signatures,omitempty"`
	XXX_NoUnkeyedLiteral       struct{} `json:"-"`
	XXX_unrecognized           []byte   `json:"-"`
	XXX_sizecache              int32    `json:"-"`
}

func (m *BlockSeal) Reset()         { *m = BlockSeal{} }
func (m *BlockSeal) String() string { return proto.CompactTextString(m) }
func (*BlockSeal) ProtoMessage()    {}
func (*BlockSeal) Descriptor() ([]byte, []int) {
	return fileDescriptor_951535fdf2985bf3, []int{0}
}

func (m *BlockSeal) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BlockSeal.Unmarshal(m, b)
}
func (m *BlockSeal) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BlockSeal.Marshal(b, m, deterministic)
}
func (m *BlockSeal) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BlockSeal.Merge(m, src)
}
func (m *BlockSeal) XXX_Size() int {
	return xxx_messageInfo_BlockSeal.Size(m)
}
func (m *BlockSeal) XXX_DiscardUnknown() {
	xxx_messageInfo_BlockSeal.DiscardUnknown(m)
}

var xxx_messageInfo_BlockSeal proto.InternalMessageInfo

func (m *BlockSeal) GetBlockId() []byte {
	if m != nil {
		return m.BlockId
	}
	return nil
}

func (m *BlockSeal) GetExecutionReceiptId() []byte {
	if m != nil {
		return m.ExecutionReceiptId
	}
	return nil
}

func (m *BlockSeal) GetExecutionReceiptSignatures() [][]byte {
	if m != nil {
		return m.ExecutionReceiptSignatures
	}
	return nil
}

func (m *BlockSeal) GetResultApprovalSignatures() [][]byte {
	if m != nil {
		return m.ResultApprovalSignatures
	}
	return nil
}

func init() {
	proto.RegisterType((*BlockSeal)(nil), "entities.BlockSeal")
}

func init() {
	proto.RegisterFile("flow/legacy/entities/block_seal.proto", fileDescriptor_951535fdf2985bf3)
}

var fileDescriptor_951535fdf2985bf3 = []byte{
	// 244 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0x3f, 0x4f, 0xc3, 0x30,
	0x10, 0x47, 0x15, 0x8a, 0xa0, 0x58, 0x9d, 0x2c, 0x86, 0x50, 0x31, 0x54, 0x20, 0xa4, 0x4e, 0x36,
	0x12, 0x03, 0x0b, 0x03, 0x74, 0xeb, 0x9a, 0x6e, 0x0c, 0x44, 0x8e, 0x73, 0x35, 0x16, 0x26, 0x17,
	0xd9, 0x67, 0xfe, 0x7c, 0x53, 0x3e, 0x0e, 0x8a, 0x4d, 0x0a, 0x02, 0x16, 0x4b, 0xd6, 0xef, 0xbd,
	0xe1, 0x1e, 0xbb, 0xd8, 0x3a, 0x7c, 0x95, 0x0e, 0x8c, 0xd2, 0xef, 0x12, 0x3a, 0xb2, 0x64, 0x21,
	0xc8, 0xc6, 0xa1, 0x7e, 0xaa, 0x03, 0x28, 0x27, 0x7a, 0x8f, 0x84, 0x7c, 0x3a, 0x4e, 0x67, 0x1f,
	0x05, 0x3b, 0x5a, 0x0d, 0xf3, 0x06, 0x94, 0xe3, 0x27, 0x6c, 0x9a, 0x59, 0xdb, 0x96, 0xc5, 0xa2,
	0x58, 0xce, 0xaa, 0xc3, 0xf4, 0x5f, 0xb7, 0xfc, 0x92, 0x1d, 0xc3, 0x1b, 0xe8, 0x48, 0x16, 0xbb,
	0xda, 0x83, 0x06, 0xdb, 0xd3, 0x80, 0xed, 0x25, 0x8c, 0xef, 0xb6, 0x2a, 0x4f, 0xeb, 0x96, 0xdf,
	0xb2, 0xd3, 0xbf, 0x46, 0xb0, 0xa6, 0x53, 0x14, 0x3d, 0x84, 0x72, 0xb2, 0x98, 0x2c, 0x67, 0xd5,
	0xfc, 0xb7, 0xb9, 0xd9, 0x11, 0xfc, 0x86, 0xcd, 0x3d, 0x84, 0xe8, 0xa8, 0x56, 0x7d, 0xef, 0xf1,
	0x45, 0xb9, 0x9f, 0xfe, 0x7e, 0xf2, 0xcb, 0x4c, 0xdc, 0x7d, 0x01, 0xdf, 0xf6, 0xea, 0x81, 0x9d,
	0xa3, 0x37, 0x02, 0xbb, 0xa1, 0x49, 0x3e, 0xbc, 0x89, 0x5b, 0x91, 0xe3, 0x88, 0xb1, 0xc0, 0xfd,
	0xb5, 0xb1, 0xf4, 0x18, 0x1b, 0xa1, 0xf1, 0x59, 0x66, 0x56, 0xa6, 0x67, 0x14, 0xa4, 0x41, 0xf9,
	0x5f, 0xd5, 0xe6, 0x20, 0x11, 0x57, 0x9f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x09, 0xa9, 0x0e, 0x8f,
	0x74, 0x01, 0x00, 0x00,
}
