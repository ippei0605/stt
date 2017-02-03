/**
 * STT: ルーティング
 * @module routes/index
 * @author Ippei SUZUKI
 */

// モジュールを読込む。
var context = require('../utils/context');


/** Q&A 画面を表示する。 */
exports.index = function (req, res) {
    res.render('index');
};

/**
 * Watson トークンを返す。
 * @see {https://github.com/watson-developer-cloud/node-sdk#authorization}
 */
exports.sttToken = function (req, res) {
    context.watsonAuthorization.getToken(function (err, token) {
        if (err) {
            console.log('Error retrieving token: ', err);
            res.status(500).send('Error retrieving token');
        } else {
            res.send(token);
        }
    });
};