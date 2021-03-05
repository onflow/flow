# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flow/entities/collection.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='flow/entities/collection.proto',
  package='flow.entities',
  syntax='proto3',
  serialized_options=b'\n\034org.onflow.protobuf.entitiesZ\010entities',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1e\x66low/entities/collection.proto\x12\rflow.entities\"1\n\nCollection\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x17\n\x0ftransaction_ids\x18\x02 \x03(\x0c\"@\n\x13\x43ollectionGuarantee\x12\x15\n\rcollection_id\x18\x01 \x01(\x0c\x12\x12\n\nsignatures\x18\x02 \x03(\x0c\x42(\n\x1corg.onflow.protobuf.entitiesZ\x08\x65ntitiesb\x06proto3'
)




_COLLECTION = _descriptor.Descriptor(
  name='Collection',
  full_name='flow.entities.Collection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='flow.entities.Collection.id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='transaction_ids', full_name='flow.entities.Collection.transaction_ids', index=1,
      number=2, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=49,
  serialized_end=98,
)


_COLLECTIONGUARANTEE = _descriptor.Descriptor(
  name='CollectionGuarantee',
  full_name='flow.entities.CollectionGuarantee',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='collection_id', full_name='flow.entities.CollectionGuarantee.collection_id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='signatures', full_name='flow.entities.CollectionGuarantee.signatures', index=1,
      number=2, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=100,
  serialized_end=164,
)

DESCRIPTOR.message_types_by_name['Collection'] = _COLLECTION
DESCRIPTOR.message_types_by_name['CollectionGuarantee'] = _COLLECTIONGUARANTEE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Collection = _reflection.GeneratedProtocolMessageType('Collection', (_message.Message,), {
  'DESCRIPTOR' : _COLLECTION,
  '__module__' : 'flow.entities.collection_pb2'
  # @@protoc_insertion_point(class_scope:flow.entities.Collection)
  })
_sym_db.RegisterMessage(Collection)

CollectionGuarantee = _reflection.GeneratedProtocolMessageType('CollectionGuarantee', (_message.Message,), {
  'DESCRIPTOR' : _COLLECTIONGUARANTEE,
  '__module__' : 'flow.entities.collection_pb2'
  # @@protoc_insertion_point(class_scope:flow.entities.CollectionGuarantee)
  })
_sym_db.RegisterMessage(CollectionGuarantee)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
