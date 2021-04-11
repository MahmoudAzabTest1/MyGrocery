module.exports = ({
  env
}) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('mahmoudazabtest1'),
      api_key: env('694616983926732'),
      api_secret: env('qyu1N0RgfZszHO4aXkzHncHMZHw'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
