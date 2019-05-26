import $ from 'jquery'

var apiHost = '//api.chamajiuxi.com'

if (__DEBUG) {
    apiHost = 'http://localhost:7001'
}

export function getList({ page = 1, sort = 'date' }) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiHost}/wallpapers?page=${page}&sort=${sort}`,
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

export function getListRandom() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiHost}/wallpapersRandom`,
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