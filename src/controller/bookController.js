import bookService from "../service/bookService.js";
let getAllBook = async (req, res) => {
  try {
    const data = await bookService.getAllBook();
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("There are no book!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};

let getBookPaginate = async (req, res) => {
  try {
    let dataReq = req.query;
    console.log("dat", dataReq);
    const data = await bookService.getBookPaginate(dataReq);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("There are no book!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};

let getBookPaginateType = async (req, res) => {
  try {
    let dataReq = req.query;
    console.log("dat", dataReq);
    const data = await bookService.getBookPaginateType(dataReq);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("There are no book!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let getBookPaginateSearch = async (req, res) => {
  try {
    let dataReq = req.query;
    console.log("dat", dataReq);
    const data = await bookService.getBookPaginateSearch(dataReq);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("There are no book!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let createNewBook = async (req, res) => {
  try {
    let dataReq = req.body;
    const data = await bookService.createNewBook(dataReq);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("create book failed!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let getBookById = async (req, res) => {
  try {
    let id = req.query._id;
    const data = await bookService.getBookById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("get book failed!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let deleteBookById = async (req, res) => {
  try {
    let id = req.body.id;
    const data = await bookService.deleteBookById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("delete book failed!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let deleteAllBook = async (req, res) => {
  try {
    const data = await bookService.deleteAllBook();
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("delete all book failed!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
let updateBookById = async (req, res) => {
  try {
    let id = req.body._id;
    let dataReq = req.body;
    const data = await bookService.updateBookById(id, dataReq);
    if (data) {
      return res.status(200).json(data);
    } else {
      throw new Error("update the book failed!");
    }
  } catch (e) {
    return res.status(500).json({
      EC: 1,
      EM: e.message,
    });
  }
};
const bookController = {
  getAllBook,
  createNewBook,
  getBookById,
  deleteBookById,
  deleteAllBook,
  updateBookById,
  getBookPaginate,
  getBookPaginateType,
  getBookPaginateSearch,
};

export default bookController;
