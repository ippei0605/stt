/**
 * STT: コンテキスト
 *
 * @module utils/context
 * @author Ippei SUZUKI
 */

// 環境変数を取得する。
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

// VCAP_SERVICES
var vcapServices = require('vcap_services');

/** 環境変数 */
exports.appEnv = appEnv;

/** Path */
exports.path = require('path');

// Watson Developer Cloud
var watson = require('watson-developer-cloud');

// Watson Speech to Text Credentials
var sttCreds = vcapServices.getCredentials('speech_to_text');

/**
 * Watson Authorization
 * @see {https://github.com/watson-developer-cloud/node-sdk#authorization}
 */
exports.watsonAuthorization = new watson.AuthorizationV1(sttCreds);