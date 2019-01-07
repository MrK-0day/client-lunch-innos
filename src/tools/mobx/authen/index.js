import { observable } from 'mobx'

export class Authen {
  constructor (RootMobx) {
    this.RootMobx = RootMobx
  }

  @observable isLogin = false
}
