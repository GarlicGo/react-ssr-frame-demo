export const getServerData = async () => {
//   const res = await fetch('http://localhost:8081/page-schema/feeds-only').then((res) => res.json());
  const res = await fetch('http://localhost:8081/page-schema/full').then((res) => res.json());
  return {
    data: res,
    script: `<script type="text/javascript">window.$data=${JSON.stringify(res)}</script>`,
  };
};
