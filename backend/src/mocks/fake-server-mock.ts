import { ServerPropsInterface } from "../types/server-props-interface"

export class FakeServerMock implements ServerPropsInterface {
  register(plugin: any, opts?: any) { return "registered" }
  listen(opts: { port: number }, callback?: (err: Error | null, address: string) => void) {
    if (callback) callback(null, `localhost:${opts.port}`)
  }
}
