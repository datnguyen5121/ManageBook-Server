import Book from "../model/book.js";
import escapeStringRegexp from "escape-string-regexp";
let getAllBook = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Book.find({});
      resolve({
        EC: 0,
        EM: "Get all book success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getBookPaginate = (dataInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      // let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
      // let page = 1;
      const totalBook = await Book.countDocuments({});
      const listBook = await Book.find({})
        .skip(dataInput.limit * dataInput.page - dataInput.limit) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(dataInput.limit);
      //Cách 2 lấy total bằng exec
      // .exec((err, products)=> {
      //   products.countDocuments((err,count)=> {
      //       if(err) return next(err);
      //           resizeBy.send(products)
      //   })
      // })
      resolve({
        EC: 0,
        EM: "Get the book success!",
        data: { listBook, totalBook },
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getBookPaginateType = (dataInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      // let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
      // let page = 1;
      let total;
      const listBook = await Book.find({
        category: dataInput.category,
      })
        .skip(dataInput.limit * dataInput.page - dataInput.limit) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(dataInput.limit);
      if (listBook && listBook.length > 0) {
        total = listBook.length;
      }
      resolve({
        EC: 0,
        EM: "Get the book success!",
        data: { listBook, total },
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getBookPaginateSearch = (dataInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      // let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
      // let page = 1;
      let total;
      const $regex = escapeStringRegexp(dataInput.valueText);
      console.log($regex);
      const listBookTotal = await Book.find({
        title: { $regex },
      });
      if (listBookTotal && listBookTotal.length > 0) {
        total = listBookTotal.length;
      }

      const listBook = await Book.find({
        title: { $regex },
      })
        //   // $text: { $search: dataInput.valueText }, .. tìm kiếm full -text
        .skip(dataInput.limit * dataInput.page - dataInput.limit) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(dataInput.limit);

      resolve({
        EC: 0,
        EM: "Get the book success!",
        data: { listBook, total },
      });
    } catch (e) {
      reject(e);
    }
  });
};
let createNewBook = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("service", data);
      const result = await Book.create({
        author: data.author,
        title: data.title,
        description: data.description,
        datePublish: data.datePublish,
        pageNumber: data.pageNumber,
        category: data.category,
        imgUrl: data.imgUrl,
        price: data.price,
      });
      resolve({
        EC: 0,
        EM: "create new book success!",
        data: result,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getBookById = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Book.findById({ _id: inputId });
      resolve({
        EC: 0,
        EM: "Get the book success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let deleteBookById = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Book.findByIdAndDelete({ _id: inputId });
      resolve({
        EC: 0,
        EM: "delete the book success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let deleteAllBook = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Book.deleteMany({});
      resolve({
        EC: 0,
        EM: "delete the book success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let updateBookById = (inputId, inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Book.findByIdAndUpdate(
        { _id: inputId },
        {
          author: inputData.author,
          title: inputData.title,
          description: inputData.description,
          datePublish: inputData.datePublish,
          pageNumber: inputData.pageNumber,
          category: inputData.category,
          imgUrl: inputData.imgUrl,
          price: inputData.price,
        },
      );
      resolve({
        EC: 0,
        EM: "update the book success!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const bookService = {
  getAllBook,
  createNewBook,
  getBookById,
  deleteBookById,
  getBookPaginateSearch,
  deleteAllBook,
  updateBookById,
  getBookPaginate,
  getBookPaginateType,
};
export default bookService;
