import Cart from "../model/cart.js";

let getAllCart = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cart.find(
        { email: email },
        { createdAt: 0, updatedAt: 0, email: 0, _id: 0 },
      ).populate("bookId", { createdAt: 0, updatedAt: 0 });
      resolve({
        EC: 0,
        EM: "Get all cart success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let addCart = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("service", data);
      const result = await Cart.create({
        bookId: data.bookId,
        quantity: data.quantity,
      });
      resolve({
        EC: 0,
        EM: "create new cart success!",
        data: result,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let updateCartById = (inputId, inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cart.findByIdAndUpdate(
        { bookId: inputId },
        {
          quantity: inputData.quantity,
        },
      );
      resolve({
        EC: 0,
        EM: "update the cart success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let deleteAllCart = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cart.deleteMany({});
      resolve({
        EC: 0,
        EM: "delete the cart success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const cartService = {
  getAllCart,
  addCart,
  deleteAllCart,
  updateCartById,
};
export default cartService;
