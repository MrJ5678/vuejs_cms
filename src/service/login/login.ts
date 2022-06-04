import cmsRequest from '@/service'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export const accountLoginRequest = (account: IAccount) => {
  return cmsRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export const requestUserInfoById = (id: number) => {
  return cmsRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + `${id}`
  })
}

export const requestUserMenusByRoleId = (id: number) => {
  return cmsRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
