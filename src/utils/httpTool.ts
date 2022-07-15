import Storage from './storageTool'
export interface IBaseRequestConfig {
    url: string
    data?: string | AnyObject | ArrayBuffer
    header?: any
    timeout?: number
    dataType?: string
    responseType?: string
}

export interface IRequestConfig extends IBaseRequestConfig {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export interface IResponseType<T = any> {
    code: number
    msg: string
    data: T
}

// const BASE_URL = envConfig.apiHost + envConfig.apiVersion
const BASE_URL = 'localhost:3000/v1'

const ajax = async <T>(config: IRequestConfig): Promise<T> => {
    const requestConfig: UniApp.RequestOptions = {
        ...config,
        url: BASE_URL + config.url,
        header: {
            Authorization: Storage.getItem('token'),
        },
    }

    return new Promise((resolve, reject) => {
        uni.request({
            ...requestConfig,
            success: (response: UniApp.RequestSuccessCallbackResult) => {
                console.log(config.method + ' ' + config.url + ' 请求成功：', response.data)
                resolve(response.data as T)
            },
            fail: (err) => {
                console.log(config.method + ' ' + config.url + '请求失败：', err)
                reject(err)
            },
        })
    })
}

const request = {
    get: async <T>(config: IBaseRequestConfig) => {
        const ajaxConfig: IRequestConfig = {
            ...config,
            method: 'GET',
        }

        return await ajax<T>(ajaxConfig)
    },

    delete: async <T>(config: IBaseRequestConfig) => {
        const ajaxConfig: IRequestConfig = {
            ...config,
            method: 'DELETE',
        }

        return await ajax<T>(ajaxConfig)
    },
    post: async <T>(config: IBaseRequestConfig) => {
        const ajaxConfig: IRequestConfig = {
            ...config,
            method: 'POST',
        }

        return await ajax<T>(ajaxConfig)
    },
    put: async <T>(config: IBaseRequestConfig) => {
        const ajaxConfig: IRequestConfig = {
            ...config,
            method: 'PUT',
        }

        return await ajax<T>(ajaxConfig)
    },
}

export default request
