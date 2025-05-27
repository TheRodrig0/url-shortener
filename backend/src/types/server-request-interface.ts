export interface ServerRequestInterface {
  params?: Record<string, any>
  query?: Record<string, any>
  body?: any
  headers?: Record<string, any>
}