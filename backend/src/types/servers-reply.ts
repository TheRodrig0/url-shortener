export interface ServerReplyInterface {
  send: (payload: any) => void
  status?: (code: number) => ServerReplyInterface
  code?: (code: number) => ServerReplyInterface
}