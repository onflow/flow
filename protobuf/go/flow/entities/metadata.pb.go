// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flow/entities/metadata.proto

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

type Metadata struct {
	LatestFinalizedBlockId []byte   `protobuf:"bytes,1,opt,name=latest_finalized_block_id,json=latestFinalizedBlockId,proto3" json:"latest_finalized_block_id,omitempty"`
	LatestFinalizedHeight  uint64   `protobuf:"varint,2,opt,name=latest_finalized_height,json=latestFinalizedHeight,proto3" json:"latest_finalized_height,omitempty"`
	NodeId                 []byte   `protobuf:"bytes,3,opt,name=node_id,json=nodeId,proto3" json:"node_id,omitempty"`
	XXX_NoUnkeyedLiteral   struct{} `json:"-"`
	XXX_unrecognized       []byte   `json:"-"`
	XXX_sizecache          int32    `json:"-"`
}

func (m *Metadata) Reset()         { *m = Metadata{} }
func (m *Metadata) String() string { return proto.CompactTextString(m) }
func (*Metadata) ProtoMessage()    {}
func (*Metadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_f6b3c67afa624bc0, []int{0}
}

func (m *Metadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Metadata.Unmarshal(m, b)
}
func (m *Metadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Metadata.Marshal(b, m, deterministic)
}
func (m *Metadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Metadata.Merge(m, src)
}
func (m *Metadata) XXX_Size() int {
	return xxx_messageInfo_Metadata.Size(m)
}
func (m *Metadata) XXX_DiscardUnknown() {
	xxx_messageInfo_Metadata.DiscardUnknown(m)
}

var xxx_messageInfo_Metadata proto.InternalMessageInfo

func (m *Metadata) GetLatestFinalizedBlockId() []byte {
	if m != nil {
		return m.LatestFinalizedBlockId
	}
	return nil
}

func (m *Metadata) GetLatestFinalizedHeight() uint64 {
	if m != nil {
		return m.LatestFinalizedHeight
	}
	return 0
}

func (m *Metadata) GetNodeId() []byte {
	if m != nil {
		return m.NodeId
	}
	return nil
}

func init() {
	proto.RegisterType((*Metadata)(nil), "flow.entities.Metadata")
}

func init() { proto.RegisterFile("flow/entities/metadata.proto", fileDescriptor_f6b3c67afa624bc0) }

var fileDescriptor_f6b3c67afa624bc0 = []byte{
	// 210 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x49, 0xcb, 0xc9, 0x2f,
	0xd7, 0x4f, 0xcd, 0x2b, 0xc9, 0x2c, 0xc9, 0x4c, 0x2d, 0xd6, 0xcf, 0x4d, 0x2d, 0x49, 0x4c, 0x49,
	0x2c, 0x49, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x05, 0xc9, 0xea, 0xc1, 0x64, 0x95,
	0xa6, 0x31, 0x72, 0x71, 0xf8, 0x42, 0x55, 0x08, 0x59, 0x72, 0x49, 0xe6, 0x24, 0x96, 0xa4, 0x16,
	0x97, 0xc4, 0xa7, 0x65, 0xe6, 0x25, 0xe6, 0x64, 0x56, 0xa5, 0xa6, 0xc4, 0x27, 0xe5, 0xe4, 0x27,
	0x67, 0xc7, 0x67, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xf0, 0x04, 0x89, 0x41, 0x14, 0xb8, 0xc1,
	0xe4, 0x9d, 0x40, 0xd2, 0x9e, 0x29, 0x42, 0x66, 0x5c, 0xe2, 0x18, 0x5a, 0x33, 0x52, 0x33, 0xd3,
	0x33, 0x4a, 0x24, 0x98, 0x14, 0x18, 0x35, 0x58, 0x82, 0x44, 0xd1, 0x34, 0x7a, 0x80, 0x25, 0x85,
	0xc4, 0xb9, 0xd8, 0xf3, 0xf2, 0x53, 0x52, 0x41, 0x16, 0x30, 0x83, 0x2d, 0x60, 0x03, 0x71, 0x3d,
	0x53, 0x9c, 0x02, 0xb8, 0x64, 0xf2, 0x8b, 0xd2, 0xf5, 0xf2, 0xf3, 0xc0, 0xee, 0x05, 0xbb, 0x3d,
	0xa9, 0x34, 0x0d, 0xee, 0xf0, 0x28, 0x83, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc,
	0x5c, 0x7d, 0x88, 0x22, 0x7d, 0x30, 0x01, 0x53, 0xa9, 0x9f, 0x9e, 0xaf, 0x8f, 0x12, 0x10, 0x49,
	0x6c, 0x60, 0x29, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0xcb, 0xd8, 0xee, 0x20, 0x01,
	0x00, 0x00,
}
