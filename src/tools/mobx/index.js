import { Authen } from './authen'

export class RootMobx {
  constructor () {
    this.Authen = new Authen(this)
  }
}
