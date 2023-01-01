interface Window {
  existLoading: boolean
  lazy: NodeJS.Timer
  unique: number
  tokenRefreshing: boolean
  requests: Function[]
  eventSource: EventSource
}
interface wins {
  name: string
  age: number
}
