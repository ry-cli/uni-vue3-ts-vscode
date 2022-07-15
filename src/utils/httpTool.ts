import axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'

export interface IAjaxConfigBase {
    url: string
    params?: any
    data?: any
    responseType?: ResponseType
}

export interface IAjaxConfig extends IAjaxConfigBase {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export interface IRequestConfig {
    url: string
    method: string
    data?: string | AnyObject | ArrayBuffer
    header?: any
    timeout?: number
    dataType?: string
    responseType?: string
}

const apiVersion = 'v1'
const baseURL = 'http://api.demo.com'

const instance = axios.create({
    baseURL,
    timeout: 60000,
})
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const ajax = async <T>(config: IAjaxConfig): Promise<T> => {
    const axiosConfig: AxiosRequestConfig = {
        url: `/${apiVersion}${config.url}`,
        method: config.method || 'GET',
        params: config.params,
        data: config.data,
        responseType: config.responseType,
    }

    try {
        const res = await instance.request<T>(axiosConfig)
        return res.data
    } catch (err) {
        console.error('请求失败：', err)
        return new Promise(() => {})
    }
}

const request = {
    get: async <T>(config: IAjaxConfigBase) => {
        const ajaxConfig: IAjaxConfig = {
            ...config,
            method: 'GET',
        }

        return await ajax<T>(ajaxConfig)
    },

    delete: async <T>(config: IAjaxConfigBase) => {
        const ajaxConfig: IAjaxConfig = {
            ...config,
            method: 'DELETE',
        }

        return await ajax<T>(ajaxConfig)
    },
    post: async <T>(config: IAjaxConfigBase) => {
        const ajaxConfig: IAjaxConfig = {
            ...config,
            method: 'POST',
        }

        return await ajax<T>(ajaxConfig)
    },
    put: async <T>(config: IAjaxConfigBase) => {
        const ajaxConfig: IAjaxConfig = {
            ...config,
            method: 'PUT',
        }

        return await ajax<T>(ajaxConfig)
    },
}

// 请求拦截器
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    (error) => {
        console.error('请求失败：', error)
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        switch (response.data.code) {
            case 200:
                return response
            case 401:
                console.log('请重新登录')
                break
            default:
                return response
        }
    },
    (error: any) => {
        // 处理响应错误
        console.log('请求响应出错：', error)
        return Promise.reject(error)
    }
)

export default request
