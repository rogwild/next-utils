import { getImageUrl } from "../src/api";

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
      console.log("test");
      const mediumUrl = getImageUrl(imageFromBackend, "medium", BACKEND_URL);

      expect(mediumUrl).toEqual("http://localhost:1337/uploads/medium.jpg");
    });
  });
});
