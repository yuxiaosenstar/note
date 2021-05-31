import axios, { AxiosInstance } from "axios";
const baseUrl = "http://localhost:5000";

export default class ApiClient {
  public static server(): AxiosInstance {
    // 可以在这里拦截
    return ApiClient.create(baseUrl);
  }

  public static create(baseUrl: string): AxiosInstance {
    const instance = axios.create({
      baseURL: baseUrl,
    });

    instance.interceptors.request.use(
      (request) => {
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        if (response.data instanceof ArrayBuffer) {
          return response;
        }
        if (response.data.success) {
          return response;
        } else {
          const error = new Error();
          if (response.data.echoMessage) {
            error.message = response.data.echoMessage;
          } else {
            error.message = response.status + "服务器内部异常";
          }
          throw error;
        }
      },
      (error) => {
        console.log(error);

        if (!error.response) {
          error.message = "请检查网络设置";
          return Promise.reject(error);
        }
        switch (error.response.status) {
          case 101:
            break;
          case 401:
            error.message = "登录已过期,请重新登录!";
            break;
          case 403:
            error.message = "禁止访问!";
            break;
          case 503:
            error.message = "服务器升级中!";
            break;
          case 500:
            error.message = error.response.data.echoMessage || "服务内部异常!";
            break;
          default:
            error.message = "未知错误";
        }
        return Promise.reject(error);
      }
    );
    return instance;
  }
}
