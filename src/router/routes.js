import bookController from "../controller/bookController.js";
import cartController from "../controller/cartController.js";
import userController from "../controller/userController.js";
import JWTaction from "../middleware/JWTaction.js";

const routes = (app) => {
  // app.all("*", JWTaction.checkUserJWT, JWTaction.checkUserPermission);

  app.get(
    "/api/get-all-book",
    JWTaction.checkUserJWT,
    JWTaction.checkADMINPermission,
    bookController.getAllBook,
  );
  // app.get("/api/get-all-book", bookController.getAllBook);
  app.get("/api/get-book-paginate", bookController.getBookPaginate);

  // app.post("/api/create-new-book", JWTaction.checkUserJWT, bookController.createNewBook);
  app.post("/api/create-new-book", bookController.createNewBook);

  app.get("/api/get-book-by-id", bookController.getBookById);
  app.delete("/api/delete-book-by-id", bookController.deleteBookById);
  app.delete("/api/delete-all-book", bookController.deleteAllBook);
  app.put("/api/update-book-by-id", bookController.updateBookById);

  app.get(
    "/api/get-all-user",
    JWTaction.checkUserJWT,
    JWTaction.checkADMINPermission,
    userController.getAllUser,
  );
  app.post("/api/create-new-user", userController.createNewUser);
  app.delete("/api/delete-user-by-id", userController.deleteUserById);
  app.delete("/api/delete-all-user", userController.deleteAllUser);
  app.put("/api/update-user-by-id", userController.updateUserById);
  app.post("/api/handle-login", userController.handleUserLogin);
  app.post("/refresh-token", userController.getTokenRefresh);

  app.get("/api/get-all-cart", cartController.getAllCart);
  app.put("/api/add-update-cart", cartController.AddUpdateCart);
  app.delete("/api/delete-all-cart", cartController.deleteAllCart);
  app.delete("/api/delete-cart", cartController.deleteCart);
};

export default routes;
