const fetchFactory = () => {
  const baseUrl = '/api';
  const cache = new Map();

  const fetch = (_url: string) => {
    const url = `${baseUrl}${_url}`;
    if (cache.has(url)) {
      return cache.get(url);
    }

    const p = new Promise((resolve) => {
      // 随机延迟模拟网络请求, 2-3s
      const delay = Math.floor(Math.random() * 1000) + 2000;
      setTimeout(() => {
        resolve({ data: `${url} success` });
      }, delay);
    });

    cache.set(url, p);
    throw p;
  };

  return {
    fetch,
    clearCache: () => cache.clear(),
  };
};

export const { fetch: cacheFetch, clearCache } = fetchFactory();
