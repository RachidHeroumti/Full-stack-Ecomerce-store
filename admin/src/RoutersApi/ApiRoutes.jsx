const host = "https://onlay-shop-api.onrender.com/api";

//auth
export const loginRoute = `${host}/user/login`;//POST
export const RegisterRoute = `${host}/user`;//POST

//Product
export const getProductRoute = `${host}/products`;//GET
export const getOnePrRoute = `${host}/product`;//GET
export const getPrsWere = `${host}/products/where`;//GET

export const CreateProductRoute = `${host}/product/create`;//POST
export const UpdatePrRoute = `${host}/product`;//


//Category
export const CreateCategoryRoute = `${host}/category/`;//POST
export const getCategoriesRoute = `${host}/categories/`;//GET
export const getOneCategoryRoute = `${host}/category/`; //with : id
//cart
export const AddcardRoute = `${host}/cart/add-create`;
export const getcardRoute = `${host}/cart/get`;
export const deletFromCardRoute = `${host}/cart/delete`;//POST with : id

export const addOrderRoute = `${host}/order/add-order/`;//POST
export const getOrdersRoute = `${host}/order/get-orders/`;//GET

export const addAddressRoute = `${host}/address/add/`;//POST
export const getAddressRoute = `${host}/address/get/`;//GET

export const PaymentAddRoute = `${host}/paymentcard/add-paymentcard/`;//POST
export const PaymentGetRoute = `${host}/paymentcard/get-paymentcard/`;//GET


