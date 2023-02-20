import cartService from "../service/cartService.js";
let getAllCart = async (req, res) => {
  try {
    const data = await cartService.getAllCart();
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("There are no cart!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let AddUpdateCart = async (req, res) => {
  try {
    const cartData = req.body;
    const result = await Cart.findOne({
      userName: cartData.userName,
      bookId: cartData.bookId,
    });
    if (result) {
      result.quantity = Number(result.quantity) + Number(cartData.quantity);
      await result.save();
      return res.status(200).json({
        errCode: 0,
        errMessage: "Add to cart success!",
        data: result,
      });
    } else {
      const rs = await Cart.create({
        userName: cartData.userName,
        bookId: cartData.bookId,
        quantity: cartData.quantity,
      });
      return res.status(200).json({
        errCode: 0,
        errMessage: "Add to cart success!",
        data: rs,
      });
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};

let deleteAllCart = async (req, res) => {
  try {
    const data = await bookService.deleteAllCart();
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("delete all cart failed!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
const deleteCart = async (req, res) => {
  try {
    const cartData = req.body;
    const result = await Cart.findOneAndDelete({
      email: cartData.email,
      bookId: cartData.bookId,
    });
    return res.status(200).json({
      errCode: 0,
      errMessage: "Delete this cart success!",
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: e.message,
    });
  }
};
const cartController = {
  getAllCart,
  deleteAllCart,
  AddUpdateCart,
  deleteCart,
};
export default cartController;
