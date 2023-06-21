/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/cake/src/app/controllers/authorization/helpers/password-manager.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordManager = void 0;
const tslib_1 = __webpack_require__("tslib");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const logger_1 = __webpack_require__("@xtool/logger");
const logger = new logger_1.Logger('PasswordManager');
class PasswordManager {
}
exports.PasswordManager = PasswordManager;
_a = PasswordManager;
PasswordManager.saltRounds = 10;
PasswordManager.encrypt = (password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    logger.debug('Encrypting password: ' + password);
    return yield bcrypt.hash(password, PasswordManager.saltRounds);
});
PasswordManager.compare = (password, hash) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    logger.debug('Verifying password', password, hash);
    return yield bcrypt.compare(password, hash);
});


/***/ }),

/***/ "./apps/cake/src/app/controllers/authorization/helpers/token-manager.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenManager = void 0;
const tslib_1 = __webpack_require__("tslib");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const logger_1 = __webpack_require__("@xtool/logger");
const logger = new logger_1.Logger('TokenManager');
const TOKEN_SECRET = process.env.TOKEN_SECRET;
class TokenManager {
}
exports.TokenManager = TokenManager;
TokenManager.refreshExpTime = Math.floor(Date.now() / 1000) + 2592000; // 30 days in seconds
TokenManager.mobileAuthTokenExpTine = Math.floor(Date.now() / 1000) + 1555200000; // 50 years in seconds
TokenManager.tokenFromRequest = (request) => {
    var _a;
    let authToken = (_a = request.headers['Authorization']) !== null && _a !== void 0 ? _a : request.headers['authorization'];
    if (!authToken) {
        return null;
    }
    authToken = authToken.replace('Bearer ', '');
    return authToken;
};
TokenManager.sign = (opts) => {
    let authExpiration = opts.exp;
    if (!authExpiration) {
        authExpiration = TokenManager.mobileAuthTokenExpTine;
    }
    const authToken = jwt.sign({
        exp: authExpiration,
        data: opts.data,
    }, TOKEN_SECRET);
    const refreshToken = jwt.sign({
        exp: TokenManager.refreshExpTime,
    }, TOKEN_SECRET);
    return {
        authToken,
        refreshToken,
    };
};
TokenManager.process = (token) => {
    try {
        return jwt.verify(token, TOKEN_SECRET);
    }
    catch (err) {
        logger.log(err.message);
        return null;
    }
};


/***/ }),

/***/ "./apps/cake/src/app/controllers/authorization/loginController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const login_service_1 = __webpack_require__("./apps/cake/src/app/service/authorization/login.service.ts");
class LoginController {
    login(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, login_service_1.apiLogin)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new LoginController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/authorization/registerController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const authorization_service_1 = __webpack_require__("./apps/cake/src/app/service/authorization/authorization.service.ts");
class RegisterController {
    register(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, authorization_service_1.apiRegister)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new RegisterController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/file/S3Controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const service_1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
class S3Controller {
    uploadImage(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.uploadImage)(req);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    test(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.some)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getImage(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.getImage)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new S3Controller();


/***/ }),

/***/ "./apps/cake/src/app/controllers/followers/followersController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const service_1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
class FollowerController {
    addFollower(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.AddFollower)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    removeFollower(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.RemoveFollower)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new FollowerController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/platform/platformController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const service_1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
const getPlatformById_service_1 = __webpack_require__("./apps/cake/src/app/service/platform/getPlatformById.service.ts");
class PlatformController {
    addPlatform(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.addPlatformService)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    removePlatform(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.removePlatformService)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getPlatformById(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, getPlatformById_service_1.GetPlatformById)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new PlatformController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/rewards/rewardsController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const service_1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
class RewardsController {
    createRewards(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.createRewardsService)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getAllRewards(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.getAllRewards)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getRewardById(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.getRewardById)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    toConfectionary(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.toConfectionary)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    createCakeBox(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.createCakeBoxService)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    claimCakeBox(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.claimCakeBox)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    buyReward(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.buyReward)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new RewardsController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/slice/sliceController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const service_1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
class SliceController {
    createSlice(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.createSliceService)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new SliceController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/users/UsersController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const users_1 = __webpack_require__("./apps/cake/src/app/service/users/index.ts");
const getUserByPlatform_service_1 = __webpack_require__("./apps/cake/src/app/service/users/getUserByPlatform.service.ts");
class UsersController {
    getAllUser(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, users_1.getAllUserService)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getKOLById(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, users_1.getKOLById)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getUserById(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, users_1.getUserById)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    updateUser(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, users_1.updateUser)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getMe(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, users_1.getMe)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getUserByPlatform(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, getUserByPlatform_service_1.getUserByPlatform)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new UsersController();


/***/ }),

/***/ "./apps/cake/src/app/controllers/wallet/walletController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const service_1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
class walletController {
    addWallet(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.AddWallet)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    getWallet(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.GetWallet)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    editWallet(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.EditWallet)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
    removeWallet(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, service_1.RemoveWallet)(req, res);
            }
            catch (error) {
                return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
            }
        });
    }
}
exports["default"] = new walletController();


/***/ }),

/***/ "./apps/cake/src/app/middleware/authorization-middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authorizationMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const token_manager_1 = __webpack_require__("./apps/cake/src/app/controllers/authorization/helpers/token-manager.ts");
const logger = new logger_1.Logger('authorization-middleware');
const authorizationMiddleware = (request, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    logger.log('checking authorization');
    const tokenRepo = new prisma_repository_1.PrismaRepository('token');
    const authToken = token_manager_1.TokenManager.tokenFromRequest(request);
    const tokenData = token_manager_1.TokenManager.process(authToken);
    if (!tokenData) {
        logger.log('cannot validate token');
        return res.status(typescript_openapi_router_1.StatusCode.unauthorized).json({
            errors: [
                {
                    code: 'Unauthorized',
                    message: `cannot validate token`,
                },
            ],
        });
    }
    const [token, error] = yield tokenRepo.findFirst({
        where: {
            userId: tokenData.data.id,
            authToken: authToken,
        },
    });
    if (!token || token.isDisabled || error) {
        logger.log('token not found or is disabled', token, error);
        return res.status(typescript_openapi_router_1.StatusCode.unauthorized).json({
            errors: [
                {
                    code: 'token not found or is disabled',
                    message: error,
                },
            ],
        });
    }
    logger.log('token is valid');
    logger.log(JSON.stringify(tokenData));
    request.extra = {
        userId: String(tokenData.data.id),
        email: tokenData.data.e,
        role: tokenData.data.r,
    };
    next();
    return [request, null];
});
exports.authorizationMiddleware = authorizationMiddleware;


/***/ }),

/***/ "./apps/cake/src/app/middleware/cors-middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corsMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
const corsMiddleware = (response, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    response.headers['Access-Control-Allow-Origin'] = '*';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    response.headers['Access-Control-Allow-Credentials'] = true;
    next();
    return response;
});
exports.corsMiddleware = corsMiddleware;


/***/ }),

/***/ "./apps/cake/src/app/middleware/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/middleware/authorization-middleware.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/middleware/cors-middleware.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/middleware/s3-middleware.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/middleware/logger-middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loggerMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const logger = new logger_1.Logger('logger-middleware');
const loggerMiddleware = (request, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log('====================================');
    console.log('loggerMiddleware', request.path);
    console.log('====================================');
    next();
    return request;
});
exports.loggerMiddleware = loggerMiddleware;


/***/ }),

/***/ "./apps/cake/src/app/middleware/s3-middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.upload = void 0;
const tslib_1 = __webpack_require__("tslib");
const multer_1 = tslib_1.__importDefault(__webpack_require__("multer"));
const fs_1 = tslib_1.__importDefault(__webpack_require__("fs"));
const dir = './images';
if (!fs_1.default.existsSync(dir)) {
    fs_1.default.mkdirSync(dir, { recursive: true });
}
const fileStorageEngine = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
exports.upload = (0, multer_1.default)({ storage: fileStorageEngine });


/***/ }),

/***/ "./apps/cake/src/app/repository/prisma-repository.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaAction = exports.PrismaRepository = void 0;
const tslib_1 = __webpack_require__("tslib");
const prisma_1 = __webpack_require__("./apps/cake/src/app/repository/prisma.ts");
const runtime_1 = __webpack_require__("@prisma/client/runtime");
const client = (0, prisma_1.getPrismaClient)();
class PrismaRepository {
    constructor(model) {
        this.model = model;
        this.getDbOperationError = (err) => {
            console.error(err);
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                return PrismaRepository.getErrorCodes(err);
            }
            else {
                return {
                    code: 'DB0001',
                    message: err.message,
                };
            }
        };
        this.execute = (op, input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('DB Operation Input:', input);
            // console.log('DB Operation Name:', op);
            let data;
            let error = null;
            try {
                data = yield client[this.model][op](input);
            }
            catch (err) {
                console.error(err);
                error = this.getDbOperationError(err);
            }
            return [data, error];
        });
        if (!(model in client)) {
            throw new Error(`The model ${model} does not exist.`);
        }
    }
    static getErrorCodes(err) {
        const errors = {
            P2003: {
                code: 'P2003',
                message: `The ${err.meta['field_name']} that you provided does not exist`,
            },
            P2025: {
                code: 'P2025',
                message: 'The item that you provided does not exist',
            },
            P2002: {
                code: 'P2002',
                message: `The ${err.meta['target']} that you provided already exist`,
            },
            P2022: {
                code: 'P2022',
                message: `The ${err.meta['column']} does not exist`,
            },
        };
        console.log(`Prisma error: ${JSON.stringify(err)}`);
        return errors[err.code];
    }
    create(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.create, input);
        });
    }
    createMany(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.createMany, input);
        });
    }
    upsert(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.upsert, input);
        });
    }
    findFirst(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.findFirst, input);
        });
    }
    findAll(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.findMany, input);
        });
    }
    updateOne(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.update, input);
        });
    }
    deleteOne(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.delete, input);
        });
    }
    count(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            client.user.count();
            return yield this.execute(PrismaAction.count, input);
        });
    }
    groupBy(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute(PrismaAction.groupBy, input);
        });
    }
    aggregate(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute('aggregate', input);
        });
    }
    deleteMany(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.execute('deleteMany', input);
        });
    }
    bulkTransactions(input, action) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let data;
            let error = null;
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                data = yield client.$transaction(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                input.map((item) => client[this.model][action](item)));
                console.log('Bulk Transaction done:', data);
            }
            catch (err) {
                error = this.getDbOperationError(err);
                console.log('Bulk Transaction failed:', err);
            }
            return [data, error];
        });
    }
}
exports.PrismaRepository = PrismaRepository;
var PrismaAction;
(function (PrismaAction) {
    PrismaAction["groupBy"] = "groupBy";
    PrismaAction["count"] = "count";
    PrismaAction["delete"] = "delete";
    PrismaAction["update"] = "update";
    PrismaAction["findMany"] = "findMany";
    PrismaAction["findFirst"] = "findFirst";
    PrismaAction["upsert"] = "upsert";
    PrismaAction["createMany"] = "createMany";
    PrismaAction["create"] = "create";
    PrismaAction["deleteMany"] = "deleteMany";
})(PrismaAction = exports.PrismaAction || (exports.PrismaAction = {}));


/***/ }),

/***/ "./apps/cake/src/app/repository/prisma.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPrismaClient = void 0;
const client_1 = __webpack_require__("@prisma/client");
let client;
const getPrismaClient = () => {
    const logs = [];
    if (!client) {
        console.log("no prisma client, instantiating");
        client = new client_1.PrismaClient({ log: logs });
    }
    client.$on("query", (e) => {
        console.log("Query: " + e.query);
        if (e.params.length < 1000000) {
            console.log("Params: " + e.params);
        }
        console.log("Duration: " + e.duration + "ms");
    });
    return client;
};
exports.getPrismaClient = getPrismaClient;


/***/ }),

/***/ "./apps/cake/src/app/router/router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const express_1 = tslib_1.__importDefault(__webpack_require__("express"));
const registerController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/authorization/registerController.ts"));
const loginController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/authorization/loginController.ts"));
const UsersController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/users/UsersController.ts"));
const rewardsController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/rewards/rewardsController.ts"));
const platformController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/platform/platformController.ts"));
const sliceController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/slice/sliceController.ts"));
const followersController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/followers/followersController.ts"));
const walletController_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/wallet/walletController.ts"));
const S3Controller_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/controllers/file/S3Controller.ts"));
const authorization_middleware_1 = __webpack_require__("./apps/cake/src/app/middleware/authorization-middleware.ts");
const cors_middleware_1 = __webpack_require__("./apps/cake/src/app/middleware/cors-middleware.ts");
const middleware_1 = __webpack_require__("./apps/cake/src/app/middleware/index.ts");
const logger_middleware_1 = __webpack_require__("./apps/cake/src/app/middleware/logger-middleware.ts");
const router = (0, express_1.default)();
router.use(cors_middleware_1.corsMiddleware);
//*
//* ──────────────────────────────────────────────── I ──────────
//*   :::::: A U T H : :  :   :    :     :        :          :
//* ──────────────────────────────────────────────────────────
//*
router.post("/register", registerController_1.default.register);
router.post("/login", loginController_1.default.login);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ──────────────────────────────────────────────── II ──────────
//*   :::::: U S E R : :  :   :    :     :        :          :
//* ──────────────────────────────────────────────────────────
//*
router.get("/users", logger_middleware_1.loggerMiddleware, authorization_middleware_1.authorizationMiddleware, UsersController_1.default.getAllUser);
router.get("/users/kol/:userId", authorization_middleware_1.authorizationMiddleware, UsersController_1.default.getKOLById);
router.get("/users/:userId", authorization_middleware_1.authorizationMiddleware, UsersController_1.default.getKOLById);
router.put("/users/:userId", middleware_1.upload.single("image"), authorization_middleware_1.authorizationMiddleware, UsersController_1.default.updateUser);
router.get("/user/profile", authorization_middleware_1.authorizationMiddleware, UsersController_1.default.getMe);
router.get("/user/platform", authorization_middleware_1.authorizationMiddleware, UsersController_1.default.getUserByPlatform);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ────────────────────────────────────────────────────── III ──────────
//*   :::::: R E W A R D S : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────
//*
router.post("/reward", authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.createRewards);
router.get("/reward", authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.getAllRewards);
router.get("/reward/:rewardId", authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.getRewardById);
router.post("/reward/cakebox", middleware_1.upload.single("image"), authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.createCakeBox);
router.put("/reward/claim/:cakeboxId", authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.claimCakeBox);
router.put("/reward/buy/:rewardId", authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.buyReward);
router.put("/reward/toConfectionary/:rewardId", authorization_middleware_1.authorizationMiddleware, rewardsController_1.default.toConfectionary);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ────────────────────────────────────────────────── IV ──────────
//*   :::::: S L I C E : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────
//*
router.post("/slice", authorization_middleware_1.authorizationMiddleware, sliceController_1.default.createSlice);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ──────────────────────────────────────────────────────── V ──────────
//*   :::::: P L A T F O R M : :  :   :    :     :        :          :
//* ──────────────────────────────────────────────────────────────────
//*
router.post("/platform", authorization_middleware_1.authorizationMiddleware, platformController_1.default.addPlatform);
router.delete("/platform", authorization_middleware_1.authorizationMiddleware, platformController_1.default.removePlatform);
router.get("/platform/:userId", authorization_middleware_1.authorizationMiddleware, platformController_1.default.getPlatformById);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ────────────────────────────────────────────────────────── VI ──────────
//*   :::::: F O L L O W E R S : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────────
//*
router.put("/followers", authorization_middleware_1.authorizationMiddleware, followersController_1.default.addFollower);
router.delete("/followers", authorization_middleware_1.authorizationMiddleware, followersController_1.default.removeFollower);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ────────────────────────────────────────────────────── VII ──────────
//*   :::::: S 3   F I L E : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────
//*
router.get("/image/:key", S3Controller_1.default.getImage);
router.post("/image", middleware_1.upload.single("image"), S3Controller_1.default.uploadImage);
router.post("/image/test", middleware_1.upload.single("image"), S3Controller_1.default.test);
//* ─────────────────────────────────────────────────────────────────────────────
//*
//* ────────────────────────────────────────────────────── VIII ──────────
//*   :::::: WALLET : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────
//*
router.post("/wallet", authorization_middleware_1.authorizationMiddleware, walletController_1.default.addWallet);
router.get("/wallet", authorization_middleware_1.authorizationMiddleware, walletController_1.default.getWallet);
router.put("/wallet", authorization_middleware_1.authorizationMiddleware, walletController_1.default.editWallet);
router.delete("/wallet/:id", authorization_middleware_1.authorizationMiddleware, walletController_1.default.removeWallet);
//* ─────────────────────────────────────────────────────────────────────────────
exports["default"] = router;


/***/ }),

/***/ "./apps/cake/src/app/service/authorization/authorization.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.apiRegister = void 0;
const tslib_1 = __webpack_require__("tslib");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const password_manager_1 = __webpack_require__("./apps/cake/src/app/controllers/authorization/helpers/password-manager.ts");
const token_manager_1 = __webpack_require__("./apps/cake/src/app/controllers/authorization/helpers/token-manager.ts");
const logger_1 = __webpack_require__("@xtool/logger");
const client_1 = __webpack_require__("@prisma/client");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const lib_api_interface_1 = __webpack_require__("./libs/lib-api-interface/src/index.ts");
const logger = new logger_1.Logger("apiRegister");
const userRepository = new prisma_repository_1.PrismaRepository("user");
const rewardsRepo = new prisma_repository_1.PrismaRepository("reward");
const apiRegister = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { email, password, role, adminPassword, firstName, lastName, recoveryPhase, username } = request.body;
    const regexPhoneNumber = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$", "im");
    if (role === lib_api_interface_1.Role.admin && adminPassword !== process.env.SUPERADMIN_PASSWORD) {
        logger.log("wrong superAdminPassword", adminPassword, process.env.SUPERADMIN_PASSWORD);
        return;
    }
    const [user] = yield userRepository.findFirst({
        where: {
            email,
        },
    });
    const [usernameExist] = yield userRepository.findFirst({
        where: {
            username,
        },
    });
    if (user || usernameExist) {
        logger.log("user already exists");
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({
            errors: [
                {
                    code: "user-exists",
                    message: `A user with the email address ${email} already exists`,
                },
            ],
        });
    }
    logger.log("creating new user");
    const userRepo = new prisma_repository_1.PrismaRepository("user");
    const userData = {
        data: {
            email: email,
            password: yield password_manager_1.PasswordManager.encrypt(password),
            role: role,
            firstName: firstName,
            lastName: lastName,
            recoveryPhase: recoveryPhase,
            username: username,
        },
    };
    if ((_a = request.body) === null || _a === void 0 ? void 0 : _a.firstName) {
        userData.data.firstName = request.body.firstName;
    }
    if ((_b = request.body) === null || _b === void 0 ? void 0 : _b.lastName) {
        userData.data.lastName = request.body.lastName;
    }
    if (request.body.phoneNumber) {
        if (!regexPhoneNumber.test(request.body.phoneNumber)) {
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({
                errors: [
                    {
                        message: "Phone Number format error",
                    },
                ],
            });
        }
        userData.data.phoneNumber = request.body.phoneNumber;
    }
    logger.log("=============================");
    logger.log(JSON.stringify(userData));
    logger.log("=============================");
    const [savedUser, error] = yield userRepo.create(userData);
    // FOR MVP1
    const [rewardData, rewardError] = yield rewardsRepo.findAll({
        where: { userId: '636d58541536eaa1d5a63f67', type: client_1.RewardEnum.CAKEBOX },
        select: { id: true },
    });
    if (rewardData.length >= 3) {
        for (const rewardId of rewardData.slice(0, 3).map(reward => reward.id)) {
            const [, err] = yield rewardsRepo.updateOne({
                where: {
                    id: rewardId,
                },
                data: {
                    isConfectionary: false,
                    initial: true,
                    User: {
                        connect: {
                            id: savedUser.id,
                        },
                    },
                },
            });
            console.log(err);
        }
    }
    logger.log("=============================");
    logger.log(JSON.stringify(userData));
    logger.log("=============================");
    if (error) {
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json(error);
    }
    const { authToken, refreshToken } = token_manager_1.TokenManager.sign({
        data: {
            id: String(savedUser.id),
            e: savedUser.email,
            r: savedUser.role,
        },
    });
    const tokenRepo = new prisma_repository_1.PrismaRepository("token");
    yield tokenRepo.create({
        data: {
            authToken,
            refreshToken,
            userId: savedUser.id,
        },
    });
    logger.log("=============================");
    logger.log("token saved");
    logger.log("=============================");
    const registerUserResponseData = {
        role: savedUser.role,
        authTokenType: "Bearer",
        authToken: authToken,
        refreshToken: refreshToken,
        id: savedUser.id,
    };
    logger.log("=============================");
    logger.log(registerUserResponseData);
    logger.log("=============================");
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({ data: registerUserResponseData });
});
exports.apiRegister = apiRegister;


/***/ }),

/***/ "./apps/cake/src/app/service/authorization/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/authorization/authorization.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/authorization/login.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/authorization/login.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.apiLogin = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const password_manager_1 = __webpack_require__("./apps/cake/src/app/controllers/authorization/helpers/password-manager.ts");
const token_manager_1 = __webpack_require__("./apps/cake/src/app/controllers/authorization/helpers/token-manager.ts");
const logger = new logger_1.Logger('login api');
const userRepository = new prisma_repository_1.PrismaRepository('user');
const tokenRepository = new prisma_repository_1.PrismaRepository('token');
const apiLogin = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    logger.log('login in user with', request);
    const email = request.body.email;
    const password = request.body.password;
    const [existingUser] = yield userRepository.findFirst({
        where: {
            email: email,
        },
    });
    if (!existingUser) {
        logger.log('user does not exist');
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({
            errors: [
                {
                    code: 'wrong-credentials',
                    message: `Wrong username or password`,
                },
            ],
        });
    }
    const passwordsMatch = yield password_manager_1.PasswordManager.compare(password, existingUser.password);
    if (!passwordsMatch) {
        logger.log('passwords do not match');
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({
            errors: [
                {
                    code: 'wrong-credentials',
                    message: 'Wrong username or password',
                },
            ],
        });
    }
    const { authToken, refreshToken } = token_manager_1.TokenManager.sign({
        data: {
            id: existingUser.id,
            e: existingUser.email,
            r: existingUser.role,
        },
    });
    yield tokenRepository.create({
        data: {
            authToken,
            refreshToken,
            userId: existingUser.id,
        },
    });
    logger.log('token created');
    return res.status(200).json({
        data: {
            authToken: authToken,
            authTokenType: 'Bearer',
            refreshToken: refreshToken,
            role: existingUser.role,
            id: existingUser.id,
        },
    });
});
exports.apiLogin = apiLogin;


/***/ }),

/***/ "./apps/cake/src/app/service/contract/contract.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransferListener = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_api_interface_1 = __webpack_require__("./libs/lib-api-interface/src/index.ts");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const logger_1 = __webpack_require__("@xtool/logger");
const ethers_1 = __webpack_require__("ethers");
const utils_1 = __webpack_require__("ethers/lib/utils");
const contractAddress = lib_api_interface_1.STAKING_CONTRACT;
const logger = new logger_1.Logger("contract service");
const contractRepo = new prisma_repository_1.PrismaRepository("user");
const TransferListener = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.WebSocketProvider(process.env.GOERLI_NODE_URL);
    logger.log(yield provider.getBlockNumber());
    const contract = new ethers_1.ethers.Contract(contractAddress, lib_api_interface_1.abi, provider);
    contract.on("*", (from) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const [data] = yield contractRepo.findFirst({
            where: {
                wallets: {
                    some: {
                        address: from.args[0],
                    },
                },
            },
            select: {
                id: true,
                sugar: true,
            },
        });
        switch ((0, utils_1.formatUnits)(from.args[2]._hex, 18)) {
            case "5.0":
                addSugar(data, 1000);
                break;
            case "10.0":
                addSugar(data, 2500);
                break;
            case "20.0":
                addSugar(data, 5000);
                break;
        }
        logger.log(JSON.stringify(data));
    }));
    provider.on("block", (el) => logger.log(el));
});
exports.TransferListener = TransferListener;
const addSugar = (userData, sugar) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    logger.log(userData, sugar);
    yield contractRepo.updateOne({
        where: {
            id: userData.id,
        },
        data: {
            sugar: userData.sugar + sugar,
            TransactionHystory: {
                create: {
                    amount: sugar,
                },
            },
        },
    });
});


/***/ }),

/***/ "./apps/cake/src/app/service/files/files.Service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uploadImage = exports.getImage = void 0;
const tslib_1 = __webpack_require__("tslib");
const utils_1 = __webpack_require__("./apps/cake/src/app/service/files/utils/index.ts");
const promises_1 = __webpack_require__("node:fs/promises");
const logger_1 = __webpack_require__("@xtool/logger");
const logger = new logger_1.Logger('file service');
const getImage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.params;
    const readStream = yield (0, utils_1.getFileStream)(key);
    logger.log(readStream);
    return res.send({
        status: 'success',
        message: 'File uploaded successfully',
        data: readStream,
    });
});
exports.getImage = getImage;
const uploadImage = (req) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, utils_1.uploadFile)(req.file);
    logger.log('S3 response', result.Location);
    //* Deleting from local if uploaded in S3 bucket
    try {
        yield (0, promises_1.unlink)('images/' + result.Key);
        logger.log('successfully deleted ' + result.Key);
    }
    catch (error) {
        logger.error('there was an error:', error.message);
    }
    return result;
});
exports.uploadImage = uploadImage;


/***/ }),

/***/ "./apps/cake/src/app/service/files/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/files/files.Service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/files/utils/index.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/files/utils/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/files/utils/s3.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/files/utils/s3.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFileStream = exports.uploadFile = exports.some = void 0;
const tslib_1 = __webpack_require__("tslib");
const dotenv_1 = __webpack_require__("dotenv");
(0, dotenv_1.config)();
const s3_1 = tslib_1.__importDefault(__webpack_require__("aws-sdk/clients/s3"));
const fs_1 = tslib_1.__importDefault(__webpack_require__("fs"));
const s3bucketCreds_1 = __webpack_require__("./apps/cake/src/app/types/s3bucketCreds.ts");
const s3bucket = new s3_1.default({
    region: s3bucketCreds_1.region,
    accessKeyId: s3bucketCreds_1.accessKeyId,
    secretAccessKey: s3bucketCreds_1.secretAccessKey,
});
const some = (data, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // await sharp(data.Body.image);
    console.log(data.file.path);
    return res.status(200).json({ message: "" });
});
exports.some = some;
//* UPLOAD FILE TO S3
const uploadFile = (file) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const fileStream = fs_1.default.createReadStream(file.path);
    const uploadParams = {
        Bucket: s3bucketCreds_1.bucketName,
        Body: fileStream,
        Key: file.filename,
    };
    return yield s3bucket.upload(uploadParams).promise();
});
exports.uploadFile = uploadFile;
//* DOWNLOAD FILE FROM S3
const getFileStream = (fileKey) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const downloadParams = {
        Key: fileKey,
        Bucket: s3bucketCreds_1.bucketName,
    };
    const signedUrlExpireSeconds = 60 * 1;
    return s3bucket.getSignedUrl("getObject", Object.assign(Object.assign({}, downloadParams), { Expires: signedUrlExpireSeconds }));
});
exports.getFileStream = getFileStream;


/***/ }),

/***/ "./apps/cake/src/app/service/followers/addFollower.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddFollower = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const followerRepository = new prisma_repository_1.PrismaRepository('user');
const logger = new logger_1.Logger('add follower');
const AddFollower = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const followerId = request['extra'].userId;
    const { userId } = request.body;
    const [, error] = yield followerRepository.updateOne({
        where: {
            id: followerId,
        },
        data: {
            following: {
                connect: {
                    id: userId,
                },
            },
        },
    });
    if (error) {
        logger.error('Failed add follower', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.AddFollower = AddFollower;


/***/ }),

/***/ "./apps/cake/src/app/service/followers/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/followers/addFollower.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/followers/removeFollower.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/followers/removeFollower.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveFollower = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const followerRepository = new prisma_repository_1.PrismaRepository('user');
const logger = new logger_1.Logger('add follower');
const RemoveFollower = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const followerId = request['extra'].userId;
    const { userId } = request.body;
    const [, error] = yield followerRepository.updateOne({
        where: {
            id: followerId,
        },
        data: {
            following: {
                disconnect: {
                    id: userId,
                },
            },
        },
    });
    if (error) {
        logger.error('Failed add follower', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.RemoveFollower = RemoveFollower;


/***/ }),

/***/ "./apps/cake/src/app/service/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/authorization/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/users/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/slice/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/platform/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/followers/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/files/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/wallet/index.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/platform/addPlatform.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addPlatformService = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const platformRepository = new prisma_repository_1.PrismaRepository('platform');
const logger = new logger_1.Logger('add Platform');
const addPlatformService = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = request['extra'].userId;
    const { title, link } = request.body;
    const [, error] = yield platformRepository.create({
        data: {
            User: {
                connect: {
                    id: userId,
                },
            },
            title: title,
            isPopular: (_a = request.body['isPopular']) !== null && _a !== void 0 ? _a : false,
            link: link,
        },
    });
    if (error) {
        logger.error('Failed add user platform', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.addPlatformService = addPlatformService;


/***/ }),

/***/ "./apps/cake/src/app/service/platform/getPlatformById.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPlatformById = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const utils_1 = __webpack_require__("./apps/cake/src/app/utils/index.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository("platform");
const logger = new logger_1.Logger("get platform");
const GetPlatformById = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    let queryParams = {};
    if (request === null || request === void 0 ? void 0 : request.query) {
        const filterParams = {
            title: "",
            link: "",
        };
        queryParams = (0, utils_1.queryParamsMapper)(request.query, filterParams);
    }
    if (queryParams.where)
        queryParams.where = Object.assign({ id: userId }, queryParams.where);
    if (queryParams.orderBy)
        queryParams.orderBy = { title: "asc" };
    const [rewardData, error] = yield rewardsRepository.findAll(queryParams);
    if (error) {
        logger.error("Failed get user platform", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: rewardData,
    });
});
exports.GetPlatformById = GetPlatformById;


/***/ }),

/***/ "./apps/cake/src/app/service/platform/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/platform/addPlatform.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/platform/removePlatform.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/platform/removePlatform.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removePlatformService = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const platformRepository = new prisma_repository_1.PrismaRepository('platform');
const userReposeitory = new prisma_repository_1.PrismaRepository('user');
const logger = new logger_1.Logger('remove Platform');
const removePlatformService = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request['extra'].userId;
    const { link } = request.body;
    const [userPlatform, errorUser] = yield userReposeitory.findFirst({
        where: {
            id: userId,
        },
        select: {
            platforms: {
                where: {
                    link,
                },
            },
        },
    });
    if (errorUser) {
        logger.error('Failed get user platform', errorUser);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: errorUser });
    }
    if (userPlatform.platforms.length === 1) {
        const [, error] = yield platformRepository.deleteOne({
            where: {
                link: link,
            },
        });
        if (error) {
            logger.error('Failed remove user platform', error);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
        }
        return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
    }
    return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: 'You can not delete this platform' });
});
exports.removePlatformService = removePlatformService;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/buyReward.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buyReward = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const rewardsRepo = new prisma_repository_1.PrismaRepository("reward");
const userRepo = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("get reward");
const buyReward = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { rewardId } = request.params;
    const { userId } = request["extra"];
    const [buyerData, buyerError] = yield userRepo.findFirst({
        where: { id: userId },
        select: { sugar: true, slicesCollected: true, slicesPurchased: true, totalRewardsEarned: true },
    });
    if (buyerError) {
        logger.log("Failed get buyer", buyerError);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: buyerError });
    }
    const [rewardData, rewardError] = yield rewardsRepo.findFirst({
        where: { id: rewardId },
        select: { cost: true, isConfectionary: true, User: { select: { id: true, sugar: true, slicesSold: true, totalRewardsEarned: true } } },
    });
    if (rewardError) {
        logger.log("Failed get reward", rewardError);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: rewardError });
    }
    if (userId === rewardData.User.id) {
        logger.log("You allredy owner");
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: "You allredy owner" });
    }
    if (!rewardData.isConfectionary) {
        logger.log("Failed get reward", "Reward is not confectionary");
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: "Reward is not in confectionery" });
    }
    if (buyerData.sugar < rewardData.cost) {
        logger.log("Not enough sugar");
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: "Not enough sugar" });
    }
    const [, ownerError] = yield userRepo.updateOne({
        where: { id: rewardData.User.id },
        data: {
            sugar: rewardData.cost + rewardData.User.sugar,
            slicesSold: rewardData.User.slicesSold + 1,
        },
    });
    if (ownerError) {
        logger.log("Failed update owner sugar", ownerError);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: ownerError });
    }
    const [, buyerErrors] = yield userRepo.updateOne({
        where: { id: userId },
        data: {
            sugar: buyerData.sugar - rewardData.cost,
            slicesCollected: buyerData.slicesCollected + 1,
            slicesPurchased: buyerData.slicesPurchased + 1,
            totalRewardsEarned: buyerData.totalRewardsEarned + 1,
            TransactionHystory: {
                create: {
                    rewardId: rewardId,
                    amount: rewardData.cost,
                },
            },
        },
    });
    if (buyerErrors) {
        logger.log("Failed update buyer sugar", buyerErrors);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: buyerErrors });
    }
    const [, error] = yield rewardsRepo.updateOne({
        where: {
            id: rewardId,
        },
        data: {
            isConfectionary: false,
            User: {
                connect: {
                    id: userId,
                },
            },
        },
    });
    if (error) {
        logger.error("Failed get reward", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: rewardData,
    });
});
exports.buyReward = buyReward;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/claimCakeBox.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.claimCakeBox = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository("reward");
const userRepo = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("get reward");
const claimCakeBox = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { cakeboxId } = request.params;
    const { userId } = request["extra"];
    const [cakeboxData, errorGetData] = yield rewardsRepository.findFirst({
        where: { id: cakeboxId },
        include: {
            User: {
                select: {
                    id: true,
                },
            },
        },
    });
    if (errorGetData) {
        logger.log("Failed get cakebox", errorGetData);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: errorGetData });
    }
    if (cakeboxData.userId !== userId) {
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: "You don't have permission to claim this cakebox" });
    }
    yield Promise.all(cakeboxData.RewardByIDs.map((rewardId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const [rewardData] = yield rewardsRepository.findFirst({
            where: { id: rewardId },
            select: { cost: true },
        });
        return yield rewardsRepository.updateOne({
            where: {
                id: rewardId,
            },
            data: {
                User: {
                    connect: {
                        id: userId,
                    },
                },
                TransactionHystory: {
                    create: {
                        userId: userId,
                        amount: rewardData.cost,
                    },
                },
                isOnCakeBox: false,
            },
        });
    })));
    const [, error] = yield rewardsRepository.deleteOne({
        where: {
            id: cakeboxId,
        },
    });
    const [userData, errorUserData] = yield userRepo.findFirst({
        where: { id: userId },
        select: { slicesCollected: true, slicesPurchased: true, totalRewardsEarned: true, cakeBoxClaimed: true },
    });
    if (errorUserData) {
        logger.log("Failed get user data", errorUserData);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    const [, errorUpdateUser] = yield userRepo.updateOne({
        where: {
            id: userId,
        },
        data: {
            slicesCollected: userData.slicesCollected + cakeboxData.RewardByIDs.length,
            totalRewardsEarned: userData.totalRewardsEarned + cakeboxData.RewardByIDs.length,
            cakeBoxClaimed: userData.cakeBoxClaimed + 1,
        },
    });
    if (errorUpdateUser) {
        logger.log("Failed update user data", errorUpdateUser);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    if (error) {
        logger.error("Failed remove reward", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.claimCakeBox = claimCakeBox;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/createCakeBox.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCakeBoxService = void 0;
const tslib_1 = __webpack_require__("tslib");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const __1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
const logger_1 = __webpack_require__("@xtool/logger");
const logger = new logger_1.Logger("create cake box");
const cakeBoxRepository = new prisma_repository_1.PrismaRepository("reward");
const userRepo = new prisma_repository_1.PrismaRepository("user");
const createCakeBoxService = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const userId = req["extra"].userId;
    const { rewardIds, name, cost, rarity, category, type, isConfectionary } = body;
    const image = (yield (0, __1.uploadImage)(req)).Location;
    const [rewards, rewardError] = yield cakeBoxRepository.findAll({
        where: {
            id: { in: rewardIds.split(";") },
        },
        select: {
            userId: true,
        },
    });
    if (rewardError) {
        logger.error(rewardError);
        return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json({
            message: "Server error",
        });
    }
    for (const reward of rewards) {
        if (reward.userId !== userId) {
            return res.status(typescript_openapi_router_1.StatusCode.forbidden).json({
                message: "You can't add other user's reward to your cakebox",
            });
        }
    }
    const [cakeBox, error] = yield cakeBoxRepository.create({
        data: {
            User: {
                connect: {
                    id: userId,
                },
            },
            isCakeBox: true,
            image,
            smallImage: image,
            name: name,
            cost: Number(cost),
            rarity,
            category,
            type,
            isConfectionary: Boolean(isConfectionary),
        },
    });
    for (const rewardId of rewardIds.split(";")) {
        yield cakeBoxRepository.updateOne({
            where: {
                id: cakeBox.id,
            },
            data: {
                RewardBy: {
                    connect: {
                        id: rewardId,
                    },
                },
            },
        });
        yield cakeBoxRepository.updateOne({
            where: {
                id: rewardId,
            },
            data: {
                isOnCakeBox: true,
            },
        });
    }
    const [userData, errorUserData] = yield userRepo.findFirst({
        where: { id: userId },
        select: { totalRewardsEarned: true },
    });
    if (errorUserData) {
        logger.log("Failed get user data", errorUserData);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    const [, errorUpdateUser] = yield userRepo.updateOne({
        where: {
            id: userId,
        },
        data: {
            totalRewardsEarned: userData.totalRewardsEarned + 1,
        },
    });
    if (errorUpdateUser) {
        logger.log("Failed update user data", errorUpdateUser);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    if (error) {
        logger.error("Failed create CakeBox", error);
        return res.status(typescript_openapi_router_1.StatusCode.internalServerError).json(error);
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json(cakeBox);
});
exports.createCakeBoxService = createCakeBoxService;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/createRewards.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRewardsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const client_1 = __webpack_require__("@prisma/client");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const rewardsRepository = new prisma_repository_1.PrismaRepository("reward");
const userRepo = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("Crate Reward");
const createRewardsService = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    const { cost, rarity, category, type, name } = request.body;
    if ([client_1.RewardEnum.SUGAR].includes(type)) {
        const [sugar, errorSugar] = yield userRepo.findFirst({
            where: {
                id: userId,
            },
            select: {
                sugar: true,
            },
        });
        if (errorSugar) {
            logger.error("Failed get sugar", errorSugar);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: errorSugar });
        }
        if (sugar.sugar < cost) {
            logger.error("not enough sugar");
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: "not enough sugar" });
        }
        const [, errorUser] = yield userRepo.updateOne({
            where: {
                id: userId,
            },
            data: {
                sugar: sugar.sugar - cost,
            },
        });
        if (errorUser) {
            logger.error("Failed update user", errorUser);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: errorUser });
        }
        const [, error] = yield rewardsRepository.create({
            data: {
                User: {
                    connect: {
                        id: userId,
                    },
                },
                smallImage: "https://picsum.photos/800/600",
                name: name,
                category: category,
                type: type,
                rarity: rarity,
                cost: cost,
                //!! TODO: add link for image
                image: "https://picsum.photos/800/600",
            },
        });
        const [userData, errorUserData] = yield userRepo.findFirst({
            where: { id: userId },
            select: { totalRewardsEarned: true },
        });
        if (errorUserData) {
            logger.log("Failed get user data", errorUserData);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
        }
        const [, errorUpdateUser] = yield userRepo.updateOne({
            where: {
                id: userId,
            },
            data: {
                totalRewardsEarned: userData.totalRewardsEarned + 1,
            },
        });
        if (errorUpdateUser) {
            logger.log("Failed update user data", errorUpdateUser);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
        }
        if (error) {
            logger.error("Failed create rewards", error);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
        }
    }
    else {
        const [, error] = yield rewardsRepository.create(request.body);
        if (error) {
            logger.error("Failed create cakebox", error);
            return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
        }
    }
    return res.status(typescript_openapi_router_1.StatusCode.created).json({});
});
exports.createRewardsService = createRewardsService;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/gerRewardById.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRewardById = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const utils_1 = __webpack_require__("./apps/cake/src/app/utils/index.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository("reward");
const logger = new logger_1.Logger("get reward");
const getRewardById = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { rewardId } = request.params;
    const [rewardData, error] = yield rewardsRepository.findFirst({
        where: {
            id: rewardId,
        },
        include: { TransactionHystory: { where: { rewardId }, include: { User: { select: { username: true } } } } },
    });
    const [rewardListData, errorRewardListData] = yield rewardsRepository.findAll({
        where: {
            id: { in: rewardData.RewardByIDs },
        },
    });
    if (error) {
        logger.error("Failed get reward", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    if (errorRewardListData) {
        logger.error("Failed get reward", errorRewardListData);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: errorRewardListData });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: (0, utils_1.rewardMapper)(rewardData, rewardListData),
    });
});
exports.getRewardById = getRewardById;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/getAllRewards.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAllRewards = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const utils_1 = __webpack_require__("./apps/cake/src/app/utils/index.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository('reward');
const logger = new logger_1.Logger('get all rewards');
const getAllRewards = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const userId = request['extra'].userId;
    let queryParams = {};
    const { page, pageSize, isConfectionary, owner } = request.query;
    if (request === null || request === void 0 ? void 0 : request.query) {
        const filterParams = {
            category: '',
            name: '',
        };
        queryParams = (0, utils_1.queryParamsMapper)(request.query, filterParams);
    }
    if ((_a = request.query) === null || _a === void 0 ? void 0 : _a.sort)
        queryParams.orderBy = { [(_b = request.query) === null || _b === void 0 ? void 0 : _b.sort]: 'desc' };
    if (((_c = request.query) === null || _c === void 0 ? void 0 : _c.where) !== 'TREND' && ((_d = request.query) === null || _d === void 0 ? void 0 : _d.where))
        queryParams.where = Object.assign({ type: (_e = request.query) === null || _e === void 0 ? void 0 : _e.where }, queryParams.where);
    if (JSON.parse(owner || 'false'))
        queryParams.where = Object.assign({ userId: userId }, queryParams.where);
    if (isConfectionary !== undefined)
        queryParams.where = Object.assign(Object.assign({ isConfectionary: JSON.parse(isConfectionary) }, queryParams.where), isConfectionary ? {} : { userId: userId });
    queryParams.where = Object.assign({ isOnCakeBox: false }, queryParams.where);
    const [rewardData, error] = yield rewardsRepository.findAll(queryParams);
    if (error) {
        logger.error('Failed get list of rewards', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    let where = {};
    if (queryParams.where && ((_f = request.query) === null || _f === void 0 ? void 0 : _f.where) !== 'TREND') {
        where = Object.assign({ type: (_g = request.query) === null || _g === void 0 ? void 0 : _g.where }, queryParams.where);
    }
    const [count, errorCount] = yield rewardsRepository.count({ where });
    if (errorCount) {
        logger.error('Failed count rewards', errorCount);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ errorCount });
    }
    (0, utils_1.rewardsMapper)(rewardData).then((data) => {
        return res.status(typescript_openapi_router_1.StatusCode.okay).json({
            data,
            count,
            page: Number(page),
            pageSize: Number(pageSize),
        });
    });
});
exports.getAllRewards = getAllRewards;


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/createRewards.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/getAllRewards.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/gerRewardById.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/toConfectionary.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/createCakeBox.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/claimCakeBox.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/rewards/buyReward.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/rewards/toConfectionary.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toConfectionary = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository('reward');
const logger = new logger_1.Logger('get reward');
const toConfectionary = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { rewardId } = request.params;
    const { isConfectionary } = request.body;
    const [rewardData, error] = yield rewardsRepository.updateOne({
        where: {
            id: rewardId,
        },
        data: {
            isConfectionary,
        },
    });
    if (error) {
        logger.error('Failed get reward', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: rewardData,
    });
});
exports.toConfectionary = toConfectionary;


/***/ }),

/***/ "./apps/cake/src/app/service/slice/createSlice.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSliceService = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const files_1 = __webpack_require__("./apps/cake/src/app/service/files/index.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository("reward");
const logger = new logger_1.Logger("Crate Reward");
const userRepo = new prisma_repository_1.PrismaRepository("user");
const createSliceService = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    const { cost, rarity, category, name } = request.body;
    const image = (yield (0, files_1.uploadImage)(request)).Location;
    // const smallImage = (await uploadImage<CreateRewardsRequestBody>(request)).Location;
    const [, error] = yield rewardsRepository.create({
        data: {
            User: {
                connect: {
                    id: userId,
                },
            },
            name: name,
            smallImage: image,
            cost: cost,
            rarity: rarity,
            category: category,
            type: "SLICE",
            image,
        },
    });
    const [userData, errorUserData] = yield userRepo.findFirst({
        where: { id: userId },
        select: { totalRewardsEarned: true },
    });
    if (errorUserData) {
        logger.log("Failed get user data", errorUserData);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    const [, errorUpdateUser] = yield userRepo.updateOne({
        where: {
            id: userId,
        },
        data: {
            totalRewardsEarned: userData.totalRewardsEarned + 1,
        },
    });
    if (errorUpdateUser) {
        logger.log("Failed update user data", errorUpdateUser);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    if (error) {
        logger.error("Failed create cakebox", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.created).json({});
});
exports.createSliceService = createSliceService;


/***/ }),

/***/ "./apps/cake/src/app/service/slice/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/slice/createSlice.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/users/getAllUsers.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAllUserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const queryParamsMapper_1 = __webpack_require__("./apps/cake/src/app/utils/queryParamsMapper.ts");
const lib_api_interface_1 = __webpack_require__("./libs/lib-api-interface/src/index.ts");
const utils_1 = __webpack_require__("./apps/cake/src/app/utils/index.ts");
const userRepository = new prisma_repository_1.PrismaRepository('user');
const userLogger = new logger_1.Logger('get all user');
const getAllUserService = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const userId = request['extra'].userId;
    let queryParams = {};
    const { page, pageSize } = request.query;
    if (request === null || request === void 0 ? void 0 : request.query) {
        const filterParams = {
            firstName: '',
            lastName: '',
            email: '',
        };
        queryParams = (0, queryParamsMapper_1.queryParamsMapper)(request.query, filterParams);
    }
    if (!((_a = request.query) === null || _a === void 0 ? void 0 : _a.sort)) {
        // queryParams.orderBy = () => {
        //   switch (request.query?.sort) {
        //     case SortUserEum.Reward:
        //         return {
        //           reward: {
        //             _count: 'desc',
        //           }
        //         }
        //     default:
        //       break;
        //   }
        // }
    }
    if (!((_b = request.query) === null || _b === void 0 ? void 0 : _b.where)) {
        queryParams.where = Object.assign({ role: 'KOL' }, queryParams.where);
    }
    if ((_c = request.query) === null || _c === void 0 ? void 0 : _c.where) {
        queryParams.where = Object.assign({ role: (_d = request.query) === null || _d === void 0 ? void 0 : _d.where }, queryParams.where);
    }
    const [userData, error] = yield userRepository.findAll(Object.assign(Object.assign({}, queryParams), { orderBy: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (((_e = request.query) === null || _e === void 0 ? void 0 : _e.sort) === lib_api_interface_1.SortUserEum.Reward
            ? {
                rewards: {
                    _count: 'desc',
                },
            }
            : {})), (((_f = request.query) === null || _f === void 0 ? void 0 : _f.sort) === lib_api_interface_1.SortUserEum.Cakebox
            ? {
                rewards: {
                    _count: 'desc',
                },
            }
            : {})), (((_g = request.query) === null || _g === void 0 ? void 0 : _g.sort) === lib_api_interface_1.SortUserEum.FollowedByIDs ? { [lib_api_interface_1.SortUserEum.FollowedByIDs]: 'desc' } : {})), (((_h = request.query) === null || _h === void 0 ? void 0 : _h.sort) === lib_api_interface_1.SortUserEum.CreatedAt ? { [lib_api_interface_1.SortUserEum.CreatedAt]: 'asc' } : {})), (((_j = request.query) === null || _j === void 0 ? void 0 : _j.sort) === lib_api_interface_1.SortUserEum.Role ? { [lib_api_interface_1.SortUserEum.Role]: 'asc' } : {})), include: {
            platforms: {
                select: {
                    title: true,
                    isPopular: true,
                    link: true,
                },
            },
            rewards: {
                where: {
                    isOnCakeBox: false,
                },
                select: {
                    image: true,
                    type: true,
                    name: true,
                    rarity: true,
                    RewardByIDs: true,
                },
            },
        } }));
    if (error) {
        userLogger.error('Failed get list of users', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    const [count, errorCount] = yield userRepository.count({
        where: queryParams.where,
    });
    if (errorCount) {
        userLogger.error('Failed count users', errorCount);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ errorCount });
    }
    userLogger.debug(JSON.stringify(yield (0, utils_1.userMapper)(userData, userId)));
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: yield (0, utils_1.userMapper)(userData, userId),
        count: count,
        page: Number(page),
        pageSize: Number(pageSize),
    });
});
exports.getAllUserService = getAllUserService;


/***/ }),

/***/ "./apps/cake/src/app/service/users/getKOLById.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getKOLById = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const rewardsRepository = new prisma_repository_1.PrismaRepository('reward');
const userRepository = new prisma_repository_1.PrismaRepository('user');
const userLogger = new logger_1.Logger('get user by id');
const getKOLById = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const userId = request.params.userId;
    const page = (_a = request.query.page) !== null && _a !== void 0 ? _a : 1;
    const pageSize = (_b = request.query.pageSize) !== null && _b !== void 0 ? _b : 12;
    const [userData, error] = yield userRepository.findFirst({
        where: {
            id: userId,
        },
        select: {
            rewards: {
                take: Number(pageSize),
                skip: (Number(page) - 1) * Number(pageSize),
                select: {
                    id: true,
                    smallImage: true,
                    type: true,
                    cost: true,
                },
            },
        },
    });
    if (error) {
        userLogger.error('Failed get list of users', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    const where = { userId: userId };
    const [count, errorCount] = yield rewardsRepository.count({ where });
    if (errorCount) {
        userLogger.error('Failed count rewards', errorCount);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ errorCount });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: userData,
        count,
        page: Number(page),
        pageSize: Number(pageSize),
    });
});
exports.getKOLById = getKOLById;


/***/ }),

/***/ "./apps/cake/src/app/service/users/getMe.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMe = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const userRepository = new prisma_repository_1.PrismaRepository('user');
const userLogger = new logger_1.Logger('get user by id');
const getMe = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request['extra'].userId;
    const [userData, error] = yield userRepository.findFirst({
        where: {
            id: userId,
        },
    });
    if (error) {
        userLogger.error('Failed get user', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: userData,
    });
});
exports.getMe = getMe;


/***/ }),

/***/ "./apps/cake/src/app/service/users/getUserById.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUserById = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const userRepository = new prisma_repository_1.PrismaRepository('user');
const userLogger = new logger_1.Logger('get user by id');
const getUserById = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.userId;
    const [userData, error] = yield userRepository.findFirst({
        where: {
            id: userId,
        },
    });
    if (error) {
        userLogger.error('Failed get user', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: userData,
    });
});
exports.getUserById = getUserById;


/***/ }),

/***/ "./apps/cake/src/app/service/users/getUserByPlatform.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUserByPlatform = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const utils_1 = __webpack_require__("./apps/cake/src/app/utils/index.ts");
const platformRepository = new prisma_repository_1.PrismaRepository('platform');
const userLogger = new logger_1.Logger('get user by platform');
const getUserByPlatform = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request['extra'].userId;
    const { link } = request.query;
    console.log(link, userId);
    const [userData, error] = yield platformRepository.findFirst({
        where: {
            link: link,
        },
        select: {
            User: {
                select: {
                    id: true,
                    followedByIDs: true,
                }
            }
        },
    });
    if (error) {
        userLogger.error('Failed get list of users', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    if (!userData) {
        userLogger.error('User not found', new Error('User not found'));
        return res.status(typescript_openapi_router_1.StatusCode.notFound).json({ error: new Error('User not found') });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({
        data: (0, utils_1.userByPlatformMapper)(userData, userId),
    });
});
exports.getUserByPlatform = getUserByPlatform;


/***/ }),

/***/ "./apps/cake/src/app/service/users/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/users/getAllUsers.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/users/getKOLById.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/users/getUserById.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/users/updateUsers.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/users/getMe.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/users/updateUsers.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateUser = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const __1 = __webpack_require__("./apps/cake/src/app/service/index.ts");
const userRepository = new prisma_repository_1.PrismaRepository('user');
const userLogger = new logger_1.Logger('update user');
const updateUser = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { userId } = request.params;
    const len = request.body.username.lenght;
    if (len < 4 || len > 16) {
        userLogger.error('invalid username', len);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error: 'invalid username' });
    }
    if (request.file) {
        request.body.avatar = (yield (0, __1.uploadImage)(request)).Location;
    }
    const [, error] = yield userRepository.updateOne({
        where: {
            id: userId,
        },
        data: request.body,
    });
    if (error) {
        userLogger.error('Failed get list of users', error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.updateUser = updateUser;


/***/ }),

/***/ "./apps/cake/src/app/service/wallet/editWallet.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditWallet = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const walletRepository = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("edit wallet");
const EditWallet = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    const newWalletData = request.body;
    const { id } = request.body;
    delete newWalletData.id;
    const [, error] = yield walletRepository.updateOne({
        where: {
            id: userId,
        },
        data: {
            wallets: {
                update: {
                    where: {
                        id,
                    },
                    data: newWalletData
                },
            },
        },
    });
    if (error) {
        logger.error("Failed edit wallet", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.EditWallet = EditWallet;


/***/ }),

/***/ "./apps/cake/src/app/service/wallet/getWallet.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetWallet = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const walletRepository = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("get wallet");
const GetWallet = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    const [data, error] = yield walletRepository.findFirst({
        where: {
            id: userId,
        },
        select: {
            wallets: {
                select: {
                    address: true,
                    type: true,
                    name: true,
                    id: true,
                },
            },
        },
    });
    if (error) {
        logger.error("Failed get wallet", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.okay).json({ data });
});
exports.GetWallet = GetWallet;


/***/ }),

/***/ "./apps/cake/src/app/service/wallet/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/wallet/wallet.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/wallet/getWallet.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/wallet/editWallet.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/service/wallet/removeWallet.service.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/service/wallet/removeWallet.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveWallet = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const walletRepository = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("remove wallet");
const RemoveWallet = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    const { id } = request.params;
    const [, error] = yield walletRepository.updateOne({
        where: {
            id: userId,
        },
        data: {
            wallets: {
                delete: {
                    id: id,
                },
            },
        },
    });
    if (error) {
        logger.error("Failed remove wallet", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.RemoveWallet = RemoveWallet;


/***/ }),

/***/ "./apps/cake/src/app/service/wallet/wallet.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddWallet = void 0;
const tslib_1 = __webpack_require__("tslib");
const logger_1 = __webpack_require__("@xtool/logger");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
const walletRepository = new prisma_repository_1.PrismaRepository("user");
const logger = new logger_1.Logger("add wallet");
const AddWallet = (request, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userId = request["extra"].userId;
    const { address, type, name } = request.body;
    const [, error] = yield walletRepository.updateOne({
        where: {
            id: userId,
        },
        data: {
            wallets: {
                create: {
                    address,
                    type,
                    name,
                },
            },
        },
    });
    if (error) {
        logger.error("Failed add wallet", error);
        return res.status(typescript_openapi_router_1.StatusCode.badRequest).json({ error });
    }
    return res.status(typescript_openapi_router_1.StatusCode.noContent).json({});
});
exports.AddWallet = AddWallet;


/***/ }),

/***/ "./apps/cake/src/app/types/s3bucketCreds.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.secretAccessKey = exports.accessKeyId = exports.region = exports.bucketName = void 0;
const dotenv_1 = __webpack_require__("dotenv");
(0, dotenv_1.config)();
exports.bucketName = process.env.AWS_BUCKET_NAME;
exports.region = process.env.AWS_BUCKET_REGION;
exports.accessKeyId = process.env.AWS_ACCESS_KEY;
exports.secretAccessKey = process.env.AWS_SECRET_KEY;


/***/ }),

/***/ "./apps/cake/src/app/utils/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/utils/queryParamsMapper.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/utils/userMapper.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/cake/src/app/utils/rewardsMapper.ts"), exports);


/***/ }),

/***/ "./apps/cake/src/app/utils/queryParamsMapper.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryParamsMapper = void 0;
const queryParamsMapper = (queryParams, filterParams) => {
    var _a, _b, _c, _d;
    const query = queryParams;
    const dataQueryParams = [];
    const filter = {};
    const pagination = {
        page: (_a = query.page) !== null && _a !== void 0 ? _a : 1,
        pageSize: (_b = query.pageSize) !== null && _b !== void 0 ? _b : 20,
    };
    const sortParam = {
        sort: (_c = query.sort) !== null && _c !== void 0 ? _c : 'followers',
        sortDirection: (_d = query.sortDirection) !== null && _d !== void 0 ? _d : 'asc',
    };
    Object.keys(filterParams).forEach((param) => {
        if (queryParams['search'])
            dataQueryParams.push({ [param]: { contains: queryParams['search'], mode: 'insensitive' } });
    });
    const result = {
        where: {},
        orderBy: { [sortParam.sort]: sortParam.sortDirection },
        take: Number(pagination.pageSize),
        skip: (Number(pagination.page) - 1) * Number(pagination.pageSize),
    };
    if (query.select) {
        const select = query.select.split(';');
        select.forEach((filterParams) => (filter[filterParams] = true));
        result.select = filter;
    }
    if (query.start && query.end) {
        result.where = { createdAt: { gte: query.start, lte: query.end } };
    }
    if (query.search) {
        result.where.OR = dataQueryParams;
    }
    return result;
};
exports.queryParamsMapper = queryParamsMapper;


/***/ }),

/***/ "./apps/cake/src/app/utils/rewardsMapper.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rewardsMapper = exports.rewardMapper = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_api_interface_1 = __webpack_require__("./libs/lib-api-interface/src/index.ts");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository('reward');
const rewardMapper = (reward, rewards) => {
    return Object.assign(Object.assign({}, reward), { rewards: rewards });
};
exports.rewardMapper = rewardMapper;
const rewardsMapper = (rewards) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield Promise.all(rewards.map((value) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (value.type === lib_api_interface_1.RewardEnum.CAKEBOX) {
            const [rewards, error] = yield rewardsRepository.findAll({
                where: {
                    id: { in: value.RewardByIDs },
                },
            });
            return Object.assign(Object.assign({}, value), { rewards: rewards });
        }
        else {
            return yield Promise.resolve(value);
        }
    })));
});
exports.rewardsMapper = rewardsMapper;


/***/ }),

/***/ "./apps/cake/src/app/utils/userMapper.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userByPlatformMapper = exports.userMapper = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_api_interface_1 = __webpack_require__("./libs/lib-api-interface/src/index.ts");
const prisma_repository_1 = __webpack_require__("./apps/cake/src/app/repository/prisma-repository.ts");
const rewardsRepository = new prisma_repository_1.PrismaRepository('reward');
const userMapper = (usersData, userId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield Promise.all(usersData.map((user) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return {
            user: {
                avatar: user.avatar,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                id: user.id,
                isFollow: user.followedByIDs.includes(userId),
            },
            rewards: user.rewards.flatMap((reward) => {
                if (reward.type === lib_api_interface_1.RewardEnum.SLICE) {
                    const { image, name, type } = reward;
                    return { image, name, type };
                }
                return [];
            }),
            followers: user.followedByIDs.length,
            platforms: user.platforms.map((platform) => ({
                platform: platform.title,
                isPopular: platform.isPopular,
                link: platform.link,
            })),
            cakeboxes: yield Promise.all(user.rewards
                .filter((rewardFilter) => rewardFilter.type === lib_api_interface_1.RewardEnum.CAKEBOX)
                .flatMap((reward) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                const rewardPromises = yield reward.RewardByIDs.flatMap((id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                    return yield rewardsRepository.findFirst({
                        where: {
                            id: id,
                        },
                    });
                }));
                return Promise.all(rewardPromises).then((values) => {
                    return {
                        rarity: reward.rarity,
                        rewards: values.map((reward) => ({ image: reward[0].smallImage || reward[0].image })),
                    };
                });
            }))),
        };
    })));
});
exports.userMapper = userMapper;
const userByPlatformMapper = (usersData, userId) => {
    return {
        id: usersData.User.id,
        isFollow: usersData.User.followedByIDs.includes(userId),
        followers: usersData.User.followedByIDs.length,
    };
};
exports.userByPlatformMapper = userByPlatformMapper;


/***/ }),

/***/ "./libs/lib-api-interface/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/token/jwt.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/index.ts"), exports);


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/STAKING_CONTRACT.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STAKING_CONTRACT = void 0;
exports.STAKING_CONTRACT = "0x8947d34e4F98B87F3c8C681E49BfAf0Be5996016";


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/USDT_ABI.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USDT_ABI = void 0;
exports.USDT_ABI = [
    'constructor()',
    'event Approval(address indexed,address indexed,uint256)',
    'event Transfer(address indexed,address indexed,uint256)',
    'function allowance(address,address) view returns (uint256)',
    'function approve(address,uint256) returns (bool)',
    'function balanceOf(address) view returns (uint256)',
    'function burn(uint256)',
    'function burnFrom(address,uint256)',
    'function decimals() view returns (uint8)',
    'function decreaseAllowance(address,uint256) returns (bool)',
    'function increaseAllowance(address,uint256) returns (bool)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address,uint256) returns (bool)',
    'function transferFrom(address,address,uint256) returns (bool)',
];


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/USDT_CONTRACT.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USDT_CONTRACT = void 0;
exports.USDT_CONTRACT = '0x43053b996A4905A0ba461dCc7aA332A0b1cba050';


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/abi.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.abi = void 0;
exports.abi = [
    'constructor(address)',
    'event OwnershipTransferred(address indexed,address indexed)',
    'event Stake(address indexed,uint256,uint256)',
    'function halted() view returns (bool)',
    'function owner() view returns (address)',
    'function renounceOwnership()',
    'function stake(uint256)',
    'function transferOwnership(address)',
];


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/category.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryEnum = void 0;
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum["SPORT"] = "SPORT";
    CategoryEnum["ENTERTAINMENT"] = "ENTERTAINMENT";
    CategoryEnum["TECH"] = "TECH";
    CategoryEnum["TRENDS"] = "TRENDS";
    CategoryEnum["FOOD"] = "FOOD";
    CategoryEnum["ART"] = "ART";
    CategoryEnum["BEAUTY"] = "BEAUTY";
    CategoryEnum["HEALTH"] = "HEALTH";
})(CategoryEnum = exports.CategoryEnum || (exports.CategoryEnum = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/rarity.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/platforms.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/category.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/reward.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/sorts.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/window.type.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/metamaskEthereumProvider.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/abi.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/STAKING_CONTRACT.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/USDT_CONTRACT.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/USDT_ABI.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/wallet.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/constants/wallet-connection.dictionary.ts"), exports);


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/metamaskEthereumProvider.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/platforms.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatformEnum = void 0;
var PlatformEnum;
(function (PlatformEnum) {
    PlatformEnum["Youtube"] = "Youtube";
    PlatformEnum["Twitter"] = "Twitter";
    PlatformEnum["Facebook"] = "Facebook";
    PlatformEnum["Twitch"] = "Twitch";
    PlatformEnum["Tiktok"] = "Tiktok";
    PlatformEnum["Instagram"] = "Instagram";
    PlatformEnum["Pinterest"] = "Pinterest";
    PlatformEnum["Snapchat"] = "Snapchat";
    PlatformEnum["Onlyfans"] = "Onlyfans";
    PlatformEnum["Linkedin"] = "Linkedin";
    PlatformEnum["Vimeo"] = "Vimeo";
    PlatformEnum["Reddit"] = "Reddit";
})(PlatformEnum = exports.PlatformEnum || (exports.PlatformEnum = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/rarity.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RarityEnum = void 0;
var RarityEnum;
(function (RarityEnum) {
    RarityEnum["EXOTIC"] = "EXOTIC";
    RarityEnum["LEGENDARY"] = "LEGENDARY";
    RarityEnum["EPIC"] = "EPIC";
    RarityEnum["SUPERIOR"] = "SUPERIOR";
    RarityEnum["BASIC"] = "BASIC";
    RarityEnum["STARTER"] = "STARTER";
    RarityEnum["SLICE"] = "SLICE";
    RarityEnum["COMMON"] = "COMMON";
})(RarityEnum = exports.RarityEnum || (exports.RarityEnum = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/reward.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RewardEnum = void 0;
var RewardEnum;
(function (RewardEnum) {
    RewardEnum["SLICE"] = "SLICE";
    RewardEnum["CAKEBOX"] = "CAKEBOX";
    RewardEnum["SUGAR"] = "SUGAR";
})(RewardEnum = exports.RewardEnum || (exports.RewardEnum = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/sorts.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortRewardEum = exports.SortUserEum = void 0;
var SortUserEum;
(function (SortUserEum) {
    SortUserEum["Reward"] = "rewards";
    SortUserEum["Cakebox"] = "cakebox";
    SortUserEum["FollowedByIDs"] = "followedByIDs";
    SortUserEum["Rank"] = "rank";
    SortUserEum["CreatedAt"] = "createdAt";
    SortUserEum["Role"] = "role";
})(SortUserEum = exports.SortUserEum || (exports.SortUserEum = {}));
var SortRewardEum;
(function (SortRewardEum) {
    SortRewardEum["Cost"] = "cost";
    SortRewardEum["Rarity"] = "rarity";
    SortRewardEum["Category"] = "category";
    SortRewardEum["CreatedAt"] = "createdAt";
})(SortRewardEum = exports.SortRewardEum || (exports.SortRewardEum = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/wallet-connection.dictionary.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ETHEREUM_CHAINS = exports.GOERLI = exports.BINANCE = exports.MOONRIVER = exports.MUMBAI = exports.POLYGON = exports.MAINNET = exports.RINKEBY = exports.defaultNetworkID = exports.defaultNetwork = exports.NETWORK_PROVIDERS = exports.BINANCE_NETWORK_IDS = exports.ETHEREUM_NETWORK_IDS = exports.NetworkName = exports.Network = exports.METAMASK_ERRORS = exports.GET_BALANCES = exports.STAKING_RETURNED = exports.WEB3 = exports.ETHER = exports.ETHEREUM = exports.METAMASK_LINK = exports.TEST_PROVIDER = exports.WALLET_CONNECT_PROVIDER_INFURA_ID = exports.DEFAULT_GAS_LIMIT = void 0;
exports.DEFAULT_GAS_LIMIT = 500000;
exports.WALLET_CONNECT_PROVIDER_INFURA_ID = "";
exports.TEST_PROVIDER = "http://localhost:4200/";
exports.METAMASK_LINK = "https://metamask.io/";
exports.ETHEREUM = "ethereum";
exports.ETHER = "ether";
exports.WEB3 = "web3";
exports.STAKING_RETURNED = "STAKING_RETURNED";
exports.GET_BALANCES = "GET_BALANCES";
exports.METAMASK_ERRORS = {
    notInstalled: "ERROR.METAMASK__NOT__INSTALLED",
    needUserPermission: "ERROR.NEED__USER__PERMISSION",
    failedToRetrieveGasPrice: "ERROR.FAILED__RETRIEVING__GAS__PRICE",
};
var Network;
(function (Network) {
    Network[Network["Moonbeam"] = 507] = "Moonbeam";
    Network[Network["MainNet"] = 1] = "MainNet";
    Network[Network["Ropsten"] = 3] = "Ropsten";
    Network[Network["Rinkeby"] = 4] = "Rinkeby";
    Network[Network["Goerli"] = 5] = "Goerli";
    Network[Network["Kovan"] = 42] = "Kovan";
    Network[Network["Polygon"] = 89] = "Polygon";
    Network[Network["Mumbai"] = 13881] = "Mumbai";
    Network[Network["Moonriver"] = 505] = "Moonriver";
    Network[Network["Binance"] = 38] = "Binance";
})(Network = exports.Network || (exports.Network = {}));
var NetworkName;
(function (NetworkName) {
    NetworkName["Moonbeam"] = "moonbeam";
    NetworkName["MainNet"] = "mainnet";
    NetworkName["Ropsten"] = "ropsten";
    NetworkName["Rinkeby"] = "rinkeby";
    NetworkName["Goerli"] = "goerli";
    NetworkName["Kovan"] = "kovan";
    NetworkName["Polygon"] = "polygon";
    NetworkName["Mumbai"] = "mumbai";
    NetworkName["Moonriver"] = "moonriver";
    NetworkName["Binance"] = "binance";
})(NetworkName = exports.NetworkName || (exports.NetworkName = {}));
exports.ETHEREUM_NETWORK_IDS = {
    [Network.MainNet]: "Ethereum Mainnet (1)",
    [Network.Ropsten]: "Ethereum Ropsten (3)",
    [Network.Rinkeby]: "Ethereum Rinkeby (4)",
    [Network.Goerli]: "Ethereum Goerli (5)",
    [Network.Kovan]: "Ethereum Kovan (42)",
    [Network.Moonbeam]: "Ethereum Moonbeam (1287)",
    [Network.Polygon]: "Polygon Mainnet (137)",
    [Network.Mumbai]: "Mumbai TestNet (13881)",
    [Network.Moonriver]: "Moonriver TestNet (1285)",
    [Network.Binance]: "Binance Smart Chain (56)",
};
exports.BINANCE_NETWORK_IDS = {
    56: "Binance Smart Chain (56)",
    97: "Binance Smart Chain TESTING Network (97)",
};
exports.NETWORK_PROVIDERS = [
    {
        name: "MetaMask",
        imgPath: "/assets/img/wallet-connect/wallet/metamask.svg",
    },
];
exports.defaultNetwork = Network.Moonbeam;
exports.defaultNetworkID = `0x${exports.defaultNetwork}`;
exports.RINKEBY = `0x${Network.Rinkeby}`;
exports.MAINNET = `0x${Network.MainNet}`;
exports.POLYGON = `0x${Network.Polygon}`;
exports.MUMBAI = `0x${Network.Mumbai}`;
exports.MOONRIVER = `0x${Network.Moonriver}`;
exports.BINANCE = `0x${Network.Binance}`;
exports.GOERLI = `0x${Network.Goerli}`;
exports.ETHEREUM_CHAINS = {
    moonbeam: {
        chainId: exports.defaultNetworkID,
        chanName: "Moonbeam",
        nativeCurrency: { name: "DEV", symbol: "DEV", decimals: 18 },
        rpcUrls: ["https://rpc.testnet.moonbeam.network/"],
        blockExplorerUrls: ["https://moonbase-blockscout.testnet.moonbeam.network/"],
    },
    rinkeby: {
        chainId: exports.RINKEBY,
        chanName: "Rinkeby",
        rpcUrls: ["https://rinkeby.infura.io/v3/f0961e3efc8d4548a9c5fa9a1a165c20"],
    },
    mainnet: {
        chainId: exports.MAINNET,
        chanName: "Mainnet",
        rpcUrls: ["https://mainnet.infura.io/v3/f0961e3efc8d4548a9c5fa9a1a165c20"],
    },
    polygon: {
        chainId: exports.POLYGON,
        chanName: "Polygon",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
        blockExplorerUrls: ["https://explorer.matic.network/"],
    },
    mumbai: {
        chainId: exports.MUMBAI,
        chanName: "Mumbai",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    binance: {
        chainId: exports.BINANCE,
        chanName: "Binance",
        nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com/"],
    },
    moonriver: {
        chainId: exports.MOONRIVER,
        chanName: "Moonriver",
        rpcUrls: ["https://rpc.moonriver.moonbeam.network"],
    },
    goerli: {
        chainId: exports.GOERLI,
        chanName: "Goerli",
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    },
    ropsten: {
        chainId: exports.GOERLI,
        chanName: "Goerli",
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    },
    kovan: {
        chainId: exports.GOERLI,
        chanName: "Goerli",
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    },
};


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/wallet.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletEnum = void 0;
var WalletEnum;
(function (WalletEnum) {
    WalletEnum["MetaMask"] = "METAMASK";
})(WalletEnum = exports.WalletEnum || (exports.WalletEnum = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/constants/window.type.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/api-error-model.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiErrorModel = void 0;
class ApiErrorModel {
}
exports.ApiErrorModel = ApiErrorModel;


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/authenticationModel.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/role.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/authenticationModel.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/pagination-options.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/sort-direction.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/sort-params.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/transactionHystoryModel.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/rewardModel.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/api-error-model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/userModel.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/model/wallet.modal.ts"), exports);


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/pagination-options.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/rewardModel.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/role.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["kol"] = "KOL";
})(Role = exports.Role || (exports.Role = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/sort-direction.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sortDirection = void 0;
var sortDirection;
(function (sortDirection) {
    sortDirection["asc"] = "asc";
    sortDirection["desc"] = "desc";
})(sortDirection = exports.sortDirection || (exports.sortDirection = {}));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/sort-params.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/transactionHystoryModel.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/userModel.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/model/wallet.modal.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/addPlatformRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/authorized-request.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorizedRequest = void 0;
const typescript_openapi_router_1 = __webpack_require__("typescript-openapi-router");
class AuthorizedRequest extends typescript_openapi_router_1.Request {
    constructor(opts) {
        super(opts);
        this.extra = opts.extra;
    }
}
exports.AuthorizedRequest = AuthorizedRequest;


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/createCakeBoxRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/createRewardRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/getKOLByIdRequest.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/registerRequestBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/loginRequestBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/authorized-request.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/createRewardRequestBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/addPlatformRequestBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/pathParams.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/paginationQuery.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/getKOLByIdRequest.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/removePlatformRequestBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/updateUserRequestBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/request/createCakeBoxRequestBody.ts"), exports);


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/loginRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/paginationQuery.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/pathParams.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/registerRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/removePlatformRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/request/updateUserRequestBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/getAllRewardResponseBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/getMeResponseBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/getWalletResponseBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/registerResponse.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/loginResponseBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/kol-list.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/rewards-list.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/response-envelope.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/user-profile.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/getAllRewardResponseBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/getMeResponseBody.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/userByPlatformResponse.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/lib-api-interface/src/lib/response/getWalletResponseBody.ts"), exports);


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/kol-list.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/loginResponseBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/registerResponse.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/response-envelope.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseEnvelope = void 0;
class ResponseEnvelope {
}
exports.ResponseEnvelope = ResponseEnvelope;


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/rewards-list.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/user-profile.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/response/userByPlatformResponse.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/lib-api-interface/src/lib/token/jwt.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@prisma/client/runtime":
/***/ ((module) => {

module.exports = require("@prisma/client/runtime");

/***/ }),

/***/ "@xtool/logger":
/***/ ((module) => {

module.exports = require("@xtool/logger");

/***/ }),

/***/ "aws-sdk/clients/s3":
/***/ ((module) => {

module.exports = require("aws-sdk/clients/s3");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "ethers":
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "ethers/lib/utils":
/***/ ((module) => {

module.exports = require("ethers/lib/utils");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typescript-openapi-router":
/***/ ((module) => {

module.exports = require("typescript-openapi-router");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "node:fs/promises":
/***/ ((module) => {

module.exports = require("node:fs/promises");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const express_1 = tslib_1.__importDefault(__webpack_require__("express"));
const dotenv = tslib_1.__importStar(__webpack_require__("dotenv"));
const router_1 = tslib_1.__importDefault(__webpack_require__("./apps/cake/src/app/router/router.ts"));
const cors_1 = tslib_1.__importDefault(__webpack_require__("cors"));
const morgan_1 = tslib_1.__importDefault(__webpack_require__("morgan"));
const body_parser_1 = tslib_1.__importDefault(__webpack_require__("body-parser"));
const contract_service_1 = __webpack_require__("./apps/cake/src/app/service/contract/contract.service.ts");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.port || 3333;
app.use(body_parser_1.default.json()); //* to support JSON-encoded bodies
app.use(body_parser_1.default.urlencoded({
    //* to support URL-encoded bodies
    extended: true,
}));
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.options('*', (0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('static'));
app.use('/api', router_1.default);
app.get('/', (req, res) => {
    res.send('ok');
});
(0, contract_service_1.TransferListener)();
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port !== null && port !== void 0 ? port : 3000}`);
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map