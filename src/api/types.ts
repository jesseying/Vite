/* 分类列表接口 */
export interface categories {
  code: number
  data: {
    id: string
    name: string
    parent: string
  }
  message: string
}
