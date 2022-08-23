import { transformResponseItem, getImageUrl, ApiClient } from "../src/api";

describe("API UTILS", () => {
  describe("getImageUrl", () => {
    const BACKEND_URL = "http://localhost:1337";
    const imageFromBackend = {
      formats: {
        small: {
          url: "/uploads/small.jpg",
        },
        medium: {
          url: "/uploads/medium.jpg",
        },
        large: {
          url: "/uploads/large.jpg",
        },
      },
      url: "/uploads/default.jpg",
    };

    it("should return url to medium image", () => {
      const mediumUrl = getImageUrl(imageFromBackend, "medium", BACKEND_URL); //?

      expect(mediumUrl).toEqual("http://localhost:1337/uploads/medium.jpg");
    });

    it("should return url to default image", () => {
      const mediumUrl = getImageUrl(
        { url: "/uploads/default.jpg" },
        "medium",
        BACKEND_URL
      );

      expect(mediumUrl).toEqual("http://localhost:1337/uploads/default.jpg");
    });
  });

  describe("transformResponseItem", () => {
    it("prepare object with data", () => {
      const backendEntity = {
        data: {
          title: "Lupa",
          images: {
            data: [
              {
                url: "/uploads/image.jpg",
              },
            ],
          },
        },
      };

      const transformed = transformResponseItem(backendEntity); //?

      expect(transformed).toEqual({
        title: "Lupa",
        images: [{ url: "/uploads/image.jpg" }],
      });
    });
  });

  describe("Api client", () => {
    it.only("", async () => {
      const backend = new ApiClient("https://markets.zenfuse.io");

      const res = await backend.request({
        model: "tickers",
        id: 2,
        query: { populate: "*" },
      }); //?

      console.log(`🚀 ~ it.only ~ res`, res);

      expect(typeof res).toEqual("object");
      expect(res.id).toEqual(2);
    });
  });
});
