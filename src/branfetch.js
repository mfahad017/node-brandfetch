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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Brandfetch {
    constructor(apiKey) {
        this.baseUrl = 'https://api.brandfetch.io/v2/brands';
        this.apiKey = apiKey;
    }
    getBrandByDomain(domain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}/${domain}`, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
    searhBrand(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}/${query}`, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                        Referer: 'https://example.com/searchIntegrationPage',
                    },
                });
                return response.data;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
}
exports.default = Brandfetch;
