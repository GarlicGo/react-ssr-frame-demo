import express from 'express';

const app = express();
const port = 8081;

app.get('/page-schema/feeds-only', (_, res) => {
  res.send({
    components: [
      {
        name: 'Feeds',
        props: [
          {
            name: 'Feed 1',
            image: 'https://example.com/image1.jpg',
          },
          {
            name: 'Feed 2',
            image: 'https://example.com/image2.jpg',
          },
          {
            name: 'Feed 3',
            image: 'https://example.com/image3.jpg',
          },
        ],
      },
    ],
  });
});

app.get('/page-schema/vite', (_, res) => {
  res.send({
    components: [
      {
        name: 'ViteTemplate',
      },
    ],
  });
});

app.get('/page-schema/full', (_, res) => {
  res.send({
    components: [
      {
        name: 'Feeds',
        props: [
          {
            name: 'Feed 1',
            image: 'https://example.com/image1.jpg',
          },
          {
            name: 'Feed 2',
            image: 'https://example.com/image2.jpg',
          },
          {
            name: 'Feed 3',
            image: 'https://example.com/image3.jpg',
          },
        ],
      },
      {
        name: 'Banners',
        props: {
          info: {
            title: 'Banner Title',
            description: 'Banner Description',
          },
          list: [
            {
              image: 'test.jpg',
            },
          ],
        },
      },
      {
        name: 'ViteTemplate',
      },
    ],
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Mock Server listening on port ${port}, Server started at http://localhost:${port}`);
});
