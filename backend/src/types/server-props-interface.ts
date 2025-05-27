export interface ServerPropsInterface {
    register: (plugin: any, opts?: any) => any
    listen: (opts: { port: number },
        callback?: (err: Error | null, address?: string) => void) => void
}