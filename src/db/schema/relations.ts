import { users } from "./users"
import { products } from "./products"
import { reviews } from "./reviews"
import { productUsefulness } from "./productUsefulness"
import {orders} from "./orders"
import { defineRelations } from "drizzle-orm/relations";



export default defineRelations({ users, products, reviews, productUsefulness, orders }, (r) => ({





}))