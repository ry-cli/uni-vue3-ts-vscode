class Storage {
    static getItem(key: string) {
        return uni.getStorageSync(key)
    }
    static setItem(key: string, value: string) {
        uni.setStorageSync(key, value)
    }
    static removeItem(key: string) {
        uni.removeStorageSync(key)
    }
}

export default Storage
