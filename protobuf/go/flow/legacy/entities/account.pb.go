// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flow/legacy/entities/account.proto

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

type Account struct {
	Address              []byte        `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Balance              uint64        `protobuf:"varint,2,opt,name=balance,proto3" json:"balance,omitempty"`
	Code                 []byte        `protobuf:"bytes,3,opt,name=code,proto3" json:"code,omitempty"`
	Keys                 []*AccountKey `protobuf:"bytes,4,rep,name=keys,proto3" json:"keys,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *Account) Reset()         { *m = Account{} }
func (m *Account) String() string { return proto.CompactTextString(m) }
func (*Account) ProtoMessage()    {}
func (*Account) Descriptor() ([]byte, []int) {
	return fileDescriptor_a4aab70d5e0d112b, []int{0}
}

func (m *Account) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Account.Unmarshal(m, b)
}
func (m *Account) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Account.Marshal(b, m, deterministic)
}
func (m *Account) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Account.Merge(m, src)
}
func (m *Account) XXX_Size() int {
	return xxx_messageInfo_Account.Size(m)
}
func (m *Account) XXX_DiscardUnknown() {
	xxx_messageInfo_Account.DiscardUnknown(m)
}

var xxx_messageInfo_Account proto.InternalMessageInfo

func (m *Account) GetAddress() []byte {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *Account) GetBalance() uint64 {
	if m != nil {
		return m.Balance
	}
	return 0
}

func (m *Account) GetCode() []byte {
	if m != nil {
		return m.Code
	}
	return nil
}

func (m *Account) GetKeys() []*AccountKey {
	if m != nil {
		return m.Keys
	}
	return nil
}

type AccountKey struct {
	Index                uint32   `protobuf:"varint,1,opt,name=index,proto3" json:"index,omitempty"`
	PublicKey            []byte   `protobuf:"bytes,2,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
	SignAlgo             uint32   `protobuf:"varint,3,opt,name=sign_algo,json=signAlgo,proto3" json:"sign_algo,omitempty"`
	HashAlgo             uint32   `protobuf:"varint,4,opt,name=hash_algo,json=hashAlgo,proto3" json:"hash_algo,omitempty"`
	Weight               uint32   `protobuf:"varint,5,opt,name=weight,proto3" json:"weight,omitempty"`
	SequenceNumber       uint32   `protobuf:"varint,6,opt,name=sequence_number,json=sequenceNumber,proto3" json:"sequence_number,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AccountKey) Reset()         { *m = AccountKey{} }
func (m *AccountKey) String() string { return proto.CompactTextString(m) }
func (*AccountKey) ProtoMessage()    {}
func (*AccountKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_a4aab70d5e0d112b, []int{1}
}

func (m *AccountKey) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AccountKey.Unmarshal(m, b)
}
func (m *AccountKey) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AccountKey.Marshal(b, m, deterministic)
}
func (m *AccountKey) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AccountKey.Merge(m, src)
}
func (m *AccountKey) XXX_Size() int {
	return xxx_messageInfo_AccountKey.Size(m)
}
func (m *AccountKey) XXX_DiscardUnknown() {
	xxx_messageInfo_AccountKey.DiscardUnknown(m)
}

var xxx_messageInfo_AccountKey proto.InternalMessageInfo

func (m *AccountKey) GetIndex() uint32 {
	if m != nil {
		return m.Index
	}
	return 0
}

func (m *AccountKey) GetPublicKey() []byte {
	if m != nil {
		return m.PublicKey
	}
	return nil
}

func (m *AccountKey) GetSignAlgo() uint32 {
	if m != nil {
		return m.SignAlgo
	}
	return 0
}

func (m *AccountKey) GetHashAlgo() uint32 {
	if m != nil {
		return m.HashAlgo
	}
	return 0
}

func (m *AccountKey) GetWeight() uint32 {
	if m != nil {
		return m.Weight
	}
	return 0
}

func (m *AccountKey) GetSequenceNumber() uint32 {
	if m != nil {
		return m.SequenceNumber
	}
	return 0
}

func init() {
	proto.RegisterType((*Account)(nil), "entities.Account")
	proto.RegisterType((*AccountKey)(nil), "entities.AccountKey")
}

func init() { proto.RegisterFile("flow/legacy/entities/account.proto", fileDescriptor_a4aab70d5e0d112b) }

var fileDescriptor_a4aab70d5e0d112b = []byte{
	// 284 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x90, 0xdf, 0x4a, 0xfb, 0x30,
	0x14, 0xc7, 0xe9, 0x6f, 0xdd, 0xbf, 0xf3, 0xdb, 0x14, 0xc2, 0x90, 0x80, 0x08, 0x63, 0x22, 0xf6,
	0xaa, 0x05, 0x7d, 0x82, 0x79, 0x2b, 0x78, 0x91, 0x17, 0x28, 0x69, 0x7a, 0x96, 0x86, 0xc5, 0x64,
	0x36, 0x2d, 0xb3, 0xf8, 0x6a, 0x3e, 0x9c, 0x24, 0x59, 0xf5, 0xae, 0xdf, 0xcf, 0xe7, 0x1c, 0xbe,
	0xcd, 0x81, 0xdd, 0x41, 0xdb, 0x73, 0xa1, 0x51, 0x72, 0x31, 0x14, 0x68, 0x3a, 0xd5, 0x29, 0x74,
	0x05, 0x17, 0xc2, 0xf6, 0xa6, 0xcb, 0x4f, 0xad, 0xed, 0x2c, 0x59, 0x8c, 0x7c, 0xf7, 0x05, 0xf3,
	0x7d, 0x54, 0x84, 0xc2, 0x9c, 0xd7, 0x75, 0x8b, 0xce, 0xd1, 0x64, 0x9b, 0x64, 0x2b, 0x36, 0x46,
	0x6f, 0x2a, 0xae, 0xb9, 0x11, 0x48, 0xff, 0x6d, 0x93, 0x2c, 0x65, 0x63, 0x24, 0x04, 0x52, 0x61,
	0x6b, 0xa4, 0x93, 0xb0, 0x10, 0xbe, 0x49, 0x06, 0xe9, 0x11, 0x07, 0x47, 0xd3, 0xed, 0x24, 0xfb,
	0xff, 0xb4, 0xc9, 0xc7, 0xae, 0xfc, 0x52, 0xf4, 0x8a, 0x03, 0x0b, 0x13, 0xbb, 0xef, 0x04, 0xe0,
	0x0f, 0x92, 0x0d, 0x4c, 0x95, 0xa9, 0xf1, 0x33, 0xd4, 0xaf, 0x59, 0x0c, 0xe4, 0x0e, 0xe0, 0xd4,
	0x57, 0x5a, 0x89, 0xf2, 0x88, 0x43, 0xe8, 0x5f, 0xb1, 0x65, 0x24, 0x7e, 0xe9, 0x16, 0x96, 0x4e,
	0x49, 0x53, 0x72, 0x2d, 0x6d, 0xf8, 0x8d, 0x35, 0x5b, 0x78, 0xb0, 0xd7, 0xd2, 0x7a, 0xd9, 0x70,
	0xd7, 0x44, 0x99, 0x46, 0xe9, 0x41, 0x90, 0x37, 0x30, 0x3b, 0xa3, 0x92, 0x4d, 0x47, 0xa7, 0xc1,
	0x5c, 0x12, 0x79, 0x84, 0x6b, 0x87, 0x1f, 0x3d, 0x1a, 0x81, 0xa5, 0xe9, 0xdf, 0x2b, 0x6c, 0xe9,
	0x2c, 0x0c, 0x5c, 0x8d, 0xf8, 0x2d, 0xd0, 0x97, 0x07, 0xb8, 0xb7, 0xad, 0xcc, 0xad, 0xf1, 0x17,
	0x8f, 0x97, 0xad, 0xfa, 0x43, 0x1e, 0x4f, 0xff, 0xfb, 0xec, 0x6a, 0x16, 0xcc, 0xf3, 0x4f, 0x00,
	0x00, 0x00, 0xff, 0xff, 0xf2, 0x8a, 0x53, 0xbc, 0x99, 0x01, 0x00, 0x00,
}
