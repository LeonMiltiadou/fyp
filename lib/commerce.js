import Commerce from "@chec/commerce.js";

const commerceAPIKEY = process.env.COMMERCEPUBLICKEY;

if (!commerceAPIKEY) {
    throw Error('Your public API key must be provided as an environment variable');
  }

export default new Commerce(commerceAPIKEY, true);