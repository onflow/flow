// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flow/entities/account.proto

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
	Address              []byte            `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Balance              uint64            `protobuf:"varint,2,opt,name=balance,proto3" json:"balance,omitempty"`
	Code                 []byte            `protobuf:"bytes,3,opt,name=code,proto3" json:"code,omitempty"`
	Keys                 []*AccountKey     `protobuf:"bytes,4,rep,name=keys,proto3" json:"keys,omitempty"`
	Contracts            map[string][]byte `protobuf:"bytes,5,rep,name=contracts,proto3" json:"contracts,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Account) Reset()         { *m = Account{} }
func (m *Account) String() string { return proto.CompactTextString(m) }
func (*Account) ProtoMessage()    {}
func (*Account) Descriptor() ([]byte, []int) {
	return fileDescriptor_bf0d6f6360ab9ab0, []int{0}
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

func (m *Account) GetContracts() map[string][]byte {
	if m != nil {
		return m.Contracts
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
	Revoked              bool     `protobuf:"varint,7,opt,name=revoked,proto3" json:"revoked,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AccountKey) Reset()         { *m = AccountKey{} }
func (m *AccountKey) String() string { return proto.CompactTextString(m) }
func (*AccountKey) ProtoMessage()    {}
func (*AccountKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_bf0d6f6360ab9ab0, []int{1}
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

func (m *AccountKey) GetRevoked() bool {
	if m != nil {
		return m.Revoked
	}
	return false
}

func init() {
	proto.RegisterType((*Account)(nil), "flow.entities.Account")
	proto.RegisterMapType((map[string][]byte)(nil), "flow.entities.Account.ContractsEntry")
	proto.RegisterType((*AccountKey)(nil), "flow.entities.AccountKey")
}

func init() { proto.RegisterFile("flow/entities/account.proto", fileDescriptor_bf0d6f6360ab9ab0) }

var fileDescriptor_bf0d6f6360ab9ab0 = []byte{
	// 379 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x92, 0xc1, 0xcb, 0xd3, 0x30,
	0x18, 0xc6, 0xe9, 0xd6, 0x6d, 0x5f, 0x5f, 0xbf, 0x4d, 0x09, 0x22, 0xd1, 0x29, 0x94, 0x81, 0xd8,
	0x8b, 0xad, 0xe8, 0x45, 0xc4, 0xcb, 0x1c, 0x9e, 0x04, 0x91, 0x1c, 0xbd, 0x8c, 0x34, 0x7d, 0xd7,
	0x96, 0x75, 0xc9, 0x6c, 0xd2, 0xcd, 0x9e, 0xfd, 0x1f, 0xfd, 0x7b, 0x24, 0xc9, 0xea, 0x18, 0x7c,
	0x97, 0x91, 0xe7, 0xf9, 0x3d, 0x4f, 0xb2, 0xbc, 0x0d, 0x2c, 0x77, 0x8d, 0x3a, 0x67, 0x28, 0x4d,
	0x6d, 0x6a, 0xd4, 0x19, 0x17, 0x42, 0x75, 0xd2, 0xa4, 0xc7, 0x56, 0x19, 0x45, 0xe6, 0x16, 0xa6,
	0x03, 0x5c, 0xfd, 0x19, 0xc1, 0x6c, 0xed, 0x03, 0x84, 0xc2, 0x8c, 0x17, 0x45, 0x8b, 0x5a, 0xd3,
	0x20, 0x0e, 0x92, 0x7b, 0x36, 0x48, 0x4b, 0x72, 0xde, 0x70, 0x29, 0x90, 0x8e, 0xe2, 0x20, 0x09,
	0xd9, 0x20, 0x09, 0x81, 0x50, 0xa8, 0x02, 0xe9, 0xd8, 0x15, 0xdc, 0x9a, 0xbc, 0x85, 0x70, 0x8f,
	0xbd, 0xa6, 0x61, 0x3c, 0x4e, 0x1e, 0xbd, 0x7f, 0x9e, 0xde, 0x9c, 0x98, 0x5e, 0x4e, 0xfb, 0x86,
	0x3d, 0x73, 0x31, 0xb2, 0x81, 0x48, 0x28, 0x69, 0x5a, 0x2e, 0x8c, 0xa6, 0x13, 0xd7, 0x79, 0xfd,
	0x70, 0x27, 0xdd, 0x0c, 0xb9, 0xaf, 0xd2, 0xb4, 0x3d, 0xbb, 0xf6, 0x5e, 0x7c, 0x86, 0xc5, 0x2d,
	0x24, 0x4f, 0x60, 0xbc, 0xc7, 0xde, 0xdd, 0x24, 0x62, 0x76, 0x49, 0x9e, 0xc2, 0xe4, 0xc4, 0x9b,
	0xce, 0xdf, 0xe1, 0x9e, 0x79, 0xf1, 0x69, 0xf4, 0x31, 0x58, 0xfd, 0x0d, 0x00, 0xae, 0xff, 0xcb,
	0x06, 0x6b, 0x59, 0xe0, 0x6f, 0x57, 0x9e, 0x33, 0x2f, 0xc8, 0x2b, 0x80, 0x63, 0x97, 0x37, 0xb5,
	0xd8, 0xda, 0x7d, 0xfd, 0x1e, 0x91, 0x77, 0x6c, 0x69, 0x09, 0x91, 0xae, 0x4b, 0xb9, 0xe5, 0x4d,
	0xa9, 0xdc, 0x38, 0xe6, 0xec, 0xce, 0x1a, 0xeb, 0xa6, 0x54, 0x16, 0x56, 0x5c, 0x57, 0x1e, 0x86,
	0x1e, 0x5a, 0xc3, 0xc1, 0x67, 0x30, 0x3d, 0x63, 0x5d, 0x56, 0x86, 0x4e, 0x1c, 0xb9, 0x28, 0xf2,
	0x06, 0x1e, 0x6b, 0xfc, 0xd5, 0xa1, 0x14, 0xb8, 0x95, 0xdd, 0x21, 0xc7, 0x96, 0x4e, 0x5d, 0x60,
	0x31, 0xd8, 0xdf, 0x9d, 0x6b, 0x3f, 0x4f, 0x8b, 0x27, 0xb5, 0xc7, 0x82, 0xce, 0xe2, 0x20, 0xb9,
	0x63, 0x83, 0xfc, 0xf2, 0x03, 0x5e, 0xaa, 0xb6, 0x4c, 0x95, 0x74, 0xf3, 0x74, 0x2f, 0x20, 0xef,
	0x76, 0xff, 0x07, 0xfb, 0xf3, 0x5d, 0x59, 0x9b, 0xaa, 0xcb, 0x53, 0xa1, 0x0e, 0x99, 0x0f, 0x65,
	0xee, 0x67, 0x48, 0x66, 0xa5, 0xca, 0x6e, 0x5e, 0x53, 0x3e, 0x75, 0xe8, 0xc3, 0xbf, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x58, 0x79, 0x26, 0xc6, 0x65, 0x02, 0x00, 0x00,
}
