"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var readline_1 = __importDefault(require("readline"));
var messageType_1 = require("masstransit-rabbitmq/dist/messageType");
var masstransit_rabbitmq_1 = __importDefault(require("masstransit-rabbitmq"));
messageType_1.MessageType.setDefaultNamespace("Contracts");
var bus = masstransit_rabbitmq_1.default();
var client = bus.requestClient({
    exchange: "order-status",
    requestType: new messageType_1.MessageType("CheckOrderStatus"),
    responseType: new messageType_1.MessageType("OrderStatus"),
});
var checkOrderStatusInterval = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.getResponse({ orderId: guid_typescript_1.Guid.create().toString() })];
            case 1:
                response = _a.sent();
                console.log("Order status: ", response.message.orderId, response.message.status);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.error("order status check failed", e_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }, 1000);
process.on("SIGINT", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clearInterval(checkOrderStatusInterval);
        return [2 /*return*/];
    });
}); });
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rl_1, rl_1_1, line, e_2_1;
    var e_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 11]);
                rl_1 = __asyncValues(rl);
                _b.label = 1;
            case 1: return [4 /*yield*/, rl_1.next()];
            case 2:
                if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 4];
                line = rl_1_1.value;
                if (line === "quit")
                    return [3 /*break*/, 4];
                _b.label = 3;
            case 3: return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 11];
            case 5:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 11];
            case 6:
                _b.trys.push([6, , 9, 10]);
                if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1.return))) return [3 /*break*/, 8];
                return [4 /*yield*/, _a.call(rl_1)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                if (e_2) throw e_2.error;
                return [7 /*endfinally*/];
            case 10: return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
start()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bus.stop()];
            case 1:
                _a.sent();
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); });
