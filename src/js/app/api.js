import $ from 'jquery'

var apiHost = '//api.chamajiuxi.com'

if (__DEBUG) {
    apiHost = 'http://localhost:7001'
}

export function getArticles() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiHost}/posts`,
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                resolve(res)
            },
            error: function () {
                reject(new Error('网络信号不好，请稍后再试'))
            }
        })
    })
}

export function getTags() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiHost}/tags`,
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                resolve(res)
            },
            error: function () {
                reject(new Error('网络信号不好，请稍后再试'))
            }
        })
    })
}

export function getCategories() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiHost}/categories`,
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                resolve(res)
            },
            error: function () {
                reject(new Error('网络信号不好，请稍后再试'))
            }
        })
    })
}