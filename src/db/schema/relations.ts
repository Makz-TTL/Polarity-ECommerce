import { users } from "./users"
import { products } from "./products"
import { reviews } from "./reviews"
import { productUsefulness } from "./productUsefulness"
import {orders} from "./orders"
import { relations } from "drizzle-orm/relations";



// Relazioni per gli UTENTI
export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
  reviews: many(reviews),
  usefulnessVotes: many(productUsefulness),
  soldProducts: many(orders)
}));

// Relazioni per i PRODOTTI
export const productsRelations = relations(products, ({ many }) => ({
  reviews: many(reviews),
}));

// Relazioni per le RECENSIONI
export const reviewsRelations = relations(reviews, ({ one, many }) => ({
  author: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
  }),
  usefulness: many(productUsefulness),
}));


// Relazioni per gli ORDINI
export const ordersRelations = relations(orders, ({ one }) => ({
  buyer: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [orders.productId],
    references: [products.id],
  }),
}));