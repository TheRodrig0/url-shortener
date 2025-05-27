import type { ServerPropsInterface } from "../types/server-props-interface"

export class FakeServerMock implements ServerPropsInterface {
  register(plugin: any, opts?: any) {
    return "registered"
  }
  listen(opts: { port: number }, callback?: (err: Error | null, address: string) => void) {
    if (callback) callback(null, `localhost:${opts.port}`)
  }
  get(path?: string, handler?: any) {
    // Mock implementation
    return "get called"
  }
  
  post(path?: string, handler?: any) {
    // Mock implementation
    return "post called"
  }
}
