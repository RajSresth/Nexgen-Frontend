// Backend API endpoint paths, used by services/ files with axios.
// Not to be confused with routes/endpoints.js, which holds frontend
// route paths (PATHS) for React Router. These are two different things.

const ENDPOINTS = {
  AUTH: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    VERIFY_EMAIL: (token) => `auth/verify-email/${token}`,
    RESEND_VERIFICATION_EMAIL: "auth/resend-verification-email",
    REFRESH_TOKEN: "auth/refresh-token",
    LOGOUT: "auth/logout",
  },

  PRODUCTS: {
    LIST: "/products",
    DETAIL: (id) => `/products/${id}`,
  },
  CART: {
    GET: "/cart",
    ADD_ITEM: "/cart/add",
    REMOVE_ITEM: (itemId) => `/cart/remove/${itemId}`,
  },
  CHECKOUT: {
    CREATE_ORDER: "/checkout",
  },
  ORDERS: {
    LIST: "/orders",
    DETAIL: (id) => `/orders/${id}`,
  },
  PROFILE: {
    GET: "/profile",
    UPDATE: "/profile",
  },
};
export default ENDPOINTS;
