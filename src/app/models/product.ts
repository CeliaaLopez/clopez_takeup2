import type { Reviews } from './reviews'
import type { SimilarProducts } from './similar-products'

export interface Product {
  product: string
  price: number
  currency: string
  rating: number
  description: string
  favorite: boolean
  similarProducts?: SimilarProducts[]
  reviews: Reviews[]
}
