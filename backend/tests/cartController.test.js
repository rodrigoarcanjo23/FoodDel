import { addToCart, removeFromCart } from "../controllers/cartController.js";
import userModel from "../models/userModel.js";
import { jest } from "@jest/globals";

describe("cartController", () => {
  let req;
  let res;
  let mockUser;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { body: { userId: "user1", itemId: "item1" } };
    res = { json: jest.fn() };
    mockUser = { cartData: { item1: 1 } };
    userModel.findById = jest.fn().mockResolvedValue(mockUser);
    userModel.findByIdAndUpdate = jest.fn().mockResolvedValue();
  });

  test("Adding an item increases its quantity", async () => {
    await addToCart(req, res);

    expect(userModel.findByIdAndUpdate).toHaveBeenCalledWith(
      "user1",
      { cartData: { item1: 2 } }
    );
  });

  test("Removing an item decrements quantity and does not go below zero", async () => {
    // First removal should decrement quantity from 1 to 0
    await removeFromCart(req, res);
    expect(userModel.findByIdAndUpdate).toHaveBeenLastCalledWith(
      "user1",
      { cartData: { item1: 0 } }
    );

    // Second removal should not decrement below 0
    await removeFromCart(req, res);
    expect(userModel.findByIdAndUpdate).toHaveBeenLastCalledWith(
      "user1",
      { cartData: { item1: 0 } }
    );
  });
});

