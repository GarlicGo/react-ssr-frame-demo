const mockGetData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123',
        Child: {
          name: 'Child-Component',
        },
      });
    }, 0);
  });
};

export const insertData = async (html) => {
  //   console.log('insertHtmlData');
  //   console.log(html);
  const data = await mockGetData();
  return {
    data,
    script: `<script type="text/javascript">window.$data=${JSON.stringify(data)}</script>`,
  };
};
