/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'hello.candle.candle';
const baseMsgCreateResultsMap = { creator: '', index: '', winner: '', bidId: 0 };
export const MsgCreateResultsMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.winner !== '') {
            writer.uint32(26).string(message.winner);
        }
        if (message.bidId !== 0) {
            writer.uint32(32).uint64(message.bidId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateResultsMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.winner = reader.string();
                    break;
                case 4:
                    message.bidId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = String(object.winner);
        }
        else {
            message.winner = '';
        }
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = Number(object.bidId);
        }
        else {
            message.bidId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.winner !== undefined && (obj.winner = message.winner);
        message.bidId !== undefined && (obj.bidId = message.bidId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        else {
            message.winner = '';
        }
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = object.bidId;
        }
        else {
            message.bidId = 0;
        }
        return message;
    }
};
const baseMsgCreateResultsMapResponse = {};
export const MsgCreateResultsMapResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateResultsMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateResultsMapResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateResultsMapResponse };
        return message;
    }
};
const baseMsgUpdateResultsMap = { creator: '', index: '', winner: '', bidId: 0 };
export const MsgUpdateResultsMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.winner !== '') {
            writer.uint32(26).string(message.winner);
        }
        if (message.bidId !== 0) {
            writer.uint32(32).uint64(message.bidId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateResultsMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.winner = reader.string();
                    break;
                case 4:
                    message.bidId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = String(object.winner);
        }
        else {
            message.winner = '';
        }
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = Number(object.bidId);
        }
        else {
            message.bidId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.winner !== undefined && (obj.winner = message.winner);
        message.bidId !== undefined && (obj.bidId = message.bidId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        else {
            message.winner = '';
        }
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = object.bidId;
        }
        else {
            message.bidId = 0;
        }
        return message;
    }
};
const baseMsgUpdateResultsMapResponse = {};
export const MsgUpdateResultsMapResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateResultsMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateResultsMapResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateResultsMapResponse };
        return message;
    }
};
const baseMsgDeleteResultsMap = { creator: '', index: '' };
export const MsgDeleteResultsMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteResultsMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteResultsMapResponse = {};
export const MsgDeleteResultsMapResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteResultsMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteResultsMapResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteResultsMapResponse };
        return message;
    }
};
const baseMsgCreateBidList = { creator: '', auctionId: '', amt: 0 };
export const MsgCreateBidList = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.auctionId !== '') {
            writer.uint32(18).string(message.auctionId);
        }
        if (message.amt !== 0) {
            writer.uint32(24).uint64(message.amt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBidList };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.auctionId = reader.string();
                    break;
                case 3:
                    message.amt = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = String(object.auctionId);
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = Number(object.amt);
        }
        else {
            message.amt = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.auctionId !== undefined && (obj.auctionId = message.auctionId);
        message.amt !== undefined && (obj.amt = message.amt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = object.auctionId;
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = object.amt;
        }
        else {
            message.amt = 0;
        }
        return message;
    }
};
const baseMsgCreateBidListResponse = { id: 0 };
export const MsgCreateBidListResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBidListResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBidListResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBidListResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateBidList = { creator: '', id: 0, auctionId: '', amt: 0 };
export const MsgUpdateBidList = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.auctionId !== '') {
            writer.uint32(26).string(message.auctionId);
        }
        if (message.amt !== 0) {
            writer.uint32(32).uint64(message.amt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBidList };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.auctionId = reader.string();
                    break;
                case 4:
                    message.amt = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = String(object.auctionId);
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = Number(object.amt);
        }
        else {
            message.amt = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.auctionId !== undefined && (obj.auctionId = message.auctionId);
        message.amt !== undefined && (obj.amt = message.amt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = object.auctionId;
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = object.amt;
        }
        else {
            message.amt = 0;
        }
        return message;
    }
};
const baseMsgUpdateBidListResponse = {};
export const MsgUpdateBidListResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBidListResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateBidListResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateBidListResponse };
        return message;
    }
};
const baseMsgDeleteBidList = { creator: '', id: 0 };
export const MsgDeleteBidList = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBidList };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteBidListResponse = {};
export const MsgDeleteBidListResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBidListResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteBidListResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteBidListResponse };
        return message;
    }
};
const baseMsgCreateAuctionMap = { creator: '', index: '', blockHeight: '', deadline: '' };
export const MsgCreateAuctionMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.blockHeight !== '') {
            writer.uint32(26).string(message.blockHeight);
        }
        if (message.deadline !== '') {
            writer.uint32(34).string(message.deadline);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAuctionMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.blockHeight = reader.string();
                    break;
                case 4:
                    message.deadline = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateAuctionMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = String(object.blockHeight);
        }
        else {
            message.blockHeight = '';
        }
        if (object.deadline !== undefined && object.deadline !== null) {
            message.deadline = String(object.deadline);
        }
        else {
            message.deadline = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        message.deadline !== undefined && (obj.deadline = message.deadline);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAuctionMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = '';
        }
        if (object.deadline !== undefined && object.deadline !== null) {
            message.deadline = object.deadline;
        }
        else {
            message.deadline = '';
        }
        return message;
    }
};
const baseMsgCreateAuctionMapResponse = {};
export const MsgCreateAuctionMapResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAuctionMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateAuctionMapResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateAuctionMapResponse };
        return message;
    }
};
const baseMsgUpdateAuctionMap = { creator: '', index: '', blockHeight: '', deadline: '' };
export const MsgUpdateAuctionMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.blockHeight !== '') {
            writer.uint32(26).string(message.blockHeight);
        }
        if (message.deadline !== '') {
            writer.uint32(34).string(message.deadline);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAuctionMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.blockHeight = reader.string();
                    break;
                case 4:
                    message.deadline = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateAuctionMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = String(object.blockHeight);
        }
        else {
            message.blockHeight = '';
        }
        if (object.deadline !== undefined && object.deadline !== null) {
            message.deadline = String(object.deadline);
        }
        else {
            message.deadline = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        message.deadline !== undefined && (obj.deadline = message.deadline);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateAuctionMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = '';
        }
        if (object.deadline !== undefined && object.deadline !== null) {
            message.deadline = object.deadline;
        }
        else {
            message.deadline = '';
        }
        return message;
    }
};
const baseMsgUpdateAuctionMapResponse = {};
export const MsgUpdateAuctionMapResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAuctionMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateAuctionMapResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateAuctionMapResponse };
        return message;
    }
};
const baseMsgDeleteAuctionMap = { creator: '', index: '' };
export const MsgDeleteAuctionMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAuctionMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteAuctionMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteAuctionMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteAuctionMapResponse = {};
export const MsgDeleteAuctionMapResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAuctionMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteAuctionMapResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteAuctionMapResponse };
        return message;
    }
};
const baseMsgFinalizeAuction = { creator: '', auctionId: '' };
export const MsgFinalizeAuction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.auctionId !== '') {
            writer.uint32(18).string(message.auctionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFinalizeAuction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.auctionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgFinalizeAuction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = String(object.auctionId);
        }
        else {
            message.auctionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.auctionId !== undefined && (obj.auctionId = message.auctionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgFinalizeAuction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = object.auctionId;
        }
        else {
            message.auctionId = '';
        }
        return message;
    }
};
const baseMsgFinalizeAuctionResponse = {};
export const MsgFinalizeAuctionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFinalizeAuctionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgFinalizeAuctionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgFinalizeAuctionResponse };
        return message;
    }
};
const baseMsgCreateBid = { creator: '', auctionId: '', amt: 0 };
export const MsgCreateBid = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.auctionId !== '') {
            writer.uint32(18).string(message.auctionId);
        }
        if (message.amt !== 0) {
            writer.uint32(24).uint64(message.amt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.auctionId = reader.string();
                    break;
                case 3:
                    message.amt = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = String(object.auctionId);
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = Number(object.amt);
        }
        else {
            message.amt = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.auctionId !== undefined && (obj.auctionId = message.auctionId);
        message.amt !== undefined && (obj.amt = message.amt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = object.auctionId;
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = object.amt;
        }
        else {
            message.amt = 0;
        }
        return message;
    }
};
const baseMsgCreateBidResponse = {};
export const MsgCreateBidResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBidResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateBidResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateBidResponse };
        return message;
    }
};
const baseMsgCreateAuction = { creator: '', title: '' };
export const MsgCreateAuction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAuction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateAuction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.title !== undefined && (obj.title = message.title);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAuction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = '';
        }
        return message;
    }
};
const baseMsgCreateAuctionResponse = {};
export const MsgCreateAuctionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAuctionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateAuctionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateAuctionResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateResultsMap(request) {
        const data = MsgCreateResultsMap.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateResultsMap', data);
        return promise.then((data) => MsgCreateResultsMapResponse.decode(new Reader(data)));
    }
    UpdateResultsMap(request) {
        const data = MsgUpdateResultsMap.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateResultsMap', data);
        return promise.then((data) => MsgUpdateResultsMapResponse.decode(new Reader(data)));
    }
    DeleteResultsMap(request) {
        const data = MsgDeleteResultsMap.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteResultsMap', data);
        return promise.then((data) => MsgDeleteResultsMapResponse.decode(new Reader(data)));
    }
    CreateBidList(request) {
        const data = MsgCreateBidList.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateBidList', data);
        return promise.then((data) => MsgCreateBidListResponse.decode(new Reader(data)));
    }
    UpdateBidList(request) {
        const data = MsgUpdateBidList.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateBidList', data);
        return promise.then((data) => MsgUpdateBidListResponse.decode(new Reader(data)));
    }
    DeleteBidList(request) {
        const data = MsgDeleteBidList.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteBidList', data);
        return promise.then((data) => MsgDeleteBidListResponse.decode(new Reader(data)));
    }
    CreateAuctionMap(request) {
        const data = MsgCreateAuctionMap.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateAuctionMap', data);
        return promise.then((data) => MsgCreateAuctionMapResponse.decode(new Reader(data)));
    }
    UpdateAuctionMap(request) {
        const data = MsgUpdateAuctionMap.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateAuctionMap', data);
        return promise.then((data) => MsgUpdateAuctionMapResponse.decode(new Reader(data)));
    }
    DeleteAuctionMap(request) {
        const data = MsgDeleteAuctionMap.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteAuctionMap', data);
        return promise.then((data) => MsgDeleteAuctionMapResponse.decode(new Reader(data)));
    }
    FinalizeAuction(request) {
        const data = MsgFinalizeAuction.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'FinalizeAuction', data);
        return promise.then((data) => MsgFinalizeAuctionResponse.decode(new Reader(data)));
    }
    CreateBid(request) {
        const data = MsgCreateBid.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateBid', data);
        return promise.then((data) => MsgCreateBidResponse.decode(new Reader(data)));
    }
    CreateAuction(request) {
        const data = MsgCreateAuction.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateAuction', data);
        return promise.then((data) => MsgCreateAuctionResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
