import Papa from "papaparse";

export function searchingCsv(searchData) {
  return new Promise((resolve, reject) => {
    console.log("Searching for:", searchData, "from csv");

    Papa.parse("/amazon.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rows = results.data;
        const tokens = searchData.toLowerCase().split(/\s+/);

        const row_cnt = rows.map((row) => {
          const productName = row["product_name"]
            ? row["product_name"].toLowerCase()
            : "";
          let cnt = tokens.reduce(
            (acc, token) => acc + (productName.includes(token) ? 1 : 0),
            0
          );
          return { row, cnt };
        });

        const sortedRows = row_cnt
          .filter((item) => item.cnt > 0)
          .sort((a, b) => b.cnt - a.cnt);
        resolve(sortedRows.length > 0 ? sortedRows : []);
      },
      error: reject,
    });
  });
}

export function searchingCsv2(searchData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Searching for", searchData, "in csv3");
      Papa.parse("/DMartWithLocation.csv", {
        download: true,
        header: true,
        complete: function (result) {
          const rows = result.data;
          const tokens = searchData.toLowerCase().split(/\s+/);

          const row_cnt = rows.map((row) => {
            const productName = row["Name"] ? row["Name"].toLowerCase() : "";
            let cnt = tokens.reduce(
              (acc, token) => acc + (productName.includes(token) ? 1 : 0),
              0
            );
            return { row, cnt };
          });

          const sortedRows = row_cnt
            .filter((item) => item.cnt > 0)
            .sort((a, b) => b.cnt - a.cnt);
          resolve(sortedRows.length > 0 ? sortedRows : []);
        },
        error: reject,
      });
    }, 600);
  });
}
