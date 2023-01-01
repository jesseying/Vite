// import request, { http } from '@/utils/request'
import { http } from '@/utils/request'
/**
 * 分类列表
 */
function getCategories(config?: object) {
  // 如果有类型就引入接口
  // import type { categories } from '@/api/types'
  // return http.get<categories>('rest/categories')
  return http.get('rest/categories', config)
}
export { getCategories }
