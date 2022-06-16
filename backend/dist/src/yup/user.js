"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yupUserChangePassword = exports.yupUserCreate = void 0;
const yup = require("yup");
exports.yupUserCreate = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    imageUrl: yup.string().url(),
});
exports.yupUserChangePassword = yup.object().shape({
    password: yup.string().required(),
});
//# sourceMappingURL=user.js.map