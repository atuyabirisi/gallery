const request = require("supertest");
const sinon = require("sinon");
const app = require("../server");
const Image = require("../models/images");

describe("GET /", () => {
  beforeAll(() => {
    // Stub Image.find to return fake images
    sinon.stub(Image, "find").resolves([
      { _id: "1", url: "http://example.com/img1.jpg" },
      { _id: "2", url: "http://example.com/img2.jpg" },
    ]);
  });

  afterAll(() => {
    Image.find.restore();
  });

  it("should render index with images", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
  });
});
