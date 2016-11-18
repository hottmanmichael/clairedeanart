'use strict';

import request from 'superagent';
require('superagent-auth-bearer')(request);
import Cache from 'lscache';

class Ajax {
    constructor(path) {
        this._api = global.API;
        this._path = path || '/';
        this._access_token = Cache.get('access_token') || null;
    }

    set path(p) {
        if (p) {
            this._path = p;
        }
    }

    get path() {
        return this._path;
    }

    send = (method, data, params) => {
        return new Promise(this['_'+method].bind(this, data, params));
    }

    handleResponse(res) {
        return res.body;
    }

    _get(data, params, resolve, reject) {
        request.get(this.getFullPath())
        .query(params)
        .end((err, res) => {
            if (err) {
                reject(res.body);
                return;
            }
            resolve(this.handleResponse(res));
        });
    }

    _post(data, params, resolve, reject) {
        request.post(this.getFullPath())
        .query(params)
        .send(data)
        .end((err, res) => {
            if (err) {
                reject(res.body);
                return;
            }
            resolve(this.handleResponse(res));
        });
    }

    _postImages(data, images, resolve, reject) {
        if (images.constructor !== Array) {
            images = [];
        }
        var req = request.post(this.getFullPath());
        images.forEach((file) => {
            req.attach('images', file);
        });
        req.send(data)
        .end((err, res) => {
            if (err) {
                reject(res.body);
                return;
            }
            resolve(this.handleResponse(res));
        });
    }

    _put(data) {
        request.put(this.getFullPath())
        .query(params)
        .send(data)
        .end((err, res) => {
            if (err) {
                reject(res.body);
                return;
            }
            resolve(this.handleResponse(res));
        });
    }

    getFullPath() {
        return this._api + this._path;
    }

}



function handleAjax(method) {
    console.log("this??", this.getFullPath(), method);
    return new Promise((resolve, reject) => {
        request[method](this.path)((err, res) => {
            console.log("err, res", err, res);
            return err ? reject(err) : resolve(res.body);
        });
    });
}




//
// class AjaxWithCredentials extends Ajax {
//     constructor(path) {
//         super(path);
//         this._path = path;
//     }
//
//     //@override
//     get() {
//
//     }
//
// }
//
//
//
// export AjaxWithCredentials;
export default Ajax;
