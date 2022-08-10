import Api from './index'

export default {
    get(url) {
        return Api.get(url)
    },
    delete(url) {
        return Api.delete(url)
    },
}